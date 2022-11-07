import axios from 'axios'
import baseUrl from '@/data/base_url'

class BuletinProvider{

    async createBuletin(buletin,bets){
        console.log(buletin)
        console.log(bets)

        var jsonObj ={}

        jsonObj["gain"] = buletin.gain 
        jsonObj["type"] = buletin.type 
        jsonObj["amount"] = buletin.amount 
        var betsJson = []

        bets.forEach((bet) =>{
            var betJson = {}
            betJson["event"] = bet.event.eventID 
            betJson["oddSelected"] = bet.oddSelected  
            betJson["sport"] = bet.event.sportID
            betsJson.push(betJson) 
        })

        jsonObj["bets"] = betsJson

        let user = JSON.parse(localStorage.getItem('user'))

        try{
            await axios({
                method: "put",
                url: baseUrl + "/buletin",
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