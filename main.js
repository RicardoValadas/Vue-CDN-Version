const app = Vue.createApp({
    data() {
        return {
            intro: 'Hello Welcome to my first vue project',
            welcome: 'Hello',
            name: '',
            labelName: 'Insert your name',
        }
    },
})

app.mount('#main')