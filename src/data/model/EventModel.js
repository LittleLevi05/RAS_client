import BetTypeModel from "./BetTypeModel"

export default class Event{
    eventID = 0
    date = null
    state = "open"
    betTypeList = []
    sportID = 0
    equipa1 = ""
    equipa2 = ""

    constructor(eventID,date,state,equipa1,equipa2,betTypeList){
        this.date = date
        this.state = state
        this.eventID = eventID 
        this.betTypeList = betTypeList
        this.equipa1 = equipa1
        this.equipa2 = equipa2
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
            this.date = json["date"],
            this.state = json["state"],
            this.equipa1 = json["equipa1Nome"],
            this.equipa2 = json["equipa2Nome"],
            this.betTypeList = tiposDeApostas
        )
    }
}