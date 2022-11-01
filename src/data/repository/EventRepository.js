import EventProvider from '@/data/provider/EventProvider'
import SoccerEventModel from '@/data/model/SoccerEventModel'
import SportModel from '@/data/model/SportModel'

class EventRepository{

    async getSports(){
        const data = await EventProvider.getSports()

        var sportsModel = []
        console.log(data['desportos'])
        data['desportos'].forEach(sportModel => {
            var s = SportModel.fromJson(sportModel)
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
}

export default new EventRepository
