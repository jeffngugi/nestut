import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';
import * as path from 'path';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://neondb_owner:npg_x1bTlBkCGo5Y@ep-solitary-bar-aded00e5-pooler.c-2.us-east-1.aws.neon.tech/realEstate?sslmode=require&channel_binding=require',
  type: 'postgres',
  port: 3306,
  entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
  // entities: [Property],
  synchronize: true,
};
