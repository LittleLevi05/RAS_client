<template >
    <main style="background-color: var(--color-background-nav); height: 100%;">
        <div class="padding-10 border-radius-20 " style="background-color: white;">
            <div>
                <a  href="">
                    <img class="border-radius-20" style="background-color: var(--color-background-nav);" height="100" src="@/assets/RasBet_logo.png">
                </a>
                <br>
                <br>
                <br>
                <h1 style="color: var(--color-background-nav);">REGISTO</h1>
                <br>
                <br>
                <input placeholder= "Email" class="border-radius-20">
                <br>
                <br>
                <input placeholder= "Password" class="border-radius-20">
                <br>
                <br>
                <input placeholder= "Data de nascimento" class="border-radius-20">
                <br>
                <br>
                <input placeholder= "NIF" class="border-radius-20">
                <br>
                <br>
                <button class="border-radius-20 login-button padding-10"><H4 style="color: var(--color-background-nav);">Concluir</H4></button>
                <br>
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
    width: 130px;
    justify-content: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
}

input.placeholder {
   text-align: center; 
}
</style>