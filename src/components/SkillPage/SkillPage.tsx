import React from "react";
import { game } from "../../Game/Game";

export function SkillPage () {
    const skills = game.player.getSkills();
    return <div className="skill">
        {skills.map(skill => <div>{skill.name}</div>)}
    </div>
}