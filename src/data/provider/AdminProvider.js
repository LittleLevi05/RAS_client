import axios from 'axios'
import baseUrl from '@/data/base_url'

class AdminProvider{

    async createSport(sport){

        try{
            await axios.put(baseUrl + '/sport',{
                sportID: sport.sportID,
                name: sport.name,
                type: sport.type
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async createBetType(betType){

        try{
            await axios.put(baseUrl + '/betType',{
                betTypeID: betType.betTypeID,
                name: betType.name,
                sportList: betType.sportList,
                oddList: betType.oddList,
                eventID: betType.eventID
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async createEvent(event){

        try{
            await axios.put(baseUrl + '/event',{
                eventID: event.eventID,
                date: event.date,
                state: event.state,
                betTypeList: event.betTypeList,
                sportID: event.sportID
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }
}

export default new AdminProvider();