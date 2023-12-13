export interface Enemy {
    hp: number,
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
    hp: number,
    attackTimeout: number
}

interface EnemyTypes {
    [k: string]: EnemyConfig
};

const enemyTypes: EnemyTypes = {
    snail: {
        hp: 1,
        attackTimeout: 1000,
    },
    rat: {
        hp: 3,
        attackTimeout: 900,
    },
    woolf: {
        hp: 8,
        attackTimeout: 800,
    },
};

export function createEnemy (distance: number): Enemy {
    let enemyType = enemyTypes.snail;
    if (distance < 25) {
        enemyType = enemyTypes.snail;
    } else if (distance < 100) {
        enemyType = enemyTypes.rat;
    } else if (distance < 400) {
        enemyType = enemyTypes.woolf;
    }
    return createConcreteEnemy(enemyType);
}

function createConcreteEnemy(config: EnemyConfig): Enemy {
    return {
        hp: config.hp,
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
