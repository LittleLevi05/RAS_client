import BuletinProvider from '@/data/provider/BuletinProvider'

class BuletinRepository{
    async createBuletin(buletin,apostasColetivas,apostasDuais){
        await BuletinProvider.createBuletin(buletin,apostasColetivas,apostasDuais)
    }
}

export default new BuletinRepository