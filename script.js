let form = document.querySelector('.login')
let wcScreen = document.querySelector('.wc-con')
let wcH1 = document.querySelector('.wc-con h1')
wcScreen.style.display= 'none';

function formSubmit(){
    let userName = document.querySelector("#inp1").value
    let userRollNum = document.querySelector("#inp2").value
 const userData = {
    userName,
    userRollNum
 }
 localStorage.setItem('userData',JSON.stringify(userData))
//  console.log(userData.userName)
 form.style.display= 'none';
 wcScreen.style.display= 'flex';

 wcH1.innerHTML=`Welcome ${userName}`

}