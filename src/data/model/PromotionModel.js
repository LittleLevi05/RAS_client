export default class PromotionModel{
    minAmount = 0
    expDate = null 
    perElevation = 0
    eventIDPromotion = 0
    idpromotion = 0

    constructor(minAmount,expDate,perElevation,eventIDPromotion,idpromotion){        
        this.minAmount = minAmount 
        this.expDate = expDate
        this.perElevation = perElevation
        this.eventIDPromotion = eventIDPromotion
        this.idpromotion = idpromotion
    }

    static fromJson(json){
        return new PromotionModel(
            this.minAmount = json["minAmount"],
            this.expDate = json["expDate"],
            this.perElevation = json["perElevation"],
            this.eventIDPromotion = json["eventIDPromotion"],
            this.idpromotion = json["idpromotion"] 
        )
    }
}