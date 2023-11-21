import React, { useState } from "react";
import { game } from "../../../Game/Game";
import { PocketItem } from "./PocketItem";

export function CurrentPocket () {
    const [current, setCurrent] = useState(game.player.pocket.getList());

    game.player.pocket.onChange(() => {
        setCurrent(game.player.pocket.getList());
    });

    return <div className="current-pocket">
        {current.map(item => <PocketItem item={item} />)}
    </div>
}