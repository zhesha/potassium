import React, { useState } from "react";
import './Inventory.scss'
import { Used } from "./Used/Used";
import { Backpack } from "./Backpack/Backpack";
import { Selected } from "./Selected/Selected";
import { InventoryItem } from "../../Game/Inventory";

export enum SelectedAct {
    removeWeapon,
    removeGloves,
    removeBoots,
    removeShield,
    removeArmor,
    removeHelmet,
    useWeapon,
    useGloves,
    useBoots,
    useShield,
    useArmor,
    useHelmet,
}

export function Inventory () {
    const [selected, setSelected] = useState<InventoryItem | null>(null)
    const [selectedAct, setSelectedAct] = useState<SelectedAct | null>(null)

    function select (selectedItem: InventoryItem, selectedAct: SelectedAct) {
        setSelected(selectedItem);
        setSelectedAct(selectedAct);
    }

    return <div className="inventory">
        <Used select={select}/>
        <Backpack select={select}/>
        {selected && <Selected selected={selected} act={selectedAct} setSelected={setSelected}/>}
    </div>
}