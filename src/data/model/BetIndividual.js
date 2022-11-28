import BetModel from '@/data/model/BetModel'
import EventIndividual from '@/data/model/EventIndividual'

export default class BetIndividual extends BetModel{
    eventIndividual = new EventIndividual()

    constructor(betID,oddSelected,buletinID,eventIndividual){
        super(betID,oddSelected,buletinID)
        
        this.eventIndividual = eventIndividual
    }

    static fromJson(json){
        return new BetColetive(
            this.betID = json["betID"],
            this.oddSelected = json["oddSelected"],
            this.buletinID = json["buletinID"],
            this.eventIndividual = EventIndividual.fromJson(json["evento"])
        )
    }
}