import axios from 'axios'
import baseUrl from '@/data/base_url'

class BuletinProvider{

    // token check
    async createBuletin(buletin,apostasColetivas,apostasDuais){
        var jsonObj ={}

        jsonObj["gain"] = buletin.gain 
        jsonObj["type"] = buletin.type 
        jsonObj["amount"] = buletin.amount 
        var betsJson = []

        apostasColetivas.forEach((bet) =>{
            var betJson = {}
            betJson["event"] = bet.eventColetive.eventID 
            betJson["oddSelected"] = bet.oddSelected  
            betJson["sport"] = bet.eventColetive.sportID
            betJson["gain"] = bet.gain 
            betJson["amount"] = bet.amount
            betsJson.push(betJson) 
        })

        apostasDuais.forEach((bet) =>{
            var betJson = {}
            betJson["event"] = bet.eventDual.eventID 
            betJson["oddSelected"] = bet.oddSelected  
            betJson["sport"] = bet.eventDual.sportID
            betJson["gain"] = bet.gain 
            betJson["amount"] = bet.amount
            betsJson.push(betJson) 
        })

        jsonObj["bets"] = betsJson

        let user = JSON.parse(localStorage.getItem('user'))

        try{
            await axios({
                method: "post",
                url: baseUrl + "/bet/buletin",
                data: jsonObj,
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
        
    }
}

export default new BuletinProvider();