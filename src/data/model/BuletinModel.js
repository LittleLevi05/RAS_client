export default class BuletinModel{
    buletinID = 0
    amount = 0
    gain = 0
    type = ""
    userID = 0

    constructor(buletinID,amount,gain,type,userID){
        this.buletinID = buletinID
        this.amount = amount
        this.gain = gain 
        this.type = type 
        this.userID = userID
    }

    static fromJson(json){
        return new BuletinModel(
            this.buletinID = json["idbuletin"],
            this.amount = json["amount"], 
            this.gain = json["gain"], 
            this.type = json["type"],
            this.userID = -1
        )
    }
}