<template>
    <section class="side" :class="side">
        <nav v-if="links" class="links h-full flex flex-col justify-evenly">
            <div class="side-link text-center uppercase font-light -rotate-90" v-for="link in links">
                <router-link :to="{name: link.href}" :class="[
                    link.href === getRouteName ? 'font-semibold' : 'opacity-50'
                ]">
                    {{link.name}}
                </router-link>
            </div>
        </nav>
        <slot v-else></slot>
    </section>
</template>

<script>
    export default {
        name: "Side",
        props: {
            side: {
                type: String,
                required: true
            },
            links: {
                type: Array,
                required: false
            }
        },
        computed: {
            getRouteName() {
                return this.$route.name
            }
        },
    }
</script>

<style lang="scss" scoped>
    .links {
        padding: 75% 0;
    }
</style>
