import { join } from 'path'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BioModule } from './bio/bio.module'
import { PortfolioItemModule } from './portfolioItem/portfolioItem.module'
import { SkillModule } from './skill/skill.module'

@Module({
  imports: [
    BioModule,
    PortfolioItemModule,
    SkillModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/images/',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
