import React, { useState } from 'react';
import './Controls.scss'
import { game } from '../../../Game/Game';

interface ControlsProps {
    toInventory (): void
    toSkill (): void
    toCharacter (): void
}

export function Controls({toInventory, toSkill, toCharacter}: ControlsProps) {
    const [isFirstItem, setIsFirstItem] = useState(false);
    const [isLevelUp, setIsLevelUp] = useState(false);

    game.player.onLevelUp(() => {
        setIsLevelUp(true);
    });

    game.player.inventory.backpack.onFirstItem(() => {
        setIsFirstItem(true);
    });

    return <div className="controls">
        <div className="button-wrapper" onClick={() => toSkill()}>
            <div className="skill" />
        </div>
        <div
            className="button-wrapper"
            onClick={() => {
                toInventory();
                setIsFirstItem(false);
            }}
        >
            <div className="inventory" />
            {isFirstItem && <div className="exclamation" />}
        </div>
        <div
            className="button-wrapper"
            onClick={() => {
                toCharacter();
                setIsLevelUp(false);
            }}
        >
            <div className="character" />
            {isLevelUp && <div className="exclamation" />}
        </div>
    </div>
}
