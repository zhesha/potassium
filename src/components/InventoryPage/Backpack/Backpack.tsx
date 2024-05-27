import React, { useState } from "react";
import './Backpack.scss';
import { game } from "../../../Game/Game";
import { InventoryType, InstantItemType, PocketItemType } from "../../../Game/Inventory";
import { SelectedAct } from "../InventoryPage";
import { getRealItemFromLoot, LootItem } from "../../../Game/Loot";
import { getNameColorFromItem } from "../../GamePage/LootWindow/LootWindow";

interface BackpackProps {
    select (item: LootItem, selectedAct: SelectedAct): void
}

export function Backpack ({select}: BackpackProps) {
    const [backpackList, setBackpackList] = useState(game.player.inventory.backpack.list);

    game.player.onChangeInventory(() => {
        setBackpackList([...game.player.inventory.backpack.list]);
    });

    return <div className="backpack">
        <h1>Backpack:</h1>
        {backpackList.map((item, index) => <BackpackItem item={item} select={select} key={index}/>)}
    </div>
}

interface BackpackItemProps {
    item: LootItem
    select (item: LootItem, selectedAct: SelectedAct): void
}

function BackpackItem ({item, select}: BackpackItemProps) {
    const act = inventoryTypeToAct(item.type);

    if (!act) {
        return null;
    }

    return <div onClick={() => select(item, act)} className='backpackItem' style={{color: getNameColorFromItem(item)}}>{item.name}</div>
}

function inventoryTypeToAct (type: InventoryType | PocketItemType | InstantItemType) {
    if (type === InventoryType.weapon) {
        return SelectedAct.useWeapon
    } else if (type === InventoryType.gloves) {
        return SelectedAct.useGloves
    } else if (type === InventoryType.boots) {
        return SelectedAct.useBoots
    } else if (type === InventoryType.shield) {
        return SelectedAct.useShield
    } else if (type === InventoryType.armor) {
        return SelectedAct.useArmor
    } else if (type === InventoryType.helmet) {
        return SelectedAct.useHelmet
    }
}