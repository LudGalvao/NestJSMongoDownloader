import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Usuario extends Document{
    @Prop({ required: true })
    nome: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    senha: string;

    @Prop({ default: Date.now})
    data_criacao: Date;

}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);