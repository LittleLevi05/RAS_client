import BetTypeModel from "./BetTypeModel"

export default class Event{
    eventID = 0
    date = null
    state = "open"
    betTypeList = []
    sportID = 0

    constructor(eventID,sportID,date,state,betTypeList){
        this.date = date
        this.sportID = sportID
        this.state = state
        this.eventID = eventID 
        this.betTypeList = betTypeList
    }

    static fromJson(json){
        var tiposDeApostas = []

        if(json["tipoDeApostas"]){
            json["tipoDeApostas"].forEach((tipoDeAposta) =>{
                tiposDeApostas.push(BetTypeModel.fromJson(tipoDeAposta))
            })
        }

        return new Event(
            this.eventID = json["eventoID"],
            this.sportID = json["sportID"],
            this.date = json["date"],
            this.state = json["state"],
            this.betTypeList = tiposDeApostas
        )
    }
}