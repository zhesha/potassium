import React, { useState } from 'react';
import './Field.scss';
import { config } from '../config';
import { game } from '../Game/Game';

export function Field() {
    const [enemyProgress, setEnemyProgress] = useState(0);
    const [enemyDmgReceive, setEnemyDmgReceive] = useState(0);
    game.onEnemyProgress((newProgress: number) => {
        setEnemyProgress(newProgress);
    });
    game.onEnemyDmgReceive((currentHp: number) => {
        setEnemyDmgReceive(currentHp);
    });

    const enemyPassLength = config.fieldWidth - config.playerWidth - config.playerMargin;
    const enemyStartPosition = config.fieldWidth - (enemyProgress * enemyPassLength);

    return <div className="field">
        <div className="player"></div>
        <div className="enemy" style={{marginLeft: enemyStartPosition}}>{enemyDmgReceive}</div>
    </div>
}
