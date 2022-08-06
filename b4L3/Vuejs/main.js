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

//day 1

//   const { createApp } = Vue
  const result = Vue.createApp({
    data() {
      return {
        message: '<h3 style = "color:blue">Hello Vue!</h3>',
        name : 'Yasu',
        age : 25,
        photo : '../ichiken/assets/images/logo11.png',
        seen : true,
        color : ['red', 'green', 'blue'],
        student : [
            {name : 'Yasu', age : 25},
            {name : 'Sakumi', age : 22},
        ],
        count : 1,
        username : '',
        m : ''
      }
    },
    methods : {
        openalert(msg) {
            alert(msg)
        }
    }
  });

  const disableApp = Vue.createApp ({
        data() {
            return {
                title: 'item disable/unable',
                num : Number,
                isButtonDisabled : true,
                isInputDisabled : true,
                mark : 50,
                isActive : true, 
                hasError : false,
                students: [
                    {name : 'Yasu', age : 18, gender : 'Male'},
                    {name : 'Hiro', age : 19, gender : 'Male'},
                    {name : 'Sakumi', age : 17, gender : 'Female'},

                ],
            }
        },
        methods: {
            mybtn() {
                if(this.num >= 18) {
                    this.isInputDisabled = false;
                }

            }, stdinfo(std) { // 
                // alert("ok");
                var index;
                if(std == 0) {
                    alert(`My name is ${this.students[std].name} and I am ${this.students[std].age} years old.`);
                }
                else if(std == 1) {
                    alert(`My name is ${this.students[std].name} and I am ${this.students[std].age} years old.`);
                }
                else if (std == 2) {
                    alert(`My name is ${this.students[std].name} and I am ${this.students[std].age} years old.`);
                }
                
            }
        }
  });
