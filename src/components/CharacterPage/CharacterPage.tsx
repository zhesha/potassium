import React, { useState } from "react";
import './Character.scss'
import { SkillTree } from "./SkillTree";
import { game } from "../../Game/Game";

export function CharacterPage () {
    const [data, setData] = useState(game.player.getCharData());

    game.player.onCharDataChange(() => {
        setData(game.player.getCharData());
    });

    return <div className="character">
        Experience: {data.experience}
        Level: {data.level}
        Point: {data.point}
        <SkillTree />
    </div>
}