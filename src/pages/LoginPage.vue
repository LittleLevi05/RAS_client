<template>
    <main>
        <div class="padding-10 border-radius-20 col white-div">
            <div class="div-space">
                <a href="">
                    <img class="border-radius-20 logo-hw backcolor-sets" height="100" src="@/assets/RasBet_logo.png">
                </a>
                <br>
                <br>
                <br>
                <br>
                <div style="text-align: center;">
                    <h1 class="color-sets">BEM VINDO</h1>
                    <br>
                    <br>
                    <br>
                    <input placeholder="Email" v-model="this.user.email" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <input placeholder="Password" v-model="this.user.password" class="border-radius-20 placeholder">
                    <br>
                    <a class="color-sets forgot-pass-sets" href="">Esqueci-me da palavra-passe</a>
                    <br>
                    <br>
                    <br>
                    <button v-on:click="login()" class="login-button padding-10">
                        <H4 style="color: var(--color-background-nav);">Aceder</H4>
                    </button>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <p class="color-sets">Não tem conta?</p>
                    <a class="color-sets" href="@/pages/SignUpPage.vue">Registe-se já</a>
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
    name: "LoginPage",
    data(){
        return{
            user: new UserModel()
        }
    },
    methods:{
        async login(){
            await UserRepository.login(this.user)
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
    width: 300px;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
}

.login-button:hover{
    background-color: var(--color-odd-selected-2);
}

.logo-hw {
    width: 150px;
    height: 60px;
}

input {
    border-radius: 10px;
    border-color: var(--color-background-nav);
    width: 300px;
    height: 40px;
}

input.placeholder {
    text-align: center;
}

.col {
    justify-content: flex-start;
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
.forgot-pass-sets{
    margin-left: 5.6rem;
}

img{
    max-width:100%;
    max-height:100%;
    height: auto;
}
</style>