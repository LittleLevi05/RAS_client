<template>
    <main class="row">
        <h1>
            Criar ODD
        </h1>
        <br>
        <!-- Formulario para criar um jogo de futebol -->
        <div>
            <input placeholder="Nome equipa 1" v-model="this.soccerEventModel.team1Name"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Nome equipa 2" v-model="this.soccerEventModel.team2Name"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 1 Vence" v-model="this.soccerEventModel.oddTeam1Wins"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 2 vence" v-model="this.soccerEventModel.oddTeam2Wins"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 1 vence ou empate" v-model="this.soccerEventModel.oddTeam1WinOrDraw"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 2 vence ou empate" v-model="this.soccerEventModel.oddTeam2WinOrDraw"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 1 ou equipa 2 vence" v-model="this.soccerEventModel.oddTeam1orTeam2"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd ambos marcam" v-model="this.soccerEventModel.oddBothScore"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd ambos não marcam" v-model="this.soccerEventModel.oddBothNoScore"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Equipa 1 vence sem empate" v-model="this.soccerEventModel.oddTeam1WithoutDraw"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Equipa 2 vence sem empate" v-model="this.soccerEventModel.oddTeam2WithoutDraw"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Mais de 1.5 gols" v-model="this.soccerEventModel.oddMoreThan15"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Mais de 2.5 gols" v-model="this.soccerEventModel.oddMoreThan25"
                class="border-radius-20 placeholder">
            <br>
            <input type="datetime-local" id="start" name="trip-start" min="2022-01-01" max="2023-12-31"
                v-model="this.soccerEventModel.date">
            <br>
            <button v-on:click="createSoccerEvent()" class="createEvent-button padding-10">
                <H4 style="color: var(--color-background-nav);">Criar evento</H4>
            </button>
        </div>
        <!-- Formulario para criar um jogo de basketbol -->
        <div>
            <input placeholder="Nome equipa 1" v-model="this.basketEventModel.team1Name"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Nome equipa 2" v-model="this.basketEventModel.team2Name"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 1 Vence" v-model="this.basketEventModel.oddTeam1Wins"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 2 vence" v-model="this.basketEventModel.oddTeam2Wins"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Total de pontos maid de 212" v-model="this.basketEventModel.oddTeam1WinOrDraw"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Total de pontos maid de 222" v-model="this.basketEventModel.oddTeam2WinOrDraw"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="OOdd Total de pontos maid de 232" v-model="this.basketEventModel.oddTeam1orTeam2"
                class="border-radius-20 placeholder">
            <br>
            <input type="datetime-local" id="start" name="trip-start" min="2022-01-01" max="2023-12-31"
                v-model="this.basketEventModel.date">
            <br>
            <button v-on:click="createBasketEvent()" class="createEvent-button padding-10">
                <H4 style="color: var(--color-background-nav);">Criar evento</H4>
            </button>
        </div>
        <!-- Formulario para criar um jogo de tennis -->
        <div>
            <input placeholder="Nome equipa 1" v-model="this.tennisEventModel.team1Name"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Nome equipa 2" v-model="this.tennisEventModel.team2Name"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 1 Vence" v-model="this.tennisEventModel.oddTeam1Wins"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 2 vence" v-model="this.tennisEventModel.oddTeam2Wins"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 1 vence 2-0" v-model="this.tennisEventModel.oddTeam1Win20"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 2 vence 2-0" v-model="this.tennisEventModel.oddTeam2Win20"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 1 vence 2-1" v-model="this.tennisEventModel.oddTeam1Win21"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 2 vence 2-1" v-model="this.tennisEventModel.oddTeam2Win21"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 1 handicap sets 1.5+" v-model="this.tennisEventModel.oddTeam1More15"
                class="border-radius-20 placeholder">
            <br>
            <input placeholder="Odd Equipa 2 handicap sets 1.5+" v-model="this.tennisEventModel.oddTeam2More15"
                class="border-radius-20 placeholder">
            <br>
            <input type="datetime-local" id="start" name="trip-start" min="2022-01-01" max="2023-12-31"
                v-model="this.tennisEventModel.date">
            <br>
            <button v-on:click="createTennisEvent()" class="createEvent-button padding-10">
                <H4 style="color: var(--color-background-nav);">Criar evento</H4>
            </button>
        </div>
        <!-- Formulario para criar uma corrida de Formula1 -->
        <div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 1" v-model="this.formula1EventModel.driver1Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 1" v-model="this.formula1EventModel.driver1Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 2" v-model="this.formula1EventModel.driver2Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 2" v-model="this.formula1EventModel.driver2Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 3" v-model="this.formula1EventModel.driver3Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 3" v-model="this.formula1EventModel.driver3Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 4" v-model="this.formula1EventModel.driver4Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 4" v-model="this.formula1EventModel.driver4Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 5" v-model="this.formula1EventModel.driver5Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 5" v-model="this.formula1EventModel.driver5Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 6" v-model="this.formula1EventModel.driver6Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 6" v-model="this.formula1EventModel.driver6Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 7" v-model="this.formula1EventModel.driver7Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 7" v-model="this.formula1EventModel.driver7Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 8" v-model="this.formula1EventModel.driver8Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 8" v-model="this.formula1EventModel.driver8Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 9" v-model="this.formula1EventModel.driver9Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 9" v-model="this.formula1EventModel.driver9Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 10" v-model="this.formula1EventModel.driver10Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 10" v-model="this.formula1EventModel.driver10Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 11" v-model="this.formula1EventModel.driver11Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 11" v-model="this.formula1EventModel.driver11Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 12" v-model="this.formula1EventModel.driver12Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 12" v-model="this.formula1EventModel.driver12Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 13" v-model="this.formula1EventModel.driver13Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 13" v-model="this.formula1EventModel.driver13Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 14" v-model="this.formula1EventModel.driver14Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 14" v-model="this.formula1EventModel.driver14Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 15" v-model="this.formula1EventModel.driver15Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 15" v-model="this.formula1EventModel.driver15Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 16" v-model="this.formula1EventModel.driver16Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 16" v-model="this.formula1EventModel.driver16Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 17" v-model="this.formula1EventModel.driver17Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 17" v-model="this.formula1EventModel.driver17Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 18" v-model="this.formula1EventModel.driver18Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 18" v-model="this.formula1EventModel.driver18Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 19" v-model="this.formula1EventModel.driver19Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 19" v-model="this.formula1EventModel.driver19Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <div class="col">
                <div>
                    <p>Nome:</p>
                    <input placeholder="Nome piloto 20" v-model="this.formula1EventModel.driver20Name"
                        class="border-radius-20 placeholder">
                </div>
                <div>
                    <p>Odd:</p><input placeholder="Odd do piloto 20" v-model="this.formula1EventModel.driver20Wins"
                        class="border-radius-20 placeholder">
                </div>
            </div>
            <br>
            <button v-on:click="createFormula1Event()" class="createEvent-button padding-10">
                <H4 style="color: var(--color-background-nav);">Criar evento</H4>
            </button>
        </div>
    </main>
</template>

<script>
import Formula1EventModel from '@/data/model/Formula1EventModel'
import TennisEventModel from '@/data/model/TennisEventModel'
import BasketEventModel from '@/data/model/BasketEventModel'
import SoccerEventModel from '@/data/model/SoccerEventModel'
import EventRepository from '@/data/repository/EventRepository'

export default {
    name: "OddCreate",
    data() {
        return {
            soccerEventModel: new SoccerEventModel(),
            basketEventModel: new BasketEventModel(),
            tennisEventModel: new TennisEventModel(),
            formula1EventModel: new Formula1EventModel(),
        }
    },
    methods: {
        async createSoccerEvent() {
            await EventRepository.createSoccerEvent(this.soccerEventModel)
        },
        async createBasketEvent() {
            await EventRepository.createBasketEvent(this.basketEventModel)
        },
        async createTennisEvent() {
            await EventRepository.createTennisEvent(this.tennisEventModel)
        },
        async createFormula1Event() {
            await EventRepository.createFormula1Event(this.formula1EventModel)
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

.createEvent-button:hover {
    background-color: var(--color-odd-selected-2);
}
</style>