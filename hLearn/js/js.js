<script>
        
let dataArr = [];
let subTotal = 0;
function subTot() {
    let date = document.myForm.date.value;
    let amt = document.myForm.amt.value;
    let tot = document.myForm.tot.value;
    // console.log(date, amt, tot);
    subTotal += parseInt(tot);
    document.getElementById('subTotal').innerHTML = subTotal;

    //obj
    let obj =  {
        date : date,
        amt : amt,
        total : tot
    }
    // console.log(obj);
    dataArr.push(obj);
    // console.log(dataArr);
    let arrData = '';
    for(let i = 0; i < dataArr.length; i++) {
        let list = dataArr[i];
        console.log(list);
        arrData += `
            <tr>
                <td>${i + 1}</td>
                <td>${list.date}</td>
                <td>${list.amt}</td>
                <td>${list.total}</td>
            </tr>
        `;
    }
    document.getElementById('data').innerHTML = arrData;
}



</script>