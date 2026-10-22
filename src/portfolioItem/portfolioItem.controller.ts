import { Controller, Get } from '@nestjs/common'
import { PortfolioItemService } from './portfolioItem.service'

import type { PortfolioItem } from 'src/types/portfolioItem'

@Controller('portfolioItems')
export class PortfolioItemController {
  constructor(private readonly portfolioItemService: PortfolioItemService) {}

  @Get('portfolioItem')
  getAllPortfolioItems(): PortfolioItem[] {
    return this.portfolioItemService.getAllPortfolioItems()
  }
}
