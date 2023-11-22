import React, { useState } from "react";
import { game } from "../../../Game/Game";
import { InventoryItem } from "../../../Game/Inventory";
import { PocketSelectedAct } from "../PocketPage";

interface CurrentPocketProps {
    select (selectedItem: InventoryItem, act: PocketSelectedAct): void
}

export function BackpackForPocket ({select}: CurrentPocketProps) {
    const [backpackList, setBackpackList] = useState(game.player.inventory.backpack.list);

    game.player.onChangeInventory(() => {
        setBackpackList([...game.player.inventory.backpack.list]);
    });

    return <div className="backpack-for-pocket">
        {backpackList.map(item => <div
            className='backpack-for-pocket-item'
            onClick={() => select(item, PocketSelectedAct.use)}
        >{item.name}</div>)}
    </div>
}