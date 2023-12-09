import React from "react";
import { PocketSelectedAct } from "../PocketPage";
import { PocketItem as PocketItemType } from "../../../Game/Pocket";

interface PocketItemProps {
    item: PocketItemType
    select (selectedItem: PocketItemType, act: PocketSelectedAct): void
}

export function PocketItem ({item, select}: PocketItemProps) {
    return <div className="pocket-item" onClick={() => select(item, PocketSelectedAct.remove)}>
        {item.name}
    </div>
}