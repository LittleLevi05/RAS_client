export default class TeamModel {
    id = -1
    nome = ""

    constructor(id,nome) {
        this.id = id 
        this.nome = nome
    }

    static fromJson(json){
        return new TeamModel(
            this.id = json["id"],
            this.nome = json["nome"]
        )
    }
}