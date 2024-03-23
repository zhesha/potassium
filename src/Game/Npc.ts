export enum NpcType {
    sell,
    buyEquipment,
    buyConsumables,
    BaseUpgradeNpc,
}

export interface Npc {
    type: NpcType
    name: string
    movingTimer: number,
    movingProgress (): number
    isArrive: () => boolean,
    changeTimer: (delta: number) => void,
}

const passTime = 2000;
const fullPass = 1;

const npcInitIndexes = [0, 1, 2, 3];
let npcIndexesList = [...npcInitIndexes];
const npcConfigList = [
    {
        type: NpcType.sell,
        name: 'Sell',
    },
    {
        type: NpcType.buyEquipment,
        name: 'Buy Equipment',
    },
    {
        type: NpcType.buyConsumables,
        name: 'Buy Consumables',
    },
    {
        type: NpcType.BaseUpgradeNpc,
        name: 'Base Upgrade',
    },
];

export function createNpc(): Npc {
    if (npcIndexesList.length === 0) {
        npcIndexesList = [...npcInitIndexes];
    }
    const index = npcIndexesList.shift();
    if (index === undefined) {
        throw new Error('NPC generation error: can not get index');
    }
    const config = npcConfigList[index];
    return {
        type: config.type,
        name: config.name,
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
    };
}