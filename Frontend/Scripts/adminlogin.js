const BaseUrl = "https://hindbazaar-mandal.up.railway.app"
const DefaultUrl = `${BaseUrl}/admin`
const CheckUrl = `${DefaultUrl}/check`
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
        checksDetails(obj)
    }else{
        alert("Fill Properly all the Fields")
    }
})


const checksDetails = async (obj)=>{
    try {
        const res = await fetch(CheckUrl,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const data = await res.json();
        if(data.Status == 200){
            alert("Hello Admin!");
            setTimeout(()=>{
                HTML();
            },0)
        }else{
            alert('You are not Authorized')
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        alert('You are not Authorized')
    }
}




const HTML = () => {
    const MainsDiv = document.querySelector('#mains')
    MainsDiv.innerHTML = ""
    MainsDiv.innerHTML=""
    MainsDiv.style.height="auto"
    MainsDiv.style.width="auto"
    MainsDiv.innerHTML=`
        <div id="CrudOperations">
            <h1>Add Product</h1>
            <div id="helping">
                <label for="">Title</label>
                <input type="text" placeholder="Enter Title" id="title" required>
                <br>
                <label for="">Description</label>
                <input type="text" placeholder="Enter Description" id="desc" required>
                <br>
                <label for="">Price</label>
                <input type="number" placeholder="Enter Price" id="price" required>
                <br>
                <label for="">Image Url</label>
                <input type="url" placeholder="Enter Image Url" id="imageUrl" required>
                <br>
                <label for="">Quantity</label>
                <input type="number" placeholder="Enter Quantity" id="quantity" required>
                <br>
                <button id="SubmitButton">Submit</button>
            </div>
        </div>


        <div id="GetButton">
            <button>All Products</button>
        </div>

        <div id="Container">
            <!-- Append Here -->
        </div>
    `
}