import { Backpack, createBackpack } from "./Backpack"
import { game } from "./Game";
import { LootItem } from "./Loot";

export enum PocketItemType {
    healthPotion = 'healthPotion',
    manaPotion = 'manaPotion'
}

export enum InstantItemType {
    healing = 'healing',
    money = 'money',
    experience = 'experience'
}

export enum InventoryType {
    weapon = 'weapon',
    boots = 'boots',
    gloves = 'gloves',
    shield = 'shield',
    armor = 'armor',
    helmet = 'helmet',
}

export interface InventoryItemBase {
    name: string;
    type: InventoryType;
}

export type InventoryItem = Weapon | Boots | Gloves | Shield | Armor | Helmet;

export interface Weapon extends InventoryItemBase {
    dmg: number
}

export interface Boots extends InventoryItemBase {
    rate: number
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

interface InventorySaveData {
    weapon?: Weapon,
    gloves?: Gloves,
    boots?: Boots,
    shield?: Shield,
    armor?: Armor,
    helmet?: Helmet,
    backpack: Array<LootItem>,
}

export interface Inventory {
    weapon?: Weapon,
    _gloves?: Gloves,
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
    getSaveData: () => InventorySaveData,
    applySaveData: (data: InventorySaveData) => void,
}

export function createInventory (): Inventory {
    return {
        weapon: undefined,
        _gloves: undefined,
        get gloves() {
            return this._gloves;
        },
        set gloves(gloves: Gloves | undefined) {
            game.player.hitProbability.changeProbability(gloves?.hitChance || 10);
            this._gloves = gloves;
        },
        boots: undefined,
        shield: undefined,
        armor: undefined,
        helmet: undefined,
        backpack: createBackpack(),
        getDmg () {
            return this.weapon?.dmg || 1;
        },
        getSpeed () {
            const rate = this.boots?.rate || 1;
            return Math.round(1000 / rate);
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
        },
        getSaveData () {
            return {
                weapon: this.weapon,
                gloves: this.gloves,
                boots: this.boots,
                shield: this.shield,
                armor: this.armor,
                helmet: this.helmet,
                backpack: this.backpack.list,
            }
        },
        applySaveData (data: InventorySaveData) {
            this.weapon = data.weapon;
            this.gloves = data.gloves;
            this.boots = data.boots;
            this.shield = data.shield;
            this.armor = data.armor;
            this.helmet = data.helmet;
            this.backpack.list = data.backpack;
        },
    };
}