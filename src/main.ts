import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const port = process.env.PORT || serverConfig.port;
  let logger = new Logger('Environment');
  
  const app = await NestFactory.create(AppModule);

  if( process.env.NODE_ENV === 'development'){
    app.enableCors();
  }

  await app.listen(port);

  logger.log(`Starting application in ${process.env.NODE_ENV || 'default'} mode.`);

  logger = new Logger('Bootstrap');
  logger.log(`Application listen on port ${port}`);
}
bootstrap();
