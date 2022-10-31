<template>
    <main>
        <div class="divout border-radius-20 row">
            <div class="col">
                <div><router-link to="/profile"><i class="fa-thin fa-arrow-left"></i></router-link></div>
                <div><h2>Histórico de transações</h2></div>
            </div>
            <br>
            <br>
            <h3>Saldo: valor €</h3>
            <br>
            <table class="blueTable">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Operação</th>
                        <th>Saldo após movimento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>cell1_1</td>
                        <td>cell2_1</td>
                        <td>cell3_1</td>
                        <td>cell4_1</td>
                    </tr>
                </tbody>
            </table>
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

h2, h3 {
    color: var(--color-background-nav);
}

.divout {
    border-style: dotted;
    border-width: 2px;
    margin-top: 2%;
    margin-left: 10%;
    margin-right: 10%;
    width: 40%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: var(--color-background-nav);
    background-color: var(--color-background);
}

th {
    border-style: solid;
    border-width: 2px 0px 2px 0px;
    color: var(--color-background-nav);
}

table.blueTable {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
}

table.blueTable td,
table.blueTable th {
    padding: 10px 10px;
    border-color: var(--color-background-nav);
}

table.blueTable thead th {
    font-size: 15px;
    font-weight: bold;
    color: #0A0A0A;
    text-align: center;
    color: var(--color-background-nav);
}

table.blueTable tfoot td {
    font-size: 14px;
}

table.blueTable tfoot .links {
    text-align: right;
}

table.blueTable tfoot .links a {
    display: inline-block;
    background: #1C6EA4;
    color: #FFFFFF;
    padding: 2px 8px;
    border-radius: 5px;
}
</style>