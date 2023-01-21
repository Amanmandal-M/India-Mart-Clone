const BaseUrl = "https://secondbackendproject-production.up.railway.app" ;
const BaseRegister = `${BaseUrl}/users`
const RegisterUrl = `${BaseRegister}/register`

const ButtonProduct = document.querySelector("#pro");
ButtonProduct.addEventListener("click", () =>{
  alert("Please Sign Up First!");
})


let forms = document.getElementById("form");

forms.addEventListener("submit", (e) => {
  e.preventDefault();
 
  let p1 = document.querySelector("#Password").value;
  let p2 = document.querySelector("#ConfirmPassword").value;
 
  p1 == p2 ?  dataInput() : alert("Please Check your Password");
});


function dataInput() {
  let inputs = document.querySelectorAll("input");
  let selected = document.querySelector("#Role").value;
  let obj = {};
  for (let i = 0; i < inputs.length - 1; i++) {
    if (inputs[i].id == "ConfirmPassword") {
      continue;
    } else {
      obj[inputs[i].id] = inputs[i].value;
      obj["Role"] = selected;
    }
  }
  console.log(obj);
  dataImportDB(obj);
}

const dataImportDB = async (obj) => {
  try {
    const res = await fetch(RegisterUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await res.json();
    console.log(data);
    if (res.status === 200) {
      alert("Signup Successfully");
      sessionStorage.clear()
      setTimeout(() => {
        document.querySelector("#Username").value = "";
        document.querySelector("#EmailId").value = "";
        document.querySelector("#DateOfBirth").value = "";
        document.querySelector("#Location").value = "";
        document.querySelector("#Password").value = "";
        document.querySelector("#ConfirmPassword").value = "";
      },0);
      location.pathname = "/Views/login.html";
    } else {
      alert("Something Went Wrong");
    }
  } catch (error) {
    alert("Error in Fetching");
  }
}