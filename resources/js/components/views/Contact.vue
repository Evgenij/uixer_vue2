<template>
    <section class="content page-contact h-full flex">
        <side side="left" :links="links"></side>
        <side side="right">
            <toggle-theme></toggle-theme>
        </side>

        <h3 class="page-title font-light text-2xl page-name absolute">
            Contact
        </h3>
        <div class="page-contact__links links basis-1/2 flex flex-col justify-center px-14 py-16">
            <h4 class="font-heavy links__title mb-16">
                Is there anything to discuss?
            </h4>
            <div class="links__content">
                <div ref="email" class="links__email flex space-x-3">
                    <p ref="email" class="cursor-pointer underline underline-offset-4" @click="copyEmail">evgeniu.ermolenko@gmail.com</p>
                    <span v-if="copySuccess" class="text-color-green">copied!</span>
                </div>
                <div class="links__socials flex space-x-3 mt-12">
                    <a href="" class="social-link flex items-center px-6">
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4958 8.09922C10.4958 8.09922 12.9559 7.90989 12.9559 4.93202C12.9559 1.95029 10.9431 0.5 8.39197 0.5H0V17.1487H8.39197C8.39197 17.1487 13.5163 17.3149 13.5163 12.2337C13.515 12.2324 13.7387 8.09922 10.4958 8.09922ZM3.69798 3.45726H8.39197C8.39197 3.45726 9.53361 3.45726 9.53361 5.18833C9.53361 6.92199 8.86267 7.17315 8.10071 7.17315H3.69798V3.45726ZM8.15402 14.1889H3.69798V9.73885H8.39197C8.39197 9.73885 10.0927 9.71567 10.0927 12.0251C10.0927 13.9725 8.82236 14.1747 8.15402 14.1889ZM20.348 4.73367C14.1444 4.73367 14.1496 11.1312 14.1496 11.1312C14.1496 11.1312 13.7257 17.4952 20.348 17.4952C20.348 17.4952 25.865 17.8224 25.865 13.0683H23.0278C23.0278 13.0683 23.1215 14.86 20.4429 14.86C20.4429 14.86 17.6031 15.0557 17.6031 11.9619H25.9548C25.9561 11.9607 26.8767 4.73367 20.348 4.73367ZM22.8718 9.73885H17.5745C17.5745 9.73885 17.9204 7.17315 20.4117 7.17315C22.903 7.17315 22.8718 9.73885 22.8718 9.73885ZM23.5311 1.47759H16.8776V3.53067H23.5311V1.47759Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="" class="social-link flex items-center px-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19365 2.35053 1 2.838 1H21.16C21.4016 0.999608 21.6409 1.04687 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4612 1.53734C22.6322 1.70807 22.7677 1.91083 22.8602 2.13401C22.9526 2.3572 23.0001 2.59643 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.79V19.791ZM7.875 5.812C7.88105 6.08668 7.83217 6.35979 7.73124 6.61532C7.63031 6.87084 7.47935 7.10364 7.28723 7.30003C7.09511 7.49643 6.8657 7.65248 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65248 4.52989 7.49643 4.33777 7.30003C4.14565 7.10364 3.99469 6.87084 3.89376 6.61532C3.79283 6.35979 3.74395 6.08668 3.75 5.812C3.76187 5.27286 3.98439 4.75979 4.36989 4.38269C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86961 4.00558 7.25512 4.38269C7.64062 4.75979 7.86313 5.27286 7.875 5.812Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="" class="social-link flex items-center px-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM12.4305 8.859C11.2635 9.345 8.9295 10.35 5.4315 11.874C4.8645 12.099 4.566 12.321 4.539 12.537C4.494 12.9015 4.9515 13.0455 5.574 13.242L5.8365 13.3245C6.4485 13.524 7.2735 13.7565 7.701 13.7655C8.091 13.7745 8.5245 13.6155 9.003 13.2855C12.2715 11.079 13.959 9.9645 14.064 9.9405C14.139 9.9225 14.244 9.9015 14.313 9.9645C14.3835 10.026 14.376 10.1445 14.3685 10.176C14.3235 10.3695 12.528 12.0375 11.5995 12.9015C11.31 13.1715 11.1045 13.362 11.0625 13.4055C10.97 13.5 10.876 13.593 10.7805 13.6845C10.2105 14.2335 9.7845 14.6445 10.803 15.3165C11.2935 15.6405 11.6865 15.906 12.078 16.173C12.504 16.464 12.93 16.7535 13.482 17.1165C13.6215 17.2065 13.7565 17.304 13.887 17.397C14.3835 17.751 14.832 18.069 15.3825 18.018C15.7035 17.988 16.035 17.688 16.203 16.788C16.6005 14.6625 17.382 10.059 17.562 8.1615C17.573 8.00376 17.5664 7.84529 17.5425 7.689C17.5284 7.56288 17.4673 7.44669 17.3715 7.3635C17.235 7.26928 17.0723 7.22047 16.9065 7.224C16.4565 7.2315 15.762 7.473 12.4305 8.859Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="" class="social-link flex items-center px-6">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.0003 2.1665C15.9437 2.1665 16.311 2.17734 17.4658 2.2315C18.6196 2.28567 19.405 2.46659 20.0962 2.73525C20.8112 3.01042 21.4135 3.38309 22.0158 3.98434C22.5667 4.52589 22.9929 5.18097 23.2649 5.904C23.5325 6.59409 23.7145 7.38059 23.7687 8.53434C23.8196 9.68917 23.8337 10.0564 23.8337 12.9998C23.8337 15.9433 23.8228 16.3105 23.7687 17.4653C23.7145 18.6191 23.5325 19.4045 23.2649 20.0957C22.9937 20.8191 22.5674 21.4743 22.0158 22.0153C21.4741 22.566 20.8191 22.9922 20.0962 23.2644C19.4061 23.532 18.6196 23.714 17.4658 23.7682C16.311 23.8191 15.9437 23.8332 13.0003 23.8332C10.0569 23.8332 9.68966 23.8223 8.53482 23.7682C7.38107 23.714 6.59566 23.532 5.90449 23.2644C5.18118 22.993 4.52598 22.5667 3.98483 22.0153C3.43385 21.4739 3.00758 20.8188 2.73574 20.0957C2.46708 19.4056 2.28616 18.6191 2.23199 17.4653C2.18108 16.3105 2.16699 15.9433 2.16699 12.9998C2.16699 10.0564 2.17783 9.68917 2.23199 8.53434C2.28616 7.3795 2.46708 6.59517 2.73574 5.904C3.00683 5.18053 3.4332 4.52527 3.98483 3.98434C4.52614 3.43317 5.18129 3.00688 5.90449 2.73525C6.59566 2.46659 7.37999 2.28567 8.53482 2.2315C9.68966 2.18059 10.0569 2.1665 13.0003 2.1665ZM13.0003 7.58317C11.5637 7.58317 10.186 8.15385 9.17016 9.16967C8.15434 10.1855 7.58366 11.5632 7.58366 12.9998C7.58366 14.4364 8.15434 15.8142 9.17016 16.83C10.186 17.8458 11.5637 18.4165 13.0003 18.4165C14.4369 18.4165 15.8147 17.8458 16.8305 16.83C17.8463 15.8142 18.417 14.4364 18.417 12.9998C18.417 11.5632 17.8463 10.1855 16.8305 9.16967C15.8147 8.15385 14.4369 7.58317 13.0003 7.58317V7.58317ZM20.042 7.31234C20.042 6.95319 19.8993 6.60875 19.6454 6.3548C19.3914 6.10084 19.047 5.95817 18.6878 5.95817C18.3287 5.95817 17.9842 6.10084 17.7303 6.3548C17.4763 6.60875 17.3337 6.95319 17.3337 7.31234C17.3337 7.67148 17.4763 8.01592 17.7303 8.26988C17.9842 8.52383 18.3287 8.6665 18.6878 8.6665C19.047 8.6665 19.3914 8.52383 19.6454 8.26988C19.8993 8.01592 20.042 7.67148 20.042 7.31234ZM13.0003 9.74984C13.8623 9.74984 14.6889 10.0922 15.2984 10.7017C15.9079 11.3112 16.2503 12.1379 16.2503 12.9998C16.2503 13.8618 15.9079 14.6884 15.2984 15.2979C14.6889 15.9074 13.8623 16.2498 13.0003 16.2498C12.1384 16.2498 11.3117 15.9074 10.7022 15.2979C10.0927 14.6884 9.75032 13.8618 9.75032 12.9998C9.75032 12.1379 10.0927 11.3112 10.7022 10.7017C11.3117 10.0922 12.1384 9.74984 13.0003 9.74984V9.74984Z" fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-contact__form flex flex-col justify-center basis-1/2">
            <div class="types-message mb-16 flex space-x-4">
                <div class="type-message">
                    <input type="radio" name="type-mess" id="offer" checked>
                    <label for="offer" class="block cursor-pointer px-8 py-5 pl-16">Send offer</label>
                </div>
                <div class="type-message cursor-pointer">
                    <input type="radio" name="type-mess" id="hello">
                    <label for="hello" class="block cursor-pointer px-8 py-5 pl-16">Just say "Hello"</label>
                </div>
            </div>
            <form action="" @submit.prevent="" class="form-message pr-16 w-full flex flex-col space-y-8">
                <div class="row flex space-x-6">
                    <div class="cell-field required w-full">
                        <label class="cell-field__label block font-light text-2xl mb-2 max-w-fit relative" for="name">
                            Name
                        </label>
                        <input type="text" name="name" id="name" class="cell-field__input" placeholder="enter the name">
                    </div>
                    <div class="cell-field required w-full">
                        <label class="cell-field__label block font-light text-2xl mb-2 max-w-fit relative" for="email">
                            Email
                        </label>
                        <input type="email" name="name" id="email" class="cell-field__input" placeholder="enter the email">
                    </div>
                </div>
                <div class="row flex space-x-6">
                    <div class="cell-field w-full">
                        <label class="cell-field__label block font-light text-2xl mb-2 max-w-fit relative" for="company">
                            Company
                        </label>
                        <input type="text" name="name" id="company" class="cell-field__input" placeholder="enter the company">
                    </div>
                    <div class="cell-field w-full">
                        <label class="cell-field__label block font-light text-2xl mb-2 max-w-fit relative" for="website">
                            Website
                        </label>
                        <input type="text" name="name" id="website" class="cell-field__input" placeholder="enter the website">
                    </div>
                </div>
                <div class="row">
                    <div class="cell-field required w-full">
                        <label class="cell-field__label block font-light text-2xl mb-2 max-w-fit relative" for="message">
                            Message
                        </label>
                        <textarea type="text" name="name" id="message" class="cell-field__input"
                                  placeholder="enter the text message">
                        </textarea>
                    </div>
                </div>
                <div class="row">
                    <button type="submit" class="min-w-fit button py-2 px-4 flex items-center space-x-2">
                        Send
                        <svg class="ml-2" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 6.49707L17.5 10.4991L13.5 14.5001M4.5 10.5001H17.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
    import ToggleTheme from "../elements/ToggleTheme";
    import Side from "../elements/page-panels/Side";

    export default {
        name: "Contact",
        components: {ToggleTheme, Side},
        data: ()=> ({
            links: [
                {
                    name: 'projects',
                    href: 'projects'
                },
                {
                    name: 'contact',
                    href: 'contact'
                },
                {
                    name: 'skills',
                    href: 'skills'
                },
            ],
            copySuccess: false
        }),
        methods: {
            copyEmail(){
                let email = this.$refs.email.textContent.trim()
                if (email) {
                    navigator.clipboard.writeText(email)
                        .then(() => {
                            this.copySuccess = true;
                            setTimeout(()=>{
                                this.copySuccess = false;
                            }, 2000)
                            //this.openNotification('top-center', 'success', `<i class='bx bx-check'></i>`)
                        })
                        .catch(err => {
                            console.log('Something went wrong', err);
                        })
                }
            }
        },
        mounted() {
            this.setActiveThemeToggle()
        }
    }
</script>

<style lang="scss" scoped>

    .links {
        &__email p {
            user-select: text !important;
        }

        &__title {
            font-size: 90px;
            line-height: 1em;
        }
    }

    .social-link {
        height: 50px;
    }

    .type-message {
        position: relative;
        width: fit-content;

        input[type='radio'] {
            display: none;
        }

        input[type='radio'] + label {

            &:before, &:after {
                content: '';
                position: absolute;
                display: block;
                border-radius: 50%;
                transition: .3s;
            }

            &:before {
                left: 24px;
                top: 22px;
                width: 22px;
                height: 22px;
            }

            &:after {
                left: 29px;
                top: 27px;
                width: 12px;
                height: 12px;
                background: transparent;
            }
        }
    }

    .cell-field {
        &.required {
            .cell-field__label {
                &:before {
                    content: '*';
                    font-size: 40px;
                    font-weight: 400;
                    position: absolute;
                    right: -16px;
                    top: 2px;
                    display: block;
                }
            }
        }

        &__input {
            padding: 10px 16px;
            outline: none;
            width: 100%;
        }

        textarea {
            height: 100px;
            max-height: 150px;
        }
    }


</style>
