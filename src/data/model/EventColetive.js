import EventModel from '@/data/model/EventModel'
import BetTypeModel from "./BetTypeModel"

export default class EventColetive extends EventModel{
    team1Name = ""
    team2Name = ""

    constructor(eventID,sportID,date,state,betTypeList,team1Name,team2Name){
        super(eventID,sportID,date,state,betTypeList)
        
        this.team1Name = team1Name
        this.team2Name = team2Name
    }

    static fromJson(json){
        var tiposDeApostas = []

        if(json["tipoDeApostas"]){
            json["tipoDeApostas"].forEach((tipoDeAposta) =>{
                tiposDeApostas.push(BetTypeModel.fromJson(tipoDeAposta))
            })
        }

        return new EventColetive(
            this.eventID = json["eventoID"],
            this.sportID = json["sportID"],
            this.date = json["date"],
            this.state = json["state"],
            this.betTypeList = tiposDeApostas,
            this.team1Name = json["equipa1Nome"],
            this.team2Name = json["equipa2Nome"],
        )
    }
}