import React, { useState } from "react";
import { game } from "../../../Game/Game";
import { PocketItem } from "./PocketItem";
import { PocketSelectedAct } from "../PocketPage";
import { PocketItem as PocketItemType } from "../../../Game/Pocket";
import './CurrentPocket.scss';

interface CurrentPocketProps {
    select (selectedItem: PocketItemType, act: PocketSelectedAct): void
}

export function CurrentPocket ({select}: CurrentPocketProps) {
    const [current, setCurrent] = useState(game.player.pocket.getList());

    game.player.pocket.onChange(() => {
        setCurrent(game.player.pocket.getList());
    });

    return <div className="current-pocket">
        <div>Pocket:</div>
        {current.map(item => <PocketItem item={item} select={select} />)}
    </div>
}