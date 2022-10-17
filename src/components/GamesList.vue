<template>
    <div v-for="game in games" :key="game.id">
        <div class="col card-rounded margin-top-10 padding-20 border-radius-20">
            <div class="row w-30 margin-right-50">
                <div class="col">
                    <h3>{{game.teamHome}}</h3>
                    <h3>-</h3>
                    <h3>{{game.teamAway}}</h3>
                </div>
                <h5 class="margin-top-5">{{game.date}}</h5>
            </div>
            <div class="col w-70">
                <div class="row">
                    <h3>{{game.teamHome}}</h3>
                    <h3>{{game.oddTeamHome}}</h3>
                </div>
                <div class="row">
                    <h3>Empate</h3>
                    <h3>{{game.oddDraw}}</h3>
                </div>
                <div class="row">
                    <h3>{{game.teamAway}}</h3>
                    <h3>{{game.oddTeamAway}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GameRepository from '@/data/repository/GameRepository'

export default{
    name: "GamesList",
    data(){
        return{
            games:[]
        }
    },
    async mounted(){
        this.games = await GameRepository.getGames()
        console.log(this.games)
    },
}
</script>

<style scoped>

</style>