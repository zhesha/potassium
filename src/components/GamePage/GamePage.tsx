import React, { useState } from "react";
import { Field } from "./Field/Field";
import { Controls } from "./Controls/Controls";
import { Pages } from "../../App";
import { Info } from "./Info/Info";
import { Modal } from "./Modal/Modal";
import { game } from "../../Game/Game";
import { LootItem } from "../../Game/Loot";
import { LootWindow } from "./LootWindow/LootWindow";
import "./GamePage.scss";

interface GameProps {
    setPage (page: Pages): void
}

export function GamePage ({setPage}: GameProps) {
    const [loot, setLoot] = useState<Array<LootItem> | undefined>(game.getLootMessage());
    const [gameOverMessage, setGameOverMessage] = useState<string | null>(null);

    game.onShowLoot(function () {
        setLoot(game.getLootMessage());
    });

    game.onGameOver(function () {
        setGameOverMessage('Game Over');
    });
    
    return <div className="game">
        <div
            className="action-button"
            onMouseDown={() => game.runPressed()}
            onMouseUp={() => game.runReleased()}
            onMouseLeave={() => game.runReleased()}>
                Run
        </div>
        <Field />
        {/* <Controls
            toInventory={() => setPage(Pages.inventory)}
            toSkill={() => setPage(Pages.skill)}
            toCharacter={() => setPage(Pages.character)}
        /> */}
        <Info/>
        {loot && <LootWindow close={() => {
            game.lootMessage = undefined
            setLoot(undefined);
        }}>
            {loot.map(item => 
                <div onClick={() => game.acceptLoot(item)}>{item.name}</div>
            )}
        </LootWindow>}
        {gameOverMessage && <Modal
            close={() => {
                setGameOverMessage(null);
                game.restart();
            }}
        >{gameOverMessage}</Modal>}
    </div>
}