import EventModel from '@/data/model/EventModel'
import BetTypeModel from "./BetTypeModel"
import PromotionModel from "./PromotionModel"

export default class EventColetive extends EventModel{
    team1Name = ""
    team2Name = ""

    constructor(eventID,sportID,date,state,betTypeList,team1Name,team2Name,promotion){
        super(eventID,sportID,date,state,betTypeList,promotion)
        
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

        var promotion = null
        if(json["promotion"]){
            promotion = PromotionModel.fromJson(json["promotion"])
        }

        return new EventColetive(
            this.eventID = json["eventoID"],
            this.sportID = json["sportID"],
            this.date = json["date"],
            this.state = json["state"],
            this.betTypeList = tiposDeApostas,
            this.team1Name = json["equipa1Nome"],
            this.team2Name = json["equipa2Nome"],
            this.promotion = promotion
        )
    }
}