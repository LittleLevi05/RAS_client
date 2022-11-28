import EventModel from '@/data/model/EventModel'
import BetTypeModel from "./BetTypeModel"

export default class EventIndividual extends EventModel{
    players = {}

    constructor(eventID,sportID,date,state,betTypeList,players){
        super(eventID,sportID,date,state,betTypeList)
        
        this.players = players
    }

    static fromJson(json){
        var tiposDeApostas = []

        if(json["tipoDeApostas"]){
            json["tipoDeApostas"].forEach((tipoDeAposta) =>{
                tiposDeApostas.push(BetTypeModel.fromJson(tipoDeAposta))
            })
        }

        return new EventIndividual(
            this.eventID = json["eventoID"],
            this.sportID = json["sportID"],
            this.date = json["date"],
            this.state = json["state"],
            this.betTypeList = tiposDeApostas,
            this.players = json["jogadores"],
        )
    }
}