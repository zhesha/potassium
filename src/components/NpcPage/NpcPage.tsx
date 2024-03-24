import React, { useEffect } from "react";
import { Pages } from "../../App";
import { CloseButton } from "../common/CloseButton/CloseButton";
import { game } from "../../Game/Game";
import './NpcPage.scss';
import { SellNpc } from "./NpcViews/SellNpc/SellNpc";
import { NpcType } from "../../Game/Npc";
import { BuyEquipmentNpc } from "./NpcViews/BuyEquipmentNpc/BuyEquipmentNpc";
import { BuyConsumablesNpc } from "./NpcViews/BuyConsumablesNpc/BuyConsumablesNpc";
import { BaseUpgradeNpc } from "./NpcViews/BaseUpgradeNpc/BaseUpgradeNpc";
import { CraftPotionNpc } from "./NpcViews/CraftPotionNpc/CraftPotionNpc";

interface InventoryPageProps {
    setPage (page: Pages): void
}

export function NpcPage ({ setPage }: InventoryPageProps) {
    useEffect(() => {
        if(!game.npc) {
            setPage(Pages.game);
        }
    }, [setPage]);

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
    } else if (type === NpcType.buyEquipment) {
        return <BuyEquipmentNpc />
    } else if (type === NpcType.buyConsumables) {
        return <BuyConsumablesNpc />
    } else if (type === NpcType.BaseUpgradeNpc) {
        return <BaseUpgradeNpc />
    } else if (type === NpcType.CraftPotionNpc) {
        return <CraftPotionNpc />
    }
    return null;
}