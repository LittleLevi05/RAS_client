<template>
    <main>
        <div class="divout border-radius-20 row">
            <div class="col">
                <div><h2>Histórico de Apostas</h2></div>
            </div>
            <br>
            <table class="blueTable">
                <thead>
                    <tr>
                        <th>Montante depositado</th>
                        <th>Ganho potencial</th>
                        <th>Tipo</th>
                        <th>Eventos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(boletim,index) in boletins" :key="index" >
                        <td>{{boletim.amount}}</td>
                        <td>{{boletim.gain}}</td>
                        <td>{{boletim.type}}</td>
                        <td><div v-on:click="openBetsFromBuletin(boletim.buletinID)" class="card w-90 padding-10 oddType border-radius-20"><h4 class="t-grey">Ver eventos<i class="margin-left-5 fas fa-arrow-right"></i></h4></div></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="apostasDoBoletim" class="modal">
            <div class="modal-content border-radius-20">
                <span class="close" v-on:click="closeElement('apostasDoBoletim')">&times;</span>
                <div v-for="(aposta,index) in apostasDoBoletim" :key="index">
                    <br>
                    <br>
                    <div class="col">
                        <div class="col">
                            <h4>{{aposta.event.equipa1}}</h4>
                            <h4 class="margin-left-10">x</h4>
                            <h4 class="margin-left-10">{{aposta.event.equipa2}}</h4>
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
        //console.log(this.boletins) 
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
            //console.log(this.apostasDoBoletim)
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
    border-style: dotted;
    border-width: 2px;
    margin-top: 2%;
    margin-left: 10%;
    margin-right: 10%;
    width: 40%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: var(--color-background-nav);
    background-color: var(--color-background);
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