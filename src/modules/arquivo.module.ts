import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArquivoService } from '../services/arquivo.service';
import { Arquivo, ArquivoSchema } from '../schemas/arquivo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Arquivo.name, schema: ArquivoSchema }])],
  providers: [ArquivoService],
  exports: [ArquivoService, MongooseModule],
})
export class ArquivoModule {}
