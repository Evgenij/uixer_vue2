<template>
    <section class="content h-full">
        <side side="left" :links="links"></side>
        <side side="right">
            <toggle-theme></toggle-theme>
        </side>
        <header class="flex items-center w-full justify-between py-10 px-12 pb-4">
            <h3 class="page-title font-light text-2xl opacity-50 ">
                Skills
            </h3>
            <h4 class="font-semibold text-6xl">UI/UX design</h4>
        </header>
        <main>
            <tabs>
                <tab name="UI/UX design" :selected="true">
                    <design></design>
                </tab>
                <tab name="Frontend">
                    2
                </tab>
            </tabs>
        </main>
    </section>
</template>

<script>
    import ToggleTheme from "../elements/ToggleTheme";
    import Side from "../elements/page-panels/Side";
    import Tabs from "../elements/Tabs/Tabs";
    import Tab from "../elements/Tabs/Tab";
    import Design from "../elements/skills/Design";

    export default {
        name: "Skills",
        components: {Design, Tab, Tabs, ToggleTheme, Side},
        data: ()=> ({
            links: [
                {
                    name: 'projects',
                    href: 'projects'
                },
                {
                    name: 'skills',
                    href: 'skills'
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
