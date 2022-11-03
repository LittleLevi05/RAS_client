import OddModel from "./OddModel"

export default class BetTypeModel {
    betTypeID = 0
    nome = ""
    sportList = []
    oddList = []
    eventID = 0

    constructor(betTypeID, nome, sportList, oddList, eventID) {
        this.betTypeID = betTypeID
        this.nome = nome
        this.sportList = sportList
        this.oddList = oddList
        this.eventID = eventID
    }

    static fromJson(json){
        var listaDeOdds = []

        json["listaDeOdds"].forEach((odd) =>{
            listaDeOdds.push(OddModel.fromJson(odd))
        })
        return new BetTypeModel(
            this.betTypeID = json["betTypeID"],
            this.nome = json["nome"],
            this.sportList = json["sportList"],
            this.oddList = listaDeOdds,
            this.eventID = json["eventID"]
        )
    }
}