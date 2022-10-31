import EventModel from '@/data/model/Event'

export default class TennisEvent extends EventModel{
    team1Name = ""
    team2Name = ""
    oddTeam1Wins = 0
    oddTeam2Wins = 0
    oddTeam1Win20 = 0
    oddTeam2Win20 = 0
    oddTeam1Win21 = 0
    oddTeam2Win21 = 0
    oddTeam1More15 = 0
    oddTeam2More15 = 0
    
    constructor( team1Name, team2Name, oddTeam1Wins, oddTeam2Wins, oddTeam1Win20, oddTeam2Win20,oddTeam1Win21,oddTeam2Win21, oddTeam1More15, oddTeam2More15, date){
        super(date)

        this.team1Name = team1Name
        this.team2Name = team2Name
        this.oddTeam1Wins = oddTeam1Wins
        this.oddTeam2Wins = oddTeam2Wins
        this.oddTeam1Win20 = oddTeam1Win20
        this.oddTeam2Win20 = oddTeam2Win20
        this.oddTeam1Win21 = oddTeam1Win21
        this.oddTeam2Win21 = oddTeam2Win21
        this.oddTeam1More15 = oddTeam1More15
        this.oddTeam2More15 = oddTeam2More15
    }
}