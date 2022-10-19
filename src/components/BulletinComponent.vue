<template>
    <div class="row card-bulletin border-radius-60 padding-20">
        <div><h2 class="t-grey">BOLETIM</h2></div>
        <br>
        <div class="w-90 col col-e">
            <div class="card w-90 padding-10 oddType"><h4 class="t-grey">Simples</h4></div>
            <div class="card w-90 padding-10 oddType"><h4 class="t-grey">Múltiplas</h4></div>
        </div>
        <br>
        <div>Apostas</div>
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
            <div class="row padding-10">
                <h4 class="t-grey">Total de ganhos</h4>
                <h4 class="t-grey margin-top-10">(valor)</h4>
            </div>
            <div class="col padding-10" v-on:click="showModal('paymentModal')">
                <div class="border-radius-20 card-bet padding-10"><h4>Apostar</h4></div>
            </div>
        </div>

        <div id="paymentModal" class="modal">
            <div class="modal-content border-radius-20">
                <span class="close" v-on:click="closeModal('paymentModal')">&times;</span>
                <div class="row">
                    <h2 class="t-grey">PAGAMENTO</h2>
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

                    <div id="payment-2stage-mbway" style="display:none" class="row">
                        <div class="col">
                            <img height="50" src="@/assets/MBWay.png">
                            <div class="col col-e mbway-infos">
                                <select class="mbwaySelected">
                                    <option>+351</option>
                                </select>
                                <hr class="margin-right-5 margin-left-5 mbwayHR">
                                <input placeholder="Nº de telemóvel" class="mbwayInput">
                            </div>
                            <div class="row">
                                <div class="border-radius-10 card-pay padding-10" v-on:click="pay"><h4>PAGAR</h4></div>
                                <div class="border-radius-10 card-cancel padding-10 margin-top-10"><h4>CANCELAR</h4></div>
                            </div>
                        </div>
                        <br>
                        <h4 class="t-grey">Será enviada uma notificação para o seu télemovel. Aceite a transação com o seu PIN MB WAY dentro do tempo limite indicado.</h4>
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
</template>

<script>
export default{
    name:"BulletinComponent",
    data(){
        return{

        }
    },
    methods:{
        pay(){
        },
        closeModal(modalID){
            var modal = document.getElementById(modalID);
            modal.style.display = "none";
        },
        showModal(modalID){
            var modal = document.getElementById(modalID);
            modal.style.display = "block";
        },
        hideFirstStage(){
            var content = document.getElementById("payment-1stage");
            content.style.display = "none";
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
            this.hideFirstStage()    
        },
        mbwayMethod(){
            this.hideFirstStage()
            this.deprogressCircle("circle-1")
            this.progressCircle("circle-2")
            var content = document.getElementById("payment-2stage-mbway");
            content.style.display = "block";
        },
        visaMethod(){
            this.hideFirstStage()
        }
    }
}
</script>

<style scoped>
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
.row{
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
</style>