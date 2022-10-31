export default class Event{
    eventID = 0
    date = null
    state = "open"

    constructor(date,state,eventID){
        this.date = date,
        this.state = state,
        this.eventID = eventID 
    }
}