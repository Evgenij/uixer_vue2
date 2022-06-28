<template>
    <section class="content page-skills h-full flex flex-col">
        <side side="left" :links="links"></side>
        <side side="right">
            <toggle-theme></toggle-theme>
        </side>
        <header class="flex items-center w-full justify-between py-10 px-12 pb-4">
            <h3 class="page-title font-light text-2xl page-name">
                Skills
            </h3>
            <h4 class="font-semibold text-6xl relative top-2 area">{{activeTab}}</h4>
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
                    items: [
                        {
                            id: 1,
                            name: 'Figma',
                        },
                        {
                            id: 2,
                            name: 'InVision Studio',
                        },
                        {
                            id: 3,
                            name: 'Adobe Photoshop',
                        },
                    ],
                    skills: [
                        'Prototyping', 'UI-kits',
                        'User Flow', 'Design systems',
                        'Responsive design', 'Components',
                        'Wireframing', 'CJM',
                        'Mobile design', 'Responsive design']
                },
                frontend: {
                    items: [
                        {
                            id: 1,
                            name: 'JavaScript',
                        },
                        {
                            id: 2,
                            name: 'Vue JS',
                        },
                        {
                            id: 3,
                            name: 'Angular',
                        },
                    ],
                    skills: [
                        'Prototyping', 'UI-kits',
                        'User Flow', 'Design systems',
                        'Responsive design', 'Components',
                        'Wireframing', 'CJM',
                        'Mobile design', 'Responsive design']
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

<style lang="scss">
    .data-page {
        height: inherit;
    }

    .skills-wrapper {
        width: 120%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
</style>
