export default class PlayerModel {
    id = -1
    nome = ""

    constructor(id,nome) {
        this.id = id 
        this.nome = nome
    }

    static fromJson(json){
        return new PlayerModel(
            this.id = json["id"],
            this.nome = json["nome"]
        )
    }
}