import AdminProvider from '@/data/provider/AdminProvider'
import BetTypeModel from '../model/BetTypeModel'

class AdminRepository{

    async createSport(sport){
        await AdminProvider.createSport(sport)
    }

    async createBetType(betType){
        await AdminProvider.createBetType(betType)
    }

    async createEvent(event){
        await AdminProvider.createEvent(event)
    }

    async getBetTypeStructureBySport(desportoID){
        var data =  await AdminProvider.getBetTypeStructureBySport(desportoID)
        
        var tiposDeApostas = []

        data["estrutura"].forEach((tipoDeAposta) =>{
            tiposDeApostas.push(BetTypeModel.fromJson(tipoDeAposta))
        })

        return tiposDeApostas
    }

    async createTeam(equipa){
        await AdminProvider.createTeam(equipa)
    }

    async createPlayer(jogador){
        await AdminProvider.createPlayer(jogador)
    }
}

export default new AdminRepository
