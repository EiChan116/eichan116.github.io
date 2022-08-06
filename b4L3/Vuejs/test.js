const app2 = Vue.createApp ({
    data() {
        return {
            title : 'BMI Calculator',
            feet : 0,
            in : 0,
            wetot : 0,
           
                f : null,
                i : null,
                w : null
            

        }
    },
    methods : {
        compute:function() {
            var feet = this.f;
            var inches = this.i;
            var height = (12*feet) + inches;
            var weight = this.w;
            
            var bmi = (703 * weight)/(height * height);
            if(bmi < 18.5) {
                return  '<h1 style = "color: blue>Under Weight</h1>'
                // alert(`${bmi}! Under weight`);
            }
            else if(bmi >= 18.5 && bmi <= 24.9) {
                 return '<h1 style = "color: green>Normal Weight</h1>'
                // alert(`${bmi}! Normal weight`);
            }
            else if(bmi >= 25 && bmi <= 29.9) {
                 return '<h1 style = color: orange>Over Weight</h1>'
                // alert(`${bmi}! Over weight`);
            } else if(bmi >= 30) {
                return '<h1 style = color: red>Obesigty</h1>'
                // alert(`${bmi}! Obesity`);
            }
            
        }
    }
});