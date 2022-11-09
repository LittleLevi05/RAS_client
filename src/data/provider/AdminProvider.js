import axios from 'axios'
import baseUrl from '@/data/base_url'

class AdminProvider{

    async createSport(sport){
        try{
            await axios.put(baseUrl + '/sport',{
                name: sport.nome,
                type: sport.tipo
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async createBetType(betType){

        var sportsIDJson = []
        betType.sportList.forEach(element => {
            sportsIDJson.push({sportID: element.idesporte})
        });

        var oddNamesJson = []
        betType.oddList.forEach(element => {
            oddNamesJson.push({oddName: element.nome})
        });

        try{
            await axios.put(baseUrl + '/betType',{
                betTypeName: betType.name,
                sportsID: sportsIDJson,
                oddNames: oddNamesJson,
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

    async getBetTypeStructureBySport(desportoID){
        try{
            const res = await axios.post(baseUrl + '/tipo-de-aposta-estrutura',{
                desportoID: desportoID
            })

            return res.data
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async createTeam(equipa){
        try{
            await axios.put(baseUrl + '/equipa',{
                equipa: equipa
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async createPlayer(jogador){
        console.log(jogador)
        try{
            await axios.put(baseUrl + '/jogador',{
                jogador: jogador
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async getEventsOtherHouses(){
        try{
            var res = await axios.get(baseUrl + '/eventos-outras-casas',{
            })

            return res.data
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

}

export default new AdminProvider();