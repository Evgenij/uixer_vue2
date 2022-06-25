<template>
    <div class="tabs-wrapper h-full flex flex-col">
        <div class="tabs">
            <ul class="flex px-12 space-x-6">
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"
                    class="min-w-fit pb-4 cursor-pointer" @click="selectTab(tab)">
                    <span>{{ tab.name }}</span>
                </li>
            </ul>
        </div>
        <div class="tabs-details h-full">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        data() {
            return {
                tabs: [],
                tabActive: ''
            };
        },
        created() {
            this.tabs = this.$children
            this.tabActive = 'UI/UX design'
        },
        methods: {
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name);
                    this.tabActive = selectedTab.name
                });
            }
        },
        watch: {
            tabActive(val) {
                this.$emit('changeTab', val)
            }
        }
    }
</script>

<style lang="scss" scoped>

    .data-area {
        height: inherit;
    }
</style>
