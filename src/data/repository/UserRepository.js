import UserProvider from '@/data/provider/UserProvider'
import TransactionModel from '@/data/model/TransactionsModel'

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
}

export default new UserRepository
