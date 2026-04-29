/**
 * Many Rounds - Main App Logic
 * Handles routing, state management, and app initialization
 */

// App State
const AppState = {
    currentPage: 'home',
    currentSession: null,
    userSettings: {},
    matchConfig: {
        rounds: 5,
        roundLength: 120,
        breakLength: 60,
        warningBell: 10,
        difficulty: 'beginner',
        voiceGender: 'male',
        voiceTone: 'encouraging',
        displayMode: false, // false = one-at-a-time, true = full combo
        comboFrequency: 5,
        musicSelection: 'none'
    },
    sessionStats: {
        totalPunches: 0,
        totalDefense: 0,
        currentRound: 0,
        totalTime: 0
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadSettings();
    hashRouter();
});

function initializeApp() {
    console.log('[APP] Initializing Many Rounds v1.0');
    
    // Initialize storage if needed
    if (!localStorage.getItem('mr_settings')) {
        localStorage.setItem('mr_settings', JSON.stringify(AppState.userSettings));
    }
    
    // Load any saved settings
    const savedSettings = localStorage.getItem('mr_settings');
    if (savedSettings) {
        AppState.userSettings = JSON.parse(savedSettings);
    }

    // Log feature support
    logFeatureSupport();
}

function setupEventListeners() {
    // Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const sidebarMenu = document.getElementById('sidebar-menu');
    
    menuToggle?.addEventListener('click', () => {
        sidebarMenu.classList.add('active');
    });

    menuClose?.addEventListener('click', () => {
        sidebarMenu.classList.remove('active');
    });

    // Close menu when item clicked
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            sidebarMenu.classList.remove('active');
        });
    });

    // Quick Match Button
    document.getElementById('quick-match-btn')?.addEventListener('click', startQuickMatch);

    // Create Match Form
    document.getElementById('match-config-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        startMatch();
    });

    // Save Match Button
    document.getElementById('save-match-btn')?.addEventListener('click', saveMatch);

    // Range Inputs
    setupRangeInputs();

    // Difficulty Buttons
    setupDifficultyButtons();

    // Voice Buttons
    setupVoiceButtons();

    // Music Preview
    setupMusicPreview();

    // Settings Form
    setupSettingsForm();

    // Punch Reference Button
    document.getElementById('punch-ref-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = new bootstrap.Modal(document.getElementById('punch-modal'));
        modal.show();
    });
}

// Hash Router
function hashRouter() {
    const hash = window.location.hash.slice(1) || 'home';
    navigateTo(hash);
}

window.addEventListener('hashchange', hashRouter);

function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    // Show selected page
    const pageMap = {
        '': 'home',
        '/': 'home',
        'home': 'home',
        'create': 'create',
        '/create': 'create',
        'saved': 'saved',
        '/saved': 'saved',
        'settings': 'settings',
        '/settings': 'settings',
        'how-to': 'how-to',
        '/how-to': 'how-to',
        'about': 'about',
        '/about': 'about'
    };

    const mappedPage = pageMap[page] || 'home';
    const pageElement = document.getElementById(`${mappedPage}-page`);
    
    if (pageElement) {
        pageElement.classList.add('active');
        AppState.currentPage = mappedPage;
        console.log(`[APP] Navigated to: ${mappedPage}`);
    }

    // Update menu active state
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === mappedPage) {
            item.classList.add('active');
        }
    });
}

// Setup Range Inputs
function setupRangeInputs() {
    const roundsSlider = document.getElementById('rounds');
    const roundLengthSlider = document.getElementById('round-length');
    const breakLengthSlider = document.getElementById('break-length');
    const warningBellSlider = document.getElementById('warning-bell');
    const comboFrequencySlider = document.getElementById('combo-frequency');
    const volumeSlider = document.getElementById('master-volume');

    roundsSlider?.addEventListener('input', (e) => {
        AppState.matchConfig.rounds = parseInt(e.target.value);
        document.getElementById('rounds-value').textContent = e.target.value;
    });

    roundLengthSlider?.addEventListener('input', (e) => {
        AppState.matchConfig.roundLength = parseInt(e.target.value);
        const minutes = Math.floor(e.target.value / 60);
        const seconds = e.target.value % 60;
        document.getElementById('round-length-value').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });

    breakLengthSlider?.addEventListener('input', (e) => {
        AppState.matchConfig.breakLength = parseInt(e.target.value);
        const minutes = Math.floor(e.target.value / 60);
        const seconds = e.target.value % 60;
        document.getElementById('break-length-value').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });

    warningBellSlider?.addEventListener('input', (e) => {
        AppState.matchConfig.warningBell = parseInt(e.target.value);
        document.getElementById('warning-bell-value').textContent = e.target.value;
    });

    comboFrequencySlider?.addEventListener('input', (e) => {
        AppState.matchConfig.comboFrequency = parseInt(e.target.value);
    });

    volumeSlider?.addEventListener('input', (e) => {
        AppState.userSettings.masterVolume = parseInt(e.target.value);
        document.getElementById('volume-value').textContent = e.target.value;
    });
}

// Setup Difficulty Buttons
function setupDifficultyButtons() {
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            AppState.matchConfig.difficulty = btn.getAttribute('data-difficulty');
        });
    });
}

// Setup Voice Buttons
function setupVoiceButtons() {
    document.querySelectorAll('[data-gender]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const container = btn.parentElement;
            container.querySelectorAll('[data-gender]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            AppState.matchConfig.voiceGender = btn.getAttribute('data-gender');
            AppState.userSettings.voiceGender = btn.getAttribute('data-gender');
        });
    });

    document.querySelectorAll('[data-tone]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const container = btn.closest('[class*="selector"]');
            container.querySelectorAll('[data-tone]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            AppState.matchConfig.voiceTone = btn.getAttribute('data-tone');
            AppState.userSettings.voiceTone = btn.getAttribute('data-tone');
        });
    });
}

// Setup Music Preview
function setupMusicPreview() {
    document.querySelectorAll('.btn-preview').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const music = btn.getAttribute('data-music');
            console.log(`[AUDIO] Preview music: ${music}`);
            // Audio preview logic will be implemented in audio-engine.js
        });
    });

    document.querySelectorAll('input[name="music"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            AppState.matchConfig.musicSelection = e.target.value;
        });
    });
}

// Setup Settings Form
function setupSettingsForm() {
    const displayToggle = document.getElementById('settings-display-mode');
    displayToggle?.addEventListener('change', (e) => {
        AppState.userSettings.displayMode = e.target.checked;
    });
}

// Quick Match
function startQuickMatch() {
    console.log('[APP] Starting Quick Match with defaults');
    AppState.matchConfig = {
        rounds: 5,
        roundLength: 120,
        breakLength: 60,
        warningBell: 10,
        difficulty: 'beginner',
        voiceGender: 'male',
        voiceTone: 'encouraging',
        displayMode: false,
        comboFrequency: 5,
        musicSelection: 'none'
    };
    startSession();
}

// Start Match
function startMatch() {
    console.log('[APP] Starting match with config:', AppState.matchConfig);
    startSession();
}

// Start Session
function startSession() {
    console.log('[APP] Initializing session');
    // Session logic will be implemented
    // For now, just show a confirmation
    alert('Session starting! (Audio engine implementation pending)');
}

// Save Match
function saveMatch() {
    const matchName = prompt('Give your match a name (leave blank for auto-name):');
    if (matchName !== null) {
        const savedMatches = JSON.parse(localStorage.getItem('mr_matches') || '[]');
        const matchEntry = {
            id: Date.now(),
            name: matchName || `${AppState.matchConfig.rounds} rounds, ${Math.floor(AppState.matchConfig.roundLength/60)}:${(AppState.matchConfig.roundLength%60).toString().padStart(2,'0')} rounds, ${Math.floor(AppState.matchConfig.breakLength/60)}:${(AppState.matchConfig.breakLength%60).toString().padStart(2,'0')} break`,
            config: { ...AppState.matchConfig },
            createdAt: new Date().toISOString()
        };
        savedMatches.push(matchEntry);
        localStorage.setItem('mr_matches', JSON.stringify(savedMatches));
        alert('Match saved!');
        loadSavedMatches();
    }
}

// Load Saved Matches
function loadSavedMatches() {
    const savedMatches = JSON.parse(localStorage.getItem('mr_matches') || '[]');
    const list = document.getElementById('saved-matches-list');
    
    if (savedMatches.length === 0) {
        list.innerHTML = '<p class="empty-state">No saved matches yet. <a href="#/create">Create your first match</a></p>';
        return;
    }

    list.innerHTML = savedMatches.map(match => `
        <div class="saved-match-card">
            <div class="saved-match-info">
                <div class="saved-match-name">${match.name}</div>
                <div class="saved-match-details">
                    ${match.config.rounds} rounds • ${Math.floor(match.config.roundLength/60)}:${(match.config.roundLength%60).toString().padStart(2,'0')} • 
                    ${match.config.difficulty} • ${match.config.musicSelection}
                </div>
            </div>
            <div class="saved-match-actions">
                <button class="match-action-btn" onclick="loadAndStartMatch(${match.id})">
                    <i class="bi bi-play-fill"></i> Start
                </button>
                <button class="match-action-btn" onclick="editMatch(${match.id})">
                    <i class="bi bi-pencil"></i> Edit
                </button>
                <button class="match-action-btn" onclick="deleteMatch(${match.id})">
                    <i class="bi bi-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

function loadAndStartMatch(id) {
    const savedMatches = JSON.parse(localStorage.getItem('mr_matches') || '[]');
    const match = savedMatches.find(m => m.id === id);
    if (match) {
        AppState.matchConfig = { ...match.config };
        startSession();
    }
}

function editMatch(id) {
    const savedMatches = JSON.parse(localStorage.getItem('mr_matches') || '[]');
    const match = savedMatches.find(m => m.id === id);
    if (match) {
        AppState.matchConfig = { ...match.config };
        window.location.hash = '#/create';
    }
}

function deleteMatch(id) {
    if (confirm('Delete this match?')) {
        let savedMatches = JSON.parse(localStorage.getItem('mr_matches') || '[]');
        savedMatches = savedMatches.filter(m => m.id !== id);
        localStorage.setItem('mr_matches', JSON.stringify(savedMatches));
        loadSavedMatches();
    }
}

// Load Settings
function loadSettings() {
    loadSavedMatches();
    console.log('[APP] Settings loaded');
}

// Feature Support Logging
function logFeatureSupport() {
    const features = {
        'Web Audio API': typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined',
        'Service Workers': 'serviceWorker' in navigator,
        'Wake Lock API': 'wakeLock' in navigator,
        'localStorage': typeof localStorage !== 'undefined',
        'PWA': 'standalone' in navigator
    };

    console.group('[APP] Feature Support');
    Object.entries(features).forEach(([feature, supported]) => {
        console.log(`${feature}: ${supported ? '✓' : '✗'}`);
    });
    console.groupEnd();
}

// Export for other modules
window.App = {
    state: AppState,
    navigateTo,
    startMatch,
    saveMatch,
    loadSavedMatches
};
