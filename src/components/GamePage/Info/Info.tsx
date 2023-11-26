import React, { useState } from 'react';
import './Info.scss'
import { game } from '../../../Game/Game';

export interface InfoData {
    distance: number
    hp: number
}

export function Info() {
    const [info, setInfo] = useState<InfoData>(game.getInfo());

    game.onInfoChange(() => {
        setInfo(game.getInfo());
    });

    return <div className="info">
        <div>Distance: {info.distance}</div>
        <div>HP: {info.hp}</div>
    </div>
}
