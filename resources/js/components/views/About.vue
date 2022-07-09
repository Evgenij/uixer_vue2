<template>
    <section class="content page-about flex h-full">
        <side side="left" :links="links"></side>
        <side side="right">
            <toggle-theme></toggle-theme>
        </side>

        <div class="general-data flex flex-col">
            <div class="photo flex items-center justify-center h-full">
                <img src="img/photo-resume.png" alt="photo-resume">
            </div>
            <div class="personal-data p-6 flex flex-col space-y-4 h-max">
                <div class="personal-data__main flex justify-between items-start">
                    <div class="personal-data__name flex flex-col">
                        <h4 class="font-semibold text-lg">Eugene Ermolenko</h4>
                        <p class="text-color-gray font-regular">Ukraine</p>
                    </div>
                    <p class="text-color-gray text-lg font-regular">{{getAgeFromBirthday(7,4,2000)}} years</p>
                </div>
                <div class="personal-data__experience font-regular">
                    <p class="text-color-gray">Experience <span class="primary-font">{{getAgeFromBirthday(4,7,2018)}} years</span></p>
                </div>
                <div class="personal-data__langs flex items-center space-x-4">
                    <div class="lang flex">
                        <span class="text-color-gray">EN</span>
                        <span class="text-color-gray">-</span>
                        <span class="primary-font">A2</span>
                    </div>
                    <div class="divide"></div>
                    <div class="lang flex">
                        <span class="text-color-gray">UA</span>
                        <span class="text-color-gray">-</span>
                        <span class="primary-font">C2</span>
                    </div>
                    <div class="divide"></div>
                    <div class="lang flex">
                        <span class="text-color-gray">RU</span>
                        <span class="text-color-gray">-</span>
                        <span class="primary-font">C2</span>
                    </div>
                </div>
                <div class="download-resume">
                    <button v-if="!openedTypesFile" class="w-full button primary primary-border py-3 flex space-x-2 justify-center primary-font" @click="switchTypesFile">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 11L11 15.232L15 11.041M11 4V15M5 18H17" stroke="#FFCD1C" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Download resume
                    </button>
                    <div v-else class="download-buttons flex items-center bg-white pl-4 space-x-4 text-black">
                        <p>Language</p>
                        <div class="flex grow">
                            <a href="img/index.png" class="lang__button py-3 grow text-center" download @click="switchTypesFile">EN</a>
                            <a href="img/index.png" class="lang__button py-3 grow text-center" download @click="switchTypesFile">UA</a>
                            <a href="img/index.png" class="lang__button py-3 grow text-center" download @click="switchTypesFile">RU</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-data p-16 w-full">
            <h3 class="page-title font-light text-2xl page-name mb-12">
                About me
            </h3>
            <header class="font-bold text-2xl mb-16">
                <h2 class="mb-6 text-4xl leading-normal">Hi, my name's Eugene!</h2>
                <h4 class="leading-normal">I am a UI/UX designer and front-end developer in one person.
                    I have been engaged in design for about 3 years,
                    I have met many projects and interesting tasks on my professional path. </h4>
            </header>
            <section class="my-mind w-full flex space-x-14">
                <div class="basis-1/2">
                    <h5 class="primary-font font-bold mb-4">My main idea</h5>
                    <p class="font-regular text-color-gray mb-3">
                        I believe that the key factor influencing the profitability and success of any product is its design, BUT.
                    </p>
                    <p class="font-regular text-color-gray mb-3">
                        The design is not in the form of a visual design, but in terms of how the end user will interact throughout the entire cycle of working with the product.
                    </p>
                    <p class="font-regular text-color-gray">
                        Design is not how an object looks, but how it works. Design is design, from idea to practical implementation.
                    </p>
                </div>
                <div class="basis-1/2">
                    <h5 class="primary-font font-bold mb-4">Free time forwarding</h5>
                    <p class="font-regular text-color-gray mb-3">
                        In my free time, I develop my professional skills and learn new ones in related fields in order to better understand what programmers face when implementing design solutions.
                    </p>
                    <p class="font-regular text-color-gray mb-3">
                        Sometimes I need a “reboot". A walk around the city with a cup of coffee helps me with this)
                    </p>
                    <p class="font-regular text-color-gray mb-3">
                        I also run my Instagram blog, where I talk about the field of design and give useful tips to the audience
                    </p>
                    <a href="" class="mt-4 leading-none link blue flex items-center font-regular">
                        Instagram
                        <i class='bx bx-right-arrow-alt text-xl ml-1'></i>
                    </a>
                </div>
            </section>
        </div>

    </section>
</template>

<script>
    import Side from "../elements/page-panels/Side";
    import ToggleTheme from "../elements/ToggleTheme";
    export default {
        name: "About",
        components: {ToggleTheme, Side},
        data: ()=> ({
            links: [
                {
                    name: 'skills',
                    href: 'skills'
                },
                {
                    name: 'about me',
                    href: 'about'
                },
                {
                    name: 'projects',
                    href: 'projects'
                },
            ],
            openedTypesFile: false
        }),
        methods: {
            getAgeFromBirthday(day, month, year) {
                let b_date = new Date(year, month, day);
                let today = new Date();
                today.setHours(0);
                today.setMinutes(0);
                today.setSeconds(0);
                return Math.floor((today - b_date) / 31556952000);
            },
            switchTypesFile() {
                this.openedTypesFile = !this.openedTypesFile
            }
        },
        mounted() {
            this.setActiveThemeToggle()
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/variables";

    .general-data {
        width: 30%;
    }

    .photo {
        position: relative;

        img {
            position: absolute;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .main-data {
        padding-left: 5%;
        padding-right: 5%;
    }

    .personal-data__langs {
        .divide {
            height: 18px;
            width: 1px;
        }
    }

    .pages-links {
        z-index: 1000;
        border-bottom: 1px solid $lines;

        & .main-link {

            & .dot {
                background: $text-color;
            }

            &:after{
                background: $lines;
            }
        }
    }

</style>
