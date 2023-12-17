import { Skill } from "./Skill";

interface SkillsListSaveData {

}

export interface SkillsList {
    getList(): Array<Skill>;
    getSaveData (): SkillsListSaveData;
    applySaveData(data: SkillsListSaveData): void
}

export function createSkills(): SkillsList {
    return {
        getList() {
            // TODO
            return [];
        },
        getSaveData () {
            // TODO
            return {};
        },
        applySaveData(data: SkillsListSaveData) {
            // TODO
        }
    };
}