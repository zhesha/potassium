import React, { useState } from "react";
import { game } from "../../../Game/Game";
import { PocketItem } from "./PocketItem";
import { InventoryItem } from "../../../Game/Inventory";
import { PocketSelectedAct } from "../PocketPage";

interface CurrentPocketProps {
    select (selectedItem: InventoryItem, act: PocketSelectedAct): void
}

export function CurrentPocket ({select}: CurrentPocketProps) {
    const [current, setCurrent] = useState(game.player.pocket.getList());

    game.player.pocket.onChange(() => {
        setCurrent(game.player.pocket.getList());
    });

    return <div className="current-pocket">
        {current.map(item => <PocketItem item={item} select={select} />)}
    </div>
}