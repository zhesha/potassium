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

interface Armor {
    blockPercent: number
}

interface Helmet {
    blockValue: number
}

export interface Inventory {
    weapon?: Weapon,
    gloves?: Gloves,
    boots?: Boots,
    shield?: Shield,
    armor?: Armor,
    helmet?: Helmet,
    getDmg: () => number,
    getSpeed: () => number,
    getHitChance: () => number,
    getBlockChance: () => number,
    getBlockPercent: () => number,
    getBlockValue: () => number,
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
        armor: undefined,
        helmet: undefined,
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
        },
        getBlockPercent () {
            return this.armor?.blockPercent || 0;
        },
        getBlockValue () {
            return this.helmet?.blockValue || 0;
        }
    };
}