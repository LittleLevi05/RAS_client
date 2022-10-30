import EventModel from '@/data/model/Event'

export default class SoccerEvent extends EventModel{
    team1Name = ""
    team2Name = ""
    oddTeam1Wins = 0
    oddTeam2Wins = 0
    oddTeam1WinOrDraw = 0
    oddTeam2WinOrDraw = 0
    oddTeam1orTeam2 = 0
    oddBothScore = 0
    oddBothNoScore = 0 
    oddTeam1WithoutDraw = 0
    oddTeam2WithoutDraw = 0
    oddMoreThan15 = 0
    oddMoreThan25 = 0

    constructor( team1Name, team2Name, oddTeam1Wins, oddTeam2Wins, oddTeam1WinOrDraw, oddTeam2WinOrDraw, oddTeam1orTeam2, oddBothScore, oddBothNoScore, oddTeam1WithoutDraw, oddTeam2WithoutDraw, oddMoreThan15, oddMoreThan25, date){
        super(date)

        this.team1Name = team1Name
        this.team2Name = team2Name
        this.oddTeam1Wins = oddTeam1Wins
        this.oddTeam2Wins = oddTeam2Wins
        this.oddTeam1WinOrDraw = oddTeam1WinOrDraw
        this.oddTeam2WinOrDraw = oddTeam2WinOrDraw
        this.oddTeam1orTeam2 = oddTeam1orTeam2
        this.oddBothScore = oddBothScore
        this.oddBothNoScore = oddBothNoScore
        this.oddTeam1WithoutDraw = oddTeam1WithoutDraw
        this.oddTeam2WithoutDraw = oddTeam2WithoutDraw
        this.oddMoreThan15 = oddMoreThan15
        this.oddMoreThan25 = oddMoreThan25
    }
}