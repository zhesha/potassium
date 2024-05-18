import React, { useState } from "react";
import { Field } from "./Field/Field";
import { Controls } from "./Controls/Controls";
import { Pages } from "../../App";
import { Info } from "./Info/Info";
import { Modal } from "./Modal/Modal";
import { game, GameState } from "../../Game/Game";
import { LootItem } from "../../Game/Loot";
import { LootWindow } from "./LootWindow/LootWindow";
import "./GamePage.scss";

interface GameProps {
    setPage (page: Pages): void
}

export function GamePage ({setPage}: GameProps) {
    const [loot, setLoot] = useState<Array<LootItem> | undefined>(game.getLootMessage());
    const [gameOverMessage, setGameOverMessage] = useState<string | null>(null);
    const [isRunning, setIsRunning] = useState(game.gameState !== GameState.fighting);

    game.onShowLoot(function () {
        setLoot(game.getLootMessage());
    });

    game.onGameOver(function () {
        setGameOverMessage('Game Over');
    });

    game.onStateChange(() => {
        setIsRunning(game.gameState !== GameState.fighting);
    });
    
    return <div className="game">
        <div
            className="action-button"
            onMouseDown={() => game.runPressed()}
            onTouchStart={() => game.runPressed()}
            onMouseUp={() => game.runReleased()}
            onTouchEnd={() => game.runReleased()}
            onMouseLeave={() => game.runReleased()}
            onTouchCancel={() => game.runReleased()}
        >
                {isRunning ? 'Run' : 'Hit'}
        </div>
        <Field />
        <Controls
            toInventory={() => setPage(Pages.inventory)}
            toSkill={() => setPage(Pages.skill)}
            toCharacter={() => setPage(Pages.character)}
        />
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