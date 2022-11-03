import axios from 'axios'
import baseUrl from '@/data/base_url'

class EventProvider{

    async getSports(){
        try{
            const res = await axios.get(baseUrl + '/esporte',{})
            return res.data
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }   
    }

    async getSoccerEvents(){
        try{
            const res = await axios.get(baseUrl + '/soccer-event',{})
            return res.data
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }   
    }

    async getSportsColetiveEventsByID(sportID){
        try{
            const res = await axios.get(baseUrl + '/eventos-desporto-coletivo',{
                sportID: sportID
            })
            return res.data
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }   
    }
}

export default new EventProvider();