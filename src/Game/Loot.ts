import { game } from "./Game";
import { InventoryItem, InventoryType } from "./Inventory";
import { PocketItem, PocketItemType } from "./Pocket";

export type LootItem = InventoryItem | PocketItem;

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

export function itemUseHandler (item: LootItem) {
    if (item.type === PocketItemType.potion) {
        game.player.heal(item.hp);
        game.player.pocket.remove(item);
    }
}

const lootMap: LootMap = {
    1: [
        {
            name: 'sword 2',
            dmg: 2,
            type: InventoryType.weapon
        },
        {
            name: 'boots 0.9',
            speed: 900,
            type: InventoryType.boots
        },
        {
            name: 'gloves 30%',
            hitChance: 30,
            type: InventoryType.gloves
        },
        {
            name: 'shield 10%',
            blockChance: 10,
            type: InventoryType.shield
        },
        {
            name: 'armor 10%',
            blockPercent: 10,
            type: InventoryType.armor
        },
        {
            name: 'helmet 1',
            blockValue: 1,
            type: InventoryType.helmet
        },
        {
            name: 'health potion 50',
            hp: 50,
            type: PocketItemType.potion,
        }
    ],
    2: [
        {
            name: 'sword 3',
            dmg: 3,
            type: InventoryType.weapon
        },
        {
            name: 'boots 0.8',
            speed: 800,
            type: InventoryType.boots
        },
        {
            name: 'gloves 40%',
            hitChance: 40,
            type: InventoryType.gloves
        },
        {
            name: 'shield 20%',
            blockChance: 20,
            type: InventoryType.shield
        },
        {
            name: 'armor 20%',
            blockPercent: 20,
            type: InventoryType.armor
        },
        {
            name: 'helmet 2',
            blockValue: 2,
            type: InventoryType.helmet
        },
        {
            name: 'health potion 100',
            hp: 100,
            type: PocketItemType.potion,
        }
    ],
    3: [
        {
            name: 'sword 4',
            dmg: 4,
            type: InventoryType.weapon
        },
        {
            name: 'boots 0.7',
            speed: 700,
            type: InventoryType.boots
        },
        {
            name: 'gloves 50%',
            hitChance: 50,
            type: InventoryType.gloves
        },
        {
            name: 'shield 30%',
            blockChance: 30,
            type: InventoryType.shield
        },
        {
            name: 'armor 30%',
            blockPercent: 30,
            type: InventoryType.armor
        },
        {
            name: 'helmet 3',
            blockValue: 3,
            type: InventoryType.helmet
        },
        {
            name: 'health potion 200',
            hp: 200,
            type: PocketItemType.potion,
        }
    ],
    4: [
        {
            name: 'sword 5',
            dmg: 5,
            type: InventoryType.weapon
        },
        {
            name: 'boots 0.6',
            speed: 600,
            type: InventoryType.boots
        },
        {
            name: 'gloves 60%',
            hitChance: 60,
            type: InventoryType.gloves
        },
        {
            name: 'shield 40%',
            blockChance: 40,
            type: InventoryType.shield
        },
        {
            name: 'armor 40%',
            blockPercent: 40,
            type: InventoryType.armor
        },
        {
            name: 'helmet 4',
            blockValue: 4,
            type: InventoryType.helmet
        },
        {
            name: 'health potion 300',
            hp: 300,
            type: PocketItemType.potion,
        }
    ],
    5: [
        {
            name: 'sword 6',
            dmg: 6,
            type: InventoryType.weapon
        },
        {
            name: 'boots 0.5',
            speed: 500,
            type: InventoryType.boots
        },
        {
            name: 'gloves 70%',
            hitChance: 70,
            type: InventoryType.gloves
        },
        {
            name: 'shield 50%',
            blockChance: 50,
            type: InventoryType.shield
        },
        {
            name: 'armor 50%',
            blockPercent: 50,
            type: InventoryType.armor
        },
        {
            name: 'helmet 5',
            blockValue: 5,
            type: InventoryType.helmet
        },
        {
            name: 'health potion 500',
            hp: 500,
            type: PocketItemType.potion,
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
