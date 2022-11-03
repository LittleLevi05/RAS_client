<template>
    <main>
        <div class="row-e card padding-50 border-radius-20">
            <div class="row">
                <h2 class="t-grey">Qual o montante que queres levantar?</h2>
                <br>
                <br>
                <div class="row">
                    <div class="col">
                        <input class="forms_inputs" type="number" placeholder="0">
                        <div class="icons icon_currency">€</div>
                    </div>
                    <h5 class="t-grey-2">Saldo após o levantamento: (valor)$</h5>
                </div>

                <br>
                <hr>
                <br>
                <div>
                    <h4>Levantar</h4>
                    <div class="col">
                        <div class="rowa">
                            <h5>IBAN</h5>
                            <P>{iban do utilizador}</P>
                        </div>
                    </div>
                </div>
                <br>
                <div class="optSelected row card padding-10 border-radius-10 b-white">
                    <h3 class="margin-top-5">Levantar {valor}€</h3>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "WithdrawPage",
    data() {
        return {

        }
    },
    methods: {
    }
}
</script>

<style scoped>
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
    background-color: var(--color-background);
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