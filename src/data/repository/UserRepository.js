import UserProvider from '@/data/provider/UserProvider'
import TransactionModel from '@/data/model/TransactionsModel'
import User from '@/data/model/UserModel'
import BuletinModel from '../model/BuletinModel'
import BetModel from '../model/BetModel'

class UserRepository{

    async signup(user){
        await UserProvider.signup(user)
    }

    async login(user){
        await UserProvider.login(user)
    }

    async changeProfile(user){
        await UserProvider.changeProfile(user)
    }

    async getTransactions(){
        const data = await UserProvider.getTransactions()

        var transactionsModel = []

        data['transactions'].forEach(transactionsJson => {
            var s = transactionsModel.push(TransactionModel.fromJson(transactionsJson))
            transactionsModel.push(s)
        })

        console.log(transactionsModel)

        return transactionsModel
    }

    async getUserData(){
        const data = await UserProvider.getUserData()
        return User.fromJson(data["user"])
    }

    async deposit(amount){
        await UserProvider.deposit(amount)
    }

    async raise(amount){
        await UserProvider.raise(amount)
    }

    async getBuletinsHistory(){
        const data = await UserProvider.getBuletinsHistory()

        var buletins = []

        data['boletins'].forEach(buletinJson => {
            var b = BuletinModel.fromJson(buletinJson)
            buletins.push(b)
        })

        return buletins
    }

    async getBetsFromBuletin(buletinID){
        const data = await UserProvider.getBetsFromBuletin(buletinID)
        
        var apostas = []
        
        data['apostas'].forEach(apostaJson => {
            var b = BetModel.fromJson(apostaJson)
            apostas.push(b)
        })

        return apostas
    }

    async getUsers(){
        const data = await UserProvider.getUsers()

        var users = []

        data['users'].forEach(userJson => {
            var b = User.fromJson(userJson)
            users.push(b)
        })

        return users    
    }

    async setUserAdmin(userEmail){
        await UserProvider.setUserAdmin(userEmail)
    }

    async setUserSpe(userEmail){
        await UserProvider.setUserSpe(userEmail)
    }
}

export default new UserRepository
