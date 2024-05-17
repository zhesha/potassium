import React, { useState } from 'react';
import './Field.scss';
import { game } from '../../../Game/Game';

enum AttackStage {
    idle,
    start,
    end
}

interface AttackNumber {
    uuid: string,
    result: string,
}

export function Field() {
    const [enemyProgress, setEnemyProgress] = useState(game.enemy?.movingProgress() || 0);
    const [npcProgress, setNpcProgress] = useState(game.npc?.movingProgress() || 0);
    const [bgPosition, setBgPosition] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [attackStage, setAttackStage] = useState(AttackStage.idle);
    const [isEnemyAttack, setEnemyAttack] = useState(false);
    const [playerAttackNumbers, setPlayerAttackNumbers] = useState<Array<AttackNumber>>([]);
    const [enemyAttackNumbers, setEnemyAttackNumbers] = useState<Array<AttackNumber>>([]);
    
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
        setPlayerAttackNumbers([
            ...playerAttackNumbers,
            {
                uuid: (new Date()).getTime().toString(),
                result: game.lastPlayerAttackResult,
            }
        ]);

        setTimeout(() => {
            setPlayerAttackNumbers(old => {
                const newPlayerAttackNumbers = [...old];
                newPlayerAttackNumbers.shift();
                return newPlayerAttackNumbers;
            });
        }, 2000);

        setTimeout(() => {
            setAttackStage(AttackStage.end);
            setTimeout(() => {
                setAttackStage(AttackStage.idle);
            }, 150);
        }, 100);
    });

    game.onEnemyAttack(() => {
        setEnemyAttack(true);

        setEnemyAttackNumbers([
            ...enemyAttackNumbers,
            {
                uuid: (new Date()).getTime().toString(),
                result: game.lastEnemyAttackResult,
            }
        ]);

        setTimeout(() => {
            setEnemyAttackNumbers(old => {
                const newEnemyAttackNumbers = [...old];
                newEnemyAttackNumbers.shift();
                return newEnemyAttackNumbers;
            });
        }, 2000);

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

    const playerWidth = window.innerHeight * 0.22;
    const playerMargin = window.innerHeight * 0.39;
    const passLength = window.innerWidth - playerWidth - playerMargin;
    const enemyStartPosition = window.innerWidth - (enemyProgress * passLength);
    const npcStartPosition = window.innerWidth - (npcProgress * passLength);

    return <div className="field" style={{backgroundPosition: -bgPosition}}>
        <div className={"player " + (attackClass) + (isRunning ? ' run' : '')} />
        {isEnemyAttack && <div className='enemy-attack' />}
        {game.enemy && <div className={"enemy "+game.enemy?.name+(isEnemyAttack ? ' attacking' : '')} style={{left: enemyStartPosition}} />}
        <div className='player-attack-numbers'>
            {
                playerAttackNumbers.map(
                    i => (
                        <div
                            className={'player-attack-number-item '+i.result}
                            key={i.uuid}
                        >{i.result}</div>
                    )
                )
            }
        </div>
        <div className='enemy-attack-numbers'>
            {
                enemyAttackNumbers.map(
                    i => (
                        <div
                            className={'enemy-attack-number-item '+i.result}
                            key={i.uuid}
                        >{i.result}</div>
                    )
                )
            }
        </div>
        {game.npc && <div className="npc" style={{marginLeft: npcStartPosition}} />}
    </div>
}
