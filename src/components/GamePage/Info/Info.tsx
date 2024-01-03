import React, { useState } from 'react';
import './Info.scss'
import { game } from '../../../Game/Game';

export interface InfoData {
    distance: number
    hp: number
    maxHp: number
    mana: number
    enemyKilled: number
}

export function Info() {
    const [info, setInfo] = useState<InfoData>(game.getInfo());

    game.onInfoChange(() => {
        setInfo(game.getInfo());
    });

    return <div className="info">
        <div>Distance: {info.distance}</div>
        <div>Enemy killed: {info.enemyKilled}</div>
        <div>HP: {info.hp}/{info.maxHp}</div>
        <div>Mana: {info.mana}</div>
    </div>
}
