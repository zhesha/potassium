import { game } from "./Game";

export enum SkillType {
    maxHp,
    heal,
    fireball
}

export const skillTreeList: Array<SkillTreeItem> = [
    {
        name: 'More HP',
        type: SkillType.maxHp,
    },
    {
        name: 'Heal',
        type: SkillType.heal,
        manaCost: 20,
    },
    {
        name: 'Fireball',
        type: SkillType.fireball,
        manaCost: 20,
    }
];

export const skillTreeLayers: SkillTreeLayers = {
    layers: [
        [0, 1, 2]
    ]
};

export interface  SkillTreeLayers {
    layers: Array<Array<number>>
}

export interface SkillTreeItem {
    name: string
    type: SkillType
    manaCost?: number
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
    getList(): Array<SkillTreeItem>;
    getActiveSkills(): Array<ActiveSkill>;
    getSaveData (): SkillsListSaveData;
    applySaveData(data: SkillsListSaveData): void
    activateSkill(index: number): void
    getMaxHp(): number
    changeHandler: () => void,
    onChange(handler: () => void): void
}

export function createSkills(): SkillsList {
    return {
        list: [],
        getList() {
            return this.list.map(item => skillTreeList[item.index]).filter(item => item.type !== SkillType.maxHp);
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
                this.list.push({
                    index: index,
                    level: 1,
                });
                game.player.usedPoints += 1;
                handleActivation(index);
                game.player.charDataChangeHandler();
                this.changeHandler();
            }
        },
        getMaxHp () {
            const hpUp = this.list.find(item => skillTreeList[item.index].type === SkillType.maxHp);
            if (hpUp !== undefined) {
                return 100;
            }
            return 0;
        },
        changeHandler: () => {},
        onChange(handler: () => void) {
            this.changeHandler = handler;
        }
    };
}

export function skillUseHandler (item: SkillTreeItem) {
    if (!item.manaCost || game.player.mana < item.manaCost) {
        return;
    }
    if (item.type === SkillType.heal) {
        game.player.heal(10);
        game.player.mana -= item.manaCost;
    } else if (item.type === SkillType.fireball) {
        game.hitEnemy(5);
        game.player.mana -= item.manaCost;
    }
}

function handleActivation(index: number) {
    if (skillTreeList[index].type === SkillType.maxHp) {
        const relativeHp = game.player.hp / (game.player.getMaxHp() - 100);
        const newHp = Math.floor(relativeHp * game.player.getMaxHp());
        game.player.heal(newHp - game.player.hp);
    }
}
