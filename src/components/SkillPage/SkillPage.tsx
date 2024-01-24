import React, { useState } from "react";
import { game } from "../../Game/Game";
import { CloseButton } from "../common/CloseButton/CloseButton";
import { Pages } from "../../App";
import './SkillPage.scss';
import { itemUseHandler } from "../../Game/Loot";
import { skillUseHandler } from "../../Game/SkillsList";

interface SkillPageProps {
    setPage (page: Pages): void
}

export function SkillPage ({ setPage }: SkillPageProps) {
    const [pocketItems, setPocketItems] = useState(game.player.getPocketItems());
    const [skills, setSkills] = useState(game.player.getSkills());

    game.player.pocket.onChange(() => {
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
                {pocketItems.map((skill, index) => <div
                    className="skillItem"
                    key={index}
                    onClick={() => {
                        setPage(Pages.game)
                        itemUseHandler(skill)
                    }}>{skill.name}</div>
                )}
            </div>
        </div>
        <div className="skills">
            <div>Skills:</div>
            <div>
                {skills.map((skill, index) => <div
                    className="skillItem"
                    key={index}
                    onClick={() => {
                        setPage(Pages.game)
                        skillUseHandler(skill)
                    }}>{skill.name}</div>
                )}
            </div>
        </div>
    </div>
}