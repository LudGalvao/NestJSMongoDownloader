import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Document } from 'mongoose';


@Schema()
export class Arquivo extends Document {
@Prop({ required: true })
  nome_arquivo: string;

  @Prop({ required: true })
  caminho_arquivo: string;

  @Prop({ required: true })
  tamanho: number;

  @Prop({ required: true })
  tipo: string;

  @Prop({ default: Date.now })
  data_upload: Date;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  uploader_id: Types.ObjectId;

}

export const ArquivoSchema = SchemaFactory.createForClass(Arquivo);