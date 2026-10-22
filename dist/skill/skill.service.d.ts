import type { Skill, SkillType } from "../types/skill";
export declare class SkillService {
    private readonly skills;
    private readonly skillTypes;
    getAllSkills(): Skill[];
    getAllSkillTypes(): SkillType[];
}
