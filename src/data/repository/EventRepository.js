import EventProvider from '@/data/provider/EventProvider'
import SoccerEventModel from '@/data/model/SoccerEventModel'
import SportModel from '@/data/model/SportModel'
import PlayerModel from '@/data/model/PlayerModel'
import TeamModel from '@/data/model/TeamModel'
import EventIndividual from '../model/EventIndividual'
import EventColetive from '../model/EventColetive'
import EventDual from '../model/EventDual'
import BetTypeModel from '../model/BetTypeModel'
import HouseBetModel from "../model/HouseBetModel"

class EventRepository{

    async getSports(){
        const data = await EventProvider.getSports()

        var sportsModel = []

        data['esportes'].forEach(sportJson => {
            var s = SportModel.fromJson(sportJson)
            sportsModel.push(s)
        })

        return sportsModel
    }
    
    async getSoccerEvents(){
        const data = await EventProvider.getSoccerEvents()

        var soccerEventsModel = []

        data['soccerEvents'].forEach(soccerEventJson => {
            var s = SoccerEventModel.fromJson(soccerEventJson)
            soccerEventsModel.push(s)
        })

        return soccerEventsModel
    }

    async getEventsBySportID(sportID,sportType){
        try{
            var data = await EventProvider.getEventsBySportID(sportID)
            var eventos = []

            console.log(data)

            if(sportType == "c"){
                data["eventos"].forEach((evento) =>{
                    eventos.push(EventColetive.fromJson(evento))
                })
            }else if(sportType == "d"){
                data["eventos"].forEach((evento) =>{
                    eventos.push(EventDual.fromJson(evento))
                })
            }else if(sportType == "i"){
                data["eventos"].forEach((evento) =>{
                    eventos.push(EventIndividual.fromJson(evento))
                })
            }

            return eventos
        }catch(err){
            console.log(err)
        }
    }

    async setEventState(state,eventID){
        await EventProvider.setEventState(state,eventID)
    }

    async suspendEvent(eventID,suspendText){
        await EventProvider.suspendEvent(eventID,suspendText)
    }

    async openEvent(eventID,openText){
        await EventProvider.openEvent(eventID,openText)
    }

    async addSport(name,type){
        await EventProvider.addSport(name,type)
    }

    async addTeam(name){
        await EventProvider.addTeam(name)
    }

    async addPlayer(name){
        await EventProvider.addPlayer(name)
    }

    async addEventColetive(eventColetive){
        await EventProvider.addEventColetive(eventColetive)
    }

    async addEventIndiviual(eventIndividual){
        await EventProvider.addEventIndividual(eventIndividual)
    }

    async addEventDual(eventDual){
        await EventProvider.addEventDual(eventDual)
    }

    async getTeams(){
        const data = await EventProvider.getTeams()

        var teams = []

        data['teams'].forEach(teamJson => {
            var team = TeamModel.fromJson(teamJson)
            teams.push(team)
        })

        return teams   
    }

    async getPlayers(){
        const data = await EventProvider.getPlayers()

        var players = []

        data['players'].forEach(playerJson => {
            var player = PlayerModel.fromJson(playerJson)
            players.push(player)
        })

        return players   
    }

    async createBetType(betType){
        await EventProvider.createBetType(betType)
    }

    async addResult(event){
        await EventProvider.addResult(event)
    }

    async getBetTypeStructureBySport(desportoID){
        var data =  await EventProvider.getBetTypeStructureBySport(desportoID)
        
        var tiposDeApostas = []
        console.log(data)

        data["estrutura"].forEach((tipoDeAposta) =>{
            tiposDeApostas.push(BetTypeModel.fromJson(tipoDeAposta))
        })

        return tiposDeApostas
    }

    async getEventsOtherHouses(){
        var data = await EventProvider.getEventsOtherHouses()

        var houses = []
        
        data["jsonResul"].forEach((house) =>{
            houses.push(HouseBetModel.fromJson(house))
        })

        return houses
    }
}

export default new EventRepository
