import React, { useState } from "react";
import { game } from "../../Game/Game";
import { CloseButton } from "../common/CloseButton/CloseButton";
import { Pages } from "../../App";
import './SkillPage.scss';
import { itemUseHandler } from "../../Game/Loot";
import { SkillItem, skillsValues, SkillType, skillUseHandler } from "../../Game/SkillsList";

interface SkillPageProps {
    setPage (page: Pages): void
}

export function SkillPage ({ setPage }: SkillPageProps) {
    const [pocketItems, setPocketItems] = useState(game.player.getConsumableItems());
    const [skills, setSkills] = useState(game.player.getSkills());

    game.player.onChangeInventory(() => {
        setPocketItems(game.player.getConsumableItems());
    });
    
    game.player.onSkillsChange(() => {
        setSkills(game.player.getSkills());
    });

    return <div className="skill">
        <CloseButton setPage={setPage} />
        <div className="pocket-items">
            <h1>Use pocket items:</h1>
            <div className="skill-list">
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
            <h1>Use skills:</h1>
            <div className="skill-list">
                {skills.map((skill, index) => <div
                    className="skillItem"
                    key={index}
                    onClick={() => {
                        setPage(Pages.game)
                        skillUseHandler(skill)
                    }}>{getSkillsNames(skill)}</div>
                )}
            </div>
        </div>
    </div>
}

function getSkillsNames(skill: SkillItem) {
    let value = '';
    if (skill.type === SkillType.heal) {
        value = `+${skillsValues.healAmount[skill.level - 1]} HP`
    } else if (skill.type === SkillType.fireball || skill.type === SkillType.iceBeam || skill.type === SkillType.waterCanon) {
        value = `${skillsValues.healAmount[skill.level - 1]} DMG`
    }
    return `${skill.name} lvl ${skill.level} (${value})`;
}