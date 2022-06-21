<template>
    <section class="content h-full">
        <side side="left" :links="links"></side>
        <side side="right">
            <toggle-theme></toggle-theme>
        </side>

        <h1>contact</h1>

    </section>
</template>

<script>
    import ToggleTheme from "../elements/ToggleTheme";
    import Side from "../elements/page-panels/Side";

    export default {
        name: "Contact",
        components: {ToggleTheme, Side},
        data: ()=> ({
            links: [
                {
                    name: 'projects',
                    href: 'projects'
                },
                {
                    name: 'contact',
                    href: 'contact'
                },
                {
                    name: 'skills',
                    href: 'skills'
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
