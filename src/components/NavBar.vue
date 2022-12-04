<template>
    <div class="nav top">
        <div class="col p-90">
            <a href="">
                <img height="100" src="@/assets/RasBet_logo.png">
            </a>
            <div>
                <nav>
                    <ul>
                        <li v-if="true">
                            <div class="t-white">
                                <router-link to="/"><i class="fas fa-calendar-week margin-right-5"></i>EVENTOS</router-link>
                            </div>
                        </li>
                        <li>
                            <div class="t-white">
                                <router-link to="/profile"> <i class="fas fa-user-alt margin-right-5"></i>MINHA CONTA</router-link>
                            </div>
                        </li>
                        <li>
                            <div v-on:click="showNotifications" class="t-white not">
                                <i class="fas fa-bell margin-right-5"></i><b>NOTIFICAÇÕES</b>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div> 
            <div class="col profile">
                <i class="fas fa-user margin-right-10 t-white"></i>
                <h4 class="t-white">Bem-vindo, <i>{{user.username}} - </i></h4>
                <h4 class="t-white">{{user.balance}} €</h4>
            </div>
        </div> 

        <div id="notificationsModal" class="modal">
            <div class="modal-content border-radius-20">
                <span class="close" v-on:click="closeElement('notificationsModal')">&times;</span>
                <h1>NOTIFICAÇÕES</h1>
                <br>
                <div v-for="(notification,index) in notifications" :key="index">
                    <h3 class="margin-top-10">{{notification.title}}</h3>
                    <h5 class="margin-top-10">{{notification.description}}</h5>
                    <hr class="margin-top-10">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import User from '@/data/model/UserModel';
import UserRepository from '@/data/repository/UserRepository';

export default{
    name: 'NavBar',
    data(){
        return{
            user: new User(),
            notifications: [],
        }
    },  
    async mounted(){
        this.user = await UserRepository.getUserData()
    },
    methods:{
        closeElement(elementID){
            var modal = document.getElementById(elementID);
            modal.style.display = "none";
        },
        showElement(elementID){
            var modal = document.getElementById(elementID);
            modal.style.display = "block";
        },
        async isApostador(){
            this.user = await UserRepository.getUserData()
            if (this.user.credential == "a") return true 
            else false
        },
        async showNotifications(){
            this.notifications = await UserRepository.getNotificationsFromUser()
            this.showElement("notificationsModal")
        }
    }
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
    border-radius: 5px;
}

li:hover{
    background-color: var(--color-white);
    color: var(--color-background-nav);
    cursor: pointer;
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


.not:hover{
    color: var(--color-background-nav);    
}
</style>