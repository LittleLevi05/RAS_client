export default class BetModel{
    betID = 0
    oddSelected = ""
    buletinID = 0
    gain = 0
    amount = 0

    constructor(betID,oddSelected,buletinID){
        this.betID = betID
        this.oddSelected = oddSelected
        this.buletinID = buletinID
    }

    static fromJson(json){
        return new BetModel(
            this.betID = json["betID"],
            this.oddSelected = json["oddSelected"],
            this.buletinID = json["buletinID"]
        )
    }
}