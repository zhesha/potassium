interface InventoryItem {}

interface Weapon {
    dmg: number
}

interface Boots {
    speed: number
}

interface Gloves {
    chance: number
}

export interface Inventory {
    weapon: Weapon,
    gloves: Gloves,
    boots: Boots,
    shield: InventoryItem,
    armor: InventoryItem,
    helmet: InventoryItem,
    getDmg: () => number,
    getSpeed: () => number,
    getHitChance: () => number,
}

export function createInventory (): Inventory {
    return {
        weapon: {
            dmg: 1
        },
        gloves: {
            chance: 20
        },
        boots: {
            speed: 1000
        },
        shield: {},
        armor: {},
        helmet: {},
        getDmg () {
            return this.weapon.dmg;
        },
        getSpeed () {
            return this.boots.speed;
        },
        getHitChance () {
            return this.gloves.chance;
        }
    };
}