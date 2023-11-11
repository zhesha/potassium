import { Backpack, createBackpack } from "./Backpack"

export interface InventoryItemBase {
    name: string;
}

export type InventoryItem = Weapon | Boots | Gloves | Shield | Armor | Helmet;

interface Weapon extends InventoryItemBase {
    dmg: number
}

interface Boots extends InventoryItemBase {
    speed: number
}

interface Gloves extends InventoryItemBase {
    hitChance: number
}

interface Shield extends InventoryItemBase {
    blockChance: number
}

interface Armor extends InventoryItemBase {
    blockPercent: number
}

interface Helmet extends InventoryItemBase {
    blockValue: number
}

export interface Inventory {
    weapon?: Weapon,
    gloves?: Gloves,
    boots?: Boots,
    shield?: Shield,
    armor?: Armor,
    helmet?: Helmet,
    backpack: Backpack,
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
            name: 'Sword',
            dmg: 1,
        },
        gloves: {
            name: 'Gloves',
            hitChance: 20
        },
        boots: {
            name: 'Boots',
            speed: 1000
        },
        shield: undefined,
        armor: undefined,
        helmet: undefined,
        backpack: createBackpack(),
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