<template>
    <main>
        <div class="divout border-radius-20 row">
            <div class="col">
                <div><h2>HISTÓRICO DE APOSTAS</h2></div>
            </div>
            <br>
            <table class="blueTable">
                <thead>
                    <tr>
                        <th>MONTANTE DEPOSITADO</th>
                        <th>GANHO POTENCIAL</th>
                        <th>TIPO</th>
                        <th>EVENTOS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(boletim,index) in boletins" :key="index" >
                        <td>{{boletim.amount}}</td>
                        <td>{{boletim.gain}}</td>
                        <td>{{boletim.type}}</td>
                        <td><div v-on:click="openBetsFromBuletin(boletim.buletinID)" class="card w-90 padding-10 oddType border-radius-5"><h4 class="">Ver eventos<i class="margin-left-5 fas fa-arrow-right"></i></h4></div></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="apostasDoBoletim" class="modal">
            <div class="modal-content border-radius-5">
                <span class="close" v-on:click="closeElement('apostasDoBoletim')">&times;</span>
                <div v-for="(aposta,index) in apostasDoBoletim['coletiveBets']" :key="index">
                    <br>
                    <br>
                    <div class="col">
                        <div class="col">
                            <h4>{{aposta.eventColetive.team1Name}}</h4>
                            <h4 class="margin-left-10">x</h4>
                            <h4 class="margin-left-10">{{aposta.eventColetive.team2Name}}</h4>
                        </div>
                        <div class="col">
                            <h3>Aposta selecionada: </h3>
                            <h3>{{aposta.oddSelected}}</h3>
                        </div>
                    </div>
                    <hr class="margin-top-10">
                </div>
                <div v-for="(aposta,index) in apostasDoBoletim['dualBets']" :key="index">
                    <br>
                    <br>
                    <div class="col">
                        <div class="col">
                            <h4>{{aposta.eventDual.player1Name}}</h4>
                            <h4 class="margin-left-10">x</h4>
                            <h4 class="margin-left-10">{{aposta.eventDual.player2Name}}</h4>
                        </div>
                        <div class="col">
                            <h3>Aposta selecionada: </h3>
                            <h3>{{aposta.oddSelected}}</h3>
                        </div>
                    </div>
                    <hr class="margin-top-10">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import UserRepository from '@/data/repository/UserRepository';

export default {
    name: "BetHistoryPage",
    data(){
        return{
            boletins: [],
            apostasDoBoletim: []
        }
    },
    async mounted(){
        this.boletins = await UserRepository.getBuletinsHistory()
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
        async openBetsFromBuletin(buletinID){
            this.apostasDoBoletim = await UserRepository.getBetsFromBuletin(buletinID) 
            console.log(this.apostasDoBoletim)
            this.showElement("apostasDoBoletim")
        }
    }
}
</script>


<style scoped>
.col-e{
    display: flex;
    justify-content: space-around;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
}

h2, h3 {
    color: var(--color-background-nav);
}

.divout {
    margin-left: 10%;
    margin-right: 10%;
    width: 40%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: var(--color-background-nav);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -webkit-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -moz-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
}

th {
    border-style: solid;
    border-width: 2px 0px 2px 0px;
    color: var(--color-background-nav);
}

table.blueTable {
    width: 100%;
    text-align: center;
    border-collapse: collapse
}

table.blueTable td,
table.blueTable th {
    padding: 10px 10px;
    border-color: var(--color-background-nav);
}

table.blueTable thead th {
    font-size: 15px;
    font-weight: bold;
    color: #0A0A0A;
    text-align: center;
    color: var(--color-background-nav);
}

table.blueTable tfoot td {
    font-size: 14px;
}

table.blueTable tfoot .links {
    text-align: right;
}

table.blueTable tfoot .links a {
    display: inline-block;
    background: #1C6EA4;
    color: #FFFFFF;
    padding: 2px 8px;
    border-radius: 5px;
}

.oddType{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white);
}

.oddType:hover{
    cursor: pointer;
    background-color: var(--color-background-nav);
}
.oddType:hover h4{
    color: var(--color-white)
}
</style>