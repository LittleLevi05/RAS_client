import axios from 'axios'
import baseUrl from '@/data/base_url'

class UserProvider{

    async signup(user){
        try{
            console.log("vou fazer axios")
            await axios.post(baseUrl + '/user/register',{
                email: user.email,
                password: user.password,
                nif: user.email,
                birthday: user.dateBirthday,
                iban: user.iban,
                username: user.username,
            })

            console.log("acabei axios")

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async login(user){
        try{
            let response = await axios.post(baseUrl + '/user/login',{
                email: user.email,
                password: user.password
            })

            localStorage.setItem('user',JSON.stringify(response.data))
        }catch(err){
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async changeProfile(user){
        try{
            await axios.put(baseUrl + '/changeProfile',{
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

    async getTransactions(){
        let user = JSON.parse(localStorage.getItem('user'))

        try{
            var res = await axios({
                method: "get",
                url: baseUrl + "/user/transactions",
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
                url: baseUrl + "/user/data",
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
                url: baseUrl + "/user/deposit",
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
                url: baseUrl + "/user/raise",
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

    async getBuletinsHistory(){
        let user = JSON.parse(localStorage.getItem('user'))

        try{
            var res = await axios({
                method: "get",
                url: baseUrl + "/bet/buletin",
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

    async getBetsFromBuletin(buletinID){
        let user = JSON.parse(localStorage.getItem('user'))

        try{
            var res = await axios({
                method: "post",
                url: baseUrl + "/bet/buletin-bets",
                headers: { 
                    "Content-Type": "application/json", 
                    'Authorization': user["tokenType"] + ' ' + user["token"]
                },
                data: {buletinID: buletinID}
            })

            return res.data

        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }

    async getUsers(){
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user)

        try{
            var res = await axios({
                method: "get",
                url: baseUrl + "/user",
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

    async setUserAdmin(userEmail){
        let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["email"] = userEmail

        try{
            await axios({
                method: "post",
                url: baseUrl + "/user/admin",
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

    async setUserSpe(userEmail){
        let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["email"] = userEmail

        try{
            await axios({
                method: "post",
                url: baseUrl + "/user/spe",
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

    async addPromotion(promotion){
        let user = JSON.parse(localStorage.getItem('user'))

        var jsonData = {}
        jsonData["minAmount"] = promotion.minAmount
        jsonData["expDate"] = promotion.expDate 
        jsonData["perElevation"] = promotion.perElevation 
        jsonData["eventID"] = promotion.eventIDPromotion

        try{
            var res = await axios({
                method: "post",
                url: baseUrl + "/event/promotion",
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

    async getNotificationsFromUser(){
        let user = JSON.parse(localStorage.getItem('user'))

        try{
            var res = await axios({
                method: "get",
                url: baseUrl + "/user/notifications",
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
}

export default new UserProvider();