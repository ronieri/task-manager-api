import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConf = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConf.type,
  host: process.env.RDS_HOSTNAME || dbConf.host,
  port: process.env.RDS_PORT || dbConf.port,
  username: process.env.RDS_USERNAME || dbConf.username,
  password: process.env.RDS_PASSWORD || dbConf.password,
  database: process.env.RDS_DB_NAME || dbConf.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: process.env.TYPEORM_SYNC || dbConf.synchronize, // Only for dev
};
