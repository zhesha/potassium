import React, { useState } from "react";
import { game } from "../../Game/Game";
import { CloseButton } from "../common/CloseButton/CloseButton";
import { Pages } from "../../App";
import './SkillPage.scss';

interface SkillPageProps {
    setPage (page: Pages): void
}

export function SkillPage ({ setPage }: SkillPageProps) {
    const [pocketItems, setPocketItems] = useState(game.player.getPocketItems());
    const [skills, setSkills] = useState(game.player.getSkills());

    game.player.onPocketItemsChange(() => {
        setPocketItems(game.player.getPocketItems());
    });
    
    game.player.onSkillsChange(() => {
        setSkills(game.player.getSkills());
    });

    return <div className="skill">
        <CloseButton setPage={setPage} />
        <div className="pocket-items">
            <div>Pocket Items:</div>
            <div>
                {pocketItems.map(skill => <div className="skillItem">{skill.name}</div>)}
            </div>
        </div>
        <div className="skills">
            <div>Skills:</div>
            <div>
                {skills.map(skill => <div className="skillItem">{skill.name}</div>)}
            </div>
        </div>
    </div>
}