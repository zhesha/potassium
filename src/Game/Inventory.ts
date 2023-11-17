import { Backpack, createBackpack } from "./Backpack"

export interface InventoryItemBase {
    name: string;
    type: InventoryType;
}

export type InventoryItem = Weapon | Boots | Gloves | Shield | Armor | Helmet;

export enum InventoryType {
    weapon,
    boots,
    gloves,
    shield,
    armor,
    helmet,
}

export interface Weapon extends InventoryItemBase {
    dmg: number
}

export interface Boots extends InventoryItemBase {
    speed: number
}

export interface Gloves extends InventoryItemBase {
    hitChance: number
}

export interface Shield extends InventoryItemBase {
    blockChance: number
}

export interface Armor extends InventoryItemBase {
    blockPercent: number
}

export interface Helmet extends InventoryItemBase {
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
            type: InventoryType.weapon
        },
        gloves: {
            name: 'Gloves',
            hitChance: 20,
            type: InventoryType.gloves
        },
        boots: {
            name: 'Boots',
            speed: 1000,
            type: InventoryType.boots
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