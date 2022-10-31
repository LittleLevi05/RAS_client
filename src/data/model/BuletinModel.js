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
}