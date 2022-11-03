export default class SportModel{
    idesporte = 0
    nome = ""
    tipo = ""

    constructor(idesporte,nome,tipo){
        this.idesporte = idesporte
        this.nome = nome
        this.tipo = tipo 
    }

    static fromJson(json){
        return new SportModel(
            this.idesporte = json['idesporte'],
            this.nome = json['nome'],
            this.tipo = json['tipo']
        )
    }
}