<template>
    <main class="col">
        <div class="w-70 padding-30">
            <input class="border-radius-20">
            <br>
            <br>
            <GamesListComponent></GamesListComponent>
        </div>
        <div class="w-30 padding-30">
            <BulletinComponent></BulletinComponent>
        </div>
    </main>
</template>

<script>
import GamesListComponent from '@/components/GamesListComponent.vue'
import BulletinComponent from '@/components/BulletinComponent.vue'

export default{
    name: "HomePage",
    components:{
        GamesListComponent,
        BulletinComponent,
    }
}

</script>

<style scoped>
.padding-30{
    padding-right: 30px;
    padding-left: 30px;
}

input{
    height: 30px;
    width: 100%;
}
</style>