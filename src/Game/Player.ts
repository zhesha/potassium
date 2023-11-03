export interface Player {
    attackTimer: number,
    updateAttackTimer: (delta: number) => void,
    isAttack: () => boolean,
    resetAttackTimer: () => void,
    startAttackTimer: () => void,
}

const attackTimeout = 1000;

export function createPlayer (): Player {
    return {
        attackTimer: 0,
        updateAttackTimer (delta: number) {
            this.attackTimer -= delta;
        },
        isAttack () {
            return this.attackTimer <= 0;
        },
        resetAttackTimer () {
            this.attackTimer = attackTimeout;
        },
        startAttackTimer () {
            this.attackTimer = 0;
        }
    }
}