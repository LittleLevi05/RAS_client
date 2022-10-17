<template>
    <main>
        <div class="w-70">
            <GamesList></GamesList>
        </div>
    </main>
</template>

<script>
import GamesList from '@/components/GamesList.vue'

export default{
    name: "HomePage",
    components:{
        GamesList
    }
}

</script>

<style scoped>
</style>