import axios from 'axios'
import baseUrl from '@/data/base_url'

class EventProvider{

    async createSoccerEvent(soccerEvent){

        try{
            await axios.put(baseUrl + '/soccer-event',{
                team1Name: soccerEvent.team1Name,
                team2Name: soccerEvent.team2Name,
                oddTeam1Wins: soccerEvent.oddTeam1Wins,
                oddTeam2Wins: soccerEvent.oddTeam2Wins,
                oddTeam1WinOrDraw: soccerEvent.oddTeam1WinOrDraw,
                oddTeam2WinOrDraw: soccerEvent.oddTeam2WinOrDraw,
                oddTeam1orTeam2: soccerEvent.oddTeam1orTeam2,
                oddBothScore: soccerEvent.oddBothScore,
                oddBothNoScore: soccerEvent.oddBothNoScore,
                oddTeam1WithoutDraw: soccerEvent.oddTeam2WithoutDraw,
                oddTeam2WithoutDraw: soccerEvent.oddTeam2WithoutDraw,
                oddMoreThan15: soccerEvent.oddMoreThan15,
                oddMoreThan25: soccerEvent.oddMoreThan25,
                date: soccerEvent.date
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }

    }
}

export default new EventProvider();