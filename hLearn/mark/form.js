function validationChk() {
    let name = document.querySelector('#name').value;
    let mm = document.querySelector('#mm').value;
    let en = document.querySelector('#en').value;
    let math = document.querySelector('#mt').value;
    let ps = document.querySelector('#ps').value;
    let chem = document.querySelector('#chem').value;
    let bio = document.querySelector('#bio').value;

    //select
    let myanmar =document.querySelector('#mm');
    let english = document.querySelector('#en');
    let mathematic = document.querySelector('#mt');
    let physic = document.querySelector('#ps');
    let chemistry = document.querySelector('#chem');
    let biology = document.querySelector('#bio');

  
    let mmerr = document.querySelector('#mmErr');
    let enerr = document.querySelector('#enErr');
    let mterr = document.querySelector('#mathErr');
    let pserr = document.querySelector('#psErr');
    let chemerr = document.querySelector('#chemErr');
    let bioerr = document.querySelector('#bioErr');

    if(mm == '' || en == '' || math == '' || ps == '' || chem == '' || bio == '' || name == '') {
       
        myanmar.removeAttribute('style');
        english.removeAttribute('style');
        mathematic.removeAttribute('style');
        physic.removeAttribute('style');
        chemistry.removeAttribute('style');
        biology.removeAttribute('style');

        
        mmerr.innerHTML='';
        enerr.innerHTML='';
        mterr.innerHTML='';
        pserr.innerHTML='';
        chemerr.innerHTML='';
        bioerr.innerHTML='';
        
        if(mm == '') {
           
            myanmar.style.border = '1px solid red';
            
            mmerr.innerHTML = "* Fill student mark for english"
            mmerr.style.color='red';
        }
        if(en == '') {
            
            english.style.border = '1px solid red';
            
            enerr.innerHTML = "* Fill student mark for english"
            enerr.style.color='red';
        }
        if(math == '') {
            
            mathematic.style.border='1px solid red';
            
            mterr.innerHTML="* Fill student mark for Mathematic";
            mterr.style.color='red';
        }
        if(ps == '') {
            
            physic.style.border = '1px solid red';
            
            pserr.innerHTML = "* Fill student mark for english"
            pserr.style.color='red';
        }
        if(chem == '') {
            
            chemistry.style.border = '1px solid red';
            
            chemerr.innerHTML = "* Fill student mark for english"
            chemerr.style.color='red';
        }
        if(bio == '') {
            
            biology.style.border = '1px solid red';
            
            bioerr.innerHTML = "* Fill student mark for english"
            bioerr.style.color='red';
        }
        
    }else {
        return {
            name, mm, en, math, ps, chem, bio
        };
    }
}



let tot = 0; let arr = [];
function result() {
    let datafun = validationChk ();
    if(datafun) {

    

    tot = Number(datafun.mm) + Number(datafun.en) + Number(datafun.math) + Number(datafun.ps) + Number(datafun.chem) + Number(datafun.bio);

    let obj = {
        objName : datafun.name,
        objMm : datafun.mm,
        objEn : datafun.en,
        objMath : datafun.math,
        objPs : datafun.ps,
        objChem : datafun.chem,
        objBio : datafun.bio,
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
    if(mm <= 50 || en <= 50 || math <= 50 || ps <= 50 || chem <=50 || bio <=50 ) {
        chk += `
            <tr>
                <td colspan = 8> Result of ${datafun.name} : </td>
                <td style = color:red> Fail!</td>
            </tr>
        `;
    }
    else {
        chk += `
            <tr>
                <td colspan = 8>Result of ${datafun.name} : </td>
                <td style = color:blue> Pass!</td>
            </tr>
        `;
    }
    document.getElementById('stdResult').innerHTML = chk;
    document.getElementById('data').innerHTML = forData;
    
    // return false;   
}
}