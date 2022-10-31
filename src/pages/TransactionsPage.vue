<template>
    <main>
        <div class="divout border-radius-20">
            <div>
                <h2>Meu histórico de transações</h2>
            <br>
            <br>
            <h2>Saldo: valor €</h2>
            <table>
                <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Operação</th>
                    <th>Saldo após movimento</th>
                </tr>
                <tr>
                    <td>10/11/2022</td>
                    <td>Ganho de Aposta</td>
                    <td>+13,29 €</td>
                    <td>+20,29 €</td>
                </tr>
                <tr>
                    <td>10/11/2022</td>
                    <td>Aposta</td>
                    <td>-3 €</td>
                    <td>7 €</td>
                </tr>
                <tr>
                    <td>10/11/2022</td>
                    <td>Deposito</td>
                    <td>+10 €</td>
                    <td>10 €</td>
                </tr>
            </table>
            </div>
            
        </div>
    </main>
</template>

<script>
export default {
    name: "TransactionsPage",
}
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    color: var(--color-background-nav);
}

.divout {
    border-style: dotted;
    border-width: 2px;
    margin-top: 2%;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: var(--color-background-nav);
}

th {
    border-style: solid;
    border-width: 2px 0px 2px 0px;
    color: var(--color-background-nav);
}
</style>