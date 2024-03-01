import { InstantItemType, InventoryType, ItemMagicType, PocketItemType } from "./Inventory";
import { LootMap } from "./Loot";

export const lootMap: LootMap = {
    1: [
        {
            name: 'gloves 20%',
            hitChance: 20,
            price: 5,
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
            price: 2,
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
            price: 3,
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
            price: 20,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'boots 1.1',
            rate: 1.1,
            price: 5,
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
            price: 20,
            type: PocketItemType.manaPotion,
        },
        {
            name: 'shield 1%',
            blockChance: 1,
            price: 3,
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
            price: 50,
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
            price: 4,
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
            price: 8,
            type: InventoryType.shield
        },
        {
            name: 'helmet 1',
            blockValue: 1,
            price: 5,
            type: InventoryType.helmet
        },
        {
            name: 'mana potion 20',
            mana: 20,
            price: 20,
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
            price: 8,
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
            price: 6,
            type: InventoryType.weapon
        },
        {
            name: 'shield 4%',
            blockChance: 4,
            price: 30,
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
            price: 10,
            type: InventoryType.weapon
        },
        {
            name: 'armor 10%',
            blockPercent: 10,
            price: 30,
            type: InventoryType.armor
        },
        {
            name: 'health potion 20',
            hp: 20,
            price: 20,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'boots 1.5',
            rate: 1.5,
            price: 50,
            type: InventoryType.boots
        },
        {
            name: 'sword 10',
            dmg: 10,
            price: 20,
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
            price: 50,
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
            price: 100,
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
            price: 50,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'money 50',
            money: 50,
            type: InstantItemType.money,
        },
        {
            name: 'armor 10% M',
            blockPercent: 10,
            price: 50,
            type: InventoryType.armor,
            magic: ItemMagicType.magic
        },
        {
            name: 'weapon 10 M',
            dmg: 10,
            price: 33,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'boots 2',
            rate: 2,
            price: 500,
            type: InventoryType.boots,
        },
        {
            name: 'experience 50',
            experience: 50,
            type: InstantItemType.experience,
        },
        {
            name: 'shield 4% M',
            blockChance: 4,
            price: 50,
            type: InventoryType.shield,
            magic: ItemMagicType.magic
        },
    ],
    3: [
        {
            name: 'sword 4',
            dmg: 4,
            price: 1,
            type: InventoryType.weapon
        },
    ],
    4: [
        {
            name: 'sword 5',
            dmg: 5,
            price: 1,
            type: InventoryType.weapon
        },
    ],
    5: [
        {
            name: 'sword 6',
            dmg: 6,
            price: 1,
            type: InventoryType.weapon
        },
    ],
};