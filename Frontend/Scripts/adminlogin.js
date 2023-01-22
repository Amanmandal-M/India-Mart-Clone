const BaseUrl = "http://localhost:5094"

const OtpButton = document.querySelector("#otps")

var data;

OtpButton.addEventListener("click",()=>{
    const FillOtp = document.querySelector("#otp")
    const RandomValue=Math.floor(Math.random()*9999)
    FillOtp.innerHTML="";
    FillOtp.innerHTML=RandomValue;
    data=FillOtp.innerHTML
})

const SubmitButton = document.querySelector("#subButton")
    
SubmitButton.addEventListener("click",()=>{
    const username = document.querySelector("#user").value
    const password = document.querySelector("#pass").value;
    const valCheck = document.querySelector("#otpval").value
    const obj = {
        "UserName":username,
        "Password":password
    }    
    if(data==valCheck){
        main(obj)
    }else{
        alert("Fill Properly all the Fields")
    }
})


const main = async ()=>{
    try {
        const res = await fetch ()
    } catch (error) {
        console.log(`Error: ${error}`);
        alert('You are not authorized')
    }
}