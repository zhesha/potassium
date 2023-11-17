import { InventoryItem, InventoryType } from "./Inventory";

export interface LootItem {
    message: string;
    item: InventoryItem;
}

interface LootLists {
    1: Array<number>,
    2: Array<number>,
    3: Array<number>,
    4: Array<number>,
    5: Array<number>,
}

export interface Loot {
    lootTypes: Array<number>,
    lootLists: LootLists,
    generate (): LootItem,
    generateTypeList (): void,
    addNumbersToTypeList (params: {type: number, count: number}): void
    getLootByType (lootType: number): LootItem
    generateLootListByType(lootType: number): void
}

interface LootMap {
    1: Array<LootItem>,
    2: Array<LootItem>,
    3: Array<LootItem>,
    4: Array<LootItem>,
    5: Array<LootItem>,
}

const lootMap: LootMap = {
    1: [
        {
            message: 'test11',
            item: {
                name: 'sword',
                dmg: 2,
                type: InventoryType.weapon
            }
        },
        {
            message: 'test12',
            item: {
                name: 'sword',
                dmg: 2,
                type: InventoryType.weapon
            }
        }
    ],
    2: [
        {
            message: 'test2',
            item: {
                name: 'sword',
                dmg: 2,
                type: InventoryType.weapon
            }
        }
    ],
    3: [
        {
            message: 'test3',
            item: {
                name: 'sword',
                dmg: 2,
                type: InventoryType.weapon
            }
        }
    ],
    4: [
        {
            message: 'test4',
            item: {
                name: 'sword',
                dmg: 2,
                type: InventoryType.weapon
            }
        }
    ],
    5: [
        {
            message: 'test5',
            item: {
                name: 'sword',
                dmg: 2,
                type: InventoryType.weapon
            }
        }
    ],
};

export const loot: Loot = {
    lootTypes: [],
    lootLists: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
    },
    generate () {
        if (this.lootTypes.length === 0) {
            this.generateTypeList();
        }
        const lootType = this.lootTypes.pop();
        if (lootType === undefined) {
            throw Error('lootType should be defined');
        }
        return this.getLootByType(lootType as keyof LootLists);
    },
    generateTypeList () {
        this.lootTypes = [];
        this.addNumbersToTypeList({type: 5, count: 1});
        this.addNumbersToTypeList({type: 4, count: 2});
        this.addNumbersToTypeList({type: 3, count: 4});
        this.addNumbersToTypeList({type: 2, count: 8});
        this.addNumbersToTypeList({type: 1, count: 16});
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
        const lootIndex = lootListByType.pop();
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
    }
};
