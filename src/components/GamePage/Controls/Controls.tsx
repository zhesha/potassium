import React from 'react';
import './Controls.scss'
import { game } from '../../../Game/Game';

interface ControlsProps {
    toInventory (): void
    toSkill (): void
    toCharacter (): void
}

export function Controls({toInventory, toSkill, toCharacter}: ControlsProps) {
    return <div className="controls">
        <div onMouseDown={() => game.runPressed()} onMouseUp={() => game.runReleased()} onMouseLeave={() => game.runReleased()}>Run</div>
        <div onClick={() => toSkill()}>Skill</div>
        <div onClick={() => toInventory()}>Inventory</div>
        <div onClick={() => toCharacter()}>Character</div>
    </div>
}
