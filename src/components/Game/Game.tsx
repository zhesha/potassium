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

export function Game ({setPage}: GameProps) {
    const [lootMessage, setLootMessage] = useState<string | null>(null);

    game.onShowLoot(function (message: string) {
        setLootMessage(message);
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
        {lootMessage && <Modal close={() => setLootMessage(null)} message={lootMessage}/>}
    </div>
}