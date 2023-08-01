import * as dotenv from 'dotenv';
import  User  from 'src/database/entities/user.entity';
dotenv.config();
module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  timezone: 'utc',
  entities: [
    User
  ],
  cli: {
    entitiesDir: "src/database/entities"
  }
};





