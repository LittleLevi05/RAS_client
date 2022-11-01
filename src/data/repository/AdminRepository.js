import AdminProvider from '@/data/provider/AdminProvider'

class AdminRepository{

    async createSport(Sport){
        await AdminProvider.createSport(Sport)
    }

    async createBetType(betType){
        await AdminProvider.createBetType(betType)
    }

    async createEvent(event){
        await AdminProvider.createEvent(event)
    }
}

export default new AdminRepository
