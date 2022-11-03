<template>
    <div class="nav top">
        <div class="col p-90">
            <a href="">
                <img height="100" src="@/assets/RasBet_logo.png">
            </a>
            <div>
                <nav>
                    <ul v-if="this.$route.name != 'oddCreate'">
                        <li>
                            <div class="">
                                <router-link to="/login">FUTEBOL</router-link>
                            </div>
                        </li>
                        <li>
                            <div class="">
                                <router-link to="/signup">BASQUETEBOL</router-link>
                            </div>
                        </li>
                        <li>
                            <div class="">
                                <router-link to="/transactions">TÉNIS</router-link>
                            </div>
                        </li>
                        <li>
                            <div class="">
                                <router-link to="/login">FÓRMULA 1</router-link>
                            </div>
                        </li>
                    </ul>
                    <h1 v-if="this.$route.name == 'oddCreate'" class="t-white">
                        <i class="fas fa-money-check-alt"></i> GERENCIAR APOSTAS
                    </h1>
                </nav>
            </div> 
            <div class="col profile">
                <i class="fas fa-user margin-right-10 t-white"></i>
                <router-link to="/profile"><h4 class="t-white">Bem-vindo, <i>Carlos</i></h4></router-link>
            </div>
        </div> 
    </div>
</template>

<script>
export default{
    name: 'NavBar',
} 
</script>

<style scoped>
.nav{
    background-color: var(--color-background-nav);
    width: 100%;
    height: 100px;
    display: flex;  
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px 0 rgba(0, 8, 59, 0.2), 0 3px 10px 0 rgba(12, 0, 43, 0.19);
}

.nav:hover{
    height: 110px;
    transition: all 0.5s ease-out;
}
.nav:hover img{
    transition: all 0.5s ease-out;
    transform: scale(1.15);
}
.top{
    position: fixed;
    width: 100%;
    z-index: 100;
    top:0
}
.p-90{
    width: 80%;
    align-items: center;
    justify-content: space-between;
}

ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    height: 60px;
    align-items: center
}


li a{
    color: var(--color-text-white);
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
}

li {
    padding: 10px;
    border-radius: 20px;
}

li:hover{
    background-color: var(--color-white);
}

li:hover a{
    color: var(--color-background-nav);
}

.col{
    justify-content: space-between;
}

.profile{
    cursor: pointer;
}

h4{
    text-decoration: none;
}
</style>