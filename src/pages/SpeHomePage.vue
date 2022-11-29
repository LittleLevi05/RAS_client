<template>
    <main>
        <div class="col w-90">
            
            <div class="w-40">
                <!-- Formulario para criar um tipo de aposta -->
                <div id="newBetType" class="item-spe row w-90">
                    <h3><i class="fas fa-folder-plus margin-right-5"></i>CRIAR TIPO DE APOSTA</h3>
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

                <br>

                <!-- Formulario para criar um evento -->
                <div class="item-spe row w-90">
                    <h3><i class="fas fa-folder-plus margin-right-5"></i>CRIAR EVENTO</h3>

                    <div class="col">
                        <select v-model="this.tipoEsporte" v-on:change="trocarTipoEsporte" id="sportSelected" class="border-radius-20 placeholder margin-top-10">               
                            <option>Coletivo</option>
                            <option>Individual</option>
                            <option>Dual</option>
                        </select>

                        <select name="sportSelectedEvent" v-model="this.esporteEvento" v-on:change="trocarEsporte" id="sportSelected" class="border-radius-20 placeholder margin-top-10 margin-left-10">               
                            <option v-for="(esporte) in esportes" :key="esporte.idesporte" :value="esporte.idesporte">{{esporte.nome}}</option>
                        </select> 
                    </div> 

                    <div id="formColetivo" class="col">
                        <select v-model="this.eventColetive.team1Name" class="border-radius-20 placeholder margin-top-10 margin-left-10">               
                            <option v-for="(team,index) in teams" :key="index" :value="team.id">{{team.nome}}</option>
                        </select> 
                        <select v-model="this.eventColetive.team2Name" id="sportSelected" class="border-radius-20 placeholder margin-top-10 margin-left-10">               
                            <option v-for="(team,index) in teams" :key="index" :value="team.id">{{team.nome}}</option>
                        </select>   
                    </div>

                    <div id="formDual" class="col">
                        <select v-model="this.eventDual.player1Name" class="border-radius-20 placeholder margin-top-10 margin-left-10">               
                            <option v-for="(player,index) in players" :key="index" :value="player.id">{{player.nome}}</option>
                        </select> 
                        <select v-model="this.eventDual.player2Name" id="sportSelected" class="border-radius-20 placeholder margin-top-10 margin-left-10">               
                            <option v-for="(player,index) in players" :key="index" :value="player.id">{{player.nome}}</option>
                        </select>       
                    </div>

                    <div id="formIndividual" class="row">   
                        <select id="playerSelected" class="border-radius-20 placeholder margin-top-10 margin-left-10">               
                            <option v-for="(player,index) in players" :key="index" :value="player.id">{{player.nome}}</option>
                        </select> 
                        <div id={{player.nome}} class="card border-radius-10 padding-10 margin-top-10 w-90 row" v-for="(player,index) in individualPlayersSelected" :key="index">
                            <span class="close" v-on:click="removeElementFromList(index,this.individualPlayersSelected)">&times;</span>
                            <h5> {{player.nome}} </h5> 
                        </div>
                    </div>

                    <input type="datetime-local" v-model="eventModel.date" id="start" name="trip-start" min="2022-01-01" max="2023-12-31" class="margin-top-10">

                    <div class="margin-top-10" v-for="(tipoDeAposta) in this.tiposDeApostas" :key=tipoDeAposta.nome>
                        <h3>{{tipoDeAposta.nome}}</h3>
                        <div v-for="(odd,index) in tipoDeAposta.oddList" :key="index">
                            <input v-model="odd.odd" :placeholder=odd.nome class="margin-top-10">
                        </div>
                    </div>

                    <button v-on:click="addEvent" class="createEvent-button padding-10 margin-top-10">
                        <H4 class="t-white">Criar Evento</H4>
                    </button>
                </div>
            </div>

            <div class="w-60 col">
                <!-- Eventos -->

                <!-- Eventos Coletivos -->
                <div v-if="eventoColetivo" class="w-50 justify-center">
                    <div class="item-spe w-80">
                        <h3><i class="fas fa-trophy margin-right-5"></i>EVENTOS</h3>

                        <br>
                        
                        <ul class="col betHouses">
                            <li class="t-white expand margin-left-5 margin-top-5 desporto" v-on:click="trocarEsporte2(esporte)" v-for="(esporte,index) in esportes" :key="index">{{esporte.nome}}</li>
                        </ul>

                        <div v-for="(evento,index) in eventosColetivos" :key="index">
                            <div class="col card margin-top-10 padding-20 border-radius-10 b-grey event">
                                <div class="row w-100 margin-right-50">
                                    <div class="col-2">
                                        <h4 class="t-grey margin-right-5">{{evento.team1Name}}</h4>
                                        <h3 class="t-grey  margin-right-5"> x </h3>
                                        <h4 class="t-grey">{{evento.team2Name}}</h4>
                                    </div>
                                    <h5 class="margin-top-5 t-grey-2">{{evento.date}}</h5>
                                    <br>
                                    <div v-on:click="openEventColetive(index)" class="card border-radius-10 padding-10 seeMore"> Ver Odds <i class="fas fa-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Eventos Duais -->
                <div v-if="eventoDual" class="w-50 justify-center">
                    <div class="item-spe w-80">
                        <h3><i class="fas fa-trophy margin-right-5"></i>EVENTOS</h3>

                        <br>
                        
                        <ul class="col betHouses">
                            <li class="t-white expand margin-left-5 margin-top-5 desporto" v-on:click="trocarEsporte2(esporte)" v-for="(esporte,index) in esportes" :key="index">{{esporte.nome}}</li>
                        </ul>

                        <div v-for="(evento,index) in eventosDuais" :key="index">
                            <div class="col card margin-top-10 padding-20 border-radius-10 b-grey event">
                                <div class="row w-100 margin-right-50">
                                    <div class="col-2">
                                        <h4 class="t-grey margin-right-5">{{evento.player1Name}}</h4>
                                        <h3 class="t-grey  margin-right-5"> x </h3>
                                        <h4 class="t-grey">{{evento.player2Name}}</h4>
                                    </div>
                                    <h5 class="margin-top-5 t-grey-2">{{evento.date}}</h5>
                                    <br>
                                    <div v-on:click="openEventDual(index)" class="card border-radius-10 padding-10 seeMore"> Ver Odds <i class="fas fa-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Eventos de outras casas de apostas -->
                <div class="w-50 justify-center">
                    <div class="item-spe w-80">
                        <h3><i class="fas fa-home margin-right-5"></i>EVENTOS DE OUTRAS CASAS</h3>

                        <br>
                        
                        <ul class="col betHouses">
                            <li class="t-white expand desporto margin-right-5 margin-top-5" v-on:click="trocarCasaDeAposta(index)" v-for="(betHouse,index) in betHouses" :key="index">
                                {{betHouse}}
                            </li>
                        </ul>

                        <div v-for="(evento,index) in actualHouseBet.events" :key="index">
                            <div class="col card margin-top-10 padding-20 border-radius-10 b-grey event">
                                <div class="row w-100 margin-right-50">
                                    <div class="col-2">
                                        <h4 class="t-grey margin-right-5">{{evento.team1Name}}</h4>
                                        <h3 class="t-grey margin-right-5">X</h3>
                                        <h4 class="t-grey">{{evento.team2Name}}</h4>
                                    </div>
                                    <h5 class="margin-top-5 t-grey-2">{{evento.date}}</h5>
                                    <br>
                                    <div v-on:click="openEvent(index)" class="card border-radius-10 padding-10 seeMore"> Ver Odds <i class="fas fa-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div id="eventColetiveEditModal" class="modal">
            <div class="modal-content border-radius-10">
                <span class="close" v-on:click="closeElement('eventColetiveEditModal')">&times;</span>
                <h1 class="w-100 t-grey">{{eventSelected.team1Name}} x {{eventSelected.team2Name}}</h1>
                <h5 class="w-100 t-grey-2 margin-top-5"><i class="fas fa-calendar-week margin-right-5"></i>{{this.dateToString(eventSelected.date)}}</h5>
                <div class="row w-100">
                    <div class="margin-top-10 row w-100" v-for="(betType,index) in eventSelected.betTypeList" :key="index">
                        <h4><i class="far fa-credit-card margin-right-5"></i>{{betType.nome}}</h4>
                        <div class="col w-100" v-for="(odd,index) in betType.oddList" :key="index">
                            <div v-on:click="this.addBetSelected(this.eventSelected.eventID,odd.nome)" class="w-100 row padding-10 border-radius-10 b-white margin-right-10">
                                <h5>{{odd.nome}}</h5>
                                <input v-model="odd.odd" class="border-radius-20 placeholder">
                            </div>     
                        </div>
                    </div>
                </div>
                <br>
                <div class="col">
                    <button v-on:click="updateEvent()" class="createEvent-button margin-right-10 padding-10">
                        <H4 class="t-white">ATUALIZAR</H4>
                    </button>
                    <button v-on:click="closeElement('eventColetiveEditModal')" class="createEvent-button padding-10">
                        <H4 class="t-white">CANCELAR</H4>
                    </button>
                </div>
            </div>
        </div>

        <div id="eventDualEditModal" class="modal">
            <div class="modal-content border-radius-10">
                <span class="close" v-on:click="closeElement('eventDualEditModal')">&times;</span>
                <h1 class="w-100 t-grey">{{eventSelected.player1Name}} x {{eventSelected.player2Name}}</h1>
                <h5 class="w-100 t-grey-2 margin-top-5"><i class="fas fa-calendar-week margin-right-5"></i>{{this.dateToString(eventSelected.date)}}</h5>
                <div class="row w-100">
                    <div class="margin-top-10 row w-100" v-for="(betType,index) in eventSelected.betTypeList" :key="index">
                        <h4><i class="far fa-credit-card margin-right-5"></i>{{betType.nome}}</h4>
                        <div class="col w-100" v-for="(odd,index) in betType.oddList" :key="index">
                            <div v-on:click="this.addBetSelected(this.eventSelected.eventID,odd.nome)" class="w-100 row padding-10 border-radius-10 b-white margin-right-10">
                                <h5>{{odd.nome}}</h5>
                                <input v-model="odd.odd" class="border-radius-20 placeholder">
                            </div>     
                        </div>
                    </div>
                </div>
                <br>
                <div class="col">
                    <button v-on:click="updateEvent()" class="createEvent-button margin-right-10 padding-10">
                        <H4 class="t-white">ATUALIZAR</H4>
                    </button>
                    <button v-on:click="closeElement('eventDualEditModal')" class="createEvent-button padding-10">
                        <H4 class="t-white">CANCELAR</H4>
                    </button>
                </div>
            </div>
        </div>


        <div id="eventModal" class="modal">
            <div class="modal-content border-radius-10">
                <span class="close" v-on:click="closeElement('eventModal')">&times;</span>
                <h1 class="w-100 t-grey">{{eventSelected.team1Name}} x {{eventSelected.team2Name}}</h1>
                <h5 class="w-100 t-grey-2">{{eventSelected.date}}</h5>
                <br>
                <div class="row w-100">
                    <div class="margin-top-10 col col-e w-100" v-for="(betType,index) in eventSelected.betTypeList" :key="index">
                        <h4>{{betType.nome}}</h4>
                        <div class="col col-e" v-for="(odd,index) in betType.oddList" :key="index">
                            <div v-on:click="this.addBetSelected(this.eventSelected.eventID,odd.nome)" class="oddSelected row card padding-10 border-radius-10 b-white margin-right-10">
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
import EventColetive from '@/data/model/EventColetive'
import EventIndividual from '@/data/model/EventIndividual'
import EventDual from '@/data/model/EventDual'
import AdminRepository from '@/data/repository/AdminRepository'
import EventRepository from '@/data/repository/EventRepository'

export default {
    name: "SpeHomePage",
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
            eventColetive: new EventColetive(),
            eventDual: new EventDual(),
            eventIndividual: new EventIndividual(),
            players: [],
            teams: [],
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
        this.closeElement("formIndividual")
        this.closeElement("formDual")

        this.teams = await EventRepository.getTeams()
        this.players = await EventRepository.getPlayers()

        this.esportes = await EventRepository.getSports()
        this.tiposDeApostas = await EventRepository.getBetTypeStructureBySport(this.esporteEvento)

        this.eventosColetivos = await EventRepository.getEventsBySportID(1,"c")
        // this.eventosPorDesportoFiltro = this.eventosPorDesporto

        const selector = document.getElementById("sportSelected")
        selector.addEventListener("click", (event) => {
            this.esportesSelecionados.push(this.esportes[event.target.value])
        }, false);

        const selector2 = document.getElementById("playerSelected")
        selector2.addEventListener("click", (event) => {
            this.players.forEach(p =>{
                if (p.id == event.target.value){
                    this.individualPlayersSelected.push(p)
                }
            })
        }, false);

        this.eventsOtherHouses = await EventRepository.getEventsOtherHouses()

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
            modal.style.display = "flex";
        },
        changeForm(elementID) {
            this.closeElement(this.lastFormSelected)
            this.showElement(elementID)
            this.lastFormSelected = elementID
        },
        changeForm2(elementID) {
            // console.log(elementID)
            this.closeElement(this.ultimoTipoDeEsporteSelecionado)
            this.showElement(elementID)
            this.ultimoTipoDeEsporteSelecionado = elementID
        },
        async createSport() {
            await AdminRepository.createSport(this.sportModel)
        },
        async createBetType() {
            await AdminRepository.createBetType(this.betTypeModel)
            this.tiposDeApostas = await EventRepository.getBetTypeStructureBySport(this.esporteEvento)
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

            await EventRepository.createBetType(betType)
        },
        async trocarEsporte(){
            console.log(this.esporteEvento)
            this.tiposDeApostas = await EventRepository.getBetTypeStructureBySport(this.esporteEvento)
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
        openEventColetive(index){
            this.eventSelected = this.eventosColetivos[index]  
            this.showElement("eventColetiveEditModal")
        },
        openEventDual(index){
            this.eventSelected = this.eventosDuais[index]  
            this.showElement("eventDualEditModal")
        },
        async trocarTipoEsporte(){
            // console.log(this.tipoEsporte)
            if (this.tipoEsporte == "Coletivo"){
                this.changeForm2("formColetivo")
            }else if(this.tipoEsporte == "Individual"){
                this.changeForm2("formIndividual")
            }else if(this.tipoEsporte == "Dual"){
                this.changeForm2("formDual")
            }
        },
        async addEvent(){
            if(this.tipoEsporte == "Coletivo"){
                this.eventColetive.date = this.eventModel.date
                this.eventColetive.betTypeList = this.tiposDeApostas
                this.eventColetive.sportID = this.esporteEvento
                EventRepository.addEventColetive(this.eventColetive)
            }else if(this.tipoEsporte == "Dual"){
                this.eventDual.date = this.eventModel.date
                this.eventDual.betTypeList = this.tiposDeApostas
                this.eventDual.sportID = this.esporteEvento
                EventRepository.addEventDual(this.eventDual)
            }else if(this.tipoEsporte == "Individual"){
                this.eventIndividual.date = this.eventModel.date 
                this.eventIndividual.betTypeList = this.tiposDeApostas
                this.eventDual.sportID = this.esporteEvento
                var i = 0
                this.eventIndividual.players = {}
                this.individualPlayersSelected.forEach(p => {
                    this.eventIndividual.players[i] = p.id
                    i = i + 1
                })
                EventRepository.addEventIndiviual(this.eventIndividual)
            }
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
            //this.eventosPorDesporto = await EventRepository.getSportsColetiveEventsByID(idEsporte)
            //this.eventosPorDesportoFiltro = this.eventosPorDesporto
            //console.log(this.eventosPorDesporto)
        },
        dateToString(date){
            return date
        },
        updateEvent(){
            console.log(this.eventSelected)
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