<template>
    <section class="content page-projects h-full">
        <side side="left" :links="links"></side>
        <side side="right">
            <toggle-theme></toggle-theme>
        </side>

<!--        <router-link :to="{name: 'project', params: {id: 1}}">view project</router-link>-->

        <div class="background-panel primary-background absolute h-full"></div>
        <h3 class="page-title font-light text-2xl page-name absolute">
            Projects
        </h3>
        <div class="slider-wrapper flex h-full">
            <carousel3d display="3" border="0"
                         width="600" height="600"
                         bias="left" perspective="0"
                         inverseScaling="0" space="710" :controlsVisible="true"
                        :controlsPrevHtml="null" :controlsNextHtml="null"
                        :controlsWidth="500" :controlsHeight="430"
                        :minSwipeDistance="0"
                class="slider-projects">
                <slide v-for="(project, index) in projects" :index="index" :key="index"
                       class="slide project relative flex flex-col justify-between space-y-6">
                    <header class="project__title flex justify-between">
                        <div class="project__number absolute font-light text-5xl">.{{showNumberItem(++index)}}</div>
                        <h4 class="project__name font-bold text-4xl">{{project.name}}</h4>
                        <router-link :to="{name: 'project', params: {id: index}}"
                                     class="project__link font-regular flex items-center text-xl space-x-1">
                            <span>Explore</span>
                            <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2859 1.28125L20.0001 6.99839L14.2859 12.7141M1.42871 6.99982H20.0001" stroke="#282930" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </router-link>
                    </header>
                    <main class="project__photo h-full">
                        <img :src="project.img" alt="" class="w-full">
                    </main>
                    <footer class="project__articles flex justify-between">
                        <div class="project__category font-bold">{{project.category}}</div>
                        <div class="project__type">{{project.type}}</div>
                    </footer>
                </slide>
            </carousel3d>
        </div>
    </section>
</template>

<script>
    import ToggleTheme from "../../elements/ToggleTheme";
    import Side from "../../elements/page-panels/Side";
    import { Carousel3d, Slide } from 'vue-carousel-3d';
    import Header from "../../elements/page-panels/PageHeader";
    import Main from "../Main";

    export default {
        name: "Projects",
        components: {
            Main,
            Header,
            ToggleTheme,
            Side,
            Carousel3d,
            Slide
        },
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
            projects: [
                {
                    name: 'Some name project',
                    img: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    category: 'Redesign',
                    type: 'Web-application'
                },
                {
                    name: 'Some different name project',
                    img: 'https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    category: 'Concept',
                    type: 'Mobile App'
                },
                {
                    name: 'Some name project',
                    img: 'https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    category: 'Redesign',
                    type: 'Web-application'
                },
                {
                    name: 'Some different name project',
                    img: 'https://images.pexels.com/photos/907487/pexels-photo-907487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    category: 'Concept',
                    type: 'Mobile App'
                },
                {
                    name: 'Some name project',
                    img: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    category: 'Redesign',
                    type: 'Web-application'
                },
            ]
        }),
        methods: {
        },
        mounted() {
            this.setActiveThemeToggle()
        }
    }
</script>

<style lang="scss">

    .page-name {
        top: 150px;
        left: 160px;
    }

    .background-panel {
        width: 670px;
        left: 50%;
        margin-left: -335px;
    }

    .slider-projects {
        height: 100% !important;
        padding: 150px 0 30px 0;
        margin: 0 !important;

        .carousel-3d-slide {
            overflow: visible;
            background-color: transparent;
            display: flex;
        }

        .carousel-3d-controls {
            top: 35% !important;

            & .prev, .next {
                backdrop-filter: grayscale(1) contrast(1);

                &:hover {
                    opacity: 0 !important;
                }
            }

            & .prev {
                left: 0;
            }

            & .next {
                right: 0;
            }
        }

        & div.carousel-3d-slider {
            height: 100% !important;
        }

        & .slide {
            height: 100% !important;
        }

    }

    .panel-grayscale {
        position: absolute;
        z-index: 5000;
        top: 220px;
        backdrop-filter: grayscale(1) contrast(1);
        width: 500px;
        height: 580px;

        &.left {
            left: 100px;
        }

        &.right {
            right: 100px;
        }

    }

    .project__number {
        top: -120px;
    }


</style>
