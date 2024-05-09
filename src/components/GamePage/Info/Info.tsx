import React, { useState } from 'react';
import './Info.scss'
import { game } from '../../../Game/Game';

export interface InfoData {
    distance: number
    hp: number
    maxHp: number
    mana: number
    maxMana: number
    money: number
    enemyKilled: number
}

export function Info() {
    const [info, setInfo] = useState<InfoData>(game.getInfo());

    game.onInfoChange(() => {
        setInfo(game.getInfo());
    });

    return <div className="info">
        <div>
            <div className="hp-icon"/>
            <div className="info-text">{info.hp}/{info.maxHp}</div>
        </div>
        <div>
            <div className="mana-icon"/>
            <div className="info-text">{info.mana}/{info.maxMana}</div>
        </div>
        <div>
            <div className="money-icon"/>
            <div className="info-text">{info.money}</div>
        </div>
        <div>
            <div className="kill-icon"/>
            <div className="info-text">{info.enemyKilled}</div>
        </div>
    </div>
}
