import React, { useState } from "react";
import './Character.scss'
import { SkillTree } from "./SkillTree";
import { game } from "../../Game/Game";
import { CloseButton } from "../common/CloseButton/CloseButton";
import { Pages } from "../../App";

interface CharacterPageProps {
    setPage (page: Pages): void
}

export function CharacterPage ({ setPage }: CharacterPageProps) {
    const [data, setData] = useState(game.player.getCharData());

    game.player.onCharDataChange(() => {
        setData(game.player.getCharData());
    });

    return <div className="character">
        <CloseButton setPage={setPage} />
        <div className="character-info">
            <div>Experience: <b>{data.experience}</b></div>
            <div>Level: <b>{data.level}</b></div>
            <div>Free points: <b>{data.point}</b></div>
        </div>
        <SkillTree />
    </div>
}