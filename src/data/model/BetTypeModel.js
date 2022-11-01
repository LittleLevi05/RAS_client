export default class BetTypeModel {
    betTypeID = 0
    name = ""
    sportList = []
    oddList = []
    eventID = 0


    constructor(betTypeID, name, sportList, oddList, eventID) {
        this.betTypeID = betTypeID
        this.name = name
        this.sportList = sportList
        this.oddList = oddList
        this.eventID = eventID
    }
}