<template>
    <header class="page-header flex absolute top-0 w-full">
        <router-link :to="{name: 'main'}">
            <div class="flex-none logo flex items-center justify-center font-regular text-2xl text-black">UIXER</div>
        </router-link>
        <h1 class="grow name flex items-center justify-center font-regular">Eugene Ermolenko</h1>
        <div class="flex-none flex items-center justify-center">
            <label for="menu" class="toggle-menu cursor-pointer flex items-center justify-center">
                <input ref="menu" type="checkbox" name="menu" id="menu" class="hidden menu">
                <div class="block-menu h-full w-full fixed flex flex-col items-center justify-center">
                    opened menu
                </div>
                <span class="block flex items-center justify-center uppercase text-lg text-black">menu</span>
            </label>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/variables";

    .logo {
        width: 100px;
        height: 100px;
        background: $primary;
    }

    .toggle-menu {
        height: 100px;
        width: 100px;
        background: $back-menu;
    }

    .block-menu {
        left: 0;
        top: 0;
        backdrop-filter: none;
        background: none;
        box-shadow: none;

        opacity: 0;
        visibility: hidden;
        transition: opacity .3s, visibility 0s .3s;

        & * {
            transition: .3s;
        }
    }

    input#menu:checked + .block-menu {
        backdrop-filter: blur(30px);
        background: rgb(11 15 24 / 60%);

        opacity: 1;
        visibility: visible;
        transition: opacity .3s, visibility 0s;
    }

</style>
