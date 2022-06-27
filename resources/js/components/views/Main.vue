<template>
    <section class="content page-main h-full">
        <side side="left"></side>
        <side side="right">
            <toggle-theme></toggle-theme>
        </side>

        <div class="pages-links top flex justify-between">
            <main-link href="about">About me</main-link>
            <main-link href="skills">Skills</main-link>
        </div>
        <div class="wrapper-photo w-full flex items-center justify-center h-full">
            <img src="img/main-dark.png" alt="main-dark" class="main-photo">
            <h2 class="font-light nick">UIXER</h2>
        </div>
        <div class="pages-links bottom flex justify-between">
            <main-link href="projects">Projects</main-link>
            <main-link href="contact">Contact</main-link>
        </div>
    </section>
</template>

<script>
    import MainLink from "../elements/MainLink";
    import Side from "../elements/page-panels/Side";
    import ToggleTheme from "../elements/ToggleTheme";

    export default {
        name: "Main",
        components: {ToggleTheme, Side, MainLink},
        mounted() {
            this.setActiveThemeToggle()
        }
    }
</script>

<style lang="scss" scoped>

    img{
        position: absolute;
        top: -60px;
        //z-index: 1500;
    }

    .pages-links {
        position: absolute;
        left: 0;
        padding: 0 16%;
        width: 100%;

        &.top {
            top: 220px;
        }

        &.bottom {
            bottom: 220px;
        }
    }

    .nick {
        font-size: 450px;
    }

</style>
