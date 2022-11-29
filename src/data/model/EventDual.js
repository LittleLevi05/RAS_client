import EventModel from '@/data/model/EventModel'
import BetTypeModel from "./BetTypeModel"
import PromotionModel from "./PromotionModel"

export default class EventDual extends EventModel{
    player1Name = ""
    player2Name = ""

    constructor(eventID,sportID,date,state,betTypeList,player1Name,player2Name,promotion){
        super(eventID,sportID,date,state,betTypeList,promotion)
        
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

        var promotion = null
        if(json["promotion"]){
            promotion = PromotionModel.fromJson(json["promotion"])
        }

        return new EventDual(
            this.eventID = json["eventoID"],
            this.sportID = json["sportID"],
            this.date = json["date"],
            this.state = json["state"],
            this.betTypeList = tiposDeApostas,
            this.player1Name = json["jogador1Nome"],
            this.player2Name = json["jogador2Nome"],
            this.promotion = promotion
        )
    }
}