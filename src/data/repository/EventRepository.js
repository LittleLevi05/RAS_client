import EventProvider from '@/data/provider/EventProvider'

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
}

export default new EventRepository
