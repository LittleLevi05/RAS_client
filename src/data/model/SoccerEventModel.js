import EventModel from '@/data/model/EventModel'

export default class SoccerEvent extends EventModel{
    soccerOddID = 0
    team1Name = ""
    team2Name = ""
    oddDraw = 0
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

    constructor( soccerOddID, team1Name, team2Name, oddTeam1Wins, oddTeam2Wins, oddDraw, oddTeam1WinOrDraw, oddTeam2WinOrDraw, oddTeam1orTeam2, oddBothScore, oddBothNoScore, oddTeam1WithoutDraw, oddTeam2WithoutDraw, oddMoreThan15, oddMoreThan25, date, state, eventID){
        super(date,state,eventID)

        this.soccerOddID = soccerOddID
        this.team1Name = team1Name
        this.team2Name = team2Name
        this.oddTeam1Wins = oddTeam1Wins
        this.oddTeam2Wins = oddTeam2Wins
        this.oddDraw = oddDraw
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

    static fromJson(json){
        const dateF = new Date(json['date'])
        return new SoccerEvent(
            this.soccerOddID = json['idsoccer_odds'],
            this.team1Name = json['team_1'],
            this.team2Name = json['team_2'],
            this.oddTeam1Wins = json['team_1_win'],
            this.oddTeam2Wins = json['team_2_win'],
            this.oddDraw = json['draw'], 
            this.oddTeam1WinOrDraw = json['team_1_or_draw'],
            this.oddTeam2WinOrDraw = json['team_2_or_draw'],
            this.oddTeam1orTeam2 = json['team_1_or_team_2'],
            this.oddBothScore = json['both_score_yes'],
            this.oddBothNoScore = json['both_score_no'],
            this.oddTeam1WithoutDraw = json['team_1_without_draw'],
            this.oddTeam2WithoutDraw = json['team_2_without_draw'],
            this.oddMoreThan15 = json['total_goals_more_15'],
            this.oddMoreThan25 = json['total_goals_more_25'],
            this.date = dateF,
            this.state = json['state'],
            this.eventID = json['soccer_event']
        )
    }
}