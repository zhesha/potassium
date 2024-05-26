import { game } from "./Game";

export enum SkillType {
    heal,
    maxHp,
    maxMp,
    fireball,
    iceBeam,
    waterCanon,

    economy,
    fastLearner,
    regenHp,
    regenMp,
    curse,
    fireBless,
    iceBless,
    waterBless,
    skeleton,
    tameBeast,
    spirit,
    flare,
    enhancement,
    werewolf,
}

export const skillTreeList: Array<SkillTreeItem> = [
    {
        name: 'Heal',
        type: SkillType.heal,
    },
    {
        name: 'More HP',
        type: SkillType.maxHp,
    },
    {
        name: 'More MP',
        type: SkillType.maxMp,
    },
    {
        name: 'Fireball',
        type: SkillType.fireball,
    },
    {
        name: 'Ice Beam',
        type: SkillType.iceBeam,
    },
    {
        name: 'Water Canon',
        type: SkillType.waterCanon,
    },
    {
        name: 'Economy',
        type: SkillType.economy,
    },
    {
        name: 'Fast Learner',
        type: SkillType.fastLearner,
    },
    {
        name: 'Regen HP',
        type: SkillType.regenHp,
    },
    {
        name: 'Regen MP',
        type: SkillType.regenMp,
    },
    {
        name: 'Curse',
        type: SkillType.curse,
    },
    {
        name: 'Fire Bless',
        type: SkillType.fireBless,
    },
    {
        name: 'Ice Bless',
        type: SkillType.iceBless,
    },
    {
        name: 'Water Bless',
        type: SkillType.waterBless,
    },
    {
        name: 'Skeleton',
        type: SkillType.skeleton,
    },
    {
        name: 'Tame Beast',
        type: SkillType.tameBeast,
    },
    {
        name: 'Spirit',
        type: SkillType.spirit,
    },
    {
        name: 'Flare',
        type: SkillType.flare,
    },
    {
        name: 'Enhancement',
        type: SkillType.enhancement,
    },
    {
        name: 'Werewolf',
        type: SkillType.werewolf,
    }
];

export const skillTreeLayers: SkillTreeLayers = {
    layers: [
        [0],
        [1, 2],
        [3, 4, 5],
        [6, 7],
        [8, 9],
        [10],
        [11, 12, 13],
        [14, 15, 16],
        [17],
        [18, 19]
    ]
};

export interface  SkillTreeLayers {
    layers: Array<Array<number>>
}

export interface SkillTreeItem {
    name: string
    type: SkillType
}

export interface SkillItem extends SkillTreeItem {
    level: number
}

interface SkillsListSaveData {
    list: Array<ActiveSkill>
}

export interface ActiveSkill {
    index: number
    level: number
}

export interface SkillsList {
    list: Array<ActiveSkill>
    getList(): Array<SkillItem>;
    getActiveSkills(): Array<ActiveSkill>;
    getSaveData (): SkillsListSaveData;
    applySaveData(data: SkillsListSaveData): void
    activateSkill(index: number): void
    getMaxHp(): number
    changeHandler: () => void,
    onChange(handler: () => void): void
    getLootNumber(): number
    getSellDivider(): number
    getBuyMultiplier(): number
    findSkillByType(skillType: SkillType): ActiveSkill | undefined
    getHpRestore(): number
    getMpRestore(): number
}

export function createSkills(): SkillsList {
    return {
        list: [],
        getList() {
            return this.list.map(item => ({
                ...skillTreeList[item.index],
                level: item.level,
            })).filter(item => !isSkillPassive(item.type));
        },
        getActiveSkills() {
            return [...this.list];
        },
        getSaveData () {
            return {
                list: this.list,
            };
        },
        applySaveData(data: SkillsListSaveData) {
            this.list = data.list || [];
        },
        activateSkill(index: number) {
            if (game.player.getCurrentLevel() - game.player.usedPoints - 1 > 0) {
                const item = this.list.find(item => item.index === index);
                if (item) {
                    item.level += 1;
                } else {
                    this.list.push({
                        index: index,
                        level: 1,
                    });
                }
                game.player.usedPoints += 1;
                handleActivation(index);
                game.player.charDataChangeHandler();
                this.changeHandler();
            }
        },
        getMaxHp () {
            const hpUp = this.findSkillByType(SkillType.maxHp);
            if (hpUp !== undefined) {
                const amount = [100, 200, 400, 600, 900, 1400, 1900]
                return amount[hpUp.level - 1];
            }
            return 0;
        },
        getLootNumber () {
            const economy = this.findSkillByType(SkillType.economy);
            if (economy !== undefined) {
                if (economy.level >= 6) {
                    return 5;
                } else if (economy.level >= 4) {
                    return 4;
                } else if (economy.level >= 2) {
                    return 3;
                } else if (economy.level >= 1) {
                    return 2;
                }
            }
            return 1;
        },
        changeHandler: () => {},
        onChange(handler: () => void) {
            this.changeHandler = handler;
        },
        getSellDivider() {
            const economy = this.findSkillByType(SkillType.economy);
            if (economy !== undefined && economy.level >= 3) {
                return 1
            }
            return 2;
        },
        getBuyMultiplier() {
            const economy = this.findSkillByType(SkillType.economy);
            if (economy !== undefined && economy.level >= 5) {
                return 2
            }
            return 3;
        },
        findSkillByType(skillType: SkillType) {
            return this.list.find(item => skillTreeList[item.index].type === skillType);
        },
        getHpRestore() {
            const skill = this.findSkillByType(SkillType.regenHp);
            if (skill) {
                const times = [1, 2, 4, 7, 10, 15, 20];
                return times[skill.level - 1];
            }
            return 0;
        },
        getMpRestore() {
            const skill = this.findSkillByType(SkillType.regenMp)
            if (skill) {
                const times = [1, 2, 4, 7, 10, 15, 20];
                return times[skill.level - 1];
            }
            return 0;
        },
    };
}

export const skillsValues = {
    healAmount: [20, 50, 100, 150, 200, 300, 500],
    dmgAmount: [5, 20, 75, 150, 300, 500, 750],
}

export function skillUseHandler (item: SkillItem) {
    const manaCost = getMana(item);
    if (!manaCost || game.player.mana < manaCost) {
        return;
    }
    if (item.type === SkillType.heal) {
        game.player.heal(skillsValues.healAmount[item.level - 1]);
        game.player.mana -= manaCost;
    } else if (item.type === SkillType.fireball) {
        game.hitEnemy(skillsValues.dmgAmount[item.level - 1]);
        game.player.mana -= manaCost;
    } else if (item.type === SkillType.iceBeam) {
        game.hitEnemy(skillsValues.dmgAmount[item.level - 1]);
        game.player.mana -= manaCost;
    } else if (item.type === SkillType.waterCanon) {
        game.hitEnemy(skillsValues.dmgAmount[item.level - 1]);
        game.player.mana -= manaCost;
    }
}

function handleActivation(index: number) {
    // if (skillTreeList[index].type === SkillType.maxHp) {
    //     const relativeHp = game.player.hp / (game.player.getMaxHp() - 100);
    //     const newHp = Math.floor(relativeHp * game.player.getMaxHp());
    //     game.player.heal(newHp - game.player.hp);
    // }
}

function getMana (item: SkillItem) {
    const costs = {
        heal: [20, 40, 50, 70, 100, 150, 200],
        fireball: [20, 40, 50, 70, 100, 150, 200],
        iceBeam: [20, 40, 50, 70, 100, 150, 200],
        waterCanon: [20, 40, 50, 70, 100, 150, 200],
        curse: [10, 20, 30, 40, 50, 75, 100],
        fireBless: [20, 40, 60, 80, 100, 150, 200],
        iceBless: [20, 40, 60, 80, 100, 150, 200],
        waterBless: [20, 40, 60, 80, 100, 150, 200],
        skeleton: [50, 75, 100, 150, 200, 250, 300],
        tameBeast: [50, 75, 100, 150, 200, 250, 300],
        spirit: [50, 75, 100, 150, 200, 250, 300],
        flare: [50, 75, 100, 150, 200, 250, 300],
        werewolf: [150, 200, 250, 300, 400, 500, 600],
    };
    if (item.type === SkillType.heal) {
        return costs.heal[item.level - 1];
    } else if (item.type === SkillType.fireball) {
        return costs.fireball[item.level - 1];
    } else if (item.type === SkillType.iceBeam) {
        return costs.iceBeam[item.level - 1];
    } else if (item.type === SkillType.waterCanon) {
        return costs.waterCanon[item.level - 1];
    } else if (item.type === SkillType.curse) {
        return costs.curse[item.level - 1];
    } else if (item.type === SkillType.fireBless) {
        return costs.fireBless[item.level - 1];
    } else if (item.type === SkillType.iceBless) {
        return costs.iceBless[item.level - 1];
    } else if (item.type === SkillType.waterBless) {
        return costs.waterBless[item.level - 1];
    } else if (item.type === SkillType.skeleton) {
        return costs.skeleton[item.level - 1];
    } else if (item.type === SkillType.tameBeast) {
        return costs.tameBeast[item.level - 1];
    } else if (item.type === SkillType.spirit) {
        return costs.spirit[item.level - 1];
    } else if (item.type === SkillType.flare) {
        return costs.flare[item.level - 1];
    } else if (item.type === SkillType.werewolf) {
        return costs.werewolf[item.level - 1];
    }
}

function isSkillPassive (itemType: SkillType) {
    const passiveList = [
        SkillType.maxHp,
        SkillType.maxMp,
        SkillType.economy,
        SkillType.fastLearner,
        SkillType.regenHp,
        SkillType.regenMp,
        SkillType.enhancement,
    ];

    return passiveList.includes(itemType);
}