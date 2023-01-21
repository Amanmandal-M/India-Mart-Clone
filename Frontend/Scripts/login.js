const BaseUrl = "https://secondbackendproject-production.up.railway.app" ;
const BaseRegister = `${BaseUrl}/users`
const LoginUrl = `${BaseRegister}/login`

const ButtonProduct = document.querySelector("#pro");
ButtonProduct.addEventListener("click", () =>{
  alert("Please Login First!");
}) 


const submitButton = document.getElementById("form");

submitButton.addEventListener("submit", (e) => {
  e.preventDefault();
  getData();
});

function getData() {
  const email = document.getElementById("EmailId").value;
  const password = document.getElementById("Password").value;
  sessionStorage.setItem("EmailId", email)
  sessionStorage.setItem("Password", password)
  let obj = {
    EmailId: email,
    Password: password,
  };

  dataImportDB(obj);
}

const dataImportDB = async (obj) => {
  try {
    const res = await fetch(LoginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (res.ok==true) {
        let data = await res.json();
        console.log(data);
        alert("Login Successfully")
            const name = data.Data[0].Username;
            const tokenCopy = data.Token;                        //user Takes token from here
            sessionStorage.setItem("Username", name);
            sessionStorage.setItem("Token", tokenCopy);
            location.pathname = "/Views/app.html"
    } else {
      alert("Login failed");
    }
  } catch (error) {
    console.log("Error While Posting");
    alert("Login Failed");
  }
};