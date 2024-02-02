import { InstantItemType, InventoryType, PocketItemType } from "./Inventory";
import { LootMap } from "./Loot";

export const lootMap: LootMap = {
    1: [
        {
            name: 'gloves 20%',
            hitChance: 20,
            type: InventoryType.gloves
        },
        {
            name: 'money 10',
            money: 10,
            type: InstantItemType.money,
        },
        {
            name: 'sword 2',
            dmg: 2,
            type: InventoryType.weapon
        },
        {
            name: 'healing 20',
            hp: 20,
            type: InstantItemType.healing,
        },
        {
            name: 'armor 1%',
            blockPercent: 1,
            type: InventoryType.armor
        },
        {
            name: 'money 10',
            money: 10,
            type: InstantItemType.money,
        },
        {
            name: 'health potion 20',
            hp: 20,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'boots 1.1',
            rate: 1.1,
            type: InventoryType.boots
        },
        {
            name: 'experience 10',
            experience: 10,
            type: InstantItemType.experience,
        },
        {
            name: 'mana potion 20',
            mana: 20,
            type: PocketItemType.manaPotion,
        },
        {
            name: 'shield 1%',
            blockChance: 1,
            type: InventoryType.shield
        },
        {
            name: 'healing 20',
            hp: 20,
            type: InstantItemType.healing,
        },
        {
            name: 'experience 10',
            experience: 10,
            type: InstantItemType.experience,
        },
        {
            name: 'gloves 25%',
            hitChance: 25,
            type: InventoryType.gloves
        },
        {
            name: 'money 10',
            money: 10,
            type: InstantItemType.money,
        },
        {
            name: 'sword 4',
            dmg: 4,
            type: InventoryType.weapon
        },
        {
            name: 'healing 20',
            hp: 20,
            type: InstantItemType.healing,
        },
        {
            name: 'shield 2%',
            blockChance: 2,
            type: InventoryType.shield
        },
        {
            name: 'helmet 1',
            blockValue: 1,
            type: InventoryType.helmet
        },
        {
            name: 'mana potion 20',
            mana: 20,
            type: PocketItemType.manaPotion,
        },
        {
            name: 'experience 10',
            experience: 10,
            type: InstantItemType.experience,
        },
        {
            name: 'armor 5%',
            blockPercent: 5,
            type: InventoryType.armor
        },
        {
            name: 'healing 20',
            hp: 20,
            type: InstantItemType.healing,
        },
        {
            name: 'sword 6',
            dmg: 6,
            type: InventoryType.weapon
        },
        {
            name: 'shield 4%',
            blockChance: 4,
            type: InventoryType.shield
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
        },
        {
            name: 'sword 8',
            dmg: 8,
            type: InventoryType.weapon
        },
        {
            name: 'armor 10%',
            blockPercent: 10,
            type: InventoryType.armor
        },
        {
            name: 'health potion 20',
            hp: 20,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'boots 1.5',
            rate: 1.5,
            type: InventoryType.boots
        },
        {
            name: 'sword 10',
            dmg: 10,
            type: InventoryType.weapon
        },
        {
            name: 'money 10',
            money: 10,
            type: InstantItemType.money,
        },
        {
            name: 'helmet 2',
            blockValue: 2,
            type: InventoryType.helmet
        },
        {
            name: 'experience 10',
            experience: 10,
            type: InstantItemType.experience,
        },
        {
            name: 'healing 20',
            hp: 20,
            type: InstantItemType.healing,
        },
    ],
    2: [
        {
            name: 'money 50',
            money: 50,
            type: InstantItemType.money,
        },
        {
            name: 'gloves 35%',
            hitChance: 35,
            type: InventoryType.gloves
        },
        {
            name: 'experience 50',
            experience: 50,
            type: InstantItemType.experience,
        },
        {
            name: 'health potion 50',
            hp: 50,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'money 50',
            money: 50,
            type: InstantItemType.money,
        },

        {
            // Magic
            name: 'armor 10% M',
            blockPercent: 10,
            type: InventoryType.armor
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
            rate: 2,
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
            rate: 3,
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
            rate: 5,
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