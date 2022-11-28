import EventModel from '@/data/model/EventModel'
import BetTypeModel from "./BetTypeModel"

export default class EventDual extends EventModel{
    player1Name = ""
    player2Name = ""

    constructor(eventID,sportID,date,state,betTypeList,player1Name,player2Name){
        super(eventID,sportID,date,state,betTypeList)
        
        this.player1Name = player1Name
        this.player2Name = player2Name
    }

    static fromJson(json){
        var tiposDeApostas = []

        if(json["tipoDeApostas"]){
            json["tipoDeApostas"].forEach((tipoDeAposta) =>{
                tiposDeApostas.push(BetTypeModel.fromJson(tipoDeAposta))
            })
        }

        return new EventDual(
            this.eventID = json["eventoID"],
            this.sportID = json["sportID"],
            this.date = json["date"],
            this.state = json["state"],
            this.betTypeList = tiposDeApostas,
            this.player1Name = json["jogador1Nome"],
            this.player2Name = json["jogador2Nome"],
        )
    }
}