<template>
    <div class="toggle-theme block flex flex-col items-center">
        <label for="light">
            <input id="light" type="radio" name="theme" @change="changeTheme" class="hidden">
            <span class="label cursor-pointer underline-offset-4 transition">Light</span>
        </label>
        <span class="divider"></span>
        <label for="dark">
            <input id="dark" type="radio" name="theme" @change="changeTheme" class="hidden" checked>
            <span class="label cursor-pointer underline-offset-4 transition">Dark</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "ToggleTheme"
    }
</script>

<style lang="scss" scoped>
    @import "./resources/sass/variables";

    span.divider{
        width: 18px;
        height: 1px;
        margin: 28px 0;
        background: $primary;
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
