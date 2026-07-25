// ============================================
// data-manager.js
// Gestionnaire de données avec toutes les options
// ============================================

import {
  loadSkillsOnStart,
  refreshSkills,
  setupRealtime,
  loadSkillsWithCache,
  startAutoRefresh,
  stopAutoRefresh,
  clearCache,
  supabase
} from './supabase-service.js';

class DataManager {
  constructor() {
    this.skills = [];
    this.listeners = [];
    this.mode = 'cache'; // 'cache' | 'realtime' | 'auto-refresh' | 'manual'
    this.realtimeCleanup = null;
    this.autoRefreshCleanup = null;
  }

  // ============================================
  // Abonnements
  // ============================================

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback(this.skills));
  }

  // ============================================
  // Modes de chargement
  // ============================================

  // MODE 1: Cache seulement (Option 4)
  async loadWithCache(force = false) {
    this.mode = 'cache';
    this.skills = await loadSkillsWithCache(force);
    this.notifyListeners();
    return this.skills;
  }

  // MODE 2: Chargement au démarrage (Option 1)
  async loadOnStart() {
    this.mode = 'startup';
    this.skills = await loadSkillsOnStart();
    this.notifyListeners();
    return this.skills;
  }

  // MODE 3: Realtime (Option 3)
  async loadWithRealtime() {
    this.mode = 'realtime';
    
    // Charger initialement
    this.skills = await loadSkillsOnStart();
    this.notifyListeners();
    
    // Setup Realtime
    this.realtimeCleanup = setupRealtime(() => {
      this.loadWithCache(true).then(() => {
        this.notifyListeners();
      });
    });
    
    return this.skills;
  }

  // MODE 4: Auto-refresh (Option 2 améliorée)
  async loadWithAutoRefresh(interval = 60000) {
    this.mode = 'auto-refresh';
    
    // Charger initialement
    this.skills = await loadSkillsOnStart();
    this.notifyListeners();
    
    // Démarrer l'auto-refresh
    this.autoRefreshCleanup = startAutoRefresh(interval, (data) => {
      this.skills = data;
      this.notifyListeners();
    });
    
    return this.skills;
  }

  // MODE 5: Manuel (Option 2)
  async refreshManually() {
    this.mode = 'manual';
    this.skills = await refreshSkills();
    this.notifyListeners();
    return this.skills;
  }

  // ============================================
  // Nettoyage
  // ============================================

  cleanup() {
    if (this.realtimeCleanup) {
      this.realtimeCleanup();
      this.realtimeCleanup = null;
    }
    if (this.autoRefreshCleanup) {
      this.autoRefreshCleanup();
      this.autoRefreshCleanup = null;
    }
    stopAutoRefresh();
  }

  // ============================================
  // Getter
  // ============================================

  getSkills() {
    return this.skills;
  }

  getSkill(id) {
    return this.skills.find(s => s.id === id);
  }

  getMode() {
    return this.mode;
  }

  // ============================================
  // Statistiques
  // ============================================

  getStats() {
    return {
      mode: this.mode,
      skillsCount: this.skills.length,
      totalLessons: this.skills.reduce((acc, skill) => {
        const levels = skill.levels || [];
        const lessons = levels.reduce((sum, level) => sum + (level.lessons || []).length, 0);
        return acc + lessons;
      }, 0)
    };
  }
}

// Singleton
const dataManager = new DataManager();
export default dataManager;