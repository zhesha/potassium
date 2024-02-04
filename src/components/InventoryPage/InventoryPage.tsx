import React, { useState } from "react";
import './Inventory.scss'
import { Used } from "./Used/Used";
import { Backpack } from "./Backpack/Backpack";
import { Selected } from "./Selected/Selected";
import { Pages } from "../../App";
import { CloseButton } from "../common/CloseButton/CloseButton";
import { InventoryItem } from "../../Game/Loot";

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

interface InventoryPageProps {
    setPage (page: Pages): void
}

export function InventoryPage ({ setPage }: InventoryPageProps) {
    const [selected, setSelected] = useState<InventoryItem | null>(null)
    const [selectedAct, setSelectedAct] = useState<SelectedAct | null>(null)

    function select (selectedItem: InventoryItem, selectedAct: SelectedAct) {
        setSelected(selectedItem);
        setSelectedAct(selectedAct);
    }

    return <div className="inventory">
        <CloseButton setPage={setPage} />
        <Used select={select}/>
        <Backpack select={select}/>
        {selected && <Selected selected={selected} act={selectedAct} setSelected={setSelected}/>}
    </div>
}