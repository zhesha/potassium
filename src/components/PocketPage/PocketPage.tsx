import React, { useState } from "react";
import './Pocket.scss'
import { InventoryItem } from "../../Game/Inventory";
import { CurrentPocket } from "./CurrentPocket/CurrentPocket";
import { BackpackForPocket } from "./BackpackForPocket/BackpackForPocket";
import { SelectedPocket } from "./SelectedPocket/SelectedPocket";

export enum PocketSelectedAct {
    remove,
    use
}

export function PocketPage () {
    const [selected, setSelected] = useState<InventoryItem | null>(null)
    const [selectedAct, setSelectedAct] = useState<PocketSelectedAct | null>(null)

    function select (selectedItem: InventoryItem | null, act: PocketSelectedAct | null) {
        setSelected(selectedItem);
        setSelectedAct(act);
    }

    return <div className="pocket">
        <CurrentPocket select={select} />
        <BackpackForPocket select={select}/>
        {selected && <SelectedPocket select={select} selected={selected} act={selectedAct} />}
    </div>
}