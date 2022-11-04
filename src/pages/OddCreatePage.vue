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
                        <li>
                            <div v-on:click="changeForm('formEquipa')" class="t-white">
                                <b>EQUIPAS</b>
                            </div>
                        </li>
                        <li>
                            <div v-on:click="changeForm('formJogador')" class="t-white">
                                <b>JOGADORES</b>
                            </div>
                        </li>
                        <li>
                            <div v-on:click="changeForm('formEventos')" class="t-white">
                                <b>EVENTOS DE OUTRAS CASAS</b>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <main class="row events">
        <br>
        <br>
        <br>
        <!-- Formulario para criar um desporto -->
        <div id="formSport" class="row rowForm">
            <h3>CRIAR DESPORTO</h3>
            <br>
            <input placeholder="Nome do esporte" v-model="this.sportModel.nome" class="border-radius-20 placeholder">
            <select name="Tipo" id="tipoEsporte" v-model="this.sportModel.tipo" class="border-radius-20 placeholder margin-top-10">               
                <option value="c">Coletivo</option>
                <option value="i">Individual</option>
                <option value="d">Dual</option>
            </select>
            <button v-on:click="criarEsporte()" class="createEvent-button padding-10 margin-top-10">
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
                <div id="newBetType" class="row rowForm">
                    <h3>CRIAR TIPO DE APOSTA</h3>
                    <br>
                    <input v-model="betTypeName" placeholder="Nome do tipo da aposta" class="border-radius-20 placeholder">
                    <br>
                    <select name="sportSelected" id="sportSelected" class="border-radius-20 placeholder">               
                        <option v-for="(esporte,index) in esportes" :key="esporte.idesporte" :value="index">{{esporte.nome}}</option>
                    </select>         
                    <div id={{esporte.idesporte}} class="card border-radius-10 padding-10 margin-top-10 w-100" v-for="(esporte,index) in esportesSelecionados" :key="esporte.idesporte" value="">
                        <span class="close" v-on:click="removeElementFromList(index,this.esportesSelecionados)">&times;</span>
                        <h5> {{esporte.nome}} </h5> 
                    </div>
                    <br>
                    <div class="col colNewOdd">
                        <input placeholder="Nome do Tipo de odd" v-model="oddName" class="border-radius-20 placeholder">
                        <div v-on:click="addOddName" class="plusButton margin-left-10 t-white"><i class="fas fa-plus"></i></div>
                    </div>
                    <div id={{oddName.name}} class="card border-radius-10 padding-10 margin-top-10 w-100" v-for="(oddName,index) in oddNames" :key="index" value="">
                        <span class="close" v-on:click="removeElementFromList(index,this.oddNames)">&times;</span>
                        <h5> {{oddName.nome}} </h5> 
                    </div>
                    <br>
                    <button v-on:click="criarTipoDeAposta()" class="createEvent-button padding-10">
                        <H4 class="t-white">Criar Tipo de aposta</H4>
                    </button>
                </div>
            </div>
        </div>
        <!-- Formulario para criar um evento -->
        <div id="formEvent" class="row rowForm">
            <h3>CRIAR EVENTO</h3>

            <div class="col">
                <select v-model="this.tipoEsporte" v-on:change="trocarTipoEsporte" id="sportSelected" class="border-radius-20 placeholder margin-top-10">               
                    <option>Coletivo</option>
                    <option>Individual</option>
                    <option>Dual</option>
                </select>

                <select name="sportSelectedEvent" v-model="this.esporteEvento" v-on:change="trocarEsporte" id="sportSelected" class="border-radius-20 placeholder margin-top-10 margin-left-10">               
                    <option v-for="(esporte,index) in esportes" :key="esporte.idesporte" :value="index">{{esporte.nome}}</option>
                </select> 
            </div> 

            <div id="formColetivo" class="col">
                <input placeholder="Equipa 1" class="margin-top-10">
                <input placeholder="Equipa 2" class="margin-top-10 margin-left-10">    
            </div>

            <div id="formIndividual" class="col">
                <input placeholder="Jogador 1" class="margin-top-10">
                <input placeholder="Jogador 2" class="margin-top-10 margin-left-10">    
            </div>

            <input type="datetime-local" id="start" name="trip-start" min="2022-01-01" max="2023-12-31" class="margin-top-10">

            <div class="margin-top-10" v-for="(tipoDeAposta) in this.tiposDeApostas" :key=tipoDeAposta.nome>
                <h3>{{tipoDeAposta.nome}}</h3>
                <div v-for="(odd,index) in tipoDeAposta.oddList" :key="index">
                    <input :placeholder=odd.nome class="margin-top-10">
                </div>
            </div>

            <button v-on:click="criarEvento()" class="createEvent-button padding-10 margin-top-10">
                <H4 class="t-white">Criar Evento</H4>
            </button>
        </div>
        <!-- Formulario para criar uma equipa -->
        <div id="formEquipa" class="row rowForm">
            <h3>CRIAR EQUIPA</h3>
            <br>
            <input placeholder="Nome da equipa" v-model="this.equipa" class="border-radius-20 placeholder">
            <button v-on:click="criarEquipa()" class="createEvent-button padding-10 margin-top-10">
                <H4 class="t-white">Criar Equipa</H4>
            </button>
        </div>
        <!-- Formulario para criar um jogador -->
        <div id="formJogador" class="row rowForm">
            <h3>CRIAR JOGADOR</h3>
            <br>
            <input placeholder="Nome do jogador" v-model="this.jogador" class="border-radius-20 placeholder">
            <button v-on:click="criarJogador()" class="createEvent-button padding-10 margin-top-10">
                <H4 class="t-white">Criar Jogador</H4>
            </button>
        </div>

        <!-- Eventos de outras casas de apostas -->
        <div id="formEventos">
            <div class="sidenav">
                <h2 class="t-white margin-left-10">CASAS DE APOSTAS</h2>
                <br>
                <h3 class="t-white expand margin-left-10 margin-top-10 desporto" v-on:click="trocarCasaDeAposta(index)" v-for="(betHouse,index) in betHouses" :key="index">{{betHouse}}</h3>
            </div>
            <h3>Eventos de outras casas</h3>
            <div class="events" v-for="(evento,index) in actualHouseBet.events" :key="index">
                <div class="col card margin-top-10 padding-20 border-radius-20 b-grey event">
                    <div class="row w-40 margin-right-50">
                        <div class="col">
                            <h3 class="t-grey">{{evento.equipa1}}</h3>
                            <h2 class="t-grey">-</h2>
                            <h3 class="t-grey">{{evento.equipa2}}</h3>
                        </div>
                        <h5 class="margin-top-5 t-grey-2">{{evento.date}}</h5>
                        <br>
                        <div v-on:click="openEvent(index)" class="card border-radius-20 padding-10 seeMore"> Ver Odds <i class="fas fa-arrow-right"></i></div>
                    </div>
                </div>
            </div>
        </div>

        <div id="eventModal" class="modal">
            <div class="modal-content border-radius-20">
                <span class="close" v-on:click="closeElement('eventModal')">&times;</span>
                <h1 class="w-100 t-grey">{{eventSelected.equipa1}} x {{eventSelected.equipa2}}</h1>
                <h5 class="w-100 t-grey-2">{{eventSelected.date}}</h5>
                <br>
                <div class="row w-100">
                    <div class="margin-top-10 col col-e w-100" v-for="(betType,index) in eventSelected.betTypeList" :key="index">
                        <h4>{{betType.nome}}</h4>
                        <div class="col col-e" v-for="(odd,index) in betType.oddList" :key="index">
                            <div v-on:click="this.addBetSelected(this.eventSelected.eventID,odd.nome)" class="oddSelected row card padding-10 border-radius-20 b-white margin-right-10">
                                <h5>{{odd.nome}}</h5>
                                <h4 class="margin-top-5">{{odd.odd}}</h4>
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

export default {
    name: "OddCreate",
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
            equipa: "",
            jogador: "",
            eventsOtherHouses: [],
            betHouses: [],
            actualHouseBet: new HouseBetModel(),
            eventSelected: new EventModel(),
        }
    },
    async mounted() {
        this.closeElement("formBetType")
        this.closeElement("formEvent")
        this.closeElement("formIndividual")
        this.closeElement("formEquipa")
        this.closeElement("formJogador")
        this.closeElement("formEventos")

        this.esportes = await EventRepository.getSports()
        this.tiposDeApostas = await AdminRepository.getBetTypeStructureBySport(this.esporteEvento)

        this.eventsOtherHouses = await AdminRepository.getEventsOtherHouses()

        this.eventsOtherHouses.forEach((house)=>{
            this.betHouses.push(house["house"])
        })

        const selector = document.getElementById("sportSelected")
        selector.addEventListener("click", (event) => {
            this.esportesSelecionados.push(this.esportes[event.target.value])
        }, false);
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
        async criarEsporte(){
            await AdminRepository.createSport(this.sportModel)

            this.esportes = await EventRepository.getSports()
        },
        async trocarEsporte(){
            console.log(this.esporteEvento)
            this.tiposDeApostas = await AdminRepository.getBetTypeStructureBySport(this.esporteEvento)
            console.log(this.tiposDeApostas)
        },
        trocarCasaDeAposta(index){
            this.actualHouseBet = this.eventsOtherHouses[index]
            console.log(this.actualHouseBet)
        },
        openEvent(index){
            this.eventSelected = this.actualHouseBet.events[index]  
            this.showElement("eventModal")
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
        async criarEquipa(){
            await AdminRepository.createTeam(this.equipa)
        },
        async criarJogador(){
            await AdminRepository.createPlayer(this.jogador)
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

.events{
    width: 100%;
}

.desporto:hover{ 
    cursor: pointer; 
    color: var(--color-text-grey-2);
}

.seeMore{
    background-color: var(--color-white);
}

.seeMore:hover{
    background-color: var(--color-odd-selected);
    cursor: pointer;
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
.colNewOdd{
    width: 100%;
}

.plusButton{
    background-color: var(--color-odd-selected);
    width: 20%;
    height: 100%;
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

.rowForm{
    justify-content: center;
    align-items: center;
    width: 300px;
}
</style>