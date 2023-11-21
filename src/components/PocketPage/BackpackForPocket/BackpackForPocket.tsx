import React, { useState } from "react";
import { game } from "../../../Game/Game";

export function BackpackForPocket () {
    const [backpackList, setBackpackList] = useState(game.player.inventory.backpack.list);

    game.player.onChangeInventory(() => {
        setBackpackList([...game.player.inventory.backpack.list]);
    });

    return <div className="backpack-for-pocket">
        {backpackList.map(item => <div className='backpack-for-pocket-item'>{item.name}</div>)}
    </div>
}