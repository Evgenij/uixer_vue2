<template>
    <section class="content project-page h-full flex">
        <side side="left" :links="links"></side>
        <side side="right">
            <toggle-theme></toggle-theme>
        </side>
        <aside class="project-page__main px-14 py-12 h-full basis-5/12">
            <router-link :to="{name: 'projects'}"
                         class="project-page__back font-regular flex items-center space-x-1 mb-10">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7141 9.28125L5.99986 14.9984L11.7141 20.7141M24.5713 14.9998H5.99986" stroke="#8E8E8E" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>back</span>
            </router-link>

            <div class="project-page__name mb-16">
                <h3 class="font-heavy text-7xl mb-4">{{this.$route.params.id}}</h3>
                <h4 class="primary-font text-xl">Redesign</h4>
            </div>
            <div class="dev-tools w-full">
                <p class="font-semibold text-xl">Development tools</p>
                <div class="tools mt-3 flex flex-wrap">
                    <div class="tool px-3 p-2 border mr-2 mb-2"
                         v-for="tool in tools">
                        {{tool}}
                    </div>
                </div>
            </div>
        </aside>
        <section class="basis-7/12 project-page__data project-data
                p-10 pr-6 mr-4 h-full overflow-y-auto overflow-x-hidden">
            <div class="project-data__preview w-full mb-8">
                <img src="https://images.pexels.com/photos/907487/pexels-photo-907487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            </div>
            <div class="project-data__elements flex flex-col space-y-6 mb-4">
                <div class="row flex space-x-14 w-full">
                    <div class="row__item item flex flex-col">
                        <div class="item__name text-color-gray mb-1">project name</div>
                        <div class="item__value text-xl font-semibold">Upgrade</div>
                    </div>
                    <div class="row__item item flex flex-col">
                        <div class="item__name text-color-gray mb-1">type project</div>
                        <div class="item__value text-xl font-semibold">Web-application</div>
                    </div>
                    <div class="row__item item flex flex-col">
                        <div class="item__name text-color-gray mb-1">year development</div>
                        <div class="item__value text-xl font-semibold">July 2019</div>
                    </div>
                </div>
                <div class="row flex space-x-14 w-full">
                    <div class="row__item item flex flex-col basis-1/2">
                        <div class="item__name text-color-gray mb-1">target</div>
                        <div class="item__value text-xl font-semibold">
                            Interdum lorem mi vulputate ac, blandit eget amet volutpat. Cursus mauris
                            id felis facilisis bibendum mi diam nisl. Ipsum sollicitudin
                            purus vitae lectus faucibus quam enim iaculis scelerisque.
                        </div>
                    </div>
                    <div class="row__item item flex flex-col basis-1/2">
                        <div class="item__name text-color-gray mb-1">tasks</div>
                        <div class="item__value text-xl font-semibold tasks flex flex-col">
                            <div class="task pl-6">1</div>
                            <div class="task pl-6">2</div>
                            <div class="task pl-6">3</div>
                            <div class="task pl-6">4</div>
                            <div class="task pl-6">5</div>
                            <div class="task pl-6">6</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-description">
                <div class="project-description__img w-full py-4">
                    <img src="https://images.pexels.com/photos/907487/pexels-photo-907487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                <div class="project-description__text text-color-gray py-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda atque,
                    consequatur, culpa eaque expedita harum id illum, iure molestias officiis quos sit vitae.
                    Accusamus dolorum necessitatibus odio ratione reprehenderit!
                </div>
                <div class="project-description__img w-full py-4">
                    <img src="https://images.pexels.com/photos/907487/pexels-photo-907487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </div>
        </section>
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
            ],
            tools: [
                'Figma',
                'CJM',
                'MySQL',
                'PHP',
                'AJAX',
                'SCSS',
                'Tailwind',
                'PHP',
                'AJAX',
                'SCSS',
                'Tailwind',
            ]
        }),
        mounted() {
            this.setActiveThemeToggle()
        }
    }
</script>

<style lang="scss" scoped>
</style>
