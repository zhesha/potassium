import { Backpack, createBackpack } from "./Backpack"
import { game } from "./Game";
import { InventoryArmor, InventoryBoots, InventoryGloves, InventoryHelmet, InventoryItem, InventoryShield, InventoryWeapon, RealItem, SimpleItemEffect } from "./Loot";

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

export enum ItemMagicType {
    none,
    magic,
    rare,
}

export interface InventoryLootBase {
    name: string;
    price: number;
    type: InventoryType;
    baseValueStep: number;
    baseValueMax: number;
    magic?: ItemMagicType
}

export type InventoryLoot = LootWeapon | LootBoots | LootGloves | LootShield | LootArmor | LootHelmet;

export interface LootWeapon extends InventoryLootBase {
    dmg: number
}

export interface LootBoots extends InventoryLootBase {
    rate: number
}

export interface LootGloves extends InventoryLootBase {
    hitChance: number
}

export interface LootShield extends InventoryLootBase {
    blockChance: number
}

export interface LootArmor extends InventoryLootBase {
    blockPercent: number
}

export interface LootHelmet extends InventoryLootBase {
    blockValue: number
}

interface InventorySaveData {
    weapon?: InventoryWeapon,
    gloves?: InventoryGloves,
    boots?: InventoryBoots,
    shield?: InventoryShield,
    armor?: InventoryArmor,
    helmet?: InventoryHelmet,
    backpack: Array<RealItem>,
}

export interface Inventory {
    weapon?: InventoryWeapon,
    _gloves?: InventoryGloves,
    gloves?: InventoryGloves,
    boots?: InventoryBoots,
    shield?: InventoryShield,
    armor?: InventoryArmor,
    helmet?: InventoryHelmet,
    backpack: Backpack,
    getSimpleExtra(key: keyof SimpleItemEffect): number,
    getMaxHp(): number,
    getMaxMana(): number,
    getExtraDmg(): number,
    getExtraFor(item: InventoryItem | undefined, key: keyof SimpleItemEffect): number,
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
        set gloves(gloves: InventoryGloves | undefined) {
            game.player.hitProbability.changeProbability(gloves?.hitChance || 10);
            this._gloves = gloves;
        },
        boots: undefined,
        shield: undefined,
        armor: undefined,
        helmet: undefined,
        backpack: createBackpack(),
        getExtraDmg() {
            return this.getSimpleExtra('dmg');
        },
        getMaxMana() {
            return this.getSimpleExtra('mp');
        },
        getMaxHp() {
            return this.getSimpleExtra('hp');
        },
        getSimpleExtra(key: keyof SimpleItemEffect) {
            let extra = 0;
            extra += this.getExtraFor(this.weapon, key);
            extra += this.getExtraFor(this.gloves, key);
            extra += this.getExtraFor(this.boots, key);
            extra += this.getExtraFor(this.armor, key);
            extra += this.getExtraFor(this.helmet, key);
            extra += this.getExtraFor(this.shield, key);
            return extra;
        },
        getExtraFor(item: InventoryItem | undefined, key: keyof SimpleItemEffect) {
            if (item && item.effects) {
                return item.effects.reduce((memo, effect) => memo + (effect[key] || 0), 0);
            }
            return 0;
        },
        getDmg () {
            return this.weapon?.dmg || 1 + this.getExtraDmg();
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