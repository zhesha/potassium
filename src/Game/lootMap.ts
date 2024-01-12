import { InstantItemType, InventoryType, PocketItemType } from "./Inventory";
import { LootMap } from "./Loot";

export const lootMap: LootMap = {
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
            name: 'gloves 20%',
            hitChance: 20,
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
            name: 'health potion 20',
            hp: 20,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'mana potion 20',
            mana: 20,
            type: PocketItemType.manaPotion,
        },
        {
            name: 'healing 20',
            hp: 20,
            type: InstantItemType.healing,
        },
        {
            name: 'money 10',
            money: 10,
            type: InstantItemType.money,
        },
        {
            name: 'experience 10',
            experience: 10,
            type: InstantItemType.experience,
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
            type: PocketItemType.healthPotion,
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
            type: PocketItemType.healthPotion,
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
            type: PocketItemType.healthPotion,
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
            type: PocketItemType.healthPotion,
        }
    ],
};