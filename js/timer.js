/**
 * Many Rounds - Timer Module
 * Handles round countdown and break timer logic
 */

const Timer = {
    roundTimeRemaining: 0,
    breakTimeRemaining: 0,
    isRunning: false,
    isPaused: false,
    currentRound: 1,
    timerInterval: null,

    /**
     * Initialize timer for a session
     */
    init(roundLength, breakLength) {
        console.log('[TIMER] Initializing timer');
        this.roundTimeRemaining = roundLength;
        this.breakTimeRemaining = breakLength;
        this.isRunning = false;
        this.isPaused = false;
        this.currentRound = 1;
    },

    /**
     * Start round timer
     */
    startRound(duration) {
        console.log(`[TIMER] Starting round ${this.currentRound} for ${duration}s`);
        this.roundTimeRemaining = duration;
        this.isRunning = true;
        this.isPaused = false;
        this.startCountdown('round');
    },

    /**
     * Start break timer
     */
    startBreak(duration) {
        console.log(`[TIMER] Starting break for ${duration}s`);
        this.breakTimeRemaining = duration;
        this.isRunning = true;
        this.isPaused = false;
        this.startCountdown('break');
    },

    /**
     * Internal countdown logic
     */
    startCountdown(type) {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.timerInterval = setInterval(() => {
            if (type === 'round') {
                this.roundTimeRemaining--;
                this.updateDisplay(this.roundTimeRemaining, 'round');

                if (this.roundTimeRemaining <= 0) {
                    clearInterval(this.timerInterval);
                    this.onRoundComplete();
                }
            } else if (type === 'break') {
                this.breakTimeRemaining--;
                this.updateDisplay(this.breakTimeRemaining, 'break');

                if (this.breakTimeRemaining <= 0) {
                    clearInterval(this.timerInterval);
                    this.onBreakComplete();
                }
            }
        }, 1000);
    },

    /**
     * Update timer display
     */
    updateDisplay(seconds, type) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        const timeString = `${minutes}:${secs.toString().padStart(2, '0')}`;
        
        if (type === 'round') {
            // Update DOM element for round timer
            const timerElement = document.getElementById('round-timer');
            if (timerElement) {
                timerElement.textContent = timeString;
            }
        } else if (type === 'break') {
            // Update DOM element for break timer
            const breakElement = document.getElementById('break-timer');
            if (breakElement) {
                breakElement.textContent = timeString;
            }
        }
    },

    /**
     * Pause timer
     */
    pause() {
        console.log('[TIMER] Paused');
        this.isPaused = true;
        this.isRunning = false;
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    },

    /**
     * Resume timer
     */
    resume() {
        console.log('[TIMER] Resumed');
        this.isPaused = false;
        this.isRunning = true;
        // Restart countdown from where it was paused
        const type = document.getElementById('round-timer') ? 'round' : 'break';
        this.startCountdown(type);
    },

    /**
     * Stop timer
     */
    stop() {
        console.log('[TIMER] Stopped');
        this.isRunning = false;
        this.isPaused = false;
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    },

    /**
     * Callback when round completes
     */
    onRoundComplete() {
        console.log(`[TIMER] Round ${this.currentRound} complete`);
        // Trigger audio and UI updates
        if (window.AudioEngine) {
            window.AudioEngine.playFinalBell();
        }
    },

    /**
     * Callback when break completes
     */
    onBreakComplete() {
        console.log(`[TIMER] Break complete, moving to round ${this.currentRound + 1}`);
        this.currentRound++;
        // Trigger next round start
    }
};

window.Timer = Timer;
