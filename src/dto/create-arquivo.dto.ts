import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateArquivoDto {
  
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  nome_arquivo: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  caminho_arquivo: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  tamanho: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  tipo: string;

  @IsOptional()
  @ApiProperty()
  @IsDate()
  data_upload?: Date;

  @IsOptional()
  @ApiProperty()
  uploader_id?: Types.ObjectId;
}
