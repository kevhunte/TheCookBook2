<template>
    <v-container
    fluid 
    class=""
    >
        To learn more about The CookBook, visit the 
        <span
        class="font-weight-bold"
        @click="() => {
                if($route.path !== '/about')
                    $router.push('/about')
                }"
        > about page. </span>
    </v-container>
</template>
<script>
export default {
    name: 'Footer'
    
}
</script>
<style scoped>

</style>