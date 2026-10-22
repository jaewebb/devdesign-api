import { Injectable } from '@nestjs/common'
import type { Bio } from 'src/types/bio'

import bioData from 'src/data/bio'

@Injectable()
export class BioService {
  private readonly bio: Bio = bioData

  getAllBio(): Bio {
    return this.bio
  }
}
