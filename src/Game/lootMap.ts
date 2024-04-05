import { InstantItemType, InventoryType, ItemMagicType, PocketItemType } from "./Inventory";
import { LootMap } from "./Loot";

export const lootMap: LootMap = {
    1: [
        {
            name: 'gloves 20%',
            hitChance: 20,
            price: 5,
            baseValueStep: 1,
            baseValueMax: 25,
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
            baseValueStep: 1,
            baseValueMax: 4,
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
            baseValueStep: 1,
            baseValueMax: 5,
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
            baseValueStep: 0.1,
            baseValueMax: 1.5,
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
            baseValueStep: 1,
            baseValueMax: 2,
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
            baseValueStep: 1,
            baseValueMax: 35,
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
            baseValueStep: 1,
            baseValueMax: 6,
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
            baseValueStep: 1,
            baseValueMax: 4,
            type: InventoryType.shield
        },
        {
            name: 'helmet 1',
            blockValue: 1,
            price: 5,
            baseValueStep: 1,
            baseValueMax: 2,
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
            baseValueStep: 1,
            baseValueMax: 10,
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
            baseValueStep: 1,
            baseValueMax: 8,
            type: InventoryType.weapon
        },
        {
            name: 'shield 4%',
            blockChance: 4,
            price: 30,
            baseValueStep: 1,
            baseValueMax: 7,
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
            baseValueStep: 1,
            baseValueMax: 10,
            type: InventoryType.weapon
        },
        {
            name: 'armor 10%',
            blockPercent: 10,
            price: 30,
            baseValueStep: 1,
            baseValueMax: 15,
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
            baseValueStep: 0.1,
            baseValueMax: 2,
            type: InventoryType.boots
        },
        {
            name: 'sword 10',
            dmg: 10,
            price: 20,
            baseValueStep: 1,
            baseValueMax: 15,
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
            baseValueStep: 1,
            baseValueMax: 5,
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
            price: 500,
            baseValueStep: 1,
            baseValueMax: 50,
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
            baseValueStep: 1,
            baseValueMax: 15,
            type: InventoryType.armor,
            magic: ItemMagicType.magic
        },
        {
            name: 'weapon 10 M',
            dmg: 10,
            price: 33,
            baseValueStep: 1,
            baseValueMax: 15,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'boots 2',
            rate: 2,
            price: 500,
            baseValueStep: 0.1,
            baseValueMax: 3,
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
            baseValueStep: 1,
            baseValueMax: 7,
            type: InventoryType.shield,
            magic: ItemMagicType.magic
        },
        {
            name: 'weapon 15',
            dmg: 15,
            price: 40,
            baseValueStep: 1,
            baseValueMax: 20,
            type: InventoryType.weapon,
        },
        {
            name: 'experience 50',
            experience: 50,
            type: InstantItemType.experience,
        },
        {
            name: 'helmet 2',
            blockValue: 2,
            price: 100,
            baseValueStep: 1,
            baseValueMax: 5,
            type: InventoryType.helmet,
            magic: ItemMagicType.magic
        },
        {
            name: 'healing 50',
            hp: 50,
            type: InstantItemType.healing,
        },
        {
            name: 'mana potion 50',
            hp: 50,
            price: 50,
            type: PocketItemType.manaPotion,
        },
        {
            name: 'armor 15%',
            blockPercent: 15,
            price: 80,
            baseValueStep: 1,
            baseValueMax: 20,
            type: InventoryType.armor,
        },
        {
            name: 'money 50',
            money: 50,
            type: InstantItemType.money,
        },
        {
            name: 'shield 7%',
            blockChance: 7,
            price: 80,
            baseValueStep: 1,
            baseValueMax: 10,
            type: InventoryType.shield,
        },
        {
            name: 'weapon 20',
            dmg: 20,
            price: 60,
            baseValueStep: 1,
            baseValueMax: 25,
            type: InventoryType.weapon,
        },
        {
            name: 'gloves 25% M',
            hitChance: 25,
            price: 100,
            baseValueStep: 1,
            baseValueMax: 35,
            type: InventoryType.gloves,
            magic: ItemMagicType.magic
        },
        {
            name: 'weapon 15 M',
            dmg: 15,
            price: 53,
            baseValueStep: 1,
            baseValueMax: 20,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'money 50',
            money: 50,
            type: InstantItemType.money,
        },
        {
            name: 'armor 15% M',
            blockPercent: 15,
            price: 150,
            baseValueStep: 1,
            baseValueMax: 20,
            type: InventoryType.armor,
            magic: ItemMagicType.magic
        },
        {
            name: 'health potion 50',
            hp: 50,
            price: 50,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'shield 10%',
            blockChance: 10,
            price: 300,
            baseValueStep: 1,
            baseValueMax: 15,
            type: InventoryType.shield,
        },
        {
            name: 'experience 50',
            experience: 50,
            type: InstantItemType.experience,
        },
        {
            name: 'helmet 5',
            blockValue: 5,
            price: 500,
            baseValueStep: 1,
            baseValueMax: 10,
            type: InventoryType.helmet,
        },
        {
            name: 'weapon 20 M',
            dmg: 20,
            price: 90,
            baseValueStep: 1,
            baseValueMax: 25,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'armor 20%',
            blockPercent: 20,
            price: 300,
            baseValueStep: 1,
            baseValueMax: 30,
            type: InventoryType.armor,
        },
        {
            name: 'mana potion 50',
            hp: 50,
            price: 50,
            type: PocketItemType.manaPotion,
        },
        {
            name: 'boots 1.5 M',
            rate: 1.5,
            price: 100,
            baseValueStep: 0.1,
            baseValueMax: 2,
            type: InventoryType.boots,
            magic: ItemMagicType.magic
        },
        {
            name: 'healing 50',
            hp: 50,
            type: InstantItemType.healing,
        },
        {
            name: 'money 50',
            money: 50,
            type: InstantItemType.money,
        },
        {
            name: 'shield 7% M',
            blockChance: 7,
            price: 150,
            baseValueStep: 1,
            baseValueMax: 10,
            type: InventoryType.shield,
            magic: ItemMagicType.magic
        },
        {
            name: 'experience 50',
            experience: 50,
            type: InstantItemType.experience,
        },
        {
            name: 'weapon 25',
            dmg: 25,
            price: 100,
            baseValueStep: 1,
            baseValueMax: 30,
            type: InventoryType.weapon,
        },
    ],
    3: [
        // шкода вогнем 50
        {
            name: 'health potion 100',
            hp: 100,
            price: 100,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'gloves 35% M',
            hitChance: 35,
            price: 1000,
            baseValueStep: 1,
            baseValueMax: 50,
            type: InventoryType.gloves,
            magic: ItemMagicType.magic
        },
        // рубін
        {
            name: 'mana potion 100',
            hp: 100,
            price: 100,
            type: PocketItemType.manaPotion,
        },
        // топаз
        {
            name: 'armor 20% M',
            blockPercent: 20,
            price: 500,
            baseValueStep: 1,
            baseValueMax: 30,
            type: InventoryType.armor,
            magic: ItemMagicType.magic
        },
        // шкода холодом 50
        {
            name: 'boots 2 M',
            rate: 2,
            price: 1000,
            baseValueStep: 0.1,
            baseValueMax: 3,
            type: InventoryType.boots,
            magic: ItemMagicType.magic
        },
        {
            name: 'health potion 100',
            hp: 100,
            price: 100,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'weapon 25 M',
            dmg: 25,
            price: 170,
            baseValueStep: 1,
            baseValueMax: 30,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        // діамант
        {
            name: 'armor 30%',
            blockPercent: 30,
            price: 800,
            baseValueStep: 1,
            baseValueMax: 40,
            type: InventoryType.armor,
        },
        // шкода водою 50
        {
            name: 'weapon 30',
            dmg: 30,
            price: 200,
            baseValueStep: 2,
            baseValueMax: 40,
            type: InventoryType.weapon,
        },
        {
            name: 'shield 10% M',
            blockChance: 10,
            price: 500,
            baseValueStep: 1,
            baseValueMax: 15,
            type: InventoryType.shield,
            magic: ItemMagicType.magic
        },
        // сапфір
        {
            name: 'gloves 50%',
            hitChance: 50,
            price:5000,
            baseValueStep: 1,
            baseValueMax: 70,
            type: InventoryType.gloves,
        },
        {
            name: 'weapon 30 M',
            dmg: 330,
            price: 100,
            baseValueStep: 2,
            baseValueMax: 40,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'mana potion 100',
            hp: 100,
            price: 100,
            type: PocketItemType.manaPotion,
        },
        {
            name: 'helmet 5 M',
            blockValue: 5,
            price: 1000,
            baseValueStep: 1,
            baseValueMax: 10,
            type: InventoryType.helmet,
            magic: ItemMagicType.magic
        },
        {
            name: 'shield 15%',
            blockChance: 15,
            price: 800,
            baseValueStep: 1,
            baseValueMax: 20,
            type: InventoryType.shield,
        },
        {
            name: 'health potion 100',
            hp: 100,
            price: 100,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'weapon 40',
            dmg: 40,
            price: 400,
            baseValueStep: 1,
            baseValueMax: 50,
            type: InventoryType.weapon,
        },
        {
            name: 'armor 30% M',
            blockPercent: 30,
            price: 1500,
            baseValueStep: 1,
            baseValueMax: 40,
            type: InventoryType.armor,
            magic: ItemMagicType.magic
        },
        {
            name: 'weapon 40 M',
            dmg: 40,
            price: 530,
            baseValueStep: 1,
            baseValueMax: 50,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        // руна1
        {
            name: 'shield 15% M',
            blockChance: 15,
            price: 1500,
            baseValueStep: 1,
            baseValueMax: 20,
            type: InventoryType.shield,
            magic: ItemMagicType.magic
        },
        {
            name: 'boots 3',
            rate: 3,
            price: 5000,
            baseValueStep: 0.1,
            baseValueMax: 5,
            type: InventoryType.boots,
        },
        {
            name: 'weapon 50',
            dmg: 50,
            price: 600,
            baseValueStep: 1,
            baseValueMax: 60,
            type: InventoryType.weapon,
        },
        {
            name: 'armor 40%',
            blockPercent: 40,
            price: 3000,
            baseValueStep: 1,
            baseValueMax: 50,
            type: InventoryType.armor,
        },
        {
            name: 'mana potion 100',
            hp: 100,
            price: 100,
            type: PocketItemType.manaPotion,
        },
        {
            name: 'weapon 50 M',
            dmg: 50,
            price: 900,
            baseValueStep: 1,
            baseValueMax: 60,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'shield 20%',
            blockChance: 20,
            price: 3000,
            baseValueStep: 1,
            baseValueMax: 30,
            type: InventoryType.shield,
        },
        {
            name: 'weapon 60',
            dmg: 60,
            price: 1000,
            baseValueStep: 2,
            baseValueMax: 80,
            type: InventoryType.weapon,
        },
        {
            name: 'helmet 10',
            blockValue: 10,
            price: 5000,
            baseValueStep: 1,
            baseValueMax: 20,
            type: InventoryType.helmet,
        },
    ],
    4: [
        {
            name: 'health potion 150',
            hp: 150,
            price: 150,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'gloves 35% R',
            hitChance: 35,
            price: 2000,
            baseValueStep: 1,
            baseValueMax: 50,
            type: InventoryType.gloves,
            magic: ItemMagicType.rare
        },
        {
            name: 'boots 2 R',
            rate: 2,
            price: 2000,
            baseValueStep: 0.1,
            baseValueMax: 3,
            type: InventoryType.boots,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 30 R',
            dmg: 30,
            price: 460,
            baseValueStep: 2,
            baseValueMax: 40,
            type: InventoryType.weapon,
            magic: ItemMagicType.rare
        },
        // баф вогнем 100
        {
            name: 'armor 20% R',
            blockPercent: 20,
            price: 700,
            baseValueStep: 1,
            baseValueMax: 30,
            type: InventoryType.armor,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 40 R',
            dmg: 40,
            price: 660,
            baseValueStep: 1,
            baseValueMax: 50,
            type: InventoryType.weapon,
            magic: ItemMagicType.rare
        },
        {
            name: 'shield 10% R',
            blockChance: 10,
            price: 700,
            baseValueStep: 1,
            baseValueMax: 15,
            type: InventoryType.shield,
            magic: ItemMagicType.rare
        },
        // баф холодем 100
        {
            name: 'armor 30% R',
            blockPercent: 30,
            price: 2200,
            baseValueStep: 1,
            baseValueMax: 40,
            type: InventoryType.armor,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 50 R',
            dmg: 50,
            price: 1200,
            baseValueStep: 1,
            baseValueMax: 60,
            type: InventoryType.weapon,
            magic: ItemMagicType.rare
        },
        {
            name: 'gloves 50% M',
            hitChance: 50,
            price: 10000,
            baseValueStep: 1,
            baseValueMax: 70,
            type: InventoryType.gloves,
            magic: ItemMagicType.magic
        },
        // баф водою 100
        {
            name: 'weapon 60 M',
            dmg: 60,
            price: 1700,
            baseValueStep: 2,
            baseValueMax: 80,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'shield 15% R',
            blockChance: 15,
            price: 2200,
            baseValueStep: 1,
            baseValueMax: 20,
            type: InventoryType.shield,
            magic: ItemMagicType.rare
        },
        {
            name: 'boots 3 M',
            rate: 3,
            price: 10000,
            baseValueStep: 0.1,
            baseValueMax: 5,
            type: InventoryType.boots,
            magic: ItemMagicType.magic
        },
        {
            name: 'weapon 60 R',
            dmg: 60,
            price: 2400,
            baseValueStep: 2,
            baseValueMax: 80,
            type: InventoryType.weapon,
            magic: ItemMagicType.rare
        },
        {
            name: 'armor 40% M',
            blockPercent: 40,
            price: 5000,
            baseValueStep: 1,
            baseValueMax: 50,
            type: InventoryType.armor,
            magic: ItemMagicType.magic
        },
        {
            name: 'health potion 150',
            hp: 150,
            price: 150,
            type: PocketItemType.healthPotion,
        },
        {
            name: 'weapon 80',
            dmg: 80,
            price: 2000,
            baseValueStep: 2,
            baseValueMax: 100,
            type: InventoryType.weapon,
        },
        {
            name: 'helmet 5 R',
            blockValue: 5,
            price: 2000,
            baseValueStep: 1,
            baseValueMax: 10,
            type: InventoryType.helmet,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 80 M',
            dmg: 80,
            price: 3300,
            baseValueStep: 2,
            baseValueMax: 100,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'shield 20% M',
            blockChance: 20,
            price: 5000,
            baseValueStep: 1,
            baseValueMax: 30,
            type: InventoryType.shield,
            magic: ItemMagicType.magic
        },
        {
            name: 'gloves 70%',
            hitChance: 70,
            price: 50000,
            baseValueStep: 1,
            baseValueMax: 90,
            type: InventoryType.gloves
        },
        // руна2
        {
            name: 'armor 50%',
            blockPercent: 50,
            price: 8000,
            baseValueStep: 1,
            baseValueMax: 60,
            type: InventoryType.armor,
        },
        {
            name: 'weapon 100',
            dmg: 100,
            price: 4000,
            baseValueStep: 1,
            baseValueMax: 120,
            type: InventoryType.weapon,
        },
        {
            name: 'boots 5',
            rate: 5,
            price: 50000,
            baseValueStep: 0.1,
            baseValueMax: 8,
            type: InventoryType.boots,
        },
        {
            name: 'shield 30%',
            blockChance: 30,
            price: 8000,
            baseValueStep: 1,
            baseValueMax: 40,
            type: InventoryType.shield,
        },
        {
            name: 'helmet 10 M',
            blockValue: 10,
            price: 10000,
            baseValueStep: 1,
            baseValueMax: 20,
            type: InventoryType.helmet,
            magic: ItemMagicType.magic
        },
        {
            name: 'weapon 100 M',
            dmg: 100,
            price: 5300,
            baseValueStep: 1,
            baseValueMax: 120,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'armor 60%',
            blockPercent: 60,
            price: 30000,
            baseValueStep: 1,
            baseValueMax: 70,
            type: InventoryType.armor,
        },
        {
            name: 'weapon 120',
            dmg: 120,
            price: 6000,
            baseValueStep: 2,
            baseValueMax: 160,
            type: InventoryType.weapon,
        },
        {
            name: 'shield 40%',
            blockChance: 40,
            price: 30000,
            baseValueStep: 1,
            baseValueMax: 60,
            type: InventoryType.shield,
        },
        {
            name: 'weapon 160',
            dmg: 160,
            price: 10000,
            baseValueStep: 2,
            baseValueMax: 200,
            type: InventoryType.weapon,
        },
        {
            name: 'helmet 20',
            blockValue: 20,
            price: 50000,
            baseValueStep: 1,
            baseValueMax: 50,
            type: InventoryType.helmet,
        },
    ],
    5: [
        // сундук
        {
            name: 'gloves 50% R',
            hitChance: 50,
            price: 20000,
            baseValueStep: 1,
            baseValueMax: 70,
            type: InventoryType.gloves,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 80 R',
            dmg: 80,
            price: 4600,
            baseValueStep: 2,
            baseValueMax: 100,
            type: InventoryType.weapon,
            magic: ItemMagicType.rare
        },
        {
            name: 'boots 3 R',
            rate: 3,
            price: 20000,
            baseValueStep: 0.1,
            baseValueMax: 5,
            type: InventoryType.boots,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 100 R',
            dmg: 100,
            price: 6600,
            baseValueStep: 1,
            baseValueMax: 120,
            type: InventoryType.weapon,
            magic: ItemMagicType.rare
        },
        {
            name: 'armor 40% R',
            blockPercent: 40,
            price: 7000,
            baseValueStep: 1,
            baseValueMax: 50,
            type: InventoryType.armor,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 120 M',
            dmg: 120,
            price: 9000,
            baseValueStep: 2,
            baseValueMax: 160,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'shield 20% R',
            blockChance: 20,
            price: 7000,
            baseValueStep: 1,
            baseValueMax: 30,
            type: InventoryType.shield,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 120 R',
            dmg: 120,
            price: 12000,
            baseValueStep: 2,
            baseValueMax: 160,
            type: InventoryType.weapon,
            magic: ItemMagicType.rare
        },
        {
            name: 'armor 50% M',
            blockPercent: 50,
            price: 15000,
            baseValueStep: 1,
            baseValueMax: 60,
            type: InventoryType.armor,
            magic: ItemMagicType.magic
        },
        {
            name: 'shield 30% M',
            blockChance: 30,
            price: 15000,
            baseValueStep: 1,
            baseValueMax: 40,
            type: InventoryType.shield,
            magic: ItemMagicType.magic
        },
        {
            name: 'weapon 160 M',
            dmg: 160,
            price: 17000,
            baseValueStep: 2,
            baseValueMax: 200,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'gloves 70% M',
            hitChance: 70,
            price: 100000,
            baseValueStep: 1,
            baseValueMax: 90,
            type: InventoryType.gloves,
            magic: ItemMagicType.magic
        },
        {
            name: 'helmet 10 R',
            blockValue: 10,
            price: 20000,
            baseValueStep: 1,
            baseValueMax: 20,
            type: InventoryType.helmet,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 160 R',
            dmg: 160,
            price: 24000,
            baseValueStep: 2,
            baseValueMax: 200,
            type: InventoryType.weapon,
            magic: ItemMagicType.rare
        },
        {
            name: 'boots 5 M',
            rate: 5,
            price: 100000,
            baseValueStep: 0.1,
            baseValueMax: 8,
            type: InventoryType.boots,
            magic: ItemMagicType.magic
        },
        {
            name: 'shield 30% R',
            blockChance: 30,
            price: 22000,
            baseValueStep: 1,
            baseValueMax: 40,
            type: InventoryType.shield,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 200',
            dmg: 200,
            price: 20000,
            baseValueStep: 2,
            baseValueMax: 250,
            type: InventoryType.weapon,
        },
        {
            name: 'armor 50% R',
            blockPercent: 50,
            price: 22000,
            baseValueStep: 1,
            baseValueMax: 60,
            type: InventoryType.armor,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 200 M',
            dmg: 200,
            price: 33000,
            baseValueStep: 2,
            baseValueMax: 250,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'shield 40% M',
            blockChance: 40,
            price: 50000,
            baseValueStep: 1,
            baseValueMax: 60,
            type: InventoryType.shield,
            magic: ItemMagicType.magic
        },
        {
            name: 'armor 60% M',
            blockPercent: 60,
            price: 50000,
            baseValueStep: 1,
            baseValueMax: 70,
            type: InventoryType.armor,
            magic: ItemMagicType.magic
        },
        {
            name: 'weapon 200 R',
            dmg: 200,
            price: 46000,
            baseValueStep: 2,
            baseValueMax: 250,
            type: InventoryType.weapon,
            magic: ItemMagicType.rare
        },
        {
            name: 'gloves 70% R',
            hitChance: 70,
            price: 200000,
            baseValueStep: 1,
            baseValueMax: 90,
            type: InventoryType.gloves,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 250',
            dmg: 250,
            price: 40000,
            baseValueStep: 2,
            baseValueMax: 300,
            type: InventoryType.weapon,
        },
        {
            name: 'boots 5 R',
            rate: 5,
            price: 200000,
            baseValueStep: 0.1,
            baseValueMax: 8,
            type: InventoryType.boots,
            magic: ItemMagicType.rare
        },
        {
            name: 'helmet 20 M',
            blockValue: 20,
            price: 100000,
            baseValueStep: 1,
            baseValueMax: 50,
            type: InventoryType.helmet,
            magic: ItemMagicType.magic
        },
        {
            name: 'shield 60%',
            blockChance: 60,
            price: 80000,
            baseValueStep: 1,
            baseValueMax: 80,
            type: InventoryType.shield,
        },
        {
            name: 'weapon 250 M',
            dmg: 250,
            price: 53000,
            baseValueStep: 2,
            baseValueMax: 300,
            type: InventoryType.weapon,
            magic: ItemMagicType.magic
        },
        {
            name: 'armor 70%',
            blockPercent: 70,
            price: 80000,
            baseValueStep: 1,
            baseValueMax: 90,
            type: InventoryType.armor,
        },
        {
            name: 'helmet 20 R',
            blockValue: 20,
            price: 200000,
            baseValueStep: 1,
            baseValueMax: 50,
            type: InventoryType.helmet,
            magic: ItemMagicType.rare
        },
        {
            name: 'weapon 300',
            dmg: 300,
            price: 60000,
            baseValueStep: 2,
            baseValueMax: 400,
            type: InventoryType.weapon,
        },
        // ключ
        {
            name: 'shield 60% M',
            blockChance: 60,
            price: 150000,
            baseValueStep: 1,
            baseValueMax: 80,
            type: InventoryType.shield,
            magic: ItemMagicType.magic
        },
        {
            name: 'armor 70% M',
            blockPercent: 70,
            price: 150000,
            baseValueStep: 1,
            baseValueMax: 90,
            type: InventoryType.armor,
            magic: ItemMagicType.magic
        },
        {
            name: 'weapon 400',
            dmg: 400,
            price: 100000,
            baseValueStep: 2,
            baseValueMax: 500,
            type: InventoryType.weapon,
        },
    ],
};