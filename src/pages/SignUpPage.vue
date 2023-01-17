<template>
    <main>
        <div class="padding-10 border-radius-20 col white-div">
            <div class="div-space">
                <a href="">
                    <img class="border-radius-20 logo-hw backcolor-sets"  src="@/assets/RasBet_logo.png">
                </a>
                <br>
                <br>
                <br>
                <div class="placeholder">
                    <h1 class="color-sets">REGISTO</h1>
                    <br>
                    <br>
                    <input placeholder="Email" type="email" v-model="this.user.email" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <input placeholder="Username" v-model="this.user.username" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <input placeholder="IBAN" v-model="this.user.iban" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <input placeholder="Password" type="password" v-model="this.user.password" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <input type="datetime-local" id="start" name="trip-start" min="2022-01-01" max="2023-12-31"
                        v-model="this.user.dateBirthday">
                    <br>
                    <br>
                    <input placeholder="NIF" v-model="this.user.nif" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <button v-on:click="signup()" class="login-button padding-10">
                        <H4 class="t-white">Concluir</H4>
                    </button>
                    <br>
                </div>
            </div>
            <img class="border-radius-20 padding-20" src="@/assets/Secundary_Image1.jpg">
        </div>
    </main>
</template>

<script>
import UserRepository from '@/data/repository/UserRepository';
import UserModel from '@/data/model/UserModel';

export default {
    name: "SignUpPage",
    data(){
        return{
            user: new UserModel()
        }
    },
    methods:{
        async signup(){
            try{
                console.log("vou fazer no signup")
                await UserRepository.signup(this.user)
                console.log("sucesso no signup")
                this.$router.push('/login')
            }catch(error){
                console.log(error)
            }
        }
    }
}

</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}

body{
    background-color: var(--color-background-nav);
}

main {
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background-nav);
    min-height: 100vh;
}

.login-button {
    background-color: var(--color-odd-selected);
    border-radius: 10px;
    width: 300px;
    height: 40px;
    justify-content: center;
    cursor: pointer;
}

.login-button:hover{
    background-color: var(--color-odd-selected-2);
}

input {
    border-radius: 10px;
    border-color: var(--color-background-nav);
    width: 300px;
    height: 40px;
}

.placeholder {
    text-align: center;
}

.logo-hw {
    width: 150px;
    height: 60px;
}

.div-space {
    width: 500px;
}

.backcolor-sets {
    background-color: var(--color-background-nav);
}

.color-sets {
    color: var(--color-background-nav);
}

.white-div{
    margin-top: 2%;
    margin-left: 10%;
    margin-right: 10%;
    background-color: white;
    width: 80%;
    padding: 30px;
    overflow: hidden;
}
.col {
    justify-content: flex-start;
}
</style>