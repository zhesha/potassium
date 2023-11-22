import React from "react";
import { InventoryItem } from "../../../Game/Inventory";
import { PocketSelectedAct } from "../PocketPage";

interface PocketItemProps {
    item: InventoryItem
    select (selectedItem: InventoryItem, act: PocketSelectedAct): void
}

export function PocketItem ({item, select}: PocketItemProps) {
    return <div className="current-pocket" onClick={() => select(item, PocketSelectedAct.remove)}>
        {item.name}
    </div>
}