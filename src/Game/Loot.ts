import { game } from "./Game";
import { InventoryItem, PocketItemType } from "./Inventory";
import { InstantItem, PocketItem } from "./Pocket";
import { lootMap } from "./lootMap";

export type LootItem = InventoryItem | PocketItem | InstantItem;

interface LootLists {
    1: Array<number>,
    2: Array<number>,
    3: Array<number>,
    4: Array<number>,
    5: Array<number>,
}

interface LootSaveData {
    lootTypes: Array<number>,
    lootLists: LootLists,
}

export interface Loot {
    lootTypes: Array<number>,
    lootLists: LootLists,
    init(): void,
    generate (): LootItem,
    generateTypeList (): void,
    addNumbersToTypeList (params: {type: number, count: number}): void
    getLootByType (lootType: number): LootItem
    generateLootListByType(lootType: number): void
    getSavedData(): LootSaveData
    applySavedData(data: LootSaveData): void
}

export interface LootMap {
    1: Array<LootItem>,
    2: Array<LootItem>,
    3: Array<LootItem>,
    4: Array<LootItem>,
    5: Array<LootItem>,
}

export function itemUseHandler (item: LootItem) {
    if (item.type === PocketItemType.healthPotion) {
        game.player.heal(item.hp!);
        game.player.pocket.remove(item);
    } else if (item.type === PocketItemType.manaPotion) {
        game.player.addMana(item.mana!);
        game.player.pocket.remove(item);
    }
}

export const loot: Loot = {
    lootTypes: [],
    lootLists: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
    },
    init() {
        this.lootTypes = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 2, 1, 1, 1, 1, 1, 1, 1, 2,
            1, 1, 1, 1, 1, 2, 1, 1, 1, 1,
            1, 2, 1, 1, 2, 1, 1, 1, 2, 1,
            1, 2, 1,
                    1, 2, 1, 2, 1, 1, 1,
            2, 1, 2, 1, 1, 2, 3, 1, 1, 1,
            2, 1, 1, 3, 1, 2, 1, 1, 2, 3,
            1, 4, 1, 1, 1, 2, 1, 1, 3, 2,
            1, 1, 2, 1, 2, 3, 1, 1, 1, 2,
            1, 1, 2, 3, 1, 1, 4, 1, 1, 2,
            1, 1, 3, 1, 2, 1, 1, 2, 3, 1,
            2, 1, 4, 1, 2, 1, 3, 5, 1, 2, 1,
        ];
        this.lootLists[1] = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35,
        ];
        this.lootLists[2] = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35,
        ];
        this.lootLists[3] = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35,
        ];
        this.lootLists[4] = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35,
        ];
        this.lootLists[5] = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35,
        ];
    },
    generate () {
        if (this.lootTypes.length === 0) {
            this.generateTypeList();
        }
        const lootType = this.lootTypes.shift();
        if (lootType === undefined) {
            throw Error('lootType should be defined');
        }
        return this.getLootByType(lootType as keyof LootLists);
    },
    generateTypeList () {
        this.lootTypes = [];
        this.addNumbersToTypeList({type: 5, count: 1});
        this.addNumbersToTypeList({type: 4, count: 3});
        this.addNumbersToTypeList({type: 3, count: 9});
        this.addNumbersToTypeList({type: 2, count: 27});
        this.addNumbersToTypeList({type: 1, count: 81});
        this.lootTypes.sort(() => 0.5 - Math.random());
    },
    addNumbersToTypeList (params: {type: number, count: number}) {
        for (let i = 0; i < params.count; i++) {
            this.lootTypes.push(params.type);
        }
    },
    getLootByType (lootType: keyof LootLists) {
        const lootListByType = this.lootLists[lootType];
        if (lootListByType.length === 0) {
            this.generateLootListByType(lootType);
        }
        const lootIndex = lootListByType.shift();
        if (lootIndex === undefined) {
            throw Error('lootIndex should be defined');
        }
        return lootMap[lootType][lootIndex];
    },
    generateLootListByType(lootType: keyof LootLists) {
        for (let i = 0; i < lootMap[lootType].length; i++) {
            this.lootLists[lootType].push(i);
        }
        this.lootLists[lootType].sort(() => 0.5 - Math.random());
    },
    getSavedData() {
        return {
            lootTypes: this.lootTypes,
            lootLists: this.lootLists,
        }
    },
    applySavedData(data: LootSaveData) {
        this.lootTypes = data.lootTypes;
        this.lootLists = data.lootLists;
    }
};

loot.init();
