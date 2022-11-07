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
}

export default new UserRepository
