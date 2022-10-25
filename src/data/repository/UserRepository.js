import UserProvider from '@/data/provider/UserProvider'

class UserRepository{

    async signup(user){
        await UserProvider.signup(user)
    }

    async login(user){
        await UserProvider.login(user)
    }
}

export default new UserRepository
