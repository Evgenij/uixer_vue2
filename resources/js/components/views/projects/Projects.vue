<template>
    <section class="content page-projects h-full">
        <side side="left" :links="links"></side>
        <side side="right">
            <toggle-theme></toggle-theme>
        </side>

<!--        <router-link :to="{name: 'project', params: {id: 1}}">view project</router-link>-->

        <div class="background-panel primary-background absolute h-full"></div>


    </section>
</template>

<script>
    import ToggleTheme from "../../elements/ToggleTheme";
    import Side from "../../elements/page-panels/Side";

    export default {
        name: "Projects",
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
            ],
        }),
        mounted() {
            this.setActiveThemeToggle()
        }
    }
</script>

<style lang="scss" scoped>
    .background-panel {
        width: 670px;
        left: 50%;
        margin-left: -335px;
    }
</style>
