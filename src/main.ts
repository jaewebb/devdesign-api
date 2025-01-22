import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

// const whitelist = [
//   process.env.REACT_DEV_URL,
//   process.env.REACT_PROD_URL,
//   process.env.VUE_DEV_URL,
//   process.env.VUE_PROD_URL,
// ]

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  // app.enableCors({
  //   methods: ['GET'],
  //   origin: whitelist,
  // })
  await app.listen(process.env.PORT ?? 3001)
}
bootstrap()
