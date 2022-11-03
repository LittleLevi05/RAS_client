export default class OddModel{
    oddID = 0
    nome = ""
    odd = 0

    constructor(nome,odd,oddID){
        this.oddID = oddID
        this.nome = nome
        this.odd = odd
    }

    static fromJson(json){
        return new OddModel(
            this.nome = json["nome"],
            this.odd = json["odd"],
            this.oddID = json["oddID"]
        )
    }
}