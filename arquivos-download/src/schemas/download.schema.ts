import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Download extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Usuario' })
  usuario_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Arquivo' })
  arquivo_id: Types.ObjectId;

  @Prop({ default: Date.now })
  data_download: Date;
}

export const DownloadSchema = SchemaFactory.createForClass(Download);