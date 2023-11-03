import React from 'react';
import './Controls.scss'
import { game } from '../Game/Game';

export function Controls() {
    return <div className="controls">
        <div onMouseDown={() => game.runPressed()} onMouseUp={() => game.runReleased()} onMouseLeave={() => game.runReleased()}>Run</div>
    </div>
}
