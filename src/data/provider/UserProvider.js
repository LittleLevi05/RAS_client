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
        try{
            const res = await axios.get(baseUrl + '/transactions',{})
            return res.data
        }catch(err){
            console.log(err)
            throw {"errorStatus":err.response.status,"errorData":err.response.data}
        }
    }
}

export default new UserProvider();