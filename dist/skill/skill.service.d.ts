import type { Skill, SkillType } from 'src/types/skill';
export declare class SkillService {
    private readonly skills;
    private readonly skillTypes;
    getAllSkills(): Skill[];
    getAllSkillTypes(): SkillType[];
}
