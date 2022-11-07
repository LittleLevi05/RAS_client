import axios from 'axios'
import baseUrl from '@/data/base_url'

class UserProvider{

    async signup(user){
        try{
            await axios.put(baseUrl + '/user',{
                email: user.email,
                password: user.password,
                nif: user.email,
                birthday: user.dateBirthday,
                iban: user.iban,
                username: user.username,
            })

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async login(user){
        try{
            let response = await axios.post(baseUrl + '/user',{
                email: user.email,
                password: user.password
            })

            localStorage.setItem('user',JSON.stringify(response.data))
        }catch(err){
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async getTransactions(){
        let user = JSON.parse(localStorage.getItem('user'))

        try{
            var res = await axios({
                method: "post",
                url: baseUrl + "/transaction-user",
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

    async getUserData(){
        let user = JSON.parse(localStorage.getItem('user'))

        try{
            var res = await axios({
                method: "get",
                url: baseUrl + "/utilizador",
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

    async deposit(amount){
        let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["amount"] = amount

        try{
            var res = await axios({
                method: "post",
                url: baseUrl + "/deposito",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data:jsonData
            })

            return res.data

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }   
    }

    async raise(amount){
        let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["amount"] = amount

        try{
            var res = await axios({
                method: "post",
                url: baseUrl + "/levantamento",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data:jsonData
            })

            return res.data

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }   
    }
}

export default new UserProvider();