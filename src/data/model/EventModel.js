import BetTypeModel from "./BetTypeModel"
import PromotionModel from "./PromotionModel"

export default class Event{
    eventID = 0
    date = null
    state = "open"
    betTypeList = []
    sportID = 0
    promotion = new PromotionModel()

    constructor(eventID,sportID,date,state,betTypeList,promotion){
        this.date = date
        this.sportID = sportID
        this.state = state
        this.eventID = eventID 
        this.betTypeList = betTypeList
        this.promotion = promotion
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

        return new Event(
            this.eventID = json["eventoID"],
            this.sportID = json["sportID"],
            this.date = json["date"],
            this.state = json["state"],
            this.betTypeList = tiposDeApostas,
            this.promotion = promotion
        )
    }
}