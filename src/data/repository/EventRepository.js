import EventProvider from '@/data/provider/EventProvider'
import SoccerEventModel from '@/data/model/SoccerEventModel'
import EventModel from '@/data/model/EventModel'
import SportModel from '@/data/model/SportModel'

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

    async getSportsColetiveEventsByID(sportID){
        try{
            var data = await EventProvider.getSportsColetiveEventsByID(sportID)
            var eventos = []
            data["eventos"].forEach((evento) =>{
                eventos.push(EventModel.fromJson(evento))
            })

            return eventos
        }catch(err){
            console.log(err)
        }
    }
}

export default new EventRepository
