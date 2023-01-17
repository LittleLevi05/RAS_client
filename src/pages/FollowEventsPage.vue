<template>
    <main>
        <div class="row-e card-2 padding-50 border-radius-5">
            <h1>EVENTOS SEGUIDOS</h1>
            <div v-for="(evento,index) in eventos" :key="index">
                <div v-if="dualEvent(evento)" class="col margin-top-10 padding-20 border-radius-20 b-grey event">
                    <div class="row w-100">
                        <div class="col">
                            <h3 class="t-grey">{{evento.player1Name}}</h3>
                            <h2 class="t-grey">-</h2>
                            <h3 class="t-grey">{{evento.player2Name}}</h3>
                        </div>
                        <h5 class="margin-top-5 t-grey-2">{{evento.date}}</h5>
                        <br>
                        <div class="col">
                            <div v-on:click="cancelEvent(evento.eventID)" class="card border-radius-5 padding-10 seeMore w-100"> Parar de seguir <i class="fas fa-pen-alt"></i></div>
                        </div>
                    </div>
                    <div v-if="evento.promotion" class="row">
                        <h2><i class="fas fa-chart-line margin-right-5"></i>PROMOÇÃO</h2>
                        <h5>Montante mínimo: {{evento.promotion.minAmount}}$</h5>
                        <h5>Ganho: {{evento.promotion.perElevation}}x mais</h5>
                    </div>
                </div>

                <div v-if="coletiveEvent(evento)" class="col margin-top-10 padding-20 border-radius-20 b-grey event">
                    <div class="row w-100">
                        <div class="col">
                            <h3 class="t-grey">{{evento.team1Name}}</h3>
                            <h2 class="t-grey">-</h2>
                            <h3 class="t-grey">{{evento.team2Name}}</h3>
                        </div>
                        <h5 class="margin-top-5 t-grey-2">{{evento.date}}</h5>
                        <br>
                        <div class="col">
                            <div v-on:click="cancelEvent(evento.eventID)" class="card border-radius-5 padding-10 seeMore w-100"> Parar de seguir <i class="fas fa-window-close"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import EventRepository from '@/data/repository/EventRepository'
import EventDual from '@/data/model/EventDual'
import EventColetive from '@/data/model/EventColetive'

export default {
    name: "BetHistoryPage",
    data(){
        return{
            eventos: {},
        }
    },
    async mounted(){
        this.eventos = await EventRepository.getEventsFollow()
        console.log(this.eventos)
    },
    methods:{
        dualEvent(event){
            if (event instanceof EventDual) return true
            else return false;
        },

        coletiveEvent(event){
            if (event instanceof EventColetive) return true
            else return false;
        },

        async cancelEvent(eventID){
            await EventRepository.cancelEvent(eventID)
            this.eventos = await EventRepository.getEventsFollow()
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
    background-color: var(--color-background-nav-4);
}
.oddType:hover h4{
    color: var(--color-white)
}
.card-bulletin{
    background-color: var(--color-background);
    position: fixed;
    z-index: 100;
    top:60px;
    overflow-x: scroll;
    max-height: 85%;
    overflow-x:hidden;

    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -webkit-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -moz-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
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

.event{
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -webkit-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -moz-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
}

.event:hover{
    background-color: var(--color-background);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -webkit-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -moz-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    cursor: pointer;
}

.event:hover > div > div> h3{
    color: var(--color-grey);
}

.event:hover > div > h5{
    color: var(--color-grey);
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

img{
    width: 100%;
    border-radius: 5px;
}
</style>