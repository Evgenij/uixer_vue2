/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

window.Vue = require('vue').default;
import $ from 'jquery';
window.$ = window.jQuery = $;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.mixin({
    methods:{
        changeTheme() {
            console.log('change theme')
            if($('#app').attr('class') === 'light-theme') {
                $('#app').toggleClass('light-theme dark-theme')
                document.cookie = "theme=dark";
            } else {
                $('#app').toggleClass('dark-theme light-theme')
                document.cookie = "theme=light";
            }
        },
        getCookie(name) {
            let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },
        setActiveThemeToggle() {
            if($('#app').attr('class') === 'light-theme') {
                $('#light').prop('checked', true)
            } else {
                $('#dark').prop('checked', true)
            }
        },
        formattingNumber(x, delimiter){
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
        },
        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        formattingDate(date){
            if(date){
                return date.split("-").reverse().join(".")
            }
            return 'не установлено'
        }
    }
})

import router from "./router";
//import store from "./store/store";

const app = new Vue({
    el: '#app',
    router,
    //store
});
