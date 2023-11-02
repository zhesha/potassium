export interface Enemy {
    hp: number,
    movingTimer: number,
    doDamage: (dmg: number) => void,
    isAlive: () => boolean,
    isArrive: () => boolean,
    changeTimer: (delta: number) => void,
    movingProgress: () => number,
}

const enemyPassTime = 2000;
const fullEnemyPass = 1;

export function createEnemy (): Enemy {
    return {
        hp: 3,
        movingTimer: 0,
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
        }
    };
}