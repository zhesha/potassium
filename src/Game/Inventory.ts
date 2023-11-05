interface InventoryItem {}

interface Weapon {
    dmg: number
}

interface Boots {
    speed: number
}

interface Gloves {
    hitChance: number
}

interface Shield {
    blockChance: number
}

export interface Inventory {
    weapon?: Weapon,
    gloves?: Gloves,
    boots?: Boots,
    shield?: Shield,
    armor?: InventoryItem,
    helmet?: InventoryItem,
    getDmg: () => number,
    getSpeed: () => number,
    getHitChance: () => number,
    getBlockChance: () => number,
}

export function createInventory (): Inventory {
    return {
        weapon: {
            dmg: 1
        },
        gloves: {
            hitChance: 20
        },
        boots: {
            speed: 1000
        },
        shield: undefined,
        armor: {},
        helmet: {},
        getDmg () {
            return this.weapon?.dmg || 1;
        },
        getSpeed () {
            return this.boots?.speed || 1000;
        },
        getHitChance () {
            return this.gloves?.hitChance || 10;
        },
        getBlockChance () {
            return this.shield?.blockChance || 0;
        }
    };
}