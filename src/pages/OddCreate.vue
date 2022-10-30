<template>
    <main class="row">
        <h1>
            Criar ODD
        </h1>
        <br>
        <input placeholder="Nome equipa 1" v-model="this.soccerEventModel.team1Name" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Nome equipa 2" v-model="this.soccerEventModel.team2Name" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Odd Equipa 1 Vence" v-model="this.soccerEventModel.oddTeam1Wins" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Odd Equipa 2 vence" v-model="this.soccerEventModel.oddTeam2Wins" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Odd Equipa 1 vence ou empate" v-model="this.soccerEventModel.oddTeam1WinOrDraw" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Odd Equipa 2 vence ou empate" v-model="this.soccerEventModel.oddTeam2WinOrDraw" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Odd Equipa 1 ou equipa 2 vence" v-model="this.soccerEventModel.oddTeam1orTeam2" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Odd ambos marcam" v-model="this.soccerEventModel.oddBothScore" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Odd ambos não marcam" v-model="this.soccerEventModel.oddBothNoScore" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Equipa 1 vence sem empate" v-model="this.soccerEventModel.oddTeam1WithoutDraw" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Equipa 2 vence sem empate" v-model="this.soccerEventModel.oddTeam2WithoutDraw" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Mais de 1.5 gols" v-model="this.soccerEventModel.oddMoreThan15" class="border-radius-20 placeholder">
        <br>
        <input placeholder="Mais de 2.5 gols" v-model="this.soccerEventModel.oddMoreThan25"  class="border-radius-20 placeholder">
        <br>
        <input type="datetime-local" id="start" name="trip-start"
                min="2022-01-01" max="2023-12-31" v-model="this.soccerEventModel.date">
        <br>
        <button v-on:click="createSoccerEvent()" class="createEvent-button padding-10">
            <H4 style="color: var(--color-background-nav);">Criar evento</H4>
        </button>
    </main>
</template>

<script>
import SoccerEventModel from '@/data/model/SoccerEventModel'
import EventRepository from '@/data/repository/EventRepository'

export default{
    name: "OddCreate",
    data(){
        return{
            soccerEventModel: new SoccerEventModel(),
        }
    },
    methods:{
        async createSoccerEvent(){
            await EventRepository.createSoccerEvent(this.soccerEventModel)
        },
        createBasketEvent(){

        },
        createTennisEvent(){

        },
        createFormula1Event(){

        },
    }
}
</script>

<style scoped>

input {
    border-radius: 10px;
    border-color: var(--color-background-nav);
    width: 300px;
    height: 40px;
}

input.placeholder {
    text-align: center;
}

.createEvent-button {
    background-color: var(--color-odd-selected);
    width: 300px;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
}

.createEvent-button:hover{
    background-color: var(--color-odd-selected-2);
}

</style>