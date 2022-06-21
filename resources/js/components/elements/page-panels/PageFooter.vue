<template>
    <footer class="page-footer flex items-center justify-between absolute bottom-0 w-full">
        <div class="positions flex items-center space-x-6">
            <p class="font-light">UI/UX designer</p>
            <span></span>
            <p class="font-light">Frontend developer</p>
        </div>
        <div class="social-links flex items-center space-x-10">
            <a href="" class="font-light link white underline-offset-4 hover:underline">Behance</a>
            <a href="" class="font-light link white underline-offset-4 hover:underline">Linkedin</a>
            <a href="" class="font-light link white underline-offset-4 hover:underline">Instagram</a>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "PageFooter"
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/variables";

    span {
        background: $primary;
        height: 18px;
        width: 1px;
    }
</style>
