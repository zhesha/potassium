import React from "react";
import './SkillTree.scss';
import { skillTreeLayers, skillTreeList } from "../../Game/SkillsList";
import { game } from "../../Game/Game";

export function SkillTree () {
    return <div className="skill-tree">
        {skillTreeLayers.layers.map((layer, index) => <SkillLayer layer={layer} key={index}/>)}
    </div>
}

function SkillLayer ({layer}: {layer: Array<number>}) {
    return <div className="skill-layer">{layer.map(index => <SkillTreeItemComponent index={index} key={index}/>)}</div>;
}

function SkillTreeItemComponent({index}: {index: number}) {
    const item = skillTreeList[index];
    const activated = game.player.skillsList.list.includes(index);
    return <div
        className={"skill-tree-item" + (activated ? ' skill-tree-activated' : '') }
        onClick={() => game.player.skillsList.activateSkill(index)}
    >
        {item.name}
    </div>;
}