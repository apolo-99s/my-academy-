// ============================================
// supabase-service.js
// Service pour gérer les données Supabase
// ============================================

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vvqkxtiepgxvymhtllwa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2cWt4dGllcGd4dnltaHRsbHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3NDQ0NDgsImV4cCI6MjEwMDMyMDQ0OH0.oaY-_zDZDFVuIuv4szLyJRZ8cnfDyOlg7mbPtRG0yTE';

export const supabase = createClient(supabaseUrl, supabaseKey);

// ============================================
// CACHE MANAGEMENT
// ============================================

const CACHE_KEY = 'dsa_cache';
const CACHE_TIME_KEY = 'dsa_cache_time';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCache() {
  const cached = localStorage.getItem(CACHE_KEY);
  const cacheTime = localStorage.getItem(CACHE_TIME_KEY);
  
  if (cached && cacheTime) {
    const age = Date.now() - parseInt(cacheTime);
    if (age < CACHE_DURATION) {
      return JSON.parse(cached);
    }
  }
  return null;
}

function setCache(data) {
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
}

function clearCache() {
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(CACHE_TIME_KEY);
}

// ============================================
// OPTION 1: Charger au démarrage
// ============================================

export async function loadSkillsOnStart() {
  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (error) throw error;
    
    // Sauvegarder dans le cache
    setCache(data);
    
    return data;
  } catch (error) {
    console.error('Error loading skills:', error);
    
    // Fallback: utiliser le cache
    const cached = getCache();
    if (cached) return cached;
    
    return [];
  }
}

// ============================================
// OPTION 2: Bouton Rafraîchir (Force Refresh)
// ============================================

export async function refreshSkills() {
  try {
    // Vider le cache
    clearCache();
    
    // Charger depuis Supabase
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (error) throw error;
    
    // Sauvegarder dans le cache
    setCache(data);
    
    return data;
  } catch (error) {
    console.error('Error refreshing skills:', error);
    throw error;
  }
}

// ============================================
// OPTION 3: Realtime (WebSocket)
// ============================================

let realtimeSubscriptions = [];

export function setupRealtime(onDataUpdate) {
  // Se désabonner des anciennes subscriptions
  realtimeSubscriptions.forEach(sub => {
    supabase.removeChannel(sub);
  });
  realtimeSubscriptions = [];

  // Skills
  const skillsChannel = supabase
    .channel('skills-realtime')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'skills'
      },
      (payload) => {
        console.log('🔄 Skill changé:', payload);
        refreshSkills().then(onDataUpdate);
      }
    )
    .subscribe((status) => {
      console.log('📡 Skills Realtime status:', status);
    });
  
  realtimeSubscriptions.push(skillsChannel);

  // Lessons
  const lessonsChannel = supabase
    .channel('lessons-realtime')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'lessons'
      },
      (payload) => {
        console.log('🔄 Lesson changée:', payload);
        refreshSkills().then(onDataUpdate);
      }
    )
    .subscribe((status) => {
      console.log('📡 Lessons Realtime status:', status);
    });
  
  realtimeSubscriptions.push(lessonsChannel);

  // Access Codes
  const codesChannel = supabase
    .channel('codes-realtime')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'access_codes'
      },
      (payload) => {
        console.log('🔄 Code changé:', payload);
        onDataUpdate();
      }
    )
    .subscribe((status) => {
      console.log('📡 Codes Realtime status:', status);
    });
  
  realtimeSubscriptions.push(codesChannel);

  // Retourner la fonction pour arrêter
  return () => {
    realtimeSubscriptions.forEach(sub => {
      supabase.removeChannel(sub);
    });
    realtimeSubscriptions = [];
  };
}

// ============================================
// OPTION 4: Cache + Revalidation
// ============================================

export async function loadSkillsWithCache(force = false) {
  // Si force = true, ignorer le cache
  if (!force) {
    const cached = getCache();
    if (cached) {
      console.log('📦 Utilisation du cache');
      return cached;
    }
  }
  
  console.log('🔄 Chargement depuis Supabase');
  
  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (error) throw error;
    
    setCache(data);
    return data;
  } catch (error) {
    console.error('Error loading skills:', error);
    
    // Fallback: cache même s'il est expiré
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      console.log('⚠️ Utilisation du cache expiré');
      return JSON.parse(cached);
    }
    
    return [];
  }
}

// ============================================
// AUTO-REFRESH (Périodique)
// ============================================

let autoRefreshInterval = null;

export function startAutoRefresh(interval = 60000, onUpdate) {
  // 60000ms = 1 minute
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval);
  }
  
  autoRefreshInterval = setInterval(async () => {
    console.log('🔄 Auto-refresh...');
    const data = await loadSkillsWithCache(true);
    if (onUpdate) onUpdate(data);
  }, interval);
  
  return () => {
    if (autoRefreshInterval) {
      clearInterval(autoRefreshInterval);
      autoRefreshInterval = null;
    }
  };
}

export function stopAutoRefresh() {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval);
    autoRefreshInterval = null;
  }
}

// ============================================
// EXPORT ALL
// ============================================

export default {
  loadSkillsOnStart,
  refreshSkills,
  setupRealtime,
  loadSkillsWithCache,
  startAutoRefresh,
  stopAutoRefresh,
  clearCache,
  supabase
};