import { Controller, Get } from '@nestjs/common'
import { SkillService } from './skill.service'

import type { Skill, SkillType } from 'src/types/skill'

@Controller('skills')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Get('skill')
  getAllSkills(): Skill[] {
    return this.skillService.getAllSkills()
  }

  @Get('skilltype')
  getAllSkillTypes(): SkillType[] {
    return this.skillService.getAllSkillTypes()
  }
}
