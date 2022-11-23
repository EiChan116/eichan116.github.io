
let tot = 0; let arr = [];
function result() {
    let name = document.querySelector('#name').value;
    let mm = document.querySelector('#mm').value;
    let en = document.querySelector('#en').value;
    let math = document.querySelector('#mt').value;
    let ps = document.querySelector('#ps').value;
    let chem = document.querySelector('#chem').value;
    let bio = document.querySelector('#bio').value;
    
    //validation
    
    let myanmar =document.querySelector('#mm');
    let english = document.querySelector('#en');
    let mathematic = document.querySelector('#mt');
    let physic = document.querySelector('#ps');
    let chemistry = document.querySelector('#chem');
    let biology = document.querySelector('#bio');
    let stdname = document.querySelector('#name');
  
    let mmerr = document.querySelector('#mmErr');
    let enerr = document.querySelector('#enErr');
    let mterr = document.querySelector('#mathErr');
    let pserr = document.querySelector('#psErr');
    let chemerr = document.querySelector('#chemErr');
    let bioerr = document.querySelector('#bioErr');
    let stdNameerr = document.querySelector('#nameErr');
    if(mm == '' || en == '' || math == '' || ps == '' || chem == '' || bio == '' || name == '') {
       
        myanmar.removeAttribute('style');
        english.removeAttribute('style');
        mathematic.removeAttribute('style');
        physic.removeAttribute('style');
        chemistry.removeAttribute('style');
        biology.removeAttribute('style');
        stdname.removeAttribute('style');
        
        mmerr.innerHTML='';
        enerr.innerHTML='';
        mterr.innerHTML='';
        pserr.innerHTML='';
        chemerr.innerHTML='';
        bioerr.innerHTML='';
        stdNameerr.innerHTML='';
        
        if(mm == '') {
           
            myanmar.style.border = '1px solid red';
            
            mmerr.innerHTML = "* Fill in the Myanmar Score!"
            mmerr.style.color='red';
        }
        if(en == '') {
            
            english.style.border = '1px solid red';
            
            enerr.innerHTML = "* Fill in the English score";
            enerr.style.color='red';
        }
        if(math == '') {
            
            mathematic.style.border='1px solid red';
            
            mterr.innerHTML="* Fill in the Mathematic score";
            mterr.style.color='red';
        }
        if(ps == '') {
            
            physic.style.border = '1px solid red';
            
            pserr.innerHTML = "* Fill in the Physic score";
            pserr.style.color='red';
        }
        if(chem == '') {
            
            chemistry.style.border = '1px solid red';
            
            chemerr.innerHTML = "* Fill in the Chemistry score";
            chemerr.style.color='red';
        }
        if(bio == '') {
            
            biology.style.border = '1px solid red';
            
            bioerr.innerHTML = "* Fill in the Biology score";
            bioerr.style.color='red';
        }
        if(name == '') {
            stdname.style.border = '1px solid red';
            stdNameerr.innerHTML="* Fill student Name!";
            stdNameerr.style.color='red';
        }
        return false;
    }else {
        myanmar.removeAttribute('style');
        english.removeAttribute('style');
        mathematic.removeAttribute('style');
        physic.removeAttribute('style');
        chemistry.removeAttribute('style');
        biology.removeAttribute('style');
        stdname.removeAttribute('style');

        mmerr.innerHTML='';
        enerr.innerHTML='';
        mterr.innerHTML='';
        pserr.innerHTML='';
        chemerr.innerHTML='';
        bioerr.innerHTML='';
        stdNameerr.innerHTML='';
    }
    

    tot = Number(mm) + Number(en) + Number(math) + Number(ps) + Number(chem) + Number(bio);

    let obj = {
        objName : name,
        objMm : mm,
        objEn : en,
        objMath : math,
        objPs : ps,
        objChem : chem,
        objBio : bio,
        objTot : tot
    }
    
    arr.push(obj);
   
    
    let forData = ''; let chk='';
    for(let i = 0; i < arr.length; i++ ) {
        forData += `
            <tr>
                <td>${ i + 1 }</td>
                <td>${ arr[i].objName }</td>
                <td>${ arr[i].objMm }</td>
                <td>${ arr[i].objEn }</td>
                <td> ${ arr[i].objMath } </td>
                <td>${ arr[i].objPs }</td>
                <td>${ arr[i].objChem }</td>
                <td>${ arr[i].objBio }</td>
                <td>${ arr[i].objTot }</td>
            </tr>
        `; break;
    }
    if(mm < 50 || en < 50 || math < 50 || ps < 50 || chem < 50 || bio < 50 ) {
        chk += `
            <tr>
                <td colspan = 8> Exam result of ${name} : </td>
                <td style = color:red> Fail!</td>
            </tr>
        `;
    }
    else {
        chk += `
            <tr>
                <td colspan = 8>Exam result of ${name} : </td>
                <td style = color:blue> Pass!</td>
            </tr>
        `;
    }
    document.getElementById('stdResult').innerHTML = chk;
    document.getElementById('data').innerHTML = forData;
    
    return false;   

}