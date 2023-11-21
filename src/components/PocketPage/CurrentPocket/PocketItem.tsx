import React from "react";
import { InventoryItem } from "../../../Game/Inventory";

interface PocketItemProps {
    item: InventoryItem
}

export function PocketItem ({item}: PocketItemProps) {
    return <div className="current-pocket">
        {item.name}
    </div>
}