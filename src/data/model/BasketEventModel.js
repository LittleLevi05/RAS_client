import EventModel from '@/data/model/EventModel'

export default class BasketEvent extends EventModel{
    team1Name = ""
    team2Name = ""
    oddTeam1Wins = 0
    oddTeam2Wins = 0
    oddTotalPointsMore212 = 0
    oddTotalPointsMore222 = 0
    oddTotalPointsMore232 = 0
    
    constructor( team1Name, team2Name, oddTeam1Wins, oddTeam2Wins, oddTotalPointsMore212, oddTotalPointsMore222,oddTotalPointsMore232, date){
        super(date)

        this.team1Name = team1Name
        this.team2Name = team2Name
        this.oddTeam1Wins = oddTeam1Wins
        this.oddTeam2Wins = oddTeam2Wins
        this.oddTotalPointsMore212 = oddTotalPointsMore212
        this.oddTotalPointsMore222 = oddTotalPointsMore222
        this.oddTotalPointsMore232 = oddTotalPointsMore232
    }
}