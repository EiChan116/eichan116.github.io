const msg = Vue.createApp ({
    data() {
        return {
            message : '<h3 style = "color: blue">Hello</h3>',
            name : 'Toyoda',
            age : 25,
            photo : 'ichikenlogo1.png',
            seen : true,
            colors : ['red', 'green', 'blue'],
            students: [//object
                { name : 'Toyoda', age : 25, gender : 'Male' },
                { name : 'Yasuhiro', age : 23, gender : 'Male' },
                { name : 'Sakumi', age : 25, gender : 'Female' }
            ],
            count : 1, 
            myusername : '',
            age1 : 20,
        }
    },
    methods : {
        openalert(msg) {
            alert (msg)
        }
    }
});

const app2 = Vue.createApp ({
    data() {
        return {
            title : 'BMI Calculator',
            
                f : null,
                i : null,
                w : null
           

        }
    },
    methods : {
        compute: function() {
            var feet = this.f;
            var inches = this.i;
            var height = (12*feet) + inches;
            var weight = this.w;
            
            var bmi = (703 * weight)/(height * height);
            if(bmi < 18.5) {
                alert(`${bmi}! Under weight`);
            }
            else if(bmi >= 18.5 && bmi <= 24.9) {
                alert(`${bmi}! Normal weight`);
            }
            else if(bmi >= 25 && bmi <= 29.9) {
                alert(`${bmi}! Over weight`);
            } else if(bmi >= 30) {
                alert(`${bmi}! Obesity`);
            }
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