const form = document.querySelector("#form");
const adi = document.querySelector(".name");
const surname = document.querySelector(".surname");
const email = document.querySelector(".email");
const number = document.querySelector(".number");
const age = document.querySelector(".age");
const date = document.querySelector(".date");
const address = document.querySelector(".address");
const describe = document.querySelector(".describe");
const zip = document.querySelector(".zip");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");
const errorName = document.querySelector(".errorName");
const errorSurname = document.querySelector(".errorSurname");
const errorEmail = document.querySelector(".errorEmail");
const errorPassword = document.querySelector(".errorPassword");
const errorPassword2 = document.querySelector(".errorPassword2");
const errorNumber = document.querySelector(".errorNumber");
const errorAge = document.querySelector(".errorAge");
const errorDate = document.querySelector(".errorDate");
const errorAddress = document.querySelector(".errorAddress");
const errorDescribe = document.querySelector("errorDescribe");
const errorZip = document.querySelector(".errorZip");
const errorMale = document.querySelector(".errorMale");
const errorFemale = document.querySelector(".errorFemale");

const emailValiddimi = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(regex);
    
}


const password2Validdimi = (password2) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return password2.match(regex);
}

const passwordValiddimi = (password) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return password.match(regex);
}

const numberValiddimi = (number) => {
    const regex = /^[0-9]$/;

    return number.match(regex);
}

const ageValiddimi = (age) => {
    const regex = /^[1-9]?[0-9]{1}$|^100$/;

    return age.match(regex);
}

const dateValiddimi = (date) => {
    const regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    return date.match(regex);
}

const validateInputs = () => {
    let adiValue = adi.value.trim();
    let surnameValue = surname.value.trim();
    let emailValue = email.value.trim();
    let numberValue = number.value.trim();
    let ageValue = age.value.trim();
    let dateValue = date.value.trim();
    let addressValue = address.value.trim();
    let describeValue = describe.value.trim();
    let zipValue = zip.value.trim();
    let password = password.value.trim();
    //let password2 = password2.value.trim();

    let adiDogrudurmu = false;
    let passwordDogrudurmu = false;
    let ageDogrudurmu = false;
    let dateDogrudurmu = false;
    let emailDogrudurmu = false;
    let surnameDogrudurmu = false;
    let numberDogrudurmu = false;
    let describeDogrudurmu = false;
    let zipDogrudurmu = false;
    let addressDogrudurmu = false;

    if(adiValue === ""){
        alert("ad bosh olmaz");
    }
    else{
        adiDogrudurmu = true;
    }

    
if(emailValue === ""){
    //alert("email bosh olmaz");
    errorName.textContent = "email bosh olmaz";
}
else if(!emailValiddimi(emailValue)){
    alert("dogru email yaz");
    errorName.textContent = "";
}
else{
    emailDogrudurmu = true;
}

if(passwordValue === "" || password2Value === ""){
   // alert("password bosh olmaz");
    errorPassword.textContent = "password bosh olmaz";
}
else if(passwordValue !== password2Value){
   // alert("dogru password yaz");
    errorPassword.textContent = "dogru password yaz";
}
else if(!passwordValiddimi(passwordValue) || password2Validdimi(password2Value)){
    //alert("pasword shertlere uygun deyil");
    errorPassword.textContent = "pasword shertlere uygun deyil";
}
else{
   passwordDogrudurmu = true;
}

if(surnameValue === ""){
   // alert("soyad bosh olmaz");
    errorSurname.textContent = "soyad bosh olmaz";
}
else{
   surnameDogrudurmu = true;
}


if(numberValue === ""){
   // alert("number bosh olmaz");
    errorNumber.textContent = "number bosh olmaz";
}
else if(!numberValiddimi(numberValue)){
    //alert("dogru number yaz");
    errorNumber.textContent = "dogru number yaz";
}
else{
    numberDogrudurmu = true;
}

if(ageValue === ""){
    //alert("age bosh olmaz");
    errorAge.textContent = "age bosh olmaz";
}
else if(!ageValiddimi(ageValue)){
   // alert("dogru age yaz");
    errorAge.textContent = "dogru age yaz";
}
else{
    ageDogrudurmu = true;
}

if(dateValue === ""){
   // alert("date bosh olmaz");
    errorDate.textContent = "date bosh olmaz";
}
else if(!dateValiddimi(dateValue)){
    //alert("dogru date yaz");
    errorDate.textContent = "dogru date yaz";
}
else{
    dateDogrudurmu = true;
}

if(addressValue === ""){
    //alert("address bosh olmaz");   
    errorAddress.textContent = "address bosh olmaz"; 
}
else{
  addressDogrudurmu = true;
}

if(describeValue === ""){
   // alert("describe bosh olmaz");
    errorDescribe.textContent = "describe bosh olmaz";
}
else{
   describeDogrudurmu = true;
}

if(zipValue === ""){
   // alert("zip bosh olmaz");
    errorZip.textContent = "zip bosh olmaz";
}
else{
  zipDogrudurmu = true;
}

if(passwordDogrudurmu && dateDogrudurmu && password2Dogrudurmu && emailDogrudurmu && adiDogrudurmu && surnameDogrudurmu && describeDogrudurmu && ageDogrudurmu && numberDogrudurmu && zipDogrudurmu){
    localStorage.setItem("nickname", adiValue);
    localStorage.setItem("date", dateValue);
    localStorage.setItem("adress", addressValue);
    localStorage.setItem("describe", describeValue);
    localStorage.setItem("surname", surnameValue);
    localStorage.setItem("zip", zipValue);
    localStorage.setItem("age", ageValue);
    localStorage.setItem("number", numberValue);
    localStorage.setItem("password", password2Value);
    localStorage.setItem("email", emailValue);
}

}

form.addEventListener("submit", function(e){
    e.preventDefault();

    validateInputs();
})