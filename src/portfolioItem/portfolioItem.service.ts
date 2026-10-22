import { Injectable } from '@nestjs/common'
import type { PortfolioItem } from 'src/types/portfolioItem'

import portfolioItemsData from 'src/data/portfolioItems'

@Injectable()
export class PortfolioItemService {
  private readonly portfolioItems: PortfolioItem[] =
    portfolioItemsData as PortfolioItem[]

  getAllPortfolioItems(): PortfolioItem[] {
    return this.portfolioItems
  }
}
