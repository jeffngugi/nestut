import { Property } from 'src/entities/property.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://neondb_owner:npg_x1bTlBkCGo5Y@ep-solitary-bar-aded00e5-pooler.c-2.us-east-1.aws.neon.tech/realEstate?sslmode=require&channel_binding=require',
  type: 'postgres',
  port: 3306,
  //   entities: [__dirname + '/**/*entities{.ts,.js'],
  entities: [Property],
  synchronize: true,
};
