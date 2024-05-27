import React, { useState } from "react";
import './Used.scss';
import { game } from "../../../Game/Game";
import { InventoryLoot } from "../../../Game/Inventory";
import { SelectedAct } from "../InventoryPage";
import { getNameColorFromItem } from "../../GamePage/LootWindow/LootWindow";

interface UsedProps {
    select (item: InventoryLoot, selectedAct: SelectedAct): void
}

export function Used ({select}: UsedProps) {
    const [inventory, setInventory] = useState(game.player.inventory);

    game.player.onChangeInventory(() => {
        setInventory({...game.player.inventory});
    });

    return <div className="used">
        <h1>Inventory:</h1>
        <UsedItem item={inventory.weapon} title="Weapon" act={SelectedAct.removeWeapon} select={select} />
        <UsedItem item={inventory.gloves} title="Gloves" act={SelectedAct.removeGloves} select={select} />
        <UsedItem item={inventory.boots} title="Boots" act={SelectedAct.removeBoots} select={select} />
        <UsedItem item={inventory.shield} title="Shield" act={SelectedAct.removeShield} select={select} />
        <UsedItem item={inventory.armor} title="Armor" act={SelectedAct.removeArmor} select={select} />
        <UsedItem item={inventory.helmet} title="Helmet" act={SelectedAct.removeHelmet} select={select} />
    </div>
}

interface UsedItemProps {
    item?: InventoryLoot
    title: string
    act: SelectedAct
    select (item: InventoryLoot, selectedAct: SelectedAct): void
}

function UsedItem ({ item, title, act, select }: UsedItemProps) {
    const empty = 'Empty';
    let color;
    if (item) {
        color = getNameColorFromItem(item);
    }
    return <div onClick={() => item && select(item, act)}>
        <h2>{title}:</h2>
        <div  style={{color: color}}>{item?.name || empty}</div>
    </div>
}