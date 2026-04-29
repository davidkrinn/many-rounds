/**
 * Many Rounds - UI Module
 * Handles DOM manipulation and user interface updates
 */

const UI = {
    /**
     * Update form input displays
     */
    updateFormDisplays() {
        // Update range input displays
        const rounds = document.getElementById('rounds');
        const roundLength = document.getElementById('round-length');
        const breakLength = document.getElementById('break-length');
        const warningBell = document.getElementById('warning-bell');
        const volume = document.getElementById('master-volume');

        if (rounds) {
            rounds.addEventListener('input', () => {
                document.getElementById('rounds-value').textContent = rounds.value;
            });
        }

        if (roundLength) {
            roundLength.addEventListener('input', () => {
                const minutes = Math.floor(roundLength.value / 60);
                const seconds = roundLength.value % 60;
                document.getElementById('round-length-value').textContent = 
                    `${minutes}:${seconds.toString().padStart(2, '0')}`;
            });
        }

        if (breakLength) {
            breakLength.addEventListener('input', () => {
                const minutes = Math.floor(breakLength.value / 60);
                const seconds = breakLength.value % 60;
                document.getElementById('break-length-value').textContent = 
                    `${minutes}:${seconds.toString().padStart(2, '0')}`;
            });
        }

        if (warningBell) {
            warningBell.addEventListener('input', () => {
                document.getElementById('warning-bell-value').textContent = warningBell.value;
            });
        }

        if (volume) {
            volume.addEventListener('input', () => {
                document.getElementById('volume-value').textContent = volume.value;
            });
        }
    },

    /**
     * Render saved matches list
     */
    renderSavedMatches() {
        const matches = Storage.loadMatches();
        const container = document.getElementById('saved-matches-list');

        if (!container) return;

        if (matches.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <p>No saved matches yet.</p>
                    <p><a href="#/create" class="btn-link">Create your first match</a></p>
                </div>
            `;
            return;
        }

        container.innerHTML = matches.map(match => `
            <div class="saved-match-card" data-match-id="${match.id}">
                <div class="saved-match-info">
                    <div class="saved-match-name">${this.escapeHtml(match.name)}</div>
                    <div class="saved-match-details">
                        ${match.config.rounds} rounds • 
                        ${Math.floor(match.config.roundLength / 60)}:${(match.config.roundLength % 60).toString().padStart(2, '0')} rounds • 
                        ${match.config.difficulty} • 
                        ${match.config.musicSelection}
                    </div>
                </div>
                <div class="saved-match-actions">
                    <button class="match-action-btn start-match" data-match-id="${match.id}">
                        <i class="bi bi-play-fill"></i> Start
                    </button>
                    <button class="match-action-btn edit-match" data-match-id="${match.id}">
                        <i class="bi bi-pencil"></i> Edit
                    </button>
                    <button class="match-action-btn delete-match" data-match-id="${match.id}">
                        <i class="bi bi-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');

        // Attach event listeners
        this.attachSavedMatchListeners();
    },

    /**
     * Attach event listeners to saved match buttons
     */
    attachSavedMatchListeners() {
        document.querySelectorAll('.start-match').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const matchId = parseInt(e.currentTarget.dataset.matchId);
                this.loadAndStartMatch(matchId);
            });
        });

        document.querySelectorAll('.edit-match').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const matchId = parseInt(e.currentTarget.dataset.matchId);
                this.editMatch(matchId);
            });
        });

        document.querySelectorAll('.delete-match').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const matchId = parseInt(e.currentTarget.dataset.matchId);
                this.confirmDeleteMatch(matchId);
            });
        });
    },

    /**
     * Load and start a saved match
     */
    loadAndStartMatch(matchId) {
        const match = Storage.loadMatch(matchId);
        if (match) {
            App.state.matchConfig = { ...match.config };
            App.startMatch();
        }
    },

    /**
     * Edit a saved match
     */
    editMatch(matchId) {
        const match = Storage.loadMatch(matchId);
        if (match) {
            App.state.matchConfig = { ...match.config };
            // Populate form with match config
            this.populateForm(match.config);
            App.navigateTo('create');
        }
    },

    /**
     * Confirm and delete a match
     */
    confirmDeleteMatch(matchId) {
        if (confirm('Delete this match? This action cannot be undone.')) {
            Storage.deleteMatch(matchId);
            this.renderSavedMatches();
            this.showNotification('Match deleted successfully', 'success');
        }
    },

    /**
     * Populate form with configuration
     */
    populateForm(config) {
        // Update range inputs
        document.getElementById('rounds').value = config.rounds;
        document.getElementById('round-length').value = config.roundLength;
        document.getElementById('break-length').value = config.breakLength;
        document.getElementById('warning-bell').value = config.warningBell;
        document.getElementById('combo-frequency').value = config.comboFrequency;

        // Update displays
        document.getElementById('rounds-value').textContent = config.rounds;
        const roundMin = Math.floor(config.roundLength / 60);
        const roundSec = config.roundLength % 60;
        document.getElementById('round-length-value').textContent = `${roundMin}:${roundSec.toString().padStart(2,'0')}`;
        const breakMin = Math.floor(config.breakLength / 60);
        const breakSec = config.breakLength % 60;
        document.getElementById('break-length-value').textContent = `${breakMin}:${breakSec.toString().padStart(2,'0')}`;
        document.getElementById('warning-bell-value').textContent = config.warningBell;

        // Update difficulty buttons
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.difficulty === config.difficulty);
        });

        // Update voice buttons
        document.querySelectorAll('[data-gender]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.gender === config.voiceGender);
        });
        document.querySelectorAll('[data-tone]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tone === config.voiceTone);
        });

        // Update display mode toggle
        document.getElementById('display-mode').checked = config.displayMode;

        // Update music selection
        document.querySelector(`input[name="music"][value="${config.musicSelection}"]`).checked = true;
    },

    /**
     * Show notification message
     */
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${this.escapeHtml(message)}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Auto-hide after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);

        // Close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    },

    /**
     * Show loading spinner
     */
    showLoading(message = 'Loading...') {
        const spinner = document.createElement('div');
        spinner.className = 'loading-overlay';
        spinner.innerHTML = `
            <div class="loading-content">
                <div class="spinner"></div>
                <p>${this.escapeHtml(message)}</p>
            </div>
        `;
        document.body.appendChild(spinner);
        return spinner;
    },

    /**
     * Hide loading spinner
     */
    hideLoading(spinner) {
        if (spinner && spinner.parentNode) {
            spinner.remove();
        }
    },

    /**
     * Update session stats display
     */
    updateSessionStats(stats) {
        const statsElement = document.getElementById('session-stats');
        if (statsElement) {
            statsElement.innerHTML = `
                <div class="stat-item">
                    <span class="stat-label">Round:</span>
                    <span class="stat-value">${stats.currentRound}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Punches:</span>
                    <span class="stat-value">${stats.totalPunches}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Defense:</span>
                    <span class="stat-value">${stats.totalDefense}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Calories:</span>
                    <span class="stat-value">${Math.round(stats.calories || 0)}</span>
                </div>
            `;
        }
    },

    /**
     * Show combo display
     */
    showCombo(combo, displayMode = false) {
        const comboElement = document.getElementById('combo-display');
        if (!comboElement) return;

        if (displayMode) {
            // Show full combo at once
            comboElement.innerHTML = combo.map(punch => 
                `<span class="combo-number">${punch}</span>`
            ).join('');
        } else {
            // Show one at a time
            comboElement.innerHTML = `<span class="combo-number active">${combo[0]}</span>`;
        }

        // Add animation class
        comboElement.classList.add('combo-flash');
        setTimeout(() => {
            comboElement.classList.remove('combo-flash');
        }, 400);
    },

    /**
     * Clear combo display
     */
    clearCombo() {
        const comboElement = document.getElementById('combo-display');
        if (comboElement) {
            comboElement.innerHTML = '';
        }
    },

    /**
     * Show break screen with circle fill
     */
    showBreakScreen(duration) {
        const breakScreen = document.getElementById('break-screen');
        if (breakScreen) {
            breakScreen.style.display = 'flex';
            // Circle fill animation will be handled by CSS
        }
    },

    /**
     * Hide break screen
     */
    hideBreakScreen() {
        const breakScreen = document.getElementById('break-screen');
        if (breakScreen) {
            breakScreen.style.display = 'none';
        }
    },

    /**
     * Escape HTML for safe display
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    /**
     * Initialize UI components
     */
    init() {
        this.updateFormDisplays();
        this.renderSavedMatches();
        console.log('[UI] Initialized');
    }
};

window.UI = UI;
