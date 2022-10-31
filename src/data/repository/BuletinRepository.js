import BuletinProvider from '@/data/provider/BuletinProvider'

class BuletinRepository{
    async createBuletin(buletin,bets){
        await BuletinProvider.createBuletin(buletin,bets)
    }
}

export default new BuletinRepository