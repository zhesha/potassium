import React, { useState } from "react";
import './SkillTree.scss';
import { ActiveSkill, skillTreeLayers, skillTreeList } from "../../Game/SkillsList";
import { game } from "../../Game/Game";

export function SkillTree () {
    const [activatedData, setActivatedData] = useState(game.player.skillsList.getActiveSkills());

    game.player.skillsList.onChange(() => {
        setActivatedData(game.player.skillsList.getActiveSkills());
    });

    return <div className="skill-tree">
        {skillTreeLayers.layers.map((layer, index) => <SkillLayer layer={layer} key={index} activatedData={activatedData}/>)}
    </div>
}

function SkillLayer ({layer, activatedData}: {layer: Array<number>, activatedData: Array<ActiveSkill>}) {
    return <div className="skill-layer">{layer.map(index => <SkillTreeItemComponent index={index} key={index} activatedData={activatedData} />)}</div>;
}

function SkillTreeItemComponent({index, activatedData}: {index: number, activatedData: Array<ActiveSkill>}) {
    const item = skillTreeList[index];
    const activated = activatedData.find(item => item.index === index);
    return <div
        className={"skill-tree-item" + (activated ? ' skill-tree-activated' : '') }
        onClick={() => game.player.skillsList.activateSkill(index)}
    >
        {item.name} ({activated?.level || '0'})
    </div>;
}