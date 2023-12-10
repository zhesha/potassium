import { Skill } from "./Skill";

export interface SkillsList {
    getList(): Array<Skill>;
}

export function createSkills(): SkillsList {
    return {
        getList() {
            return [];
        }
    };
}