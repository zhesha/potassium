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
        <div>Experience: {data.experience}</div>
        <div>Level: {data.level}</div>
        <div>Point: {data.point}</div>
        <SkillTree />
    </div>
}