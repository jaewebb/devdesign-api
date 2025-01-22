import { Injectable } from '@nestjs/common'
import type { Skill, SkillType } from 'src/types/skill'

import skillsData from 'src/data/skills'
import skillTypesData from 'src/data/skillTypes'

@Injectable()
export class SkillService {
  private readonly skills: Skill[] = skillsData as Skill[]

  private readonly skillTypes: SkillType[] = skillTypesData as SkillType[]

  getAllSkills(): Skill[] {
    return this.skills
  }

  getAllSkillTypes(): SkillType[] {
    return this.skillTypes
  }
}
