<template>
    <main class="backcolor-sets">
        <div class="padding-10 border-radius-20 col" style="background-color: white;">
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
                    <input placeholder="Email" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <input placeholder="Password" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <input placeholder="Data de nascimento" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <input placeholder="NIF" class="border-radius-20 placeholder">
                    <br>
                    <br>
                    <br>
                    <button class="login-button padding-10">
                        <H4 class="color-sets">Concluir</H4>
                    </button>
                    <br>
                </div>

            </div>
            <div><img class="border-radius-20 padding-10" src="@/assets/Secundary_Image1.jpg"></div>
        </div>

    </main>
</template>

<script>

export default {
    name: "SignUpPage",
}

</script>

<style scoped>
.login-button {
    background-color: var(--color-odd-selected);
    border-radius: 10px;
    width: 300px;
    height: 40px;
    justify-content: center;
    cursor: pointer;
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

.col {
    justify-content: flex-start;
}
</style>