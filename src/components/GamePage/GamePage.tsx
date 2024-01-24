import React, { useState } from "react";
import { Field } from "./Field/Field";
import { Controls } from "./Controls/Controls";
import { Pages } from "../../App";
import { Info } from "./Info/Info";
import { Modal } from "./Modal/Modal";
import { game } from "../../Game/Game";

interface GameProps {
    setPage (page: Pages): void
}

export function GamePage ({setPage}: GameProps) {
    const [lootMessage, setLootMessage] = useState<string | undefined>(game.getLootMessage());
    const [gameOverMessage, setGameOverMessage] = useState<string | null>(null);

    game.onShowLoot(function () {
        setLootMessage(game.getLootMessage());
    });

    game.onGameOver(function () {
        setGameOverMessage('Game Over');
    });
    
    return <div className="game">
        <Field />
        <Controls
            toInventory={() => setPage(Pages.inventory)}
            toSkill={() => setPage(Pages.skill)}
            toCharacter={() => setPage(Pages.character)}
            toPocket={() => setPage(Pages.pocket)}
        />
        <Info/>
        {lootMessage && <Modal close={() => {
            game.lootMessage = undefined
            setLootMessage(undefined);
        }} message={lootMessage}/>}
        {gameOverMessage && <Modal
            close={() => {
                setGameOverMessage(null);
                game.restart();
            }}
            message={gameOverMessage}
        />}
    </div>
}