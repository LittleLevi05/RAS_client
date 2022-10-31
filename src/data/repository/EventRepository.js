import EventProvider from '@/data/provider/EventProvider'
import SoccerEventModel from '@/data/model/SoccerEventModel'

class EventRepository{

    async createSoccerEvent(soccerEvent){
        await EventProvider.createSoccerEvent(soccerEvent)
    }

    async createBasketEvent(basketEvent){
        await EventProvider.createBasketEvent(basketEvent)
    }

    async createTennisEvent(tennisEvent){
        await EventProvider.createTennisEvent(tennisEvent)
    }

    async createFormula1Event(formula1Event){
        await EventProvider.createFormula1Event(formula1Event)
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
}

export default new EventRepository
