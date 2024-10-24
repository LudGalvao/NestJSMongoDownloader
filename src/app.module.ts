import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ArquivoController } from './controllers/arquivo.controller';
import { ArquivoService } from './services/arquivo.service';
import { ArquivoModule } from './modules/arquivo.module';

@Module({
  imports: [ ConfigModule.forRoot(),
             MongooseModule.forRoot(process.env.MONGO_URI),
             ArquivoModule],
  controllers: [ArquivoController],
  providers: [ArquivoService],
})
export class AppModule {}
