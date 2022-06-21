<template>
    <section class="content h-full flex flex-col">
        <side side="left" :links="links"></side>
        <side side="right">
            <toggle-theme></toggle-theme>
        </side>
        <header class="flex items-center w-full justify-between py-10 px-12 pb-4">
            <h3 class="page-title font-light text-2xl opacity-50 ">
                Skills
            </h3>
            <h4 class="font-semibold text-6xl relative top-2">{{activeTab}}</h4>
        </header>
        <main class="data-page">
            <tabs @changeTab="changeTab">
                <tab name="UI/UX design" :selected="true">
                    <design :items="areas.design.items"
                            :skills="areas.design.skills"></design>
                </tab>
                <tab name="Frontend">
                    <frontend :items="areas.frontend.items"
                              :skills="areas.frontend.skills"></frontend>
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
    import Frontend from "../elements/skills/Frontend";

    export default {
        name: "Skills",
        components: {Frontend, Design, Tab, Tabs, ToggleTheme, Side},
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
            ],
            areas: {
                design: {
                    items: ['Adobe Photoshop', 'Figma'],
                    skills: ['prototyping', 'UI-kits']
                },
                frontend: {
                    items: ['JavaScript', 'Vue JS'],
                    skills: ['SCSS', 'UI-kits']
                },
            },
            activeTab: 'UI/UX design'
        }),
        methods: {
            changeTab(val){
                this.activeTab = val
            }
        },
        mounted() {
            this.setActiveThemeToggle()
        }
    }
</script>

<style scoped>
    .data-page {
        height: inherit;
    }
</style>
