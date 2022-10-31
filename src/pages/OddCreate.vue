<template>
    <div class="nav top">
        <div class="col p-90">
            <div>
                <nav>
                    <ul>
                        <li>
                            <div v-on:click="changeForm('formSoccer')" class="t-white">
                                <b>FUTEBOL</b>
                            </div>
                        </li>
                        <li>
                            <div  v-on:click="changeForm('formBasket')" class="t-white">
                                <b>BASQUETEBOL</b>
                            </div>
                        </li>
                        <li>
                            <div  v-on:click="changeForm('formTennis')" class="t-white">
                                <b>TÉNIS</b>
                            </div>
                        </li>
                        <li>
                            <div  v-on:click="changeForm('formFormula1')" class="t-white">
                                <b>FÓRMULA 1</b>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div> 
        </div> 
    </div>
    <main class="row">
        <br>
        <br>
        <br>
        <!-- Formulario para criar um jogo de futebol -->
        <div id="formSoccer">
            <div class="col">
                <input placeholder="Nome equipa 1" v-model="this.soccerEventModel.team1Name"
                    class="border-radius-20 placeholder margin-right-10">

                <input placeholder="Nome equipa 2" v-model="this.soccerEventModel.team2Name"
                    class="border-radius-20 placeholder margin-left-10">
            </div>
            <br>
            <div class="col">
                <input placeholder="Odd Equipa 1 Vence" v-model="this.soccerEventModel.oddTeam1Wins"
                    class="border-radius-20 placeholder margin-right-10">

                <input placeholder="Odd Equipa 2 vence" v-model="this.soccerEventModel.oddTeam2Wins"
                    class="border-radius-20 placeholder margin-left-10">
            </div>
            <br>
            <input placeholder="Odd Empate" v-model="this.soccerEventModel.oddDraw"
                class="border-radius-20 placeholder">
            <br>
            <br>
            <div class="col">
                <input placeholder="Odd Equipa 1 vence ou empate" v-model="this.soccerEventModel.oddTeam1WinOrDraw"
                    class="border-radius-20 placeholder margin-right-10">
                <input placeholder="Odd Equipa 2 vence ou empate" v-model="this.soccerEventModel.oddTeam2WinOrDraw"
                    class="border-radius-20 placeholder margin-left-10">
                </div>
            <br>
            <input placeholder="Odd Equipa 1 ou equipa 2 vence" v-model="this.soccerEventModel.oddTeam1orTeam2"
                class="border-radius-20 placeholder">
            <br>
            <br>
            <div class="col">
                <input placeholder="Odd ambos marcam" v-model="this.soccerEventModel.oddBothScore"
                    class="border-radius-20 placeholder margin-right-10">
                <input placeholder="Odd ambos não marcam" v-model="this.soccerEventModel.oddBothNoScore"
                    class="border-radius-20 placeholder margin-left-10">
            </div>
            <br>
            <div class="col">
                <input placeholder="Equipa 1 vence sem empate" v-model="this.soccerEventModel.oddTeam1WithoutDraw"
                    class="border-radius-20 placeholder margin-right-10">
                <input placeholder="Equipa 2 vence sem empate" v-model="this.soccerEventModel.oddTeam2WithoutDraw"
                    class="border-radius-20 placeholder margin-left-10">
            </div>
            <br>
            <div class="col">
            <input placeholder="Mais de 1.5 gols" v-model="this.soccerEventModel.oddMoreThan15"
                class="border-radius-20 placeholder margin-right-10">
            <input placeholder="Mais de 2.5 gols" v-model="this.soccerEventModel.oddMoreThan25"
                class="border-radius-20 placeholder margin-left-10">
            </div>
            <br>
            <input type="datetime-local" id="start" name="trip-start" min="2022-01-01" max="2023-12-31"
                v-model="this.soccerEventModel.date">
            <br>
            <br>
            <button v-on:click="createSoccerEvent()" class="createEvent-button padding-10">
                <H4 style="color: var(--color-background-nav);">Criar evento</H4>
            </button>
        </div>
        <!-- Formulario para criar um jogo de basketbol -->
        <div id="formBasket">
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
        <div id="formTennis">
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
        <div id="formFormula1">
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
            lastFormSelected: "formSoccer"
        }
    },
    mounted(){
        this.closeElement("formBasket")
        this.closeElement("formTennis")
        this.closeElement("formFormula1")
    },
    methods: {
        closeElement(elementID){
            var modal = document.getElementById(elementID);
            modal.style.display = "none";
        },
        showElement(elementID){
            var modal = document.getElementById(elementID);
            modal.style.display = "block";
        },
        changeForm(elementID){
            this.closeElement(this.lastFormSelected)
            this.showElement(elementID)
            this.lastFormSelected = elementID
        },  
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
    width: 100%;
    height: 40px;
}

input.placeholder {
    text-align: center;
}

.createEvent-button {
    background-color: var(--color-odd-selected);
    width: 100%;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
}

#formSoccer{
    width: 40%;
}

#formBasket{
    width: 40%;
}

#formFormula1{
    width: 40%;
}

#formTennis{
    width: 40%;
}
.createEvent-button:hover {
    background-color: var(--color-odd-selected-2);
}
.nav{
    background-color: var(--color-background-nav-2);
    width: 100%;
    height: 50px;
    display: flex;  
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px 0 rgba(0, 8, 59, 0.2), 0 3px 10px 0 rgba(12, 0, 43, 0.19);
}
.top{
    position: fixed;
    width: 100%;
    z-index: 100;
    top:100px;
}

ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    height: 60px;
    align-items: center
}

main{
    display: flex;
    justify-content: center;
    align-items: center;
}


li b{
    color: var(--color-text-white);
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
}

li {
    padding: 10px;
    border-radius: 20px;
}

li:hover{
    background-color: var(--color-white);
    cursor: pointer;
}

li:hover b{
    color: var(--color-background-nav);
}

.col{
    justify-content: space-between;
}

.profile{
    cursor: pointer;
}
</style>