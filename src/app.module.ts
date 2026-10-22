import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PortfolioItemModule } from './portfolioItem/portfolioItem.module'
import { SkillModule } from './skill/skill.module'

@Module({
  imports: [PortfolioItemModule, SkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
