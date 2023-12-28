import React, { useState } from "react";
import './SkillTree.scss';
import { skillTreeLayers, skillTreeList } from "../../Game/SkillsList";
import { game } from "../../Game/Game";

export function SkillTree () {
    const [activatedIndexes, setActivatedIndexes] = useState(game.player.skillsList.getIndexes());

    game.player.skillsList.onChange(() => {
        setActivatedIndexes(game.player.skillsList.getIndexes());
    });

    return <div className="skill-tree">
        {skillTreeLayers.layers.map((layer, index) => <SkillLayer layer={layer} key={index} activatedIndexes={activatedIndexes}/>)}
    </div>
}

function SkillLayer ({layer, activatedIndexes}: {layer: Array<number>, activatedIndexes: Array<number>}) {
    return <div className="skill-layer">{layer.map(index => <SkillTreeItemComponent index={index} key={index} activatedIndexes={activatedIndexes} />)}</div>;
}

function SkillTreeItemComponent({index, activatedIndexes}: {index: number, activatedIndexes: Array<number>}) {
    const item = skillTreeList[index];
    const activated = activatedIndexes.includes(index);
    return <div
        className={"skill-tree-item" + (activated ? ' skill-tree-activated' : '') }
        onClick={() => game.player.skillsList.activateSkill(index)}
    >
        {item.name}
    </div>;
}