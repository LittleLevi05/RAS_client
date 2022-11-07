import EventModel from '@/data/model/EventModel'

export default class BetModel{
    betID = 0
    event = new EventModel()
    oddSelected = ""
    buletinID = 0

    constructor(betID,event,oddSelected,buletinID){
        this.betID = betID
        this.event = event
        this.oddSelected = oddSelected
        this.buletinID = buletinID
    }

    static fromJson(json){
        return new BetModel(
            this.betID = json["betID"],
            this.event = EventModel.fromJson(json["evento"]),
            this.oddSelected = json["oddSelected"],
            this.buletinID = json["buletinID"]
        )
    }
}