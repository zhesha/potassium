import React from "react";
import './Selected.scss';
import { SelectedAct } from "../InventoryPage";
import { game } from "../../../Game/Game";
import { InventoryArmor, InventoryBoots, InventoryGloves, InventoryHelmet, InventoryItem, InventoryShield, InventoryWeapon } from "../../../Game/Loot";

interface SelectedProps {
    setSelected (item: InventoryItem | null): void
    selected: InventoryItem
    act: SelectedAct | null
}

export function Selected ({setSelected, act, selected}: SelectedProps) {
    function doAct(act: SelectedAct | null) {
        if (act === SelectedAct.removeWeapon) {
            if (game.player.inventory.weapon) {
                game.player.inventory.backpack.add(game.player.inventory.weapon);
                game.player.inventory.weapon = undefined;
            }
        } else if (act === SelectedAct.removeGloves) {
            if (game.player.inventory.gloves) {
                game.player.inventory.backpack.add(game.player.inventory.gloves);
                game.player.inventory.gloves = undefined;
            }
        } else if (act === SelectedAct.removeBoots) {
            if (game.player.inventory.boots) {
                game.player.inventory.backpack.add(game.player.inventory.boots);
                game.player.inventory.boots = undefined;
            }
        } else if (act === SelectedAct.removeShield) {
            if (game.player.inventory.shield) {
                game.player.inventory.backpack.add(game.player.inventory.shield);
                game.player.inventory.shield = undefined;
            }
        } else if (act === SelectedAct.removeArmor) {
            if (game.player.inventory.armor) {
                game.player.inventory.backpack.add(game.player.inventory.armor);
                game.player.inventory.armor = undefined;
            }
        } else if (act === SelectedAct.removeHelmet) {
            if (game.player.inventory.helmet) {
                game.player.inventory.backpack.add(game.player.inventory.helmet);
                game.player.inventory.helmet = undefined;
            }
        } else if (act === SelectedAct.useWeapon) {
            if (game.player.inventory.weapon) {
                game.player.inventory.backpack.add(game.player.inventory.weapon);
            }
            game.player.inventory.weapon = selected as InventoryWeapon;
            game.player.inventory.backpack.remove(selected);
        } else if (act === SelectedAct.useGloves) {
            if (game.player.inventory.gloves) {
                game.player.inventory.backpack.add(game.player.inventory.gloves);
            }
            game.player.inventory.gloves = selected as InventoryGloves;
            game.player.inventory.backpack.remove(selected);
        } else if (act === SelectedAct.useBoots) {
            if (game.player.inventory.boots) {
                game.player.inventory.backpack.add(game.player.inventory.boots);
            }
            game.player.inventory.boots = selected as InventoryBoots;
            game.player.inventory.backpack.remove(selected);
        } else if (act === SelectedAct.useShield) {
            if (game.player.inventory.shield) {
                game.player.inventory.backpack.add(game.player.inventory.shield);
            }
            game.player.inventory.shield = selected as InventoryShield;
            game.player.inventory.backpack.remove(selected);
        } else if (act === SelectedAct.useArmor) {
            if (game.player.inventory.armor) {
                game.player.inventory.backpack.add(game.player.inventory.armor);
            }
            game.player.inventory.armor = selected as InventoryArmor;
            game.player.inventory.backpack.remove(selected);
        } else if (act === SelectedAct.useHelmet) {
            if (game.player.inventory.helmet) {
                game.player.inventory.backpack.add(game.player.inventory.helmet);
            }
            game.player.inventory.helmet = selected as InventoryHelmet;
            game.player.inventory.backpack.remove(selected);
        }
        game.player.changeInventoryHandler();
    }

    return <div className="selected-wrapper">
        <div className="selected-inner">
            {selected.name}
            {act !== null && <div onClick={() => {
                doAct(act);
                setSelected(null);
            }}>{mapActToTitle(act)}</div>}
            <div onClick={() => setSelected(null)}>Close</div>
        </div>
    </div>
}

function mapActToTitle (act: SelectedAct) {
    if (
        act === SelectedAct.removeWeapon ||
        act === SelectedAct.removeGloves ||
        act === SelectedAct.removeBoots ||
        act === SelectedAct.removeShield ||
        act === SelectedAct.removeArmor ||
        act === SelectedAct.removeHelmet
    ) {
        return 'Remove';
    }
    if (
        act === SelectedAct.useWeapon ||
        act === SelectedAct.useGloves ||
        act === SelectedAct.useBoots ||
        act === SelectedAct.useShield ||
        act === SelectedAct.useArmor ||
        act === SelectedAct.useHelmet
    ) {
        return 'Use';
    }
}