// ============================================================================
// GAME CONFIGURATION - Easily Customize Game Mechanics
// ============================================================================
// Modify these values to adjust gameplay without editing the main game.js file

const GAME_CONFIG = {
    // Display Settings
    GAME_WIDTH: 350,
    GAME_HEIGHT: 550,
    TARGET_FPS: 60,
    
    // Lane Configuration
    LANE_COUNT: 3,
    LANE_WIDTH: 1.0,
    LANE_SMOOTH_SPEED: 0.15, // 0-1, higher = snappier
    
    // Spawning
    SPAWN_INTERVAL: 30, // frames between spawns (lower = more obstacles)
    SPAWN_DIFFICULTY_MULTIPLIER: 1.0, // increases difficulty per chapter
    
    // Movement
    DEFAULT_SPEED: 0.3,
    DEFAULT_ACCELERATION: 0.02,
    
    // Combat & Damage
    DEFAULT_MAX_HP: 100,
    OBSTACLE_BASE_DAMAGE: 20,
    DODGE_REDUCTION_FACTOR: 2, // higher = dodge is more effective
    
    // Collectibles
    DEFAULT_STAR_VALUE: 10,
    STAR_COLLECTION_RANGE: 0.4, // distance for collision detection
    
    // RPG Progression
    STARTING_CHAPTER: 1,
    TOTAL_CHAPTERS: 10,
    
    // Upgrade System
    UPGRADE_COSTS: {
        MAX_HP: 50,
        SPEED: 50,
        DODGE: 75,
        STAR_MULTIPLIER: 100
    },
    
    UPGRADE_INCREASES: {
        MAX_HP: 20,
        SPEED: 0.05,
        DODGE: 0.1,
        STAR_MULTIPLIER: 0.2
    },
    
    // Chapter Goals (distance in meters)
    CHAPTER_DISTANCES: [
        500,   // Chapter 1
        700,   // Chapter 2
        1000,  // Chapter 3
        1200,  // Chapter 4
        1500,  // Chapter 5
        2000,  // Chapter 6
        2500,  // Chapter 7
        3000,  // Chapter 8
        3500,  // Chapter 9
        4000   // Chapter 10
    ],
    
    // Chapter Names & Eras
    CHAPTER_DATA: [
        { name: 'High School Freshman', era: 1 },
        { name: 'Sophomore Year', era: 1 },
        { name: 'Junior Breakout', era: 1 },
        { name: 'Senior Season', era: 2 },
        { name: 'College Prospect', era: 2 },
        { name: 'Freshman Games', era: 2 },
        { name: 'Championship Run', era: 3 },
        { name: 'Draft Showcase', era: 3 },
        { name: 'Pro Debut', era: 3 },
        { name: 'Bowl Champion', era: 3 }
    ],
    
    // Obstacle Spawn Configuration
    OBSTACLE_SPAWN_CHANCE: 0.6, // 60% chance for obstacle, 40% for collectible
    
    // Touch Input
    TOUCH_SWIPE_MIN_DISTANCE: 30, // pixels
    TOUCH_SWIPE_MAX_TIME: 300, // milliseconds
    
    // Visual Customization
    COLORS: {
        GROUND: 0x2d6a4f,
        RUNNER_BODY: 0xff6600,
        RUNNER_SKIN: 0xffcc99,
        OBSTACLE: 0xff3333,
        COLLECTIBLE: 0xffff00,
        COLLECTIBLE_EMISSIVE: 0xffaa00,
        SHIELD: 0x00aaff,
        UI_PRIMARY: '#FFD700',
        UI_SECONDARY: '#2d6a4f',
        UI_DANGER: '#ff3333'
    },
    
    // Lighting
    AMBIENT_LIGHT_INTENSITY: 0.6,
    DIRECTIONAL_LIGHT_INTENSITY: 0.8,
    DIRECTIONAL_LIGHT_POSITION: { x: 2, y: 3, z: 2 },
    
    // Camera
    CAMERA_FOV: 60,
    CAMERA_POSITION: { x: 0, y: 1.5, z: 4 },
    
    // Physics & Collision
    COLLISION_DISTANCE: 0.4,
    
    // Debug Mode
    DEBUG_MODE: false, // Set to true for console logging
    DEBUG_INFINITE_HP: false,
    DEBUG_SKIP_CHAPTERS: false
};

// Helper function to get chapter info
function getChapterInfo(chapterNum) {
    if (chapterNum < 1 || chapterNum > GAME_CONFIG.TOTAL_CHAPTERS) {
        return null;
    }
    const idx = chapterNum - 1;
    return {
        chapter: chapterNum,
        name: GAME_CONFIG.CHAPTER_DATA[idx].name,
        era: GAME_CONFIG.CHAPTER_DATA[idx].era,
        distance: GAME_CONFIG.CHAPTER_DISTANCES[idx]
    };
}

// Helper function to get spawn difficulty multiplier
function getSpawnDifficultyMultiplier(chapter) {
    // Increase difficulty as chapters progress
    return 1.0 + (chapter - 1) * 0.1;
}

// Debug logging helper
function debugLog(message, data = null) {
    if (GAME_CONFIG.DEBUG_MODE) {
        console.log(`[Running Back Rising Debug] ${message}`, data || '');
    }
}

// Export for use in game.js (if using modules)
// export { GAME_CONFIG, getChapterInfo, getSpawnDifficultyMultiplier, debugLog };
