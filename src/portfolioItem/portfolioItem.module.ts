import { Module } from '@nestjs/common'
import { PortfolioItemController } from './portfolioItem.controller'
import { PortfolioItemService } from './portfolioItem.service'

@Module({
  controllers: [PortfolioItemController],
  providers: [PortfolioItemService],
})
export class PortfolioItemModule {}
