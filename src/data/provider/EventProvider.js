import axios from 'axios'
import baseUrl from '@/data/base_url'

class EventProvider{

    async getSports(){
        try{
            const res = await axios.get(baseUrl + '/event/sport',{})
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

    async getEventsBySportID(sportID){
        try{
            console.log("ID esporte: ",sportID)
            const res = await axios.post(baseUrl + '/event/eventsBySport',{
                "sportID": sportID
            })
            return res.data
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }   
    }

    async setEventState(state,eventID){
        let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["state"] = state 
        jsonData["eventID"] = eventID 

        try{
            await axios({
                method: "post",
                url: baseUrl + "/event/state",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data: jsonData
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }    
    }

    async addPlayer(playerName){
        let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["name"] = playerName

        try{
            await axios({
                method: "post",
                url: baseUrl + "/event/player",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data: jsonData
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async addTeam(teamName){
        let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["name"] = teamName

        try{
            await axios({
                method: "post",
                url: baseUrl + "/event/team",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data: jsonData
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async addSport(name,type){
        let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["name"] = name
        jsonData["type"] = type

        try{
            await axios({
                method: "post",
                url: baseUrl + "/event/sport",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data: jsonData
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async addEventColetive(eventColetive){
        let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["equipa1ID"] = eventColetive.team1Name
        jsonData["equipa2ID"] = eventColetive.team2Name
        jsonData["desportoID"] = eventColetive.sportID
        jsonData["data"] = eventColetive.date 
        jsonData["tipoDeApostas"] = eventColetive.betTypeList

        console.log(jsonData)

        try{
            await axios({
                method: "post",
                url: baseUrl + "/event/coletive",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data: jsonData
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }    
    }

    async addEventDual(eventDual){
        let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["jogador1ID"] = eventDual.player1Name
        jsonData["jogador2ID"] = eventDual.player2Name
        jsonData["desportoID"] = eventDual.sportID
        jsonData["data"] = eventDual.date 
        jsonData["tipoDeApostas"] = eventDual.betTypeList

        console.log(jsonData)

        try{
            await axios({
                method: "post",
                url: baseUrl + "/event/dual",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data: jsonData
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }    
    }

    async addEventIndividual(eventIndividual){
        // let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["jogadores"] = eventIndividual.players
        jsonData["desportoID"] = eventIndividual.sportID
        jsonData["data"] = eventIndividual.date 
        jsonData["tipoDeApostas"] = eventIndividual.betTypeList

        console.log(jsonData)

        /*
        try{
            await axios({
                method: "post",
                url: baseUrl + "/event/individual",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data: jsonData
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }    
        */
    }

    async getTeams(){
        let user = JSON.parse(localStorage.getItem('user'))

        try{
            var res = await axios({
                method: "get",
                url: baseUrl + "/event/team",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
            })

            return res.data
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async getPlayers(){
        let user = JSON.parse(localStorage.getItem('user'))

        try{
            var res = await axios({
                method: "get",
                url: baseUrl + "/event/player",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
            })

            return res.data
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async createBetType(betType){
        let user = JSON.parse(localStorage.getItem('user'))

        var sportsIDJson = []
        betType.sportList.forEach(element => {
            sportsIDJson.push({sportID: element.idesporte})
        });

        var oddNamesJson = []
        betType.oddList.forEach(element => {
            oddNamesJson.push({oddName: element.nome})
        });

        var jsonData = {}
        jsonData["betTypeName"] = betType.name 
        jsonData["sportsID"] = sportsIDJson 
        jsonData["oddNames"] = oddNamesJson

        try{
            await axios({
                method: "post",
                url: baseUrl + "/event/betType",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data: jsonData
            })
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async addResult(event){
        let user = JSON.parse(localStorage.getItem('user'))

        try{
            await axios({
                method: "post",
                url: baseUrl + "/event/addResult",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data: event
            })
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async getBetTypeStructureBySport(desportoID){
        try{
            const res = await axios.post(baseUrl + '/event/betTypeStructure',{
                desportoID: desportoID
            })

            return res.data
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async getEventsOtherHouses(){
        try{
            var res = await axios.get(baseUrl + '/event/eventsOthersHouses',{
            })

            return res.data
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }
}

export default new EventProvider();