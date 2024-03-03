export interface Npc {
    name: string
    movingTimer: number,
    movingProgress (): number
    isArrive: () => boolean,
    changeTimer: (delta: number) => void,
}

const passTime = 2000;
const fullPass = 1;

export function createNpc(): Npc {
    return {
        name: 'Sell',
        movingTimer: 0,
        movingProgress () {
            return fullPass * this.movingTimer / passTime;
        },
        isArrive () {
            return this.movingTimer >= passTime;
        },
        changeTimer (delta: number) {
            this.movingTimer += delta;
        },
    }
}