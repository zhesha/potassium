import React, { useState } from 'react';
import './Field.scss';
import { config } from '../../../config';
import { game } from '../../../Game/Game';

export function Field() {
    const [enemyProgress, setEnemyProgress] = useState(game.enemy?.movingProgress() || 0);
    const [enemyDmgReceive, setEnemyDmgReceive] = useState(game.enemy?.hp || 0);
    game.onEnemyProgress(() => {
        setEnemyProgress(game.enemy?.movingProgress() || 0);
    });
    game.onEnemyDmgReceive(() => {
        setEnemyDmgReceive(game.enemy?.hp || 0);
    });

    const enemyPassLength = config.fieldWidth - config.playerWidth - config.playerMargin;
    const enemyStartPosition = config.fieldWidth - (enemyProgress * enemyPassLength);

    return <div className="field">
        <div className="player"></div>
        <div className="enemy" style={{marginLeft: enemyStartPosition}}>{enemyDmgReceive}</div>
    </div>
}
