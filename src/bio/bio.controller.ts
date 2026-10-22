import { Controller, Get } from '@nestjs/common'
import { BioService } from './bio.service'

import type { Bio } from 'src/types/bio'

@Controller('bio')
export class BioController {
  constructor(private readonly bioService: BioService) {}

  @Get('bio')
  getAllBio(): Bio {
    return this.bioService.getAllBio()
  }
}
