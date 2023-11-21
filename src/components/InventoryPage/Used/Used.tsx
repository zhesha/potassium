import React, { useState } from "react";
import './Used.scss';
import { game } from "../../../Game/Game";
import { InventoryItem } from "../../../Game/Inventory";
import { SelectedAct } from "../InventoryPage";

interface UsedProps {
    select (item: InventoryItem, selectedAct: SelectedAct): void
}

export function Used ({select}: UsedProps) {
    const [inventory, setInventory] = useState(game.player.inventory);

    game.player.onChangeInventory(() => {
        setInventory({...game.player.inventory});
    });

    return <div className="used">
        <UsedItem item={inventory.weapon} title="weapon" act={SelectedAct.removeWeapon} select={select} />
        <UsedItem item={inventory.gloves} title="gloves" act={SelectedAct.removeGloves} select={select} />
        <UsedItem item={inventory.boots} title="boots" act={SelectedAct.removeBoots} select={select} />
        <UsedItem item={inventory.shield} title="shield" act={SelectedAct.removeShield} select={select} />
        <UsedItem item={inventory.armor} title="armor" act={SelectedAct.removeArmor} select={select} />
        <UsedItem item={inventory.helmet} title="helmet" act={SelectedAct.removeHelmet} select={select} />
    </div>
}

interface UsedItemProps {
    item?: InventoryItem
    title: string
    act: SelectedAct
    select (item: InventoryItem, selectedAct: SelectedAct): void
}

function UsedItem ({ item, title, act, select }: UsedItemProps) {
    const empty = 'Empty';
    return <div onClick={() => item && select(item, act)}>{title}: {item?.name || empty}</div>
}