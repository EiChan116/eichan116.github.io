$(function() {
    getData();
    
    $("button.addtocart").on("click", function() {
        var id = $(this).data("id");// talk data from btn
        var name = $(this).data("name");
        var price = $(this).data("price");

        //to build obj
        var item = { //item.id, item.price etc... pyan call loh ya
            id: id, //key, val
            name: name,//key, val
            price: price,//key, val
            qty: 1,
        }
        // console.log(item)
        var cartStr = localStorage.getItem('cart');
        if(!cartStr) {
            var itemArr = new Array();//only first time
        }
        else {
            var itemArr = JSON.parse(cartStr)// string to array pyan change
        }
        //array ပြောင်းပြီး အောက်က looping မှာ တစ်ခုချင်းယူပတ်နိုင်ဖို့ ပြန်ပြောင်းပေးရ
        var status = false;
    
        $.each(itemArr, function(i,v) {
            if(v.id == id) {
                v.qty++;
                status = true;
                return false;// making break(break; in other programs)
            }
        });


        if(status == false) {
            itemArr.push(item);
        }
        localStorage.setItem('cart', JSON.stringify(itemArr));//string ပြန်ပြောင်းပြီး local storage ထဲထည့်တယ်
        getData();
    });

    function getData() {
        var cartStr = localStorage.getItem('cart');s
        

        if(!cartStr) {
            var data = `<h2 style = text-align: "center">Your cart is empty!</h2>`;
            $(".mytable").hide();
            $(".mycart").show();
            $(".mycart").html(data);
        }
        else {
            var body;
            var cartArr = JSON.parse(cartStr);
            var total = 0;
            $.each(cartArr, function(i, v) {
                total += v.qty * v.price;
                // let id = ++i;
                let id = i + 1;

                body += `<tr>
                        <td>${id}
                        <button class = "deletebtn">x</button>
                        </td>
                        <td>${v.name}</td>
                        <td>${v.price}</td>
                        <td>
                        <button class = "minbtn" data-index = "${i}">-</button>
                        ${v.qty}
                        <button class = "maxbtn" data-index = "${i}">+</button>
                        </td>
                        <td>${v.qty * v.price}</td>
                </tr>`
            });

            body += `<tr>
                    <td colspan = "4">Total</td>
                    <td>${total}</td>
            </tr>`
            $(".mycart").hide()
            $("#cartitems").html(body);
            $(".mytable").show();
        };     
    };  
    //decrease qty
    $("#cartitems").on("click", ".minbtn", function() {
        // alert("ok") အလုပ်လုပ်တယ်
        var index = $(this).data("index");
        var cartStr = localStorage.getItem('cart');
        var cartArr = JSON.parse(cartStr);
        if(cartArr[index].qty>1) {
            cartArr[index].qty--;
        }
        else {
            var status = confirm("Are you sure you want to delete?") //confirm က ok, cancel ပေါ်အောင်လုပ်တယ်
            // console.log(status)
            if(status == true) {
                //delete current row
                cartArr.splice(index, 1);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cartArr));//ထည့်မယ်
        getData();
    })

    $("#cartitems").on("click", ".maxbtn", function() {
        // alert("ok") အလုပ်လုပ်တယ်
        var index = $(this).data("index");
        var cartStr = localStorage.getItem('cart');
        var cartArr = JSON.parse(cartStr);
        
        cartArr[index].qty++;
       
        
        localStorage.setItem('cart', JSON.stringify(cartArr));//ထည့်မယ်
        getData();
    })

    $("#cartitems").on("click", ".deletebtn", function() {
        var index = $(this).data("index");
        var cartStr = localStorage.getItem('cart');
        var cartArr = JSON.parse(cartStr);
        var status = confirm("Are you sure you want to delete?")
        if(status == true) {
            cartArr.splice(index,1);
        }

        
        localStorage.setItem('cart', JSON.stringify(cartArr));//ထည့်မယ်
        getData();
    })
});