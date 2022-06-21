<template>
    <div class="design grid grid-cols-2 h-full">
        <div class="items flex flex-col justify-end h-full">
            <div class="slider">1</div>
            <div class="nav">2</div>
        </div>
        <div class="skills">2</div>
    </div>
</template>

<script>
    export default {
        name: "Design",
        props: {
            items: Array,
            skills: Array
        }
    }
</script>

<style scoped>

</style>
