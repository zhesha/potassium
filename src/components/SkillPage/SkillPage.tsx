import React from "react";
import { game } from "../../Game/Game";
import { CloseButton } from "../common/CloseButton/CloseButton";
import { Pages } from "../../App";

interface SkillPageProps {
    setPage (page: Pages): void
}

export function SkillPage ({ setPage }: SkillPageProps) {
    const skills = game.player.getSkills();
    return <div className="skill">
        <CloseButton setPage={setPage} />
        {skills.map(skill => <div>{skill.name}</div>)}
    </div>
}