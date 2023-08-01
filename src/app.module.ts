import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from '../ormconfig';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { UserController } from './module/user/user.controller';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [AdminModule,   
    TypeOrmModule.forRoot(ormconfig),
    ConfigModule.forRoot({
            envFilePath: ['.env'],
            expandVariables: true,
          }),UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
