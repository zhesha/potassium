import React from "react";
import { InventoryItem } from "../../../Game/Inventory";
import { game } from "../../../Game/Game";
import { PocketSelectedAct } from "../PocketPage";

interface SelectedProps {
    select (selectedItem: InventoryItem | null, act: PocketSelectedAct | null): void
    selected: InventoryItem
    act: PocketSelectedAct | null
}

export function SelectedPocket ({select, act, selected}: SelectedProps) {
    function doAct(act: PocketSelectedAct | null) {
        if (act === PocketSelectedAct.remove) {
            game.player.pocket.remove(selected);
            game.player.inventory.backpack.add(selected);
        } else if (act === PocketSelectedAct.use) {
            if (game.player.pocket.hasPlace()) {
                game.player.pocket.add(selected);
                game.player.inventory.backpack.remove(selected);
            }
        }
        game.player.pocket.changeHandler();
    }

    return <div className="selected-pocket-wrapper">
        <div className="selected-pocket-inner">
            {selected.name}
            {act !== null && <div onClick={() => {
                doAct(act);
                select(null, null);
            }}>{mapActToTitle(act)}</div>}
            <div onClick={() => select(null, null)}>Close</div>
        </div>
    </div>
}

function mapActToTitle (act: PocketSelectedAct) {
    if (act === PocketSelectedAct.remove) {
        return 'Remove';
    }
    if (act === PocketSelectedAct.use) {
        return 'Use';
    }
}