import React, { useState } from "react";
import './Pocket.scss'
import { InventoryItem } from "../../Game/Inventory";
import { CurrentPocket } from "./CurrentPocket/CurrentPocket";
import { BackpackForPocket } from "./BackpackForPocket/BackpackForPocket";
import { SelectedPocket } from "./SelectedPocket/SelectedPocket";

export function PocketPage () {
    const [selected, setSelected] = useState<InventoryItem | null>(null)
    // const [selectedAct, setSelectedAct] = useState<SelectedAct | null>(null)

    function select (selectedItem: InventoryItem) {
        setSelected(selectedItem);
    }

    return <div className="pocket">
        <CurrentPocket />
        <BackpackForPocket />
        {selected && <SelectedPocket />}
    </div>
}