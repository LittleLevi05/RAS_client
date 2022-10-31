import axios from 'axios'
import baseUrl from '@/data/base_url'

class BuletinProvider{

    async createBuletin(buletin,bets){
        console.log(buletin)
        console.log(bets)

        var json = '{ "gain":"'+buletin.gain+'" , "type":"'+buletin.type+'", "amount":"'+buletin.amount+'", "bets": [ '
        var i = 1;

        bets.forEach((bet) => {
            if (i == bets.length){
                json = json + '{ "event":"'+bet.eventID+'", "oddSelected":"'+bet.oddSelected+'", "sport": "'+bet.sport+'" } '
            }else{
                json = json + '{ "event":"'+bet.eventID+'", "oddSelected":"'+bet.oddSelected+'", "sport": "'+bet.sport+'" }, '
            }
            i++;
        })

        json = json + " ] }"

        const jsonObj = JSON.parse(json);

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