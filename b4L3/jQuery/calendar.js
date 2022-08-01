let now = new Date();

        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        document.querySelector(".date h1").innerHTML = months[now.getMonth()];

        document.querySelector('.date p').innerHTML = now.toDateString();




