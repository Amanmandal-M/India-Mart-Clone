// const BaseUrl = "https://hindbazaar-mandal.up.railway.app"
const BaseUrl = "http://localhost:5094";
const DefaultUrl = `${BaseUrl}/admin`;
const CheckUrl = `${DefaultUrl}/check`;

// Products Section 
const defaultUrl = `${BaseUrl}/products`  

// Bricks
const BrdatasUrl = `${defaultUrl}/BricksData`          //GET
const BrdataPost = `${defaultUrl}/BricksPost`          //POST
const BrdataByIdUrl = `${defaultUrl}/Bricks`           //GET BY ID(params)
const BrdataByLimit = `${defaultUrl}/Brlimit`          //Limit(Pagination)
const BrdataBytitleQuery = `${defaultUrl}/Brtitle`     //Search by title
const BrdatasortAscToDsc = `${defaultUrl}/Brasctodesc` //Sort ascending
const BrdatasortDscToAsc = `${defaultUrl}/Brdesctoasc` //Sort descending

// Excavator 
const ExdatasUrl = `${defaultUrl}/ExcavatorData`       //GET
const ExdataPost = `${defaultUrl}/ExcavatorPost`       //POST
const ExdataByIdUrl = `${defaultUrl}/Excavator`        //GET BY ID(params)
const ExdataByLimit = `${defaultUrl}/Exlimit`          //Limit(Pagination)
const ExdataBytitleQuery = `${defaultUrl}/Extitle`     //Search by title
const ExdatasortAscToDsc = `${defaultUrl}/Exasctodesc` //Sort ascending
const ExdatasortDscToAsc = `${defaultUrl}/Exdesctoasc` //Sort descending




const OtpButton = document.querySelector("#otps");

// Location File

document.querySelector("#shop").addEventListener("click", () => {
  location.pathname = "/Views/product.html";
});

document.querySelector("#sign").addEventListener("click", () => {
  location.pathname = "/Views/signup.html";
});

document.querySelector("#admin").addEventListener("click", () => {
  location.pathname = "/Views/adminlogin.html";
});

// ******************************************

var data;

OtpButton.addEventListener("click", () => {
  const FillOtp = document.querySelector("#otp");
  const RandomValue = Math.floor(Math.random() * 9999);
  FillOtp.innerHTML = "";
  FillOtp.innerHTML = RandomValue;
  data = FillOtp.innerHTML;
});

const SubmitButton = document.querySelector("#subButton");

SubmitButton.addEventListener("click", () => {
  const username = document.querySelector("#user").value;
  const password = document.querySelector("#pass").value;
  const valCheck = document.querySelector("#otpval").value;
  const obj = {
    UserName: username,
    Password: password,
  };
  if (data == valCheck) {
    checksDetails(obj);
  } else {
    alert("Fill Properly all the Fields");
  }
});

const checksDetails = async (obj) => {
  try {
    const res = await fetch(CheckUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await res.json();
    if (data.Status == 200) {
      alert("Hello Admin!");
      setTimeout(() => {
        HTML();
      }, 0);
    } else {
      alert("You are not Authorized");
    }
  } catch (error) {
    console.log(`Error: ${error}`);
    alert("You are not Authorized");
  }
};

const HTML = () => {
  const MainsDiv = document.querySelector("#mains");
  MainsDiv.innerHTML = "";
  MainsDiv.innerHTML = "";
  MainsDiv.style.height = "auto";
  MainsDiv.style.width = "auto";
  MainsDiv.innerHTML = `
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
                <button id="SubmitButton">Submit</button>
            </div>
        </div>


        <div id="GetButton">
            <button>All Products</button>
        </div>

        <div id="Container">
            <!-- Append Here -->
        </div>
    `;
  GettingValuesInput();
};

const GettingValuesInput = () => {
  const Title = document.querySelector("#title").value;
  const Description = document.querySelector("#desc").value;
  const Price = document.querySelector("#price").value;
  const ImageUrl = document.querySelector("#imageUrl").value;

  let obj = {
    Title: Title,
    Description: Description,
    Price: Price,
    ImageUrl: ImageUrl
  };
  Title != "" &&
  Description != "" &&
  Price != "" &&
  ImageUrl != ""
    ? PostProduct(obj)
    : alert("Please Fill Fields First");
};

const PostProduct = async (obj) => {
  try {
    const res = await fetch(PostUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj),
    });
    if (res.ok) {
      alert("Product Added Successfully");
      setTimeout(() => {
        document.querySelector("#title").value = "";
        document.querySelector("#desc").value = "";
        document.querySelector("#price").value = "";
        document.querySelector("#imageUrl").value = "";
        document.querySelector("#quantity").value = "";
      }, 1000);
    } else {
      alert("You are not Authorized");
    }
  } catch (error) {
    console.log(`Error in Posting Product: ${error}`);
  }
};
