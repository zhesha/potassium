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
            message: 'sword 2',
            item: {
                name: 'sword',
                dmg: 2,
                type: InventoryType.weapon
            }
        },
        {
            message: 'boots 0.9',
            item: {
                name: 'boots',
                speed: 900,
                type: InventoryType.boots
            }
        },
        {
            message: 'gloves 30%',
            item: {
                name: 'gloves',
                hitChance: 30,
                type: InventoryType.gloves
            }
        },
        {
            message: 'shield 10%',
            item: {
                name: 'shield',
                blockChance: 10,
                type: InventoryType.shield
            }
        },
        {
            message: 'armor 10%',
            item: {
                name: 'armor',
                blockPercent: 10,
                type: InventoryType.armor
            }
        },
        {
            message: 'helmet 1',
            item: {
                name: 'helmet',
                blockValue: 1,
                type: InventoryType.helmet
            }
        }
    ],
    2: [
        {
            message: 'sword 3',
            item: {
                name: 'sword',
                dmg: 3,
                type: InventoryType.weapon
            }
        },
        {
            message: 'boots 0.8',
            item: {
                name: 'boots',
                speed: 800,
                type: InventoryType.boots
            }
        },
        {
            message: 'gloves 40%',
            item: {
                name: 'gloves',
                hitChance: 40,
                type: InventoryType.gloves
            }
        },
        {
            message: 'shield 20%',
            item: {
                name: 'shield',
                blockChance: 20,
                type: InventoryType.shield
            }
        },
        {
            message: 'armor 20%',
            item: {
                name: 'armor',
                blockPercent: 20,
                type: InventoryType.armor
            }
        },
        {
            message: 'helmet 2',
            item: {
                name: 'helmet',
                blockValue: 2,
                type: InventoryType.helmet
            }
        }
    ],
    3: [
        {
            message: 'sword 4',
            item: {
                name: 'sword',
                dmg: 4,
                type: InventoryType.weapon
            }
        },
        {
            message: 'boots 0.7',
            item: {
                name: 'boots',
                speed: 700,
                type: InventoryType.boots
            }
        },
        {
            message: 'gloves 50%',
            item: {
                name: 'gloves',
                hitChance: 50,
                type: InventoryType.gloves
            }
        },
        {
            message: 'shield 30%',
            item: {
                name: 'shield',
                blockChance: 30,
                type: InventoryType.shield
            }
        },
        {
            message: 'armor 30%',
            item: {
                name: 'armor',
                blockPercent: 30,
                type: InventoryType.armor
            }
        },
        {
            message: 'helmet 3',
            item: {
                name: 'helmet',
                blockValue: 3,
                type: InventoryType.helmet
            }
        }
    ],
    4: [
        {
            message: 'sword 5',
            item: {
                name: 'sword',
                dmg: 5,
                type: InventoryType.weapon
            }
        },
        {
            message: 'boots 0.6',
            item: {
                name: 'boots',
                speed: 600,
                type: InventoryType.boots
            }
        },
        {
            message: 'gloves 60%',
            item: {
                name: 'gloves',
                hitChance: 60,
                type: InventoryType.gloves
            }
        },
        {
            message: 'shield 40%',
            item: {
                name: 'shield',
                blockChance: 40,
                type: InventoryType.shield
            }
        },
        {
            message: 'armor 40%',
            item: {
                name: 'armor',
                blockPercent: 40,
                type: InventoryType.armor
            }
        },
        {
            message: 'helmet 4',
            item: {
                name: 'helmet',
                blockValue: 4,
                type: InventoryType.helmet
            }
        }
    ],
    5: [
        {
            message: 'sword 6',
            item: {
                name: 'sword',
                dmg: 6,
                type: InventoryType.weapon
            }
        },
        {
            message: 'boots 0.5',
            item: {
                name: 'boots',
                speed: 500,
                type: InventoryType.boots
            }
        },
        {
            message: 'gloves 70%',
            item: {
                name: 'gloves',
                hitChance: 70,
                type: InventoryType.gloves
            }
        },
        {
            message: 'shield 50%',
            item: {
                name: 'shield',
                blockChance: 50,
                type: InventoryType.shield
            }
        },
        {
            message: 'armor 50%',
            item: {
                name: 'armor',
                blockPercent: 50,
                type: InventoryType.armor
            }
        },
        {
            message: 'helmet 5',
            item: {
                name: 'helmet',
                blockValue: 5,
                type: InventoryType.helmet
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
