<template>
    <main>
        <div class="row-e card-2 padding-50 border-radius-5">
            <div class="row">
                <h3 class="t-grey"><i class="fas fa-user margin-right-5"></i>{{user.username}}</h3>
                <br>
                <h2 class="t-grey-2">Saldo: {{user.balance}}$</h2>
                <br>
                <hr>
                <div class="col">
                    <div v-on:click="this.$router.push('/withdraw')" class="optSelected row card padding-10 border-radius-5 b-white margin-right-50">
                        <h3> <i class="fas fa-money-check-alt"></i> LEVANTAR </h3>
                    </div>
                    <div  v-on:click="this.$router.push('/deposit')" class="optSelected row card padding-10 border-radius-5 b-white">
                        <h3> <i class="fas fa-hand-holding-usd"></i> DEPOSITAR </h3>
                    </div>
                </div>
                <br>
            </div>
            <div class="row-e">
                <div class="col col-ee expand" v-on:click="consultBetHistory()">
                    <h4 class="t-grey margin-right-5">CONSULTAR HISTÓRICO DE APOSTAS</h4>
                    <i class="fas fa-arrow-circle-right t-grey"></i>
                </div>
                <br>
                <div class="col col-ee expand" v-on:click="consultTransactionsHistory()">
                    <h4 class="t-grey margin-right-5">CONSULTAR HISTÓRICO DE TRANSAÇÕES</h4>
                    <i class="fas fa-arrow-circle-right t-grey"></i>
                </div>
                <br>
                <div class="col col-ee expand" v-on:click="consultFollowEvents()">
                    <h4 class="t-grey margin-right-5">CONSULTAR EVENTOS SEGUIDOS</h4>
                    <i class="fas fa-arrow-circle-right t-grey"></i>
                </div>
                <br>
                <div class="row sec-2">
                    <div class="col col-e">
                        <h4 class="t-grey-2">Mudar username:</h4>
                        <input :placeholder="user.username" v-model="this.user.password">
                    </div>
                    <br>
                    <div class="col col-e">
                        <h4 class="t-grey-2">Mudar palavra-passe:</h4>
                        <input type="password" v-model="this.user.password">
                    </div>
                    <br>
                    <div class="col col-e">
                        <h4 class="t-grey-2">Mudar IBAN:</h4>
                        <input :placeholder="user.iban" v-model="this.user.iban">
                    </div>
                    <br>
                    <div class="col col-e">
                        <h4 class="t-grey-2">Mudar Data de Nascimento:</h4>
                        <input :placeholder="user.dateBirthday" v-model="this.user.dateBirthday">
                    </div>
                    <br>
                    <div class="col col-e">
                        <h4 class="t-grey-2">Mudar NIF:</h4>
                        <input placeholder="nif" v-model="this.user.nif">
                    </div>
                    <br>
                    <button v-on:click="changeProfile()" class="createEvent-button padding-10 margin-top-10">
                        <H4 class="t-white">ATUALIZAR PERFIL</H4>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import User from '@/data/model/UserModel'
import UserRepository from '@/data/repository/UserRepository'

export default{
    name:"ProfilePage",
    data(){
        return{
            user: new User(),
        }
    },
    async mounted(){
        this.user = await UserRepository.getUserData()
        return(this.user)
    },
    methods:{
        consultBetHistory(){
            this.$router.push('/bet-history')
        },
        consultTransactionsHistory(){
            this.$router.push('/transactions')
        },
        consultFollowEvents(){
            this.$router.push('/follow-events')
        },
        async changeProfile(){
            try{
                await UserRepository.changeProfile(this.user)
            }catch(error){
                console.log(error)
            }
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
    border-radius: 5px;
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
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -webkit-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -moz-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
}

.card-2{
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -webkit-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
    -moz-box-shadow: 2px 6px 25px -2px rgba(0,0,0,0.49);
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