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
                    <input placeholder="Email" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <input placeholder="Password" class="border-radius-20 placeholder">
                    <br>
                    <a class="color-sets forgot-pass-sets" href="">Esqueci-me da palavra-passe</a>
                    <br>
                    <br>
                    <br>
                    <button class="login-button padding-10">
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
            <div><img class="border-radius-20 padding-10" src="@/assets/Secundary_Image1.jpg"></div>


        </div>

    </main>
</template>

<script>

export default {
    name: "LoginPage",
}

</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
main {
    min-height: 85.1vh;
    background-color: var(--color-background-nav);
}
.login-button {
    background-color: var(--color-odd-selected);
    width: 300px;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
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
    margin-top: 7rem;
    margin-bottom: 0rem;
    margin-left: 20rem;
    margin-right: 5rem;
    background-color: white;
    width: 63%;
    padding: 20px;
}
.forgot-pass-sets{
    margin-left: 5.6rem;
}
</style>