interface InventoryItem {}

interface Weapon {
    dmg: number
}

interface Boots {
    speed: number
}

export interface Inventory {
    weapon: Weapon,
    gloves: InventoryItem,
    boots: Boots,
    shield: InventoryItem,
    armor: InventoryItem,
    helmet: InventoryItem,
    getDmg: () => number,
    getSpeed: () => number,
}

export function createInventory (): Inventory {
    return {
        weapon: {
            dmg: 1
        },
        gloves: {},
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
        }
    };
}