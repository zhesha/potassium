import React, { useState } from 'react';
import './Field.scss';
import { config } from '../../../config';
import { game } from '../../../Game/Game';

enum AttackStage {
    idle,
    start,
    end
}

export function Field() {
    const [enemyProgress, setEnemyProgress] = useState(game.enemy?.movingProgress() || 0);
    const [npcProgress, setNpcProgress] = useState(game.npc?.movingProgress() || 0);
    const [bgPosition, setBgPosition] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [attackStage, setAttackStage] = useState(AttackStage.idle);
    const [isEnemyAttack, setEnemyAttack] = useState(false);
    
    game.onEnemyProgress(() => {
        const newProgress = game.enemy?.movingProgress() || 0;
        setBgPosition(bgPosition + 1);
        setEnemyProgress(newProgress);
        setIsRunning(true);
    });

    game.onNpcProgress(() => {
        const newProgress = game.npc?.movingProgress() || 0;
        setBgPosition(bgPosition + 1);
        setNpcProgress(newProgress);
        setIsRunning(true);
    });

    game.onPlayerStop(() => {
        setIsRunning(false);
    });

    game.onAttack(() => {
        setAttackStage(AttackStage.start);
        setTimeout(() => {
            setAttackStage(AttackStage.end);
            setTimeout(() => {
                setAttackStage(AttackStage.idle);
            }, 150);
        }, 100);
    });

    game.onEnemyAttack(() => {
        setEnemyAttack(true);
        setTimeout(() => {
            setEnemyAttack(false);
        }, 300);
    });

    let attackClass = '';
    if (attackStage === AttackStage.idle) {
        attackClass = 'idle';
    } else if (attackStage === AttackStage.start) {
        attackClass = 'attack-start';
    } else if (attackStage === AttackStage.end) {
        attackClass = 'attack-end';
    }

    const passLength = window.innerWidth - config.playerWidth - config.playerMargin;
    const enemyStartPosition = window.innerWidth - (enemyProgress * passLength);
    const npcStartPosition = config.fieldWidth - (npcProgress * passLength);

    return <div className="field" style={{backgroundPosition: -bgPosition}}>
        <div className={"player " + (attackClass) + (isRunning ? ' run' : '')} />
        {isEnemyAttack && <div className='enemy-attack' />}
        {game.enemy && <div className={"enemy "+game.enemy?.name+(isEnemyAttack ? ' attacking' : '')} style={{left: enemyStartPosition}} />}
        {game.npc && <div className="npc" style={{marginLeft: npcStartPosition}}>{game.npc?.name}</div>}
    </div>
}
