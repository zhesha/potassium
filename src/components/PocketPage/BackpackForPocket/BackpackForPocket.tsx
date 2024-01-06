import React, { useState } from "react";
import { game } from "../../../Game/Game";
import { PocketSelectedAct } from "../PocketPage";
import { PocketItem, PocketItemType } from "../../../Game/Pocket";
import { LootItem } from "../../../Game/Loot";
import './BackpackForPocket.scss';

interface CurrentPocketProps {
    select (selectedItem: PocketItem, act: PocketSelectedAct): void
}

export function BackpackForPocket ({select}: CurrentPocketProps) {
    const [backpackList, setBackpackList] = useState(game.player.inventory.backpack.list);

    game.player.onChangeInventory(() => {
        setBackpackList([...game.player.inventory.backpack.list]);
    });

    return <div className="backpack-for-pocket">
        <div>Backpack:</div>
        {backpackList.map((item, index) => <BackpackForPocketItem item={item} select={select} key={index}/>)}
    </div>
}

interface BackpackForPocketItemProps {
    item: LootItem
    select(selectedItem: PocketItem, act: PocketSelectedAct): void
}

function BackpackForPocketItem ({item, select}: BackpackForPocketItemProps) {
    if (item.type !== PocketItemType.potion) {
        return null;
    }
    return <div
        className='backpack-for-pocket-item'
        onClick={() => select(item, PocketSelectedAct.use)}
    >{item.name}</div>
}