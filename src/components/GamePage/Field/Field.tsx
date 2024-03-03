import React, { useState } from 'react';
import './Field.scss';
import { config } from '../../../config';
import { game } from '../../../Game/Game';

export function Field() {
    const [enemyProgress, setEnemyProgress] = useState(game.enemy?.movingProgress() || 0);
    const [npcProgress, setNpcProgress] = useState(game.npc?.movingProgress() || 0);
    
    game.onEnemyProgress(() => {
        setEnemyProgress(game.enemy?.movingProgress() || 0);
    });

    game.onNpcProgress(() => {
        setNpcProgress(game.npc?.movingProgress() || 0);
    });

    const passLength = config.fieldWidth - config.playerWidth - config.playerMargin;
    const enemyStartPosition = config.fieldWidth - (enemyProgress * passLength);
    const npcStartPosition = config.fieldWidth - (npcProgress * passLength);

    return <div className="field">
        <div className="player">Hero</div>
        {game.enemy && <div className="enemy" style={{marginLeft: enemyStartPosition}}>{game.enemy?.name}</div>}
        {game.npc && <div className="npc" style={{marginLeft: npcStartPosition}}>{game.npc?.name}</div>}
    </div>
}
