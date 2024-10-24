import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Arquivo } from "src/schemas/arquivo.schema";


@Injectable()
export class ArquivoService{

    constructor(@InjectModel(Arquivo.name) private arquivoModel: Model<Arquivo>){}

    async create(data: any): Promise<Arquivo> {
        const criarArquivo = new this.arquivoModel(data);
        return criarArquivo.save();
    }

    async findAll(): Promise<Arquivo[]>{
        return this.arquivoModel.find().exec();
    }

    async update(id: string, data: any): Promise<Arquivo> {
        return this.arquivoModel.findByIdAndUpdate(id, data, { new: true}).exec();
    }

    async delete(id: string): Promise<any> {
        return this.arquivoModel.findByIdAndDelete(id).exec();
    }
}