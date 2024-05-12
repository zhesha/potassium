import { rand } from "./rand";

export interface Enemy {
    name: string,
    hp: number,
    dmg: number,
    experience: number,
    movingTimer: number,
    attackTimer: number,
    doDamage: (dmg: number) => void,
    isAlive: () => boolean,
    isArrive: () => boolean,
    changeTimer: (delta: number) => void,
    movingProgress: () => number,
    isAttack: () => boolean,
    resetAttackTimer: () => void,
    startAttackTimer: () => void,
    updateAttackTimer: (delta: number) => void,
}

const enemyPassTime = 2000;
const fullEnemyPass = 1;

interface EnemyConfig {
    name: string,
    hp: number,
    dmg: number,
    experience: number,
    attackTimeout: number
}

interface EnemyTypes {
    [k: string]: EnemyConfig
};

const enemyTypes: EnemyTypes = {
    snail: {
        name: 'snail',
        hp: 3,
        dmg: 2,
        experience: 5,
        attackTimeout: 2000,
    },
    rat: {
        name: 'rat',
        hp: 10,
        dmg: 4,
        experience: 10,
        attackTimeout: 1600,
    },
    larva: {
        name: 'larva',
        hp: 35,
        dmg: 6,
        experience: 15,
        attackTimeout: 1400,
    },
    woolf: {
        name: 'woolf',
        hp: 70,
        dmg: 7,
        experience: 20,
        attackTimeout: 1500,
    },
    skeleton: {
        name: 'skeleton',
        hp: 100,
        dmg: 8,
        experience: 25,
        attackTimeout: 1200,
    },
    bossSnake: {
        name: 'bossSnake',
        hp: 250,
        dmg: 10,
        experience: 100,
        attackTimeout: 1200,
    },
};

export function createEnemy (enemyKilledInRun: number): Enemy {
    let enemyType = enemyTypes.snail;
    console.log(enemyKilledInRun);
    if (enemyKilledInRun === 100) {
        enemyType = enemyTypes.boss1;
    } else if (enemyKilledInRun >= 80) {
        enemyType = generateEnemyType([
            {
                chance: 60,
                config: enemyTypes.skeleton,
            },
            {
                chance: 30,
                config: enemyTypes.larva,
            },
            {
                chance: 10,
                config: enemyTypes.woolf,
            },
        ]);
    } else if (enemyKilledInRun >= 60) {
        enemyType = generateEnemyType([
            {
                chance: 40,
                config: enemyTypes.larva,
            },
            {
                chance: 40,
                config: enemyTypes.woolf,
            },
            {
                chance: 20,
                config: enemyTypes.rat,
            },
        ]);
    } else if (enemyKilledInRun >= 40) {
        enemyType = generateEnemyType([
            {
                chance: 60,
                config: enemyTypes.woolf,
            },
            {
                chance: 40,
                config: enemyTypes.rat,
            },
        ]);
    } else if (enemyKilledInRun >= 20) {
        enemyType = enemyTypes.rat;
    } else if (enemyKilledInRun > 0) {
        enemyType = enemyTypes.snail;
    }
    return createConcreteEnemy(enemyType);
}

interface EnemyGeneratorConfig {
    chance: number
    config: EnemyConfig
}

function generateEnemyType(config: Array<EnemyGeneratorConfig>) {
    const max = config.reduce((memo, c) => memo + c.chance, 0);
    const chance = rand.randInRange(0, max);
    let all = 0;
    for(let c of config) {
        all += c.chance;
        if (chance < all) {
            return c.config;
        }
    }
    return config[0].config;
}

function createConcreteEnemy(config: EnemyConfig): Enemy {
    return {
        name: config.name,
        hp: config.hp,
        dmg: config.dmg,
        experience: config.experience,
        movingTimer: 0,
        attackTimer: 0,
        doDamage (dmg: number) {
            this.hp -= dmg;
        },
        isAlive () {
            return this.hp > 0;
        },
        isArrive () {
            return this.movingTimer >= enemyPassTime;
        },
        changeTimer (delta: number) {
            this.movingTimer += delta;
        },
        movingProgress () {
            return fullEnemyPass * this.movingTimer / enemyPassTime;
        },
        isAttack () {
            return this.attackTimer <= 0;
        },
        resetAttackTimer () {
            this.attackTimer = config.attackTimeout;
        },
        startAttackTimer () {
            this.attackTimer = 0;
        },
        updateAttackTimer (delta: number) {
            this.attackTimer -= delta;
        },
    };
}
