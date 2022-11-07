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
}