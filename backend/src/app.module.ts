// src/app.module.ts
import { Module } from '@nestjs/common';
import { UploadModule } from './UploadModule';
import {AppService} from './app.service';
import { AppController } from './app.controller';


@Module({
  imports: [UploadModule],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
