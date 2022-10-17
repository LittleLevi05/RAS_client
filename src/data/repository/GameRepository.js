import GameProvider from '@/data/provider/GameProvider'
import GameModel from '@/data/model/GameModel'

class GameRepository{

    async getGames(){
        var games = await GameProvider.getGames()

        var gamesModels = []       

        games.forEach(gameJson => {
            gamesModels.push(GameModel.fromJson(gameJson))
        });

        return gamesModels
    }
    
}

export default new GameRepository();