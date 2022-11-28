import BetModel from '@/data/model/BetModel'
import EventDual from '@/data/model/EventDual'

export default class BetDual extends BetModel{
    eventDual = new EventDual()

    constructor(betID,oddSelected,buletinID,eventDual){
        super(betID,oddSelected,buletinID)
        
        this.eventDual = eventDual
    }

    static fromJson(json){
        return new BetDual(
            this.betID = json["betID"],
            this.oddSelected = json["oddSelected"],
            this.buletinID = json["buletinID"],
            this.eventDual = EventDual.fromJson(json["evento"])
        )
    }
}