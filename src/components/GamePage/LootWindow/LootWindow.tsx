import React from "react";
import "./LootWindow.scss"
import { getRealItemFromLoot, isArmor, isBoots, isGloves, isHelmet, isInventoryItem, isShield, isWeapon, LootGenerationResult } from "../../../Game/Loot";
import { game } from "../../../Game/Game";
import { ItemMagicType } from "../../../Game/Inventory";

interface LootWindowProps {
    loot: Array<LootGenerationResult>,
}

export function LootWindow ({ loot }: LootWindowProps) {
    return <div className="loot-window-wrapper">
        <div className="loot-window-inner">
            {loot.map(item => <LootWindowItem item={item}/>)}
        </div>
    </div>;
}

function LootWindowItem ({item}: {item: LootGenerationResult}) {
    const real = getRealItemFromLoot(item.item);
    return <div className={"loot-window-item type-"+item.type}>
        <div>
            <h1 style={{color: getNameColorFromItem(item)}}>{item.item.name}</h1>
            {real && <h2>{getDescriptionFromItem(item)}</h2>}
            {real && isInventoryItem(real) && real.effects.length > 0 && <div>
                Extra effects:
                {real.effects.map(effect => <div>{effect.name}: {effect.baseValue + effect.extraValue}</div>)}
            </div>}
        </div>
        <div className="loot-window-button" onClick={() => game.acceptLoot(item.item)}>Pick</div>
    </div>;
}

function getNameColorFromItem(item: LootGenerationResult) {
    const colors = {
        normal: '#ffffff',
        magic: '#8484fe',
        rare: '#ffff94'
    };
    if (isInventoryItem(item.item)) {
        if (item.item.magic === ItemMagicType.magic) {
            return colors.magic;
        } else if (item.item.magic === ItemMagicType.rare) {
            return colors.rare;
        }
    }
    return colors.normal
}

function getDescriptionFromItem (item: LootGenerationResult) {
    if(isWeapon(item.item)) {
        return `Deals ${item.item.dmg} damage`;
    } else if(isArmor(item.item)) {
        return `Blocks ${item.item.blockPercent}% of damage`;
    } else if(isShield(item.item)) {
        return `Can block hits with ${item.item.blockChance}% chance`;
    } else if(isGloves(item.item)) {
        return `Can land hit with ${item.item.hitChance}% chance`;
    } else if(isBoots(item.item)) {
        return `Hits ${item.item.rate} times per second`;
    } else if(isHelmet(item.item)) {
        return `Blocks ${item.item.blockValue} damage`;
    }
}