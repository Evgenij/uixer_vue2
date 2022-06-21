<template>
    <section class="content h-full">
        <side side="left" :links="links"></side>
        <side side="right">
            <toggle-theme></toggle-theme>
        </side>

        <h1>project #{{this.$route.params.id}}</h1>

    </section>
</template>

<script>
    import ToggleTheme from "../../elements/ToggleTheme";
    import Side from "../../elements/page-panels/Side";

    export default {
        name: "Project",
        components: {ToggleTheme, Side},
        data: ()=> ({
            links: [
                {
                    name: 'skills',
                    href: 'skills'
                },
                {
                    name: 'projects',
                    href: 'projects'
                },
                {
                    name: 'contact',
                    href: 'contact'
                },
            ]
        }),
        mounted() {
            this.setActiveThemeToggle()
        }
    }
</script>

<style scoped>

</style>
