<template>
    <main>
        <div class="col w-90">
            
            <div class="w-30">
                <!-- Formulario para criar um desporto -->
                <div id="formSport" class="row item-spe w-85">
                    <h3><i class="fas fa-table-tennis margin-right-5"></i>CRIAR DESPORTO</h3>
                    <br>
                    <input placeholder="Nome do esporte" v-model="this.sportModel.nome" class="border-radius-20 placeholder">
                    <select name="Tipo" id="tipoEsporte" v-model="this.sportModel.tipo" class="border-radius-20 placeholder margin-top-10">               
                        <option value="c">Coletivo</option>
                        <option value="i">Individual</option>
                        <option value="d">Dual</option>
                    </select>
                    <button v-on:click="addSport()" class="createEvent-button padding-10 margin-top-10">
                        <H4 class="t-white">Criar Desporto</H4>
                    </button>
                </div>
                <br>
                <!-- Formulario para criar uma equipa -->
                <div id="formEquipa" class="row item-spe w-85">
                    <h3><i class="fas fa-sitemap margin-right-5"></i>CRIAR EQUIPA</h3>
                    <br>
                    <input placeholder="Nome da equipa" v-model="this.teamName" class="border-radius-20 placeholder">
                    <button v-on:click="addTeam()" class="createEvent-button padding-10 margin-top-10">
                        <H4 class="t-white">Criar Equipa</H4>
                    </button>
                </div>
                <br>
                <!-- Formulario para criar um jogador -->
                <div id="formJogador" class="row item-spe w-85">
                    <h3><i class="fas fa-running margin-right-5"></i>CRIAR JOGADOR</h3>
                    <br>
                    <input placeholder="Nome do jogador" v-model="this.playerName" class="border-radius-20 placeholder">
                    <button v-on:click="addPlayer()" class="createEvent-button padding-10 margin-top-10">
                        <H4 class="t-white">Criar Jogador</H4>
                    </button>
                </div>
            </div>

            <!-- Eventos -->
            <div class="w-40">
                <div v-if="eventoColetivo" class="item-spe w-90">
                    <h3><i class="fas fa-trophy margin-right-5"></i>EVENTOS</h3>

                    <br>
                    
                    <ul class="col betHouses">
                        <li class="t-white expand margin-left-5 margin-top-5 desporto" v-on:click="trocarEsporte2(esporte)" v-for="(esporte,index) in esportes" :key="index">{{esporte.nome}}</li>
                    </ul>

                    <div v-for="(evento,index) in eventosColetivos" :key="index">
                        <div class="row card margin-top-10 padding-20 border-radius-10 b-grey event">
                            <div class="row w-100 margin-right-50">
                                <div class="col-2">
                                    <h4 class="t-grey margin-right-5">{{evento.team1Name}}</h4>
                                    <h3 class="t-grey  margin-right-5"> X </h3>
                                    <h4 class="t-grey">{{evento.team2Name}}</h4>
                                </div>
                                <h5 class="margin-top-5 t-grey-2">{{evento.date}}</h5>
                                <h3 class="margin-top-5 t-grey-2"><i class="fas fa-satellite-dish margin-right-5"></i>{{this.stateToString(evento.state)}}</h3>
                                <br>
                            </div>

                            <div class="col w-100">
                                <button v-on:click="setEventState('o',evento.eventID)" class="expand set-button padding-10 margin-top-10 margin-right-10 w-30">
                                    <H6 class="t-white">ABRIR</H6>
                                </button>
                                <button v-on:click="setEventState('s',evento.eventID)" class="expand set-button-2 padding-10 margin-top-10 margin-right-10 w-30">
                                    <H5 class="t-white">SUSPENDER</H5>
                                </button>
                                <button v-on:click="setEventState('c',evento.eventID)" class="expand set-button-3 padding-10 margin-top-10 w-30">
                                    <H5 class="t-white">FECHAR</H5>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="eventoDual" class="item-spe w-90">
                    <h3><i class="fas fa-trophy margin-right-5"></i>EVENTOS</h3>

                    <br>
                    
                    <ul class="col betHouses">
                        <li class="t-white expand margin-left-5 margin-top-5 desporto" v-on:click="trocarEsporte2(esporte)" v-for="(esporte,index) in esportes" :key="index">{{esporte.nome}}</li>
                    </ul>

                    <div v-for="(evento,index) in eventosDuais" :key="index">
                        <div class="row card margin-top-10 padding-20 border-radius-10 b-grey event">
                            <div class="row w-100 margin-right-50">
                                <div class="col-2">
                                    <h4 class="t-grey margin-right-5">{{evento.player1Name}}</h4>
                                    <h3 class="t-grey  margin-right-5"> X </h3>
                                    <h4 class="t-grey">{{evento.player2Name}}</h4>
                                </div>
                                <h5 class="margin-top-5 t-grey-2">{{evento.date}}</h5>
                                <h3 class="margin-top-5 t-grey-2"><i class="fas fa-satellite-dish margin-right-5"></i>{{this.stateToString(evento.state)}}</h3>
                                <br>
                            </div>

                            <div class="col w-100">
                                <button v-on:click="setEventState('o',evento.eventID)" class="expand set-button padding-10 margin-top-10 margin-right-10 w-50">
                                    <H5 class="t-white">ABRIR</H5>
                                </button>
                                <button v-on:click="setEventState('s',evento.eventID)" class="expand set-button-2 padding-10 margin-top-10 margin-right-10 w-20">
                                    <H5 class="t-white">SUSPENDER</H5>
                                </button>
                                <button v-on:click="setEventState('c',evento.eventID)" class="expand set-button-3 padding-10 margin-top-10 w-20">
                                    <H5 class="t-white">FECHAR</H5>
                                </button>
                                <button v-on:click="setEventState('c',evento.eventID)" class="expand set-button-4 padding-10 margin-top-10 w-20">
                                    <H5 class="t-white">CRIAR PROMOÇÃO</H5>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <!-- Users -->
            <div class="w-30">
                <div class="item-spe w-90">
                    <h3><i class="fas fa-users margin-right-5"></i>Utilizadores</h3>

                    <br>
                    
                    <div v-for="(user,index) in users" :key="index">
                        <div class="row card margin-top-10 padding-20 border-radius-10 b-grey event">
                            <div class="row w-100 margin-right-50">
                                <h5 class="margin-top-5"><i class="fas fa-user margin-right-5"></i>{{user.email}}</h5>
                                <h5 class="margin-top-5 t-grey-2">{{this.credentialToString(user.credential)}}</h5>
                            </div>

                            <div class="col w-100">
                                <button v-on:click="setAdmin(user.email)" class="expand set-button padding-10 margin-top-10 margin-right-10 w-50">
                                    <h6 class="t-white">TORNAR ADMINISTRADOR</h6>
                                </button>
                                <button v-on:click="setSpe(user.email)" class="expand set-button-2 padding-10 margin-top-10 w-50">
                                    <h6 class="t-white">TORNAR ESPECIALISTA</h6>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>

        </div>
    </main>
</template>

<script>
import SportModel from '@/data/model/SportModel'
import BetTypeModel from '@/data/model/BetTypeModel'
import HouseBetModel from '@/data/model/HouseBetModel'
import OddModel from '@/data/model/OddModel'
import EventModel from '@/data/model/EventModel'
import AdminRepository from '@/data/repository/AdminRepository'
import EventRepository from '@/data/repository/EventRepository'
import UserRepository from '@/data/repository/UserRepository'

export default {
    name: "AdminHomePage",
    data() {
        return {
            sportModel: new SportModel(),
            betTypeModel: new BetTypeModel(),
            eventModel: new EventModel(),
            esportes: [],
            esportesSelecionados: [],
            lastFormSelected: "formSport",
            oddNames: [],
            oddName: "",
            betTypeName: "",
            tipoEsporteSelecionado: "c",
            esporteEvento: 1,
            tiposDeApostas: [],
            tipoEsporte: "Coletivo",
            ultimoTipoDeEsporteSelecionado: "formColetivo",
            eventsOtherHouses: [],
            betHouses: [],
            actualHouseBet: new HouseBetModel(),
            eventSelected: new EventModel(),
            eventosPorDesporto:[],
            eventosPorDesportoFiltro:[],
            users:[],
            idEsporteSelecionado: 1,
            playerName: "",
            teamName: "",
            individualPlayersSelected: [],
            eventosColetivos:[],
            eventosDuais:[],
            eventosIndividuais:[],
            eventoColetivo: true,
            eventoDual: false,
            eventosIndividual: false
        }
    },
    async mounted() {
        this.esportes = await EventRepository.getSports()
        this.tiposDeApostas = await AdminRepository.getBetTypeStructureBySport(this.esporteEvento)

        this.eventosColetivos = await EventRepository.getEventsBySportID(1,"c")
        //this.eventosPorDesportoFiltro = this.eventosPorDesporto

        this.users = await UserRepository.getUsers()

        this.eventsOtherHouses = await AdminRepository.getEventsOtherHouses()

        this.eventsOtherHouses.forEach((house)=>{
            this.betHouses.push(house["house"])
        })

        this.actualHouseBet = this.eventsOtherHouses[0]
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
        changeForm2(elementID) {
            console.log(elementID)
            this.closeElement(this.ultimoTipoDeEsporteSelecionado)
            this.showElement(elementID)
            this.ultimoTipoDeEsporteSelecionado = elementID
        },
        async createSport() {
            await AdminRepository.createSport(this.sportModel)
        },
        async createBetType() {
            await AdminRepository.createBetType(this.betTypeModel)
            this.tiposDeApostas = await AdminRepository.getBetTypeStructureBySport(this.esporteEvento)
        },
        async createEvent() {
            await AdminRepository.createEvent(this.eventModel)
        },
        removeElementFromList(index,list){
            list.splice(index,1)
        },
        addOddName(){
            this.oddNames.push(new OddModel(this.oddName,-1,-1))
        },
        async criarTipoDeAposta(){
            var betType = new BetTypeModel()
            betType.name = this.betTypeName
            betType.oddList = this.oddNames
            betType.sportList = this.esportesSelecionados

            await AdminRepository.createBetType(betType)
        },
        async trocarEsporte(){
            console.log(this.esporteEvento)
            this.tiposDeApostas = await AdminRepository.getBetTypeStructureBySport(this.esporteEvento+1)
            //console.log(this.tiposDeApostas)
        },
        trocarCasaDeAposta(index){
            this.actualHouseBet = this.eventsOtherHouses[index]
            console.log(this.actualHouseBet)
        },
        openEvent(index){
            this.eventSelected = this.actualHouseBet.events[index]  
            this.showElement("eventModal")
        },
        openEvent2(index){
            this.eventSelected = this.eventosPorDesporto[index]  
            this.showElement("eventEditModal")
        },
        async trocarTipoEsporte(){
            console.log(this.tipoEsporte)
            if (this.tipoEsporte == "Coletivo"){
                this.changeForm2("formColetivo")
            }else if(this.tipoEsporte == "Individual"){
                this.changeForm2("formIndividual")
            }
        },
        async criarEvento(){

        },
        async trocarEsporte2(esporte){
            if(esporte.tipo == "c"){
                this.eventoColetivo = true 
                this.eventoDual = false 
                this.eventIndividual = false 
                this.eventosColetivos = await EventRepository.getEventsBySportID(esporte.idesporte,"c")
            }else if(esporte.tipo == "d"){
                this.eventoColetivo = false 
                this.eventoDual = true 
                this.eventIndividual = false 
                this.eventosDuais = await EventRepository.getEventsBySportID(esporte.idesporte,"d")
            }else if(esporte.tipo == "i"){
                this.eventoColetivo = false 
                this.eventoDual = false 
                this.eventIndividual = true 
                this.eventosDuais = await EventRepository.getEventsBySportID(esporte.idesporte,"i")
            }
        },
        dateToString(date){
            return date
        },
        updateEvent(){
            console.log(this.eventSelected)
        },
        credentialToString(credential){
            if (credential == "s") return "Especialista"
            if (credential == "u") return "Apostador"
            if (credential == "a") return "Administrador"
        },
        async setAdmin(userEmail){
            UserRepository.setUserAdmin(userEmail)
            this.users = await UserRepository.getUsers()
        },
        async setSpe(userEmail){
            UserRepository.setUserSpe(userEmail)
            this.users = await UserRepository.getUsers()
        },
        async setEventState(state,eventID){
            EventRepository.setEventState(state,eventID)
            this.$forceUpdate();
            //await EventRepository.getSportsColetiveEventsByID(this.idEsporteSelecionado)
            //this.eventosPorDesportoFiltro = this.eventosPorDesporto
        },
        stateToString(state){
            if (state == "o") return "Aberto"
            if (state == "c") return "Fechado"
            if (state == "s") return "Suspenso"
        },
        addSport(){
            EventRepository.addSport(this.sportModel.nome,this.sportModel.tipo)
        },
        addTeam(){
            EventRepository.addTeam(this.teamName)
        },
        addPlayer(){
            EventRepository.addPlayer(this.playerName)
        }
    }
}
</script>

<style scoped>
input,
select {
    border-radius: 10px;
    border-color: var(--color-background-nav);
    width: 100%;
    height: 40px;
}

.desporto:hover{ 
    cursor: pointer; 
    color: var(--color-text-grey-2);
    width: 400px;
}

.seeMore{
    background-color: var(--color-white);
}

.seeMore:hover{
    background-color: var(--color-odd-selected);
    cursor: pointer;
    color: var(--color-white);
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

.set-button {
    background-color: var(--color-odd-selected);
    width: 100%;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
}

.set-button-2 {
    background-color: var(--color-background-nav-4);
    width: 100%;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
}

.set-button-3 {
    background-color: var(--color-text-grey-2);
    width: 100%;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
}
.colNewOdd{
    width: 100%;
    height: 100%;
}

.plusButton{
    background-color: var(--color-odd-selected);
    width: 20%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.plusButton:hover {
    background-color: var(--color-odd-selected-2);
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
    display: flex;
    justify-content: center;
}

.col-2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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

.rowForm{
    justify-content: center;
    align-items: center;
    width: 300px;
}

.item-spe{
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -webkit-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -moz-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
}

.betHouses{
    background-color: var(--color-background-nav);
    padding: 5px;
    border-radius: 10px;
    overflow-x: scroll;
    justify-content: flex-start;
}
</style>