import { Test, TestingModule } from '@nestjs/testing'
import { PortfolioItemController } from './portfolioItem.controller'
import { PortfolioItemService } from './portfolioItem.service'

describe('PortfolioItemController', () => {
  let controller: PortfolioItemController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortfolioItemController],
      providers: [PortfolioItemService],
    }).compile()

    controller = module.get<PortfolioItemController>(PortfolioItemController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
