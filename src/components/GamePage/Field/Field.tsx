import React, { useState } from 'react';
import './Field.scss';
import { config } from '../../../config';
import { game } from '../../../Game/Game';

export function Field() {
    const [enemyProgress, setEnemyProgress] = useState(game.enemy?.movingProgress() || 0);
    const [npcProgress, setNpcProgress] = useState(game.npc?.movingProgress() || 0);
    const [bgPosition, setBgPosition] = useState(0);
    
    game.onEnemyProgress(() => {
        const newProgress = game.enemy?.movingProgress() || 0;
        setBgPosition(bgPosition + 0.2);
        setEnemyProgress(newProgress);
    });

    game.onNpcProgress(() => {
        const newProgress = game.npc?.movingProgress() || 0;
        setBgPosition(bgPosition + 0.2);
        setNpcProgress(newProgress);
    });

    const passLength = config.fieldWidth - config.playerWidth - config.playerMargin;
    const enemyStartPosition = config.fieldWidth - (enemyProgress * passLength);
    const npcStartPosition = config.fieldWidth - (npcProgress * passLength);

    return <div className="field" style={{backgroundPosition: -bgPosition}}>
        <div className="player">Hero</div>
        {game.enemy && <div className="enemy" style={{marginLeft: enemyStartPosition}}>{game.enemy?.name}</div>}
        {game.npc && <div className="npc" style={{marginLeft: npcStartPosition}}>{game.npc?.name}</div>}
    </div>
}
