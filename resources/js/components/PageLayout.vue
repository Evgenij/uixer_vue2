<template>
    <div class="page flex flex-col justify-between grow">
        <page-header></page-header>
        <main class="page-data">
            <router-view></router-view>
<!--            <transition name="scale" mode="out-in">-->
<!--                <router-view v-slot="{ Component }">-->
<!--                    <component :is="Component" />-->
<!--                </router-view>-->
<!--            </transition>-->
        </main>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageHeader from "./elements/page-panels/PageHeader";
    import PageFooter from "./elements/page-panels/PageFooter";
    import Side from "./elements/page-panels/Side";
    import ToggleTheme from "./elements/ToggleTheme";
    import $ from "jquery";
    export default {
        name: "PageLayout",
        components: {ToggleTheme,PageFooter, PageHeader},
        mounted() {
            if (navigator.cookieEnabled === false){
                alert("Cookies отключены!");
            } else {
                console.log(this.getCookie('theme'))
                if(this.getCookie('theme') === 'dark') {
                    try {
                        if ($('#app').classList.contains('light-theme')) {
                            $('#app').toggleClass('light-theme dark-theme')
                        }
                    } catch (e) {
                        console.info('Method "contains" is normal: ', e)
                    }

                    $('#dark').prop('checked', true)
                } else {
                    $('#app').toggleClass('dark-theme light-theme')
                    $('#light').prop('checked', true)
                }
            }
        }
    }
</script>

<style lang="scss">
    .page-data {
        height: 100vh;
        padding: 100px;

    }

    .page {
        height: 100vh;
    }

    .side {
        width: 100px;
    }

    // ----

    .scale-enter-active,
    .scale-leave-active {
        transition: all 0.8s ease;
    }


    .scale-enter-from,
    .scale-leave-to {
        opacity: 0;
        transform: scale(0.9);
    }

</style>
