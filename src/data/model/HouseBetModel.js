import EventColetive from "./EventColetive"

export default class HouseBetModel{
    house = ""
    events = []

    constructor(house,events){
        this.house = house 
        this.events = events
    }

    static fromJson(json){
        var events = []

        json["eventos"].forEach((event) =>{
            events.push(EventColetive.fromJson(event))
        })

        return new HouseBetModel(
            this.house = json["casa"],
            this.events = events
        )
    }
}