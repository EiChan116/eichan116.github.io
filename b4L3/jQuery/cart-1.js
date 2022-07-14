$(function() {
    $("button.atcbtn").on("click", function() {//no need parameter for this btn, just local
        var id = $(this).data("id");// talk data from btn
        var name = $(this).data("name");
        var price = $(this).data("price");

        //to build obj
        var item = {
            id: id,
            name: name,
            price: price,
            qty: 1,
        }
        // console.log(item);
        // var itemArr = new Array();
       
        var cartStr = localStorage.getItem('cart');//local storage ကနေဆွဲထုတ်တယ်
        if(!cartStr) {
            var itemArr = new Array();//မရှိရင် array ဆောက်
        }
        else {
            var itemArr = JSON.parse(cartStr);//ရှိရင် itemArr ထဲကို arry ပြန်ပြောင်းပြီးထည့်
        }
        itemArr.push(item);
        localStorage.setItem('cart', JSON.stringify(itemArr));
    })
})