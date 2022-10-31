<template>
    <main class="col">
        <div class="w-75 padding-30">
            <input class="border-radius-20">
            <br>
            <br>
            <div v-for="(soccerEvent) in soccerEvents" :key="soccerEvent.soccerOddID">
                <div class="col card margin-top-10 padding-20 border-radius-20 b-grey event">
                    <div class="row w-40 margin-right-50">
                        <div class="col">
                            <h3 class="t-grey">{{soccerEvent.team1Name}}</h3>
                            <h2 class="t-grey">-</h2>
                            <h3 class="t-grey">{{soccerEvent.team2Name}}</h3>
                        </div>
                        <h5 class="margin-top-5 t-grey-2">{{soccerEvent.date}}</h5>
                        <br>
                        <div v-on:click="openSoccerEvent(soccerEvent)" class="card border-radius-20 padding-10 seeMore"> Ver mais <i class="fas fa-arrow-right"></i></div>
                    </div>
                    <div class="col w-60">
                        <div v-on:click="this.addBetSelected(soccerEvent.eventID,'team_1_win')" class="oddSelected row card padding-10 border-radius-20 b-white">
                            <h5>{{soccerEvent.team1Name}}</h5>
                            <h4 class="margin-top-5">{{soccerEvent.oddTeam1Wins}}</h4>
                        </div>
                        <div  v-on:click="this.addBetSelected(soccerEvent.eventID,'draw')" class="oddSelected row card padding-10 border-radius-20 b-white">
                            <h5>Empate</h5>
                            <h4 class="margin-top-5">{{soccerEvent.oddDraw}}</h4>
                        </div>
                        <div v-on:click="this.addBetSelected(soccerEvent.eventID,'team_2_win')" class="oddSelected row card padding-10 border-radius-20 b-white">
                            <h5>{{soccerEvent.team2Name}}</h5>
                            <h4 class="margin-top-5">{{soccerEvent.oddTeam2Wins}}</h4>
                        </div>
                    </div>
                </div>
            </div>
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
                                <h4>{{getEventByBet(bet).team1Name}}</h4>-<h4>{{getEventByBet(bet).team2Name}}</h4>
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
                                <h4>Cota: {{getSoccerOddValueByOddSelected(bet.oddSelected,getEventByBet(bet))}}</h4>
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
                    <div class="col padding-10" v-on:click="showElement('paymentModal')">
                        <div class="border-radius-20 card-bet padding-10"><h4>Apostar</h4></div>
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

        <div id="soccerEventModal" class="modal">
            <div class="modal-content border-radius-20">
                <span class="close" v-on:click="closeElement('soccerEventModal')">&times;</span>
                <h1 class="w-100 t-grey">{{soccerEventSelected.team1Name}} x {{soccerEventSelected.team2Name}}</h1>
                <h5 class="w-100 t-grey-2">{{soccerEventSelected.date}}</h5>
                <br>
                <br>
                <div class="col w-100">
                    <div v-on:click="this.addBetSelected(soccerEventSelected.eventID,'team_1_win')" class="oddSelected2 row card padding-10 border-radius-20 b-white margin-right-10">
                        <h5>{{soccerEventSelected.team1Name}}</h5>
                        <h5 class="margin-top-5">{{soccerEventSelected.oddTeam1Wins}}</h5>
                    </div>
                    <div  v-on:click="this.addBetSelected(soccerEventSelected.eventID,'draw')" class="oddSelected2 row card padding-10 border-radius-20 b-white margin-right-10">
                        <h5>Empate</h5>
                        <h5 class="margin-top-5">{{soccerEventSelected.oddDraw}}</h5>
                    </div>
                    <div  v-on:click="this.addBetSelected(soccerEventSelected.eventID,'team_2_win')" class="oddSelected2 row card padding-10 border-radius-20 b-white">
                        <h5>{{soccerEventSelected.team2Name}}</h5>
                        <h5 class="margin-top-5">{{soccerEventSelected.oddTeam2Wins}}</h5>
                    </div>
                </div>
                <br>
                <div class="col w-100">
                    <div v-on:click="this.addBetSelected(soccerEventSelected.eventID,'team_1_or_draw')" class="oddSelected2 row card padding-10 border-radius-20 b-white margin-right-10">
                        <h5>{{soccerEventSelected.team1Name}} ou empate</h5>
                        <h5 class="margin-top-5">{{soccerEventSelected.oddTeam1WinOrDraw}}</h5>
                    </div>
                    <div  v-on:click="this.addBetSelected(soccerEventSelected.eventID,'team_1_or_team_2')" class="oddSelected2 row card padding-10 border-radius-20 b-white margin-right-10">
                        <h5>{{soccerEventSelected.team1Name}} ou {{soccerEventSelected.team2Name}}</h5>
                        <h5 class="margin-top-5">{{soccerEventSelected.oddTeam1orTeam2}}</h5>
                    </div>
                    <div  v-on:click="this.addBetSelected(soccerEventSelected.eventID,'team_2_or_draw')" class="oddSelected2 row card padding-10 border-radius-20 b-white">
                        <h5>{{soccerEventSelected.team2Name}} ou empate</h5>
                        <h5 class="margin-top-5">{{soccerEventSelected.oddTeam2WinOrDraw}}</h5>
                    </div>
                </div>
                <br>
                <div class="col w-100">
                    <div v-on:click="this.addBetSelected(soccerEventSelected.eventID,'both_score_yes')" class="oddSelected2 row card padding-10 border-radius-20 b-white margin-right-10">
                        <h5>Ambos marcam</h5>
                        <h4 class="margin-top-5">{{soccerEventSelected.oddBothScore}}</h4>
                    </div>
                    <div  v-on:click="this.addBetSelected(soccerEventSelected.eventID,'both_score_no')" class="oddSelected2 row card padding-10 border-radius-20 b-white">
                        <h5>Ambos não marcam</h5>
                        <h4 class="margin-top-5">{{soccerEventSelected.oddBothNoScore}}</h4>
                    </div>
                </div>
                <br>
                <div class="col w-100">
                    <div v-on:click="this.addBetSelected(soccerEventSelected.eventID,'team_1_without_draw')" class="oddSelected2 row card padding-10 border-radius-20 b-white margin-right-10">
                        <h5>{{soccerEventSelected.team1Name}} sem empate</h5>
                        <h5 class="margin-top-5">{{soccerEventSelected.oddTeam1WithoutDraw}}</h5>
                    </div>
                    <div  v-on:click="this.addBetSelected(soccerEventSelected.eventID,'team_2_without_draw')" class="oddSelected2 row card padding-10 border-radius-20 b-white">
                        <h5>{{soccerEventSelected.team2Name}} sem empate</h5>
                        <h5 class="margin-top-5">{{soccerEventSelected.oddTeam2WithoutDraw}}</h5>
                    </div>
                </div>
                <br>
                <div class="col w-100">
                    <div v-on:click="this.addBetSelected(soccerEventSelected.eventID,'total_goals_more_15')" class="oddSelected2 row card padding-10 border-radius-20 b-white margin-right-10">
                        <h5>Mais que 1.5</h5>
                        <h5 class="margin-top-5">{{soccerEventSelected.oddMoreThan15}}</h5>
                    </div>
                    <div  v-on:click="this.addBetSelected(soccerEventSelected.eventID,'total_goals_more_25')" class="oddSelected2 row card padding-10 border-radius-20 b-white">
                        <h5>Mais que 2.5</h5>
                        <h5 class="margin-top-5">{{soccerEventSelected.oddMoreThan25}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import EventRepository from '@/data/repository/EventRepository'
import SoccerEventModel from '@/data/model/SoccerEventModel'
import BetModel from '@/data/model/BetModel'
import BuletinModel from '@/data/model/BuletinModel'

export default{
    name: "HomePage",
    data(){
        return{
            soccerEvents:[],
            soccerEventSelected: new SoccerEventModel(),
            betsSelected:[],
            buletinModel: new BuletinModel(),
        }
    },
    async mounted(){
        this.soccerEvents = await EventRepository.getSoccerEvents()
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
        addBetSelected(soccerEventIndex, oddSelected){
            //console.log(soccerEventIndex, targetBet)
            var bet = new BetModel(-1,soccerEventIndex,oddSelected,-1,"soccer")
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
        openSoccerEvent(soccerEvent){
            this.soccerEventSelected = soccerEvent 
            this.showElement("soccerEventModal")
        },
        getEventByBet(bet){
            for (var i = 0; i < this.soccerEvents.length; i++){
                if (this.soccerEvents[i].eventID == bet.eventID)
                    return this.soccerEvents[i]
            }
        },
        getSoccerOddValueByOddSelected(oddSelected,event){
            console.log(oddSelected)
            if (oddSelected == "team_1_win") return event.oddTeam1Wins
            if (oddSelected == "team_2_win") return event.oddTeam2Wins
            if (oddSelected == "team_1_or_draw") return event.oddTeam1WinOrDraw
            if (oddSelected == "team_2_or_draw") return event.oddTeam2WinOrDraw
            if (oddSelected == "team_2_or_team_2") return event.oddTeam1orTeam2
            if (oddSelected == "both_score_yes") return event.oddBothScore
            if (oddSelected == "both_score_no") return event.oddBothNoScore
            if (oddSelected == "team_1_without_draw") return event.oddTeam1WithoutDraw
            if (oddSelected == "team_2_without_draw") return event.oddTeam2WithoutDraw
            if (oddSelected == "total_goals_more_15") return event.oddMoreThan15
            if (oddSelected == "total_goals_more_25") return event.oddMoreThan25
            if (oddSelected == "draw") return event.oddDraw
        },
        changeBuletinType(type){
            this.buletinModel.type = type
        },
        getCota(){
            var cotaTotalM = 1;
            var cotaTotalS = 0

            if (this.buletinModel.type == "m"){
                for (var i = 0; i < this.betsSelected.length; i++){
                    cotaTotalM = cotaTotalM * this.getSoccerOddValueByOddSelected(this.betsSelected[i].oddSelected,this.getEventByBet(this.betsSelected[i]))   
                }

                return cotaTotalM
            }else if (this.buletinModel.type == "s"){
                for (var j = 0; j < this.betsSelected.length; j++){
                    cotaTotalS = cotaTotalS + this.getSoccerOddValueByOddSelected(this.betsSelected[j].oddSelected,this.getEventByBet(this.betsSelected[j]))   
                }
                return cotaTotalS
            }
        }
    }
}

</script>

<style scoped>

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
    background-color: var(--color-text-grey);
}

.event:hover > div > div> h3{
    color: var(--color-white);
}
</style>