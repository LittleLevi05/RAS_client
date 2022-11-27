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

    async getSportsColetiveEventsByID(esportID){
        try{
            console.log("ID esporte: ",esportID)
            const res = await axios.post(baseUrl + '/eventos-desporto-coletivo',{
                "sportID": esportID
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
}

export default new EventProvider();