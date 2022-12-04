<template>
    <main>
        <div class="row-e card padding-50 border-radius-20">
            <div class="row">
                <h2 class="t-grey">Insere o montante a depositar</h2>
                <br>
                <br>
                <div class="row">
                    <div class="col">
                        <input class="forms_inputs" type="number" :placeholder="0" v-model="this.amount">
                        <div class="icons icon_currency"> €</div>
                    </div>
                    <h5 class="t-grey-2">Min 10€</h5>
                </div>
                <br>
                <hr>
                <br>
                <div>
                    <h4>Método de pagamento</h4>
                    <div class="col center">
                        <div class="card padding-20 card-p margin-right-20">
                            <img height="50" src="@/assets/MBWay.png">
                        </div>
                        <div class="card padding-20 card-p margin-right-20">
                            <img height="50" src="@/assets/Visa.png">
                        </div>
                    </div>
                    <br>
                    <div class="col">
                        <div class="col col-e mbway-infos">
                            <select class="mbwaySelected">
                                <option>+351</option>
                            </select>
                            <hr class="margin-right-5 margin-left-5 mbwayHR">
                            <input placeholder="Nº de telemóvel" class="mbwayInput">
                        </div>
                    </div>
                </div>
                <br>
                <div v-on:click="deposit" class="optSelected row card padding-10 border-radius-10 b-white">
                    <h3 class="margin-top-5">Depositar {{amount}} €</h3>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import UserRepository from '@/data/repository/UserRepository';

export default {
    name: "DepositPage",
    data() {
        return {
            amount: 0
        }
    },
    methods: {
        async deposit(){
            await UserRepository.deposit(this.amount)
        }
    }
}
</script>

<style scoped>
.card-p{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

}

.card-p:hover{
    
}

main {
    display: flex;
    justify-content: center;
}

.row {
    display: flex;
    align-items: center;
    justify-content: center;
}

.rowa {
    display: block;
    align-items: center;
    justify-content: center;
}

.row-e {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.optSelected:hover {
    background-color: var(--color-odd-selected);
    cursor: pointer;
    border: 2px solid var(--color-odd-selected);
}

.center{
    align-items: center;
    display: flex;
    justify-content: center;
}
.optSelected h3 {
    color: var(--color-odd-selected)
}

.optSelected:hover h3 {
    color: var(--color-text-white)
}

.sec-2 {
    display: flex;
    align-items: inherit;
    justify-content: space-between;
}

.col-e {
    display: flex;
    justify-content: space-between;
}

.col-ee {
    justify-content: flex-start;
    align-items: center;
}

input {
    border-radius: 10px;
    width: 200px;
    height: 25px;
}

.card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -webkit-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -moz-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
}

.optSelected {
    width: 180px;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-odd-selected);
    background-color: var(--color-text-white);
}

.expand {
    cursor: pointer;
}

.forms_inputs {
    border: 0.1rem solid transparent;
    height: 6rem;
    font-size: 1.6rem;
    width: 250px;
    text-align: center;
    font-family: Rift;
    font-size: 4.8rem;
    font-style: italic;
    line-height: 5.2rem;
    font-weight: 700;
    padding: 0;
    margin-left: 25.6px;
}

.icon_currency {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Rift;
    font-size: 3.2rem;
    font-style: italic;
    line-height: 3.6rem;
    font-weight: 700;
}

input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
}
</style>