<template>
    <main>
        <div class="row-e card padding-50 border-radius-20">
            <div class="row">
                <h2 class="t-grey">Carlos Pereira</h2>
                <br>
                <h5 class="t-grey-2">Saldo: (valor)$</h5>
                <br>
                <hr>
                <br>
                <div class="col">
                    <div class="optSelected row card padding-10 border-radius-10 b-white margin-right-50">
                        <router-link to="/withdraw"><h3 class="margin-top-5">Levantar</h3></router-link>
                    </div>
                    <div  class="optSelected row card padding-10 border-radius-10 b-white">
                        <router-link to="/deposit"><h3 class="margin-top-5">Depositar</h3></router-link>
                    </div>
                </div>
                <br>
            </div>
            <div class="row-e">
                <div class="col col-ee expand" v-on:click="consultBetHistory()">
                    <h4 class="t-grey margin-right-5">Consultar histórico de apostas</h4>
                    <i class="fas fa-arrow-circle-right t-grey"></i>
                </div>
                <br>
                <div class="col col-ee expand" v-on:click="consultTransactionsHistory()">
                    <h4 class="t-grey margin-right-5">Consultar histórico de Transações</h4>
                    <i class="fas fa-arrow-circle-right t-grey"></i>
                </div>
                <br>
                <div class="row sec-2">
                    <div class="col col-e">
                        <h4 class="t-grey-2">Mudar username:</h4>
                        <input>
                    </div>
                    <br>
                    <div class="col col-e">
                        <h4 class="t-grey-2">Mudar palavra-passe:</h4>
                        <input>
                    </div>
                    <br>
                    <div class="col col-e">
                        <h4 class="t-grey-2">Mudar IBAN:</h4>
                        <input>
                    </div>
                    <br>
                    <div class="col col-e">
                        <h4 class="t-grey-2">Mudar Data de Nascimento:</h4>
                        <input>
                    </div>
                    <br>
                    <div class="col col-e">
                        <h4 class="t-grey-2">Mudar NIF:</h4>
                        <input>
                    </div>
                    <br>
                    <button v-on:click="criarEsporte()" class="createEvent-button padding-10 margin-top-10">
                        <H4 class="t-white">Atualizar perfil</H4>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default{
    name:"ProfilePage",
    data(){
        return{

        }
    },
    methods:{
        consultBetHistory(){
            this.$router.push('/bet-history')
        },

        consultTransactionsHistory(){
            this.$router.push('/transactions')
        }
    }
}
</script>

<style scoped>
main{
    display: flex;
    justify-content: center;
}

.row{
    display: flex;
    align-items: center;
    justify-content: center;
}

.row-e{
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
}

.createEvent-button {
    background-color: var(--color-odd-selected);
    width: 100%;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
}
.optSelected:hover{
    background-color: var(--color-odd-selected);
    cursor: pointer;
    border: 2px solid var(--color-odd-selected);
}

.optSelected h3{
    color: var(--color-odd-selected)
}

.optSelected:hover h3{
    color: var(--color-text-white)
}

.sec-2{
    display: flex;
    align-items: inherit;
    justify-content: space-between;
}

.col-e{
    display: flex;
    justify-content: space-between;
}

h3{
    text-decoration: none;
} 
.col-ee{
    justify-content: flex-start;
    align-items: center;
}

input{
    border-radius: 10px;
    width: 200px;
    height: 25px;
}

.card{
    background-color: var(--color-background);
}

.optSelected{
    width: 180px;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-odd-selected);
    background-color: var(--color-text-white);
}

.expand{
    cursor: pointer;
}
</style>