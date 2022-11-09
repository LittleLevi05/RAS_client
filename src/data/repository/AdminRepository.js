import AdminProvider from '@/data/provider/AdminProvider'
import BetTypeModel from '../model/BetTypeModel'
import HouseBetModel from "../model/HouseBetModel"

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
        console.log(data)

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

    async getEventsOtherHouses(){
        var data = await AdminProvider.getEventsOtherHouses()

        var houses = []
        
        data["jsonResul"].forEach((house) =>{
            houses.push(HouseBetModel.fromJson(house))
        })

        return houses
    }
}

export default new AdminRepository
