<template>
    <div class="nav top">
        <div class="col p-90">
            <a href="/">
                <img height="50" src="">
            </a>
            <div>
                <nav>
                    <ul>
                        <li>
                            <div class="">
                                <router-link to="/signup">Signup</router-link>
                            </div>
                        </li>
                        <li>
                            <div class="">
                                <router-link to="/login">Login</router-link>
                            </div>
                        </li>
                    </ul>
                </nav>
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
    height: 60px;
    display: flex;  
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px 0 rgba(0, 8, 59, 0.2), 0 3px 10px 0 rgba(12, 0, 43, 0.19);
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
}

li {
    padding: 10px;
}
</style>