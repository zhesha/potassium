import React from "react";
import "./LootWindow.scss"
import { getRealItemFromLoot, isArmor, isBoots, isGloves, isHelmet, isInventoryItem, isShield, isWeapon, LootGenerationResult, LootItem } from "../../../Game/Loot";
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
            <h1 style={{color: getNameColorFromItem(item.item)}}>{item.item.name}</h1>
            {real && <h2>{getDescriptionFromItem(item.item)}</h2>}
            {real && isInventoryItem(real) && real.effects.length > 0 && <div>
                Extra effects:
                {real.effects.map(effect => <div>{effect.name}: {effect.baseValue + effect.extraValue}</div>)}
            </div>}
        </div>
        <div className="loot-window-button" onClick={() => game.acceptLoot(item.item)}>Pick</div>
    </div>;
}

export function getNameColorFromItem(item: LootItem) {
    const colors = {
        normal: '#ffffff',
        magic: '#8484fe',
        rare: '#ffff94'
    };
    if (isInventoryItem(item)) {
        if (item.magic === ItemMagicType.magic) {
            return colors.magic;
        } else if (item.magic === ItemMagicType.rare) {
            return colors.rare;
        }
    }
    return colors.normal
}

export function getDescriptionFromItem (item: LootItem) {
    if(isWeapon(item)) {
        return `Deals ${item.dmg} damage`;
    } else if(isArmor(item)) {
        return `Blocks ${item.blockPercent}% of damage`;
    } else if(isShield(item)) {
        return `Can block hits with ${item.blockChance}% chance`;
    } else if(isGloves(item)) {
        return `Can land hit with ${item.hitChance}% chance`;
    } else if(isBoots(item)) {
        return `Hits ${item.rate} times per second`;
    } else if(isHelmet(item)) {
        return `Blocks ${item.blockValue} damage`;
    }
}