const msg = Vue.createApp({ //Vue = Vue class
//vue state create
    data() {//ဘယ်  နဲ့တည်ဆောက်မလဲ
    return {
        message: '<h3 style = "color: red;">"Hello, Good morning</h3>',
        name: 'Toyoda',
        age: 27,
        photo: "../bootstrap/sneaker/assets/images/favicon.png",
        seen:true,
        colors: ['red', 'green', 'blue'],
        students: [
            {name: 'Toyoda', age: 22, gender: 'Male'},
            {name: 'Yasu', age: 42, gender: 'Male'},
            {name: 'Puu Chan', age: 52, gender: 'Male'}
        ],
        count:1,
    }
    },
    methods: {
        openalert() {
            alert('Hello Vue')
        }
    }
});//calling id