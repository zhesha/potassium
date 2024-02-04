import React, { useState } from "react";
import { game } from "../../../Game/Game";
import { PocketSelectedAct } from "../PocketPage";
import { PocketLoot } from "../../../Game/Pocket";
import { LootItem } from "../../../Game/Loot";
import './BackpackForPocket.scss';
import { PocketItemType } from "../../../Game/Inventory";

interface CurrentPocketProps {
    select (selectedItem: PocketLoot, act: PocketSelectedAct): void
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
    select(selectedItem: PocketLoot, act: PocketSelectedAct): void
}

function BackpackForPocketItem ({item, select}: BackpackForPocketItemProps) {
    if (item.type !== PocketItemType.healthPotion && item.type !== PocketItemType.manaPotion) {
        return null;
    }
    return <div
        className='backpack-for-pocket-item'
        onClick={() => select(item, PocketSelectedAct.use)}
    >{item.name}</div>
}