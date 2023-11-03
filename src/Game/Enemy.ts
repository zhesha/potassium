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

const attackTimeout = 1000;
const enemyPassTime = 2000;
const fullEnemyPass = 1;

export function createEnemy (): Enemy {
    return {
        hp: 3,
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
            this.attackTimer = attackTimeout;
        },
        startAttackTimer () {
            this.attackTimer = 0;
        },
        updateAttackTimer (delta: number) {
            this.attackTimer -= delta;
        },
    };
}