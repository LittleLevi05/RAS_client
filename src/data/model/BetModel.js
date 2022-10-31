export default class BetModel{
    betID = 0
    eventID = 0
    oddSelected = ""
    buletinID = 0
    sport = ""

    constructor(betID,eventID,oddSelected,buletinID,sport){
        this.betID = betID
        this.eventID = eventID
        this.oddSelected = oddSelected
        this.buletinID = buletinID
        this.sport = sport
    }
}