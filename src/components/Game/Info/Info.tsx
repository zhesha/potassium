import React, { useState } from 'react';
import './Info.scss'
import { game } from '../../../Game/Game';

export function Info() {
    const [time, setTime] = useState(0);

    game.onTimeChange((newTime: number) => {
        setTime(newTime);
    });

    return <div className="info">
        Time: {time}
    </div>
}
