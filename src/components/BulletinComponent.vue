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
            <div class="col padding-10">
                <div class="border-radius-20 card-bet padding-10"><h4>Apostar</h4></div>
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
    }
}
</script>

<style scoped>
.row{
    align-items: center;
}

.col-e{
    justify-content: space-around;
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
    justify-content: center;
    cursor:pointer;
}
</style>