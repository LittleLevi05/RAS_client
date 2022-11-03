export default class BetModel{
    betID = 0
    eventID = 0
    oddSelected = ""
    buletinID = 0

    constructor(betID,eventID,oddSelected,buletinID){
        this.betID = betID
        this.eventID = eventID
        this.oddSelected = oddSelected
        this.buletinID = buletinID
    }
}