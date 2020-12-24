import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'src/databases/ormconfig.service';
import { ConfigModule, ConfigService } from 'src/modules/config';
import { UserModule } from 'src/modules/user/user.module';
import { AppController } from './app-controller';
import { AppService } from './app-service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
      inject: [ConfigService],
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
