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
            data : {
                f : null,
                i : null,
                w : null
            },

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