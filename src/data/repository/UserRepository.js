import UserProvider from '@/data/provider/UserProvider'
import TransactionModel from '@/data/model/TransactionsModel'
import User from '@/data/model/UserModel'

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
}

export default new UserRepository
