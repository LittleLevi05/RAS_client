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

    async createBasketEvent(basketEvent){

        try{
            await axios.put(baseUrl + '/basket-event',{
                team1Name: basketEvent.team1Name,
                team2Name: basketEvent.team2Name,
                oddTeam1Wins: basketEvent.oddTeam1Wins,
                oddTeam2Wins: basketEvent.oddTeam2Wins,
                oddTotalPointsMore212: basketEvent.oddTotalPointsMore212,
                oddTotalPointsMore222: basketEvent.oddTotalPointsMore222,
                oddTotalPointsMore232: basketEvent.oddTotalPointsMore232,
                date: basketEvent.date
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async createTennisEvent(tennisEvent){

        try{
            await axios.put(baseUrl + '/tennis-event',{
                team1Name: tennisEvent.team1Name,
                team2Name: tennisEvent.team2Name,
                oddTeam1Wins: tennisEvent.oddTeam1Wins,
                oddTeam2Wins: tennisEvent.oddTeam2Wins,
                oddTeam1Win20: tennisEvent.oddTeam1Win20,
                oddTeam2Win20: tennisEvent.oddTeam2Win20,
                oddTeam1Win21: tennisEvent.oddTeam1Win21,
                oddTeam2Win21: tennisEvent.oddTeam2Win21,
                oddTeam1More15: tennisEvent.oddTeam1more15,
                oddTeam2More15: tennisEvent.oddTeam2More15,
                date: tennisEvent.date
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async createFormula1Event(formula1Event){

        try{
            await axios.put(baseUrl + '/formula1-event',{
                driver1Name: formula1Event.driver1Name,
                driver2Name: formula1Event.driver2Name,
                driver3Name: formula1Event.driver3Name,
                driver4Name: formula1Event.driver4Name,
                driver5Name: formula1Event.driver5Name,
                driver6Name: formula1Event.driver6Name,
                driver7Name: formula1Event.driver7Name,
                driver8Name: formula1Event.driver8Name,
                driver9Name: formula1Event.driver9Name,
                driver10Name: formula1Event.driver10Name,
                driver11Name: formula1Event.driver11Name,
                driver12Name: formula1Event.driver12Name,
                driver13Name: formula1Event.driver13Name,
                driver14Name: formula1Event.driver14Name,
                driver15Name: formula1Event.driver15Name,
                driver16Name: formula1Event.driver16Name,
                driver17Name: formula1Event.driver17Name,
                driver18Name: formula1Event.driver18Name,
                driver19Name: formula1Event.driver19Name,
                driver20Name: formula1Event.driver20Name,
                driver1Wins: formula1Event.driver1Wins,
                driver2Wins: formula1Event.driver2Wins,
                driver3Wins: formula1Event.driver3Wins,
                driver4Wins: formula1Event.driver4Wins,
                driver5Wins: formula1Event.driver5Wins,
                driver6Wins: formula1Event.driver6Wins,
                driver7Wins: formula1Event.driver7Wins,
                driver8Wins: formula1Event.driver8Wins,
                driver9Wins: formula1Event.driver9Wins,
                driver10Wins: formula1Event.driver10Wins,
                driver11Wins: formula1Event.driver11Wins,
                driver12Wins: formula1Event.driver12Wins,
                driver13Wins: formula1Event.driver13Wins,
                driver14Wins: formula1Event.driver14Wins,
                driver15Wins: formula1Event.driver15Wins,
                driver16Wins: formula1Event.driver16Wins,
                driver17Wins: formula1Event.driver17Wins,
                driver18Wins: formula1Event.driver18Wins,
                driver19Wins: formula1Event.driver19Wins,
                driver20Wins: formula1Event.driver20Wins,
                date: formula1Event.date
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }
}

export default new EventProvider();