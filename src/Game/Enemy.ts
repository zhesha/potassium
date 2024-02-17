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
    woolf: {
        name: 'woolf',
        hp: 25,
        dmg: 5,
        experience: 15,
        attackTimeout: 1000,
    },
};

export function createEnemy (enemyKilledInRun: number): Enemy {
    let enemyType = enemyTypes.snail;
    console.log(enemyKilledInRun);
    if (enemyKilledInRun > 40) {
        enemyType = enemyTypes.woolf;
    } else if (enemyKilledInRun > 20) {
        enemyType = enemyTypes.rat;
    } else if (enemyKilledInRun > 0) {
        enemyType = enemyTypes.snail;
    }
    return createConcreteEnemy(enemyType);
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
