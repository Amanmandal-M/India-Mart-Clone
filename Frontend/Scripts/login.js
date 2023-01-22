const BaseUrl = "https://hindbazaar-mandal.up.railway.app";
const BaseRegister = `${BaseUrl}/users`
const LoginUrl = `${BaseRegister}/login`

document.querySelector('#photo').addEventListener("click", () =>{
  location.pathname="/index.html"
})


const submitButton = document.getElementById("form");

submitButton.addEventListener("submit", (e) => {
  e.preventDefault();
  getData();
});

function getData() {
  const email = document.getElementById("EmailId").value;
  const password = document.getElementById("Password").value;
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
        if(data.Message == "Wrong Credentials") {
          alert("Login Failed")
        }else{
            const name = data.Data[0].Username;
            sessionStorage.setItem("Username", name);
            location.pathname = "/Frontend/index.html"
            alert("Login Successfully")
        }
    } else {
      alert("Login failed");
    }
  } catch (error) {
    console.log("Error While Posting");
    alert("Login Failed");
  }
};