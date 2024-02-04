import React, { useState } from "react";
import './Pocket.scss'
import { CurrentPocket } from "./CurrentPocket/CurrentPocket";
import { BackpackForPocket } from "./BackpackForPocket/BackpackForPocket";
import { SelectedPocket } from "./SelectedPocket/SelectedPocket";
import { CloseButton } from "../common/CloseButton/CloseButton";
import { Pages } from "../../App";
import { PocketLoot } from "../../Game/Pocket";

export enum PocketSelectedAct {
    remove,
    use
}

interface PocketPageProps {
    setPage (page: Pages): void
}

export function PocketPage ({ setPage }: PocketPageProps) {
    const [selected, setSelected] = useState<PocketLoot | null>(null)
    const [selectedAct, setSelectedAct] = useState<PocketSelectedAct | null>(null)

    function select (selectedItem: PocketLoot | null, act: PocketSelectedAct | null) {
        setSelected(selectedItem);
        setSelectedAct(act);
    }

    return <div className="pocket">
        <CloseButton setPage={setPage} />
        <CurrentPocket select={select} />
        <BackpackForPocket select={select}/>
        {selected && <SelectedPocket select={select} selected={selected} act={selectedAct} />}
    </div>
}