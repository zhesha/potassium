import React from 'react';
import './Controls.scss'
import { game } from '../../Game/Game';

interface ControlsProps {
    toInventory (): void
}

export function Controls({toInventory}: ControlsProps) {
    return <div className="controls">
        <div onMouseDown={() => game.runPressed()} onMouseUp={() => game.runReleased()} onMouseLeave={() => game.runReleased()}>Run</div>
        <div onClick={() => toInventory()}>Inventory</div>
    </div>
}
