<template>
    <div v-for="game in games" :key="game.id">
        <div class="col card margin-top-10 padding-20 border-radius-20 b-grey">
            <div class="row w-30 margin-right-50">
                <div class="col">
                    <h2 class="t-grey">{{game.teamHome}}</h2>
                    <h2 class="t-grey">-</h2>
                    <h2 class="t-grey">{{game.teamAway}}</h2>
                </div>
                <h5 class="margin-top-5">{{game.date}}</h5>
            </div>
            <div class="col w-70">
                <div class="oddSelected row card padding-10 border-radius-20 b-white">
                    <h3>{{game.teamHome}}</h3>
                    <h3 class="margin-top-5">{{game.oddTeamHome}}</h3>
                </div>
                <div class="oddSelected row card padding-10 border-radius-20 b-white">
                    <h3>Empate</h3>
                    <h3 class="margin-top-5">{{game.oddDraw}}</h3>
                </div>
                <div class="oddSelected row card padding-10 border-radius-20 b-white">
                    <h3>{{game.teamAway}}</h3>
                    <h3 class="margin-top-5">{{game.oddTeamAway}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GameRepository from '@/data/repository/GameRepository'

export default{
    name: "GamesListComponent",
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

.oddSelected:hover{
    background-color: var(--color-odd-selected);
    cursor: pointer;
    border: 0px;
}

</style>