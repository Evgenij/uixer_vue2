<template>
    <div>
        <div class="tabs">
            <ul class="flex px-12">
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"
                    class="min-w-fit">
                    <span @click="selectTab(tab)">{{ tab.name }}</span>
                </li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        data() {
            return { tabs: [] };
        },

        created() {
            this.tabs = this.$children;
        },

        methods: {
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
