export default class Event{
    eventID = 0
    date = null
    state = "open"
    betTypeList = []
    sportID = 0

    constructor(date,state,eventID, betTypeList, sportID){
        this.date = date
        this.state = state
        this.eventID = eventID 
        this.betTypeList = betTypeList
        this.sportID = sportID
    }
}