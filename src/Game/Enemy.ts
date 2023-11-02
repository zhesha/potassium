export interface Enemy {
    hp: number,
    doDamage: (dmg: number) => void,
    isAlive: () => boolean,
}

export function createEnemy (): Enemy {
    return {
        hp: 3,
        doDamage (dmg: number) {
            this.hp -= dmg;
        },
        isAlive () {
            return this.hp > 0;
        }
    };
}