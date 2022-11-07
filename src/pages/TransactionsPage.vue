<template>
    <main>
        <div class="divout border-radius-20 row">
            <div class="col">
                <div><h2>Histórico de transações</h2></div>
            </div>
            <br>
            <h3>Saldo: {{user.balance}} €</h3>
            <br>
            <table class="blueTable">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Operação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(transacao,index) in transacoes" :key="index" >
                        <td>{{transacao.date}}</td>
                        <td>{{transacao.amount}}</td>
                        <td>{{transacao.type}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
import UserRepository from '@/data/repository/UserRepository';
import User from '@/data/model/UserModel';

export default {
    name: "TransactionsPage",
    data(){
        return{
            transacoes: [],
            user: new User()
        }
    },
    async mounted(){
        this.transacoes = await UserRepository.getTransactions()
        this.user = await UserRepository.getUserData()
    }
}
</script>

<style scoped>
.col-e{
    display: flex;
    justify-content: space-around;
}

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