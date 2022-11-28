import BetModel from '@/data/model/BetModel'
import EventColetive from '@/data/model/EventColetive'

export default class BetColetive extends BetModel{
    eventColetive = new EventColetive()

    constructor(betID,oddSelected,buletinID,eventColetive){
        super(betID,oddSelected,buletinID)
        
        this.eventColetive = eventColetive
    }

    static fromJson(json){
        return new BetColetive(
            this.betID = json["betID"],
            this.oddSelected = json["oddSelected"],
            this.buletinID = json["buletinID"],
            this.eventDual = EventColetive.fromJson(json["evento"])
        )
    }
}