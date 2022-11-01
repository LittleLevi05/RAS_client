<template>
    <div class="nav top">
        <div class="col p-90">
            <div>
                <nav>
                    <ul>
                        <li>
                            <div v-on:click="changeForm('formSport')" class="t-white">
                                <b>DESPORTO</b>
                            </div>
                        </li>
                        <li>
                            <div v-on:click="changeForm('formBetType')" class="t-white">
                                <b>TIPO DE APOSTA</b>
                            </div>
                        </li>
                        <li>
                            <div v-on:click="changeForm('formEvent')" class="t-white">
                                <b>EVENTO</b>
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
        <!-- Formulario para criar um desporto -->
        <div id="formSport">
            <input placeholder="Nome" v-model="this.sportModel.name" class="border-radius-20 placeholder">
            <br>
            <br>
            <br>
            <select name="Tipo" id="type" v-model="this.sportModel.type" class="border-radius-20 placeholder">               
                <option v-for="(soccerEvent) in soccerEvents" :key="soccerEvent.soccerOddID" value=""></option>
            </select>
            <br>
            <br>
            <br>
            <button v-on:click="createSport()" class="createEvent-button padding-10">
                <H4 class="t-white">Criar Desporto</H4>
            </button>
        </div>
        <!-- Formulario para criar um tipo de aposta -->
        <div id="formBetType">

            <div class="col">
                <div class="sidenav">
                    <a href="">Novo Tipo de aposta</a>
                    <a href="">Alterar um tipo de aposta</a>
                </div>
                <div id="newBetType" class="row">
                    <input placeholder="Nome do tipo da aposta" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <select name="Desportos" id="type" class="border-radius-20 placeholder">
                        <option value="">COLOCAR TODOS OS DESPORTOS</option>
                    </select>
                    <!-- TODO: FAZER DINAMICAMENTE AS PARCELAS DE ODD -->
                    <input placeholder="Nome do Tipo de odd" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <button class="createEvent-button padding-10">
                        <H4 style="color: var(--color-background-nav);">Criar Tipo de aposta</H4>
                    </button>
                    <div class="button-float expand but">
                        <i class="fas fa-plus margin-right-5"></i>Novo tipo de odd
                    </div>

                </div>
                <div id="ChangeBetType" class="row">
                    <!-- TODO: APARECER TODOS OS TIPOS DE APOSTA, AO SELECIONAR ABRIR OUTRA ABA COM O TIPO DA APOSTA SELECIONADO E APENAS DEIXAR MUDAR A LISTA DE DESPORTOS-->
                </div>
            </div>
        </div>
        <!-- Formulario para criar um evento -->
        <div id="formEvent">
            <!-- TODO: Este não tenho ideia de como se faz -->
        </div>
    </main>
</template>

<script>
import SportModel from '@/data/model/SportModel'
import BetTypeModel from '@/data/model/BetTypeModel'
import EventModel from '@/data/model/EventModel'
import AdminRepository from '@/data/repository/AdminRepository'
import EventRepository from '@/data/repository/EventRepository'


export default {
    name: "OddCreate",
    data() {
        return {
            sportModel: new SportModel(),
            betTypeModel: new BetTypeModel(),
            eventModel: new EventModel(),
            sports: [],
            lastFormSelected: "formSport"
        }
    },
    async mounted() {
        this.closeElement("formBetType")
        this.closeElement("formEvent")
        this.sports = await EventRepository.getSports()
        console.log(this.sports)
    },
    methods: {
        closeElement(elementID) {
            var modal = document.getElementById(elementID);
            modal.style.display = "none";
        },
        showElement(elementID) {
            var modal = document.getElementById(elementID);
            modal.style.display = "block";
        },
        changeForm(elementID) {
            this.closeElement(this.lastFormSelected)
            this.showElement(elementID)
            this.lastFormSelected = elementID
        },
        async createSport() {
            await AdminRepository.createSport(this.sportModel)
        },
        async createBetType() {
            await AdminRepository.createBetType(this.betTypeModel)
        },
        async createEvent() {
            await AdminRepository.createEvent(this.eventModel)
        },
    }
}
</script>

<style scoped>
input,
select {
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
    width: 100%;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
}

#formSoccer {
    width: 40%;
}

#formBasket {
    width: 40%;
}

#formFormula1 {
    width: 40%;
}

#formTennis {
    width: 40%;
}

.createEvent-button:hover {
    background-color: var(--color-odd-selected-2);
}

.nav {
    background-color: var(--color-background-nav-2);
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px 0 rgba(0, 8, 59, 0.2), 0 3px 10px 0 rgba(12, 0, 43, 0.19);
}

.top {
    position: fixed;
    width: 100%;
    z-index: 100;
    top: 100px;
}

ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    height: 60px;
    align-items: center
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
}


li b {
    color: var(--color-text-white);
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
}

li {
    padding: 10px;
    border-radius: 20px;
}

li:hover {
    background-color: var(--color-white);
    cursor: pointer;
}

li:hover b {
    color: var(--color-background-nav);
}

.col {
    justify-content: space-between;
}

.profile {
    cursor: pointer;
}

.but {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-odd-selected);
}

.sidenav {
    height: 100%;
    width: 300px;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 150px;
    background-color: var(--color-background-nav);
    overflow-x: hidden;
    padding-top: 20px;
}

.sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
}

.sidenav a:hover {
    color: #f1f1f1;
}
</style>