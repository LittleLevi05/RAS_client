class GameProvider{

    async getGames(){
        return [
            {
                id: 0,
                teamHome:"Sporting",
                teamAway:"Varzim",
                date:"19-06-2022",
                oddTeamHome:1.4,
                oddTeamAway:2.7,
                oddDraw:4.5
            },
            {
                id: 1,
                teamHome:"Palmeiras",
                teamAway:"São Paulo",
                date:"21-04-2022",
                oddTeamHome:2.4,
                oddTeamAway:1.2,
                oddDraw:3.5
            },
            {
                id: 2,
                teamHome:"PSG",
                teamAway:"Nantes",
                date:"23-06-2022",
                oddTeamHome:1.8,
                oddTeamAway:1.7,
                oddDraw:5.5
            },
            {
                id: 3,
                teamHome:"Granada",
                teamAway:"Real Madrid",
                date:"26-04-2022",
                oddTeamHome:1.8,
                oddTeamAway:1.7,
                oddDraw:5.5
            }
        ]
    }

}

export default new GameProvider();