<template>
    <div class="toggle-theme block flex items-center"
                :class="[
                    direction=='vert' ? 'flex-col' : ''
                ]">
        <label for="dark">
            <input id="dark" type="radio" name="theme" @change="changeTheme" class="toggle-theme__dark hidden" checked>
            <span class="label cursor-pointer underline-offset-4 transition">Dark</span>
        </label>
        <span class="divider"></span>
        <label for="light">
            <input id="light" type="radio" name="theme" @change="changeTheme" class="toggle-theme__light hidden">
            <span class="label cursor-pointer underline-offset-4 transition">Light</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "ToggleTheme",
        props: {
            direction: {
                type: String,
                default: 'vert' // hor
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./resources/sass/variables";

    .toggle-theme{

        span.divider {
            width: 1px;
            height: 18px;
            margin: 0 28px;
        }

        &.flex-col {
            span.divider {
                width: 18px;
                height: 1px;
                margin: 28px 0;
            }
        }
    }


    /*.toggle-theme span {*/
    /*    font-weight: normal;*/
    /*}*/

    /*// set dark theme*/
    /*.toggle-theme input:checked + span.label {*/
    /*    font-weight: bold;*/
    /*}*/

    .toggle-theme input[type=radio]:not(checked) + span.label:hover {
        text-decoration: underline;
    }

</style>
