import { InventoryLoot, InventoryType, ItemMagicType } from "./Inventory";
import { ItemEffect } from "./Loot";
import { rand } from "./rand";

export function generateRandomEffect (lootItem: InventoryLoot): Array<ItemEffect> {
    const amount = getAmount(lootItem);
    const additionalEffect = getAdditionalEffects(lootItem);
    const allEffectTypes = [...allItemEffectType, ...additionalEffect]
    allEffectTypes.sort(() => Math.random() - 0.5);
    const effectTypes = allEffectTypes.slice(0, amount);

    const result:Array<ItemEffect> = [];

    effectTypes.forEach(effectType => {
        const effectLevels = effectsMap[effectType];
        const effect = effectLevels[getEffectsLevel(lootItem)];
        if (effect) {
            result.push({
                ...effect
            });
        }
    });

    return result;
}

function getEffectsLevel(lootItem: InventoryLoot): EffectLevels {
    if (lootItem.type === InventoryType.weapon) {
        const notAdjustedEffectLevels = Math.ceil(lootItem.baseLevel / 2);
        return notAdjustedEffectLevels - 2 as EffectLevels;
    } else if (lootItem.type === InventoryType.armor || lootItem.type === InventoryType.shield) {
        return lootItem.baseLevel - 2 as EffectLevels;
    } else if (lootItem.type === InventoryType.gloves || lootItem.type === InventoryType.boots || lootItem.type === InventoryType.helmet) {
        const base = (lootItem.baseLevel - 1) * 2;
        return rand.randInRange(base - 1, base) as EffectLevels;
    }
    return 1;
}

export enum EffectType {
    extraHp = "extraHp",
    // stealHp,
    // regenHp,
    extraMp = "extraMp",
    // stealMp,
    // regenMp,
    // extraXp,

    extraDmg = "extraDmg",
    returnDmg = "returnDmg",
    
    // heal,
    // refillMp,
    // fire,
    // ice,
    // water,
    // dealDmg,
    // bafDmg,
    // bafBlock,
    // bafSpeed,

    // betterHeal,
    // betterMaxHp,
    // betterMaxMp,
    // betterFireball,
    // betterIceBeam,
    // betterWaterCanon,
    // betterEconomy,
    // betterFastLearner,
    // betterRegenHp,
    // betterRegenMp,
    // betterCurse,
    // betterFireBless,
    // betterIceBless,
    // betterWaterBless,
    // betterSkeleton,
    // betterTameBeast,
    // betterSpirit,
    // betterFlare,
    // betterEnhancement,
    // betterWerewolf,
}

const allItemEffectType = [
    EffectType.extraHp,
    // EffectType.stealHp,
    // EffectType.regenHp,
    EffectType.extraMp,
    // EffectType.stealMp,
    // EffectType.regenMp,
    // EffectType.extraXp,
];
const weaponEffectType = [
    EffectType.extraDmg,
    // EffectType.fire,
    // EffectType.dealDmg,
    // EffectType.bafDmg,
    // EffectType.betterHeal,
    // EffectType.betterCurse,
    // EffectType.betterFlare,
];
const armorEffectType = [
    EffectType.returnDmg,
    // EffectType.heal,
    // EffectType.ice,
    // EffectType.bafBlock,
    // EffectType.betterMaxHp,
    // EffectType.betterEconomy,
    // EffectType.betterRegenHp,
    // EffectType.betterWerewolf,
];
const shieldEffectType = [
    EffectType.returnDmg,
    // EffectType.refillMp,
    // EffectType.water,
    // EffectType.bafSpeed,
    // EffectType.betterMaxMp,
    // EffectType.betterFastLearner,
    // EffectType.betterRegenMp,
    // EffectType.betterEnhancement,
];
const glovesEffectType = [
    EffectType.extraDmg,
    // EffectType.heal,
    // EffectType.fire,
    // EffectType.bafDmg,
    // EffectType.betterFireball,
    // EffectType.betterFireBless,
    // EffectType.betterSkeleton,
];
const bootsEffectType = [
    EffectType.extraDmg,
    // EffectType.water,
    // EffectType.dealDmg,
    // EffectType.bafSpeed,
    // EffectType.betterIceBeam,
    // EffectType.betterIceBless,
    // EffectType.betterTameBeast,
];
const helmetEffectType = [
    EffectType.returnDmg,
//     EffectType.refillMp,
//     EffectType.ice,
//     EffectType.bafBlock,
//     EffectType.betterWaterCanon,
//     EffectType.betterWaterBless,
//     EffectType.betterSpirit,
];

type EffectLevels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type EffectsMap = {
    [key in EffectType]: {
        [key in EffectLevels]?: ItemEffect
    }
}

const effectsMap: EffectsMap = {
    [EffectType.extraHp]: {
        1: {
            name: 'more HP',
            type: EffectType.extraHp,
            baseValue: 5,
            extraValue: 0,
            maxExtra: 10,
            extraStep: 1,
        },
        2: {
            name: 'more HP',
            type: EffectType.extraHp,
            baseValue: 15,
            extraValue: 0,
            maxExtra: 20,
            extraStep: 1,
        },
        3: {
            name: 'more HP',
            type: EffectType.extraHp,
            baseValue: 30,
            extraValue: 0,
            maxExtra: 50,
            extraStep: 2,
        },
        4: {
            name: 'more HP',
            type: EffectType.extraHp,
            baseValue: 80,
            extraValue: 0,
            maxExtra: 100,
            extraStep: 2,
        },
        5: {
            name: 'more HP',
            type: EffectType.extraHp,
            baseValue: 120,
            extraValue: 0,
            maxExtra: 150,
            extraStep: 3,
        }
    },
    [EffectType.extraMp]: {
        1: {
            name: 'more MP',
            type: EffectType.extraMp,
            baseValue: 15,
            extraValue: 0,
            maxExtra: 20,
            extraStep: 1,
        },
        2: {
            name: 'more MP',
            type: EffectType.extraMp,
            baseValue: 30,
            extraValue: 0,
            maxExtra: 40,
            extraStep: 2,
        },
        3: {
            name: 'more MP',
            type: EffectType.extraMp,
            baseValue: 50,
            extraValue: 0,
            maxExtra: 60,
            extraStep: 2,
        },
        4: {
            name: 'more MP',
            type: EffectType.extraMp,
            baseValue: 70,
            extraValue: 0,
            maxExtra: 80,
            extraStep: 2,
        },
        5: {
            name: 'more MP',
            type: EffectType.extraMp,
            baseValue: 80,
            extraValue: 0,
            maxExtra: 100,
            extraStep: 2,
        }
    },
    [EffectType.extraDmg]: {
        1: {
            name: 'more DMG',
            type: EffectType.extraDmg,
            baseValue: 1,
            extraValue: 0,
            maxExtra: 2,
            extraStep: 1,
        },
        2: {
            name: 'more DMG',
            type: EffectType.extraDmg,
            baseValue: 2,
            extraValue: 0,
            maxExtra: 4,
            extraStep: 1,
        },
        3: {
            name: 'more DMG',
            type: EffectType.extraDmg,
            baseValue: 4,
            extraValue: 0,
            maxExtra: 7,
            extraStep: 1,
        },
        4: {
            name: 'more DMG',
            type: EffectType.extraDmg,
            baseValue: 7,
            extraValue: 0,
            maxExtra: 10,
            extraStep: 1,
        },
        5: {
            name: 'more DMG',
            type: EffectType.extraDmg,
            baseValue: 12,
            extraValue: 0,
            maxExtra: 20,
            extraStep: 2,
        }
    },
    [EffectType.returnDmg]: {
        1: {
            name: 'return DMG',
            type: EffectType.returnDmg,
            baseValue: 1,
            extraValue: 0,
            maxExtra: 2,
            extraStep: 1,
        },
        2: {
            name: 'return DMG',
            type: EffectType.returnDmg,
            baseValue: 2,
            extraValue: 0,
            maxExtra: 4,
            extraStep: 1,
        },
        3: {
            name: 'return DMG',
            type: EffectType.returnDmg,
            baseValue: 4,
            extraValue: 0,
            maxExtra: 6,
            extraStep: 1,
        },
        4: {
            name: 'return DMG',
            type: EffectType.returnDmg,
            baseValue: 6,
            extraValue: 0,
            maxExtra: 8,
            extraStep: 1,
        },
        5: {
            name: 'return DMG',
            type: EffectType.returnDmg,
            baseValue: 8,
            extraValue: 0,
            maxExtra: 10,
            extraStep: 1,
        },
    },
};

function getAmount(lootItem: InventoryLoot) {
    const amount = {
        [ItemMagicType.magic]: 2,
        [ItemMagicType.rare]: 4,
        [ItemMagicType.none]: 0,
    }
    if (lootItem.magic !== undefined) {
        return amount[lootItem.magic];
    }
    return 0;
}

function getAdditionalEffects(lootItem: InventoryLoot): Array<EffectType> {
    if (lootItem.type === InventoryType.weapon) {
        return weaponEffectType;
    } else if (lootItem.type === InventoryType.armor) {
        return armorEffectType;
    } else if (lootItem.type === InventoryType.shield) {
        return shieldEffectType;
    } else if (lootItem.type === InventoryType.gloves) {
        return glovesEffectType;
    } else if (lootItem.type === InventoryType.boots) {
        return bootsEffectType;
    } else if (lootItem.type === InventoryType.helmet) {
        return helmetEffectType;
    }
    return [];
}
