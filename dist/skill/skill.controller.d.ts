import { SkillService } from './skill.service';
import type { Skill, SkillType } from 'src/types/skill';
export declare class SkillController {
    private readonly skillService;
    constructor(skillService: SkillService);
    getAllSkills(): Skill[];
    getAllSkillTypes(): SkillType[];
}
