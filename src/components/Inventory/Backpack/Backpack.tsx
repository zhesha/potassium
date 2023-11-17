import React, { useState } from "react";
import './Backpack.scss';
import { game } from "../../../Game/Game";
import { InventoryItem, InventoryType } from "../../../Game/Inventory";
import { SelectedAct } from "../Inventory";

interface BackpackProps {
    select (item: InventoryItem, selectedAct: SelectedAct): void
}

export function Backpack ({select}: BackpackProps) {
    const [backpackList, setBackpackList] = useState(game.player.inventory.backpack.list);

    game.player.onChangeInventory(() => {
        setBackpackList([...game.player.inventory.backpack.list]);
    });

    return <div className="backpack">
        {backpackList.map(item => <div onClick={() => select(item, inventoryTypeToAct(item.type))} className='backpackItem'>{item.name}</div>)}
    </div>
}

function inventoryTypeToAct (type: InventoryType) {
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
    } else {
        return SelectedAct.useHelmet
    }
}