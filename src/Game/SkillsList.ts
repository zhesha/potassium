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
    },
    {
        name: 'Fireball',
        type: SkillType.fireball,
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
}

interface SkillsListSaveData {
    list: Array<number>
}

export interface SkillsList {
    list: Array<number>
    getList(): Array<SkillTreeItem>;
    getSaveData (): SkillsListSaveData;
    applySaveData(data: SkillsListSaveData): void
    activateSkill(index: number): void
    getMaxHp(): number
}

export function createSkills(): SkillsList {
    return {
        list: [],
        getList() {
            return this.list.map(index => skillTreeList[index]).filter(item => item.type !== SkillType.maxHp);
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
                this.list.push(index);
                game.player.usedPoints += 1;
            }
        },
        getMaxHp () {
            const hpUp = this.list.find(index => skillTreeList[index].type === SkillType.maxHp);
            if (hpUp) {
                return 100;
            }
            return 0;
        }
    };
}

export function skillUseHandler (item: SkillTreeItem) {
    if (item.type === SkillType.heal) {
        // TODO
        game.player.heal(0);
    } else if (item.type === SkillType.fireball) {
        // TODO
    }
}