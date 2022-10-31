export default class UserModel {
    username = ""
    email = ""
    password = ""
    dateBirthday = null
    nif = -1
    iban = ""
    balance = ""
    credential = ""

    constructor(username, nif, iban, email, password, balance, dateBirthday, credential) {
        this.email = email
        this.password = password
        this.dateBirthday = dateBirthday
        this.nif = nif
        this.username = username
        this.iban = iban
        this.balance = balance
        this.credential = credential
    }
}