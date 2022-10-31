import UserProvider from '@/data/provider/UserProvider'

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
            var s = transactionsModel.fromJson(transactionsJson)
            transactionsModel.push(s)
        })

        return transactionsModel
    }
}

export default new UserRepository
