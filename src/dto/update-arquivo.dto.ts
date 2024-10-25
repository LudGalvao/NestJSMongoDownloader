
import { IsOptional, IsString, IsNumber, IsDate } from '@nestjs/class-validator';
import { Types } from 'mongoose';

export class UpdateArquivoDto {
  
  @IsOptional()
  @IsString()
  nome_arquivo?: string;

  @IsOptional()
  @IsString()
  caminho_arquivo?: string;

  @IsOptional()
  @IsNumber()
  tamanho?: number;

  @IsOptional()
  @IsString()
  tipo?: string;

  @IsOptional()
  @IsDate()
  data_upload?: Date;

  @IsOptional()
  uploader_id?: Types.ObjectId;
}
