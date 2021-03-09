import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SyscodeModule } from './service/syscode/syscode.module';

@Module({
  imports: [SyscodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
