export default class Transaction{
    idTransaction = 0
    type = ""
    date = null
    amount = 0
    userID = 0

    constructor(idTransaction,date,type,amount,userID){
        this.idTransaction = idTransaction
        this.date = date
        this.type = type
        this.userID = userID
        this.amount = amount 
    }

    static fromJson(json){
        const dateF = new Date(json['date'])
        return new Transaction(
            this.idTransaction = json['idTransaction'],
            this.type = json['type'],
            this.amount = json['amount'],
            this.userID = json['userID'],
            this.date = json['date']
        )
    }
}