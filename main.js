const app = Vue.createApp({
    data() {
        return {
            intro: 'Hello Welcome to my first vue project',
            welcome: 'Hello',
            name: '',
            labelName: 'Insert your name',
            images: [],
            source: 'https://picsum.photos/v2/list'
        }
    },
    mounted() {
        fetch('https://picsum.photos/v2/list')
            .then(res => res.json())
            .then(data => this.images = data)
            .catch(err => console.log(err.message))
    }
})

app.mount('#main')
console.log({ app })



