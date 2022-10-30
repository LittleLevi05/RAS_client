<template>
    <main class="col">
        <div class="w-70 padding-30">
            <input class="border-radius-20">
            <br>
            <br>
            <div v-for="(game,index) in games" :key="game.id">
                <div class="col card margin-top-10 padding-20 border-radius-20 b-grey">
                    <div class="row w-30 margin-right-50">
                        <div class="col">
                            <h2 class="t-grey">{{game.teamHome}}</h2>
                            <h2 class="t-grey">-</h2>
                            <h2 class="t-grey">{{game.teamAway}}</h2>
                        </div>
                        <h5 class="margin-top-5 t-grey-2">{{game.date}}</h5>
                    </div>
                    <div class="col w-70">
                        <div v-on:click="this.addBetSelected(index,'teamHome')" class="oddSelected row card padding-10 border-radius-20 b-white">
                            <h3>{{game.teamHome}}</h3>
                            <h3 class="margin-top-5">{{game.oddTeamHome}}</h3>
                        </div>
                        <div  v-on:click="this.addBetSelected(index,'oddDraw')" class="oddSelected row card padding-10 border-radius-20 b-white">
                            <h3>Empate</h3>
                            <h3 class="margin-top-5">{{game.oddDraw}}</h3>
                        </div>
                        <div  v-on:click="this.addBetSelected(index,'teamAway')" class="oddSelected row card padding-10 border-radius-20 b-white">
                            <h3>{{game.teamAway}}</h3>
                            <h3 class="margin-top-5">{{game.oddTeamAway}}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-30 padding-30">
            <div class="row row-c card-bulletin border-radius-60 padding-20">
                <div><h2 class="t-grey">BOLETIM</h2></div>
                <br>
                <div class="w-90 col col-e">
                    <div class="card w-90 padding-10 oddType"><h4 class="t-grey">Simples</h4></div>
                    <div class="card w-90 padding-10 oddType"><h4 class="t-grey">Múltiplas</h4></div>
                </div>
                <br>
                <div class="w-90" v-for="(bet,index) in betsSelected" :key="bet.game.id">
                    <div class="card card-betSelected row padding-10">
                        <div class="col">
                            <div class="col">
                                <h4>{{bet.game.teamHome}}</h4>-<h4>{{bet.game.teamAway}}</h4>
                            </div>
                            <span class="close" v-on:click="removeBetSelected(index)">&times;</span>
                        </div>
                        <br>
                        <hr>
                        <br>
                        <div class="col">
                            <div class="col">
                                <h4 clas="t-grey">Resultado:</h4>-
                            </div>
                            <div class="card border-radius-5 padding-10">
                                <h4>Cota: {{bet.game.oddTeamHome}}</h4>
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
                <br>
                <div class="col-e card-value w-90 card">
                    <div class="col padding-10">
                        <h4 class="t-grey">Cota:</h4>
                        <h4 class="t-grey">(valor)</h4>
                    </div>
                    <div class="col padding-10">
                        <h4 class="t-grey">Montante:</h4>
                        <h4 class="t-grey">(valor)</h4>
                        <h4 class="t-grey">$</h4>
                    </div>
                </div>
                <div class="col-e card-value w-90 card margin-top-10">
                    <div class="row row-c padding-10">
                        <h4 class="t-grey">Total de ganhos</h4>
                        <h4 class="t-grey margin-top-10">(valor)</h4>
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
            <i class="fas fa-plus"></i>Criar Evento
        </div>
    </main>
</template>

<script>
import GameRepository from '@/data/repository/GameRepository'
import BetModel from '@/data/model/BetModel'

export default{
    name: "HomePage",
    data(){
        return{
            games:[],
            betsSelected:[]
        }
    },
    async mounted(){
        this.games = await GameRepository.getGames()
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
        addBetSelected(gameIndex,targetBet){
            var bet = new BetModel(this.games[gameIndex],targetBet)
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

a{
    text-decoration: none;
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
</style>