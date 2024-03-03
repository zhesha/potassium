import React, { useEffect, useState } from "react";
import { Pages } from "../../App";
import { CloseButton } from "../common/CloseButton/CloseButton";
import { game } from "../../Game/Game";
import './NpcPage.scss';

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
        NPC
    </div>
}