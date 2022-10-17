export default class GameModel{
    id = ""
    teamHome = ""
    teamAway = ""
    date = ""
    oddTeamHome = -1
    oddTeamAway = -1
    oddDraw = -1

    constructor(id,teamHome,teamAway,date,oddTeamHome,oddTeamAway,oddDraw){
        this.id = id,
        this.teamHome = teamHome,
        this.teamAway = teamAway,
        this.date = date,
        this.oddTeamHome = oddTeamHome,
        this.oddTeamAway = oddTeamAway,
        this.oddDraw = oddDraw
    }

    static fromJson(json){
        return new GameModel(
            this.id = json['id'],
            this.teamHome = json['teamHome'],
            this.teamAway = json['teamAway'],
            this.date = json['date'],
            this.oddTeamAway = json['oddTeamAway'],
            this.oddDraw = json['oddDraw']
        )
    }
}