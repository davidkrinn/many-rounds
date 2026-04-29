/**
 * Many Rounds - Audio Engine
 * Web Audio API implementation for voice, music, and sound effects
 */

const AudioEngine = {
    audioContext: null,
    masterGainNode: null,
    voiceGainNode: null,
    bellGainNode: null,
    beepGainNode: null,
    musicGainNode: null,
    
    // Audio buffers
    buffers: {},
    
    // Current state
    isInitialized: false,
    currentMusic: null,
    musicSource: null,
    
    /**
     * Initialize Web Audio API
     */
    async init() {
        try {
            console.log('[AUDIO] Initializing Web Audio API');
            
            // Create audio context
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create gain nodes
            this.masterGainNode = this.audioContext.createGain();
            this.voiceGainNode = this.audioContext.createGain();
            this.bellGainNode = this.audioContext.createGain();
            this.beepGainNode = this.audioContext.createGain();
            this.musicGainNode = this.audioContext.createGain();
            
            // Set initial gain levels
            this.masterGainNode.gain.value = 0.8;
            this.voiceGainNode.gain.value = 1.0; // Voice always loudest
            this.bellGainNode.gain.value = 0.8;
            this.beepGainNode.gain.value = 0.8;
            this.musicGainNode.gain.value = 0.6;
            
            // Connect nodes
            this.voiceGainNode.connect(this.masterGainNode);
            this.bellGainNode.connect(this.masterGainNode);
            this.beepGainNode.connect(this.masterGainNode);
            this.musicGainNode.connect(this.masterGainNode);
            this.masterGainNode.connect(this.audioContext.destination);
            
            // Resume context on first user interaction
            await this.resumeContext();
            
            this.isInitialized = true;
            console.log('[AUDIO] Initialized successfully');
            
        } catch (error) {
            console.error('[AUDIO] Initialization failed:', error);
            this.isInitialized = false;
        }
    },
    
    /**
     * Resume audio context (required for iOS)
     */
    async resumeContext() {
        if (this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
            console.log('[AUDIO] Context resumed');
        }
    },
    
    /**
     * Load audio file
     */
    async loadAudio(url) {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
            this.buffers[url] = audioBuffer;
            console.log(`[AUDIO] Loaded: ${url}`);
            return audioBuffer;
        } catch (error) {
            console.error(`[AUDIO] Failed to load: ${url}`, error);
            return null;
        }
    },
    
    /**
     * Play audio buffer
     */
    playBuffer(buffer, gainNode, loop = false) {
        if (!this.isInitialized || !buffer) return;
        
        const source = this.audioContext.createBufferSource();
        source.buffer = buffer;
        source.loop = loop;
        source.connect(gainNode);
        source.start();
        
        return source;
    },
    
    /**
     * Play voice callout
     */
    async playVoice(callout, gender = 'male', tone = 'encouraging') {
        if (!this.isInitialized) return;
        
        const url = `/audio/voices/${gender}-${tone}/${callout}.mp3`;
        let buffer = this.buffers[url];
        
        if (!buffer) {
            buffer = await this.loadAudio(url);
        }
        
        if (buffer) {
            this.playBuffer(buffer, this.voiceGainNode);
            console.log(`[AUDIO] Playing voice: ${callout}`);
        }
    },
    
    /**
     * Play bell sound
     */
    async playBell(type = 'round') {
        if (!this.isInitialized) return;
        
        const url = `/audio/bells/${type}.mp3`;
        let buffer = this.buffers[url];
        
        if (!buffer) {
            buffer = await this.loadAudio(url);
        }
        
        if (buffer) {
            this.playBuffer(buffer, this.bellGainNode);
            console.log(`[AUDIO] Playing bell: ${type}`);
        }
    },
    
    /**
     * Play beep sound
     */
    async playBeep() {
        if (!this.isInitialized) return;
        
        const url = '/audio/beep.mp3';
        let buffer = this.buffers[url];
        
        if (!buffer) {
            buffer = await this.loadAudio(url);
        }
        
        if (buffer) {
            this.playBuffer(buffer, this.beepGainNode);
            console.log('[AUDIO] Playing beep');
        }
    },
    
    /**
     * Play music
     */
    async playMusic(track) {
        if (!this.isInitialized) return;
        
        // Stop current music
        this.stopMusic();
        
        if (track === 'none') return;
        
        const url = `/audio/music/${track}.mp3`;
        let buffer = this.buffers[url];
        
        if (!buffer) {
            buffer = await this.loadAudio(url);
        }
        
        if (buffer) {
            this.musicSource = this.playBuffer(buffer, this.musicGainNode, true);
            this.currentMusic = track;
            console.log(`[AUDIO] Playing music: ${track}`);
        }
    },
    
    /**
     * Stop music
     */
    stopMusic() {
        if (this.musicSource) {
            this.musicSource.stop();
            this.musicSource = null;
            this.currentMusic = null;
            console.log('[AUDIO] Music stopped');
        }
    },
    
    /**
     * Set master volume
     */
    setMasterVolume(volume) {
        if (this.masterGainNode) {
            this.masterGainNode.gain.value = volume / 100;
            console.log(`[AUDIO] Master volume: ${volume}%`);
        }
    },
    
    /**
     * Fade music volume (for round transitions)
     */
    fadeMusic(targetVolume, duration = 1) {
        if (!this.musicGainNode) return;
        
        const currentTime = this.audioContext.currentTime;
        this.musicGainNode.gain.setValueAtTime(this.musicGainNode.gain.value, currentTime);
        this.musicGainNode.gain.linearRampToValueAtTime(targetVolume, currentTime + duration);
    },
    
    /**
     * Play final bell (celebratory)
     */
    async playFinalBell() {
        await this.playBell('final');
    },
    
    /**
     * Play warning bell
     */
    async playWarningBell() {
        await this.playBell('warning');
    },
    
    /**
     * Preview music track
     */
    async previewMusic(track) {
        if (!this.isInitialized) return;
        
        const url = `/audio/music/${track}.mp3`;
        let buffer = this.buffers[url];
        
        if (!buffer) {
            buffer = await this.loadAudio(url);
        }
        
        if (buffer) {
            // Play for 10 seconds
            const source = this.playBuffer(buffer, this.musicGainNode);
            setTimeout(() => {
                if (source) source.stop();
            }, 10000);
            console.log(`[AUDIO] Previewing music: ${track}`);
        }
    }
};

window.AudioEngine = AudioEngine;
