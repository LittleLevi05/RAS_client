export default class NotificationModel{
    idnotification = 0
    title = ""
    description = ""
    userID = 0

    constructor(idnotification,title,description,userID){        
        this.idnotification = idnotification
        this.title = title
        this.description = description
        this.userID = userID
    }

    static fromJson(json){
        return new NotificationModel(
            this.idnotification = json["idnotification"],
            this.title = json["title"],
            this.description = json["description"],
            this.userID = json["userid"], 
        )
    }
}