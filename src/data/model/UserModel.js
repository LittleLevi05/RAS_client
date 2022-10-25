export default class UserModel{
    email = ""
    password = ""
    dateBirthday = ""
    nif = -1

    constructor(email,password,dateBirthday,nif){
        this.email = email,
        this.password = password,
        this.dateBirthday = dateBirthday,
        this.nif = nif
    }
}