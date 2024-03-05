import React, { useEffect, useState } from "react";
import { Pages } from "../../App";
import { CloseButton } from "../common/CloseButton/CloseButton";
import { game } from "../../Game/Game";
import './NpcPage.scss';
import { SellNpc } from "./NpcViews/SellNpc/SellNpc";
import { NpcType } from "../../Game/Npc";

interface InventoryPageProps {
    setPage (page: Pages): void
}

export function NpcPage ({ setPage }: InventoryPageProps) {
    useEffect(() => {
        if(!game.npc) {
            setPage(Pages.game);
        }
    }, []);

    function onClose (page: Pages) {
        setPage(page)
        game.spawnEnemy();
    }

    return <div className="npc-page">
        <CloseButton setPage={onClose} />
        {getNpcViewForType(game.npc?.type)}
    </div>
}

function getNpcViewForType (type?: NpcType) {
    if (type === NpcType.sell) {
        return <SellNpc />
    }
    return null;
}