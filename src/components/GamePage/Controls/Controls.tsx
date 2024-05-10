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
        <div className="button-wrapper" onClick={() => toSkill()}>
            <div className="skill" />
        </div>
        <div className="button-wrapper" onClick={() => toInventory()}>
            <div className="inventory" />
        </div>
        <div className="button-wrapper" onClick={() => toCharacter()}>
            <div className="character" />
        </div>
    </div>
}
