export default class Sport{
    sportID = 0
    name = ""
    type = ""

    constructor(sportID,name,type){
        this.sportID = sportID
        this.name = name
        this.type = type 
    }

    static fromJson(json){

        return new Sport(
            this.sportID = json['id'],
            this.name = json['sport'],
            this.type = json['type']
        )
    }
}