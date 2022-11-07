<template>
    <main class="col">
        <div class="sidenav">
            <h2 class="t-white margin-left-10"><i class="fas fa-volleyball-ball margin-right-5"></i>DESPORTOS</h2>
            <br>
            <h3 class="t-white expand margin-left-10 margin-top-10 desporto" v-on:click="trocarEsporte(esporte.idesporte)" v-for="(esporte,index) in esportes" :key="index">{{esporte.nome}}</h3>
        </div>
        <div class="w-60 eventos padding-30">
            <h4><i class="fas fa-search margin-right-5"></i>Procurar equipa</h4>
            <input id="procurarEquipaInput" class="border-radius-20 margin-top-5">
            <br>
            <br>
            <div v-for="(evento,index) in eventosPorDesportoFiltro" :key="index">
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
            <h4 v-if="eventosPorDesporto.length == 0">Não há eventos deste desporto</h4>
        </div>
        <div class="w-25 padding-30">
            <div class="row row-c card-bulletin border-radius-20 padding-20">
                <div><h2 class="t-grey">BOLETIM</h2></div>
                <br>
                <div class="w-90 col col-e border-radius-20">
                    <div v-on:click="changeBuletinType('s')" class="card w-90 padding-10 oddType border-radius-20 margin-right-20"><h4 class="t-grey">Simples</h4></div>
                    <div v-on:click="changeBuletinType('m')" class="card w-90 padding-10 oddType border-radius-20"><h4 class="t-grey">Múltiplas</h4></div>
                </div>
                <br>
                <div class="w-90" v-for="(bet,index) in betsSelected" :key="bet.betID">
                    <div class="card card-betSelected row padding-10 border-radius-20">
                        <div class="col border-radius-20">
                            <div class="col">
                                <h4>{{bet.event.equipa1}}</h4>-<h4>{{bet.event.equipa2}}</h4>
                            </div>
                            <span class="close" v-on:click="removeBetSelected(index)">&times;</span>
                        </div>
                        <br>
                        <hr>
                        <br>
                        <div class="row border-radius-20">
                            <div class="col">
                                <h4 clas="t-grey">Resultado: </h4>
                                <h4>{{bet.oddSelected}}</h4>
                            </div>
                            <div class="card border-radius-10 padding-10 margin-top-10">
                                <h4>Cota: {{getOddValueByOddSelected(bet.oddSelected,bet.event)}}</h4>
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
                <br>
                <div class="col-e card-value w-90 card border-radius-20">
                    <div class="col padding-10">
                        <h4 class="t-grey">Cota:</h4>
                        <h4 class="t-grey">{{this.getCota()}}</h4>
                    </div>
                    <div class="col padding-10 center">
                        <h4 class="t-grey margin-right-5">Montante</h4>
                        <input placeholder="valor" class="border-radius-20 margin-right-5" v-model="this.buletinModel.amount">
                        <h4 class="t-grey">$</h4>
                    </div>
                </div>
                <div class="col-e card-value w-90 card margin-top-10 border-radius-20">
                    <div class="row row-c padding-10">
                        <h4 class="t-grey">Total</h4>
                        <h4 class="t-grey margin-top-10">{{this.getCota()*this.buletinModel.amount}}</h4>
                    </div>
                    <div class="col padding-10" v-on:click="criarBoletim()">
                        <div class="border-radius-20 card-bet padding-10 expand"><h4 class="t-white">Apostar</h4></div>
                    </div>
                </div>

                <div id="paymentModal" class="modal">
                    <div class="modal-content border-radius-20">
                        <span class="close" v-on:click="closeElement('paymentModal')">&times;</span>
                        <div class="row row-c">
                            <h2 id="pagamentoTitle" class="t-grey">PAGAMENTO</h2>
                            <h2 id="parabensTitle" class="t-grey" style="display:none">PARABÉNS</h2>
                            
                            <br>
                            <br>
                            
                            <div id="payment-1stage" style="display:flex" class="col col-e">
                                <h4 class="w-30 t-grey-2">Método de pagamento:</h4>
                                <div class="col w-70">
                                    <div class="card padding-20 card-p margin-right-20" v-on:click="multibancoMethod">
                                        <img height="50" src="@/assets/Multibanco.png"> 
                                    </div>
                                    <div class="card padding-20 card-p margin-right-20" v-on:click="mbwayMethod">
                                        <img height="50" src="@/assets/MBWay.png"> 
                                    </div>
                                    <div class="card padding-20 card-p margin-right-20" v-on:click="visaMethod">
                                        <img height="50" src="@/assets/Visa.png"> 
                                    </div>
                                </div>
                            </div>

                            <div id="payment-2stage-mbway" style="display:none" class="row row-c">
                                <div class="col">
                                    <img height="50" src="@/assets/MBWay.png">
                                    <div class="col col-e mbway-infos">
                                        <select class="mbwaySelected">
                                            <option>+351</option>
                                        </select>
                                        <hr class="margin-right-5 margin-left-5 mbwayHR">
                                        <input placeholder="Nº de telemóvel" class="mbwayInput">
                                    </div>
                                    <div class="row row-c">
                                        <div class="border-radius-10 card-pay padding-10" v-on:click="payMBWay()"><h4>PAGAR</h4></div>
                                        <div class="border-radius-10 card-cancel padding-10 margin-top-10"><h4>CANCELAR</h4></div>
                                    </div>
                                </div>
                                <br>
                                <h4 class="t-grey">Será enviada uma notificação para o seu télemovel. Aceite a transação com o seu PIN MB WAY dentro do tempo limite indicado.</h4>
                            </div>

                            <div id="payment-3stage" style="display:none">
                                <br>
                                <h3 class="t-grey-2">Pagamento efetuado com sucesso.</h3>
                                <br>
                            </div>

                            <br>
                            <br>
                            <div class="col col-progress">
                            <div id="circle-1" style="background:var(--color-background-nav)" class="circle">1</div> 
                            <hr class="hr-p">
                            <div id="circle-2" class="circle">2</div>
                            <hr class="hr-p">
                            <div id="circle-3" class="circle">3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isAdmin()" v-on:click="this.$router.push('/odd-create')" class="button-float expand but">
            <i class="fas fa-plus margin-right-5"></i>Criar Evento
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
                            <div v-on:click="this.addBetSelected(this.eventSelected,odd.nome)" class="oddSelected row card padding-10 border-radius-20 b-white margin-right-10">
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
import EventRepository from '@/data/repository/EventRepository'
import EventModel from '@/data/model/EventModel'
import BetModel from '@/data/model/BetModel'
import BuletinModel from '@/data/model/BuletinModel'
import BuletinRepository from '@/data/repository/BuletinRepository'

export default{
    name: "HomePage",
    data(){
        return{
            soccerEvents:[],
            eventSelected: new EventModel(),
            betsSelected:[],
            buletinModel: new BuletinModel(),
            eventosPorDesporto:[],
            eventosPorDesportoFiltro:[],
            esportes: []
        }
    },
    async mounted(){
        this.esportes = await EventRepository.getSports()
        this.eventosPorDesporto = await EventRepository.getSportsColetiveEventsByID(1)
        this.eventosPorDesportoFiltro = this.eventosPorDesporto
        
        var procurarEquipaInput = document.getElementById("procurarEquipaInput")
        procurarEquipaInput.addEventListener("change", (event) => {
            var equipa = event.target.value
            var eventosDaEquipa = []
            this.eventosPorDesporto.forEach(e =>{
                if (e.equipa1 == equipa || e.equipa2 == equipa){
                    eventosDaEquipa.push(e)
                }
            })

            if (eventosDaEquipa.length > 0){
                this.eventosPorDesportoFiltro = eventosDaEquipa
            }else{
                this.eventosPorDesportoFiltro = this.eventosPorDesporto
            }
        }, false);
    },
    methods:{
        closeElement(elementID){
            var modal = document.getElementById(elementID);
            modal.style.display = "none";
        },
        showElement(elementID){
            var modal = document.getElementById(elementID);
            modal.style.display = "block";
        },
        progressCircle(circleID){
            var circle = document.getElementById(circleID);
            circle.style.background="var(--color-background-nav)"
        },
        deprogressCircle(circleID){
            var circle = document.getElementById(circleID);
            circle.style.background="var(--color-background)"
        },
        multibancoMethod(){
            this.closeElement("payment-1stage")    
        },
        mbwayMethod(){
            this.closeElement("payment-1stage")  
            this.deprogressCircle("circle-1")
            this.progressCircle("circle-2")
            this.showElement("payment-2stage-mbway")
        },
        visaMethod(){
            this.closeElement("payment-1stage")  
        },
        payMBWay(){
            this.closeElement("payment-2stage-mbway")
            this.showElement("payment-3stage")

            this.deprogressCircle("circle-2")
            this.progressCircle("circle-3")
        },
        addBetSelected(event, oddSelected){
            var bet = new BetModel(-1,event,oddSelected,-1)
            this.betsSelected.push(bet)
        },
        removeBetSelected(index){
            if (index > -1) { 
                this.betsSelected.splice(index, 1);
            }
        },
        isAdmin(){
            // Return true if users is admin
            return true
        },
        openEvent(index){
            this.eventSelected = this.eventosPorDesporto[index]  
            this.showElement("eventModal")
        },
        getOddValueByOddSelected(oddSelected,event){
            console.log(oddSelected)
            
            for(var betType of event.betTypeList){
                for(var odd of betType.oddList){
                    if (odd.nome == oddSelected) return odd.odd
                }
            }
        },
        changeBuletinType(type){
            this.buletinModel.type = type
        },
        getCota(){
            var cotaTotalM = 1;
            var cotaTotalS = 0

            if (this.buletinModel.type == "m"){
                for (var i = 0; i < this.betsSelected.length; i++){
                    cotaTotalM = cotaTotalM * this.getOddValueByOddSelected(this.betsSelected[i].oddSelected,this.betsSelected[i].event)   
                }

                return cotaTotalM
            }else if (this.buletinModel.type == "s"){
                for (var j = 0; j < this.betsSelected.length; j++){
                    cotaTotalS = cotaTotalS + this.getOddValueByOddSelected(this.betsSelected[j].oddSelected,this.betsSelected[j].event)   
                }
                return cotaTotalS
            }
        },
        async criarBoletim(){
            this.buletinModel.gain = this.getCota()*this.buletinModel.amount
            try{
                await BuletinRepository.createBuletin(this.buletinModel,this.betsSelected)
            }catch(error){
                console.log(error)
            }
        },
        async trocarEsporte(idEsporte){
            this.eventosPorDesporto = await EventRepository.getSportsColetiveEventsByID(idEsporte)
            this.eventosPorDesportoFiltro = this.eventosPorDesporto
            //console.log(this.eventosPorDesporto)
        }
    }
}

</script>

<style scoped>
.desporto:hover{ 
    cursor: pointer; 
    color: var(--color-text-grey-2);
}
.eventos{
    margin-left: 15%;
}

.padding-30{
    padding-right: 30px;
    padding-left: 30px;
}

input{
    height: 30px;
    width: 100%;
}

.but{
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-odd-selected);
}

.but:hover{
    cursor: pointer;
}
.oddSelected:hover{
    background-color: var(--color-odd-selected);
    cursor: pointer;
    border: 2px solid var(--color-odd-selected);
}

.oddSelected{
    width: 120px;
    justify-content: center;
    align-items: center;
}

.seeMore{
    background-color: var(--color-white);
}

.seeMore:hover{
    background-color: var(--color-odd-selected);
    color: var(--color-text-white);
    cursor: pointer;
}

.oddSelected2:hover{
    background-color: var(--color-odd-selected);
    cursor: pointer;
    border: 2px solid var(--color-odd-selected);
}

.oddSelected2{
    width: 100%;
    justify-content: center;
    align-items: center;
}

a{
    text-decoration: none;
}

.center{
    display: flex;
    align-items: center;
}
.col-progress{
    display:flex;
    align-items: center;
}
.hr-p{
    width: 20px;
    height: 2px;
    background-color: var(--color-background-nav);
}
.circle{
    border-radius: 50px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background);
}
.row-c{
    align-items: center;
}

.oddType{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white);
}
.card-value{
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--color-white);
}

.oddType:hover{
    cursor: pointer;
    background-color: var(--color-grey);
}
.oddType:hover h4{
    color: var(--color-white)
}
.card-bulletin{
    background-color: var(--color-background);
    border: 2px solid var(--color-background-nav);
    position: fixed;
    z-index: 100;
    top:60px;
    overflow-x: scroll;
    max-height: 85%;
    overflow-x:hidden
}

.card-bet{
    background-color: var(--color-odd-selected);
    width: 130px;
    justify-content: center;
    display: flex;
    cursor:pointer;
}

.card-pay{
    background-color: var(--color-odd-selected);
    width: 130px;
    justify-content: center;
    display: flex;
    cursor:pointer;
}

.card-cancel{
    background-color: var(--color-background);
    width: 130px;
    justify-content: center;
    display: flex;
    cursor:pointer;
}

.card-p{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.card-p:hover{
    background-color: var(--color-background-nav);
    cursor: pointer;
}

.col-e{
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.mbwayInput{
    height: 30px;
}

.mbwaySelected{
    height: 30;
}

.mbwayHR{
    width: 10px;
    height: 2px;
    background-color: var(--color-background-nav);
}

#payment-1stage{
    height: 200px;
}

#payment-2stage-mbway{
    height: 200px;
}

#payment-3stage{
    height: 200px;
}

.card-betSelected{
    background-color: var(--color-white);
}

.event:hover{
    background-color: var(--color-background-nav-3);
}

.event:hover > div > div> h3{
    color: var(--color-white);
}

.event:hover > div > h5{
    color: var(--color-white);
}

.sidenav {
    height: 100%;
    width: 15%;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 100px;
    background-color: var(--color-background-nav-2);
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