let userName = document.querySelector("#inp1").value
let userRollNum = document.querySelector("#inp2").value
let form = document.querySelector('.login')
let wcScreen = document.querySelector('.wc-con')
function formSubmit(){
 const userData = {
    userName,
    userRollNum
 }
 localStorage.setItem('userData',JSON.stringify(userData))
//  console.log(userData.userName)
 form.style.display= 'none';
 wcScreen.style.display= 'flex';

}