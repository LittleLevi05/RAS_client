import EventProvider from '@/data/provider/EventProvider'

class EventRepository{

    async createSoccerEvent(soccerEvent){
        await EventProvider.createSoccerEvent(soccerEvent)
    }
}

export default new EventRepository
