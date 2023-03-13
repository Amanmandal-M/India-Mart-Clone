const BaseUrl = `https://hindbazaar-mandal.up.railway.app`;
const DefaultUrl = `${BaseUrl}/admin`;
const CheckUrl = `${DefaultUrl}/check`;

// Products Section
const defaultUrl = `${BaseUrl}/products`;

// Bricks
const BrdatasUrl = `${defaultUrl}/BricksData`; //GET
const BrdataPost = `${defaultUrl}/BricksPost`; //POST
const BrdataByIdUrl = `${defaultUrl}/Bricks`; //GET BY ID(params)
const BrdataByLimit = `${defaultUrl}/Brlimit`; //Limit(Pagination)
const BrdataBytitleQuery = `${defaultUrl}/Brtitle`; //Search by title
const BrdatasortAscToDsc = `${defaultUrl}/Brasctodesc`; //Sort ascending
const BrdatasortDscToAsc = `${defaultUrl}/Brdesctoasc`; //Sort descending

// Excavator
const ExdatasUrl = `${defaultUrl}/ExcavatorData`; //GET
const ExdataPost = `${defaultUrl}/ExcavatorPost`; //POST
const ExdataByIdUrl = `${defaultUrl}/Excavator`; //GET BY ID(params)
const ExdataByLimit = `${defaultUrl}/Exlimit`; //Limit(Pagination)
const ExdataBytitleQuery = `${defaultUrl}/Extitle`; //Search by title
const ExdatasortAscToDsc = `${defaultUrl}/Exasctodesc`; //Sort ascending
const ExdatasortDscToAsc = `${defaultUrl}/Exdesctoasc`; //Sort descending

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

document.querySelector(".first").addEventListener('click',(e)=>{
  location.pathname = '/index.html';
})

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

  const submitButton = document.querySelector("#SubmitButton");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    GettingValuesInput();
  });

  const AllProductsButton = document.querySelector("#GetButton");

  AllProductsButton.addEventListener("click", (e) => {
    buttonsBandE();
    funBr();
    funEx();
  });
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
    ImageUrl: ImageUrl,
  };
  Title != "" && Description != "" && Price != "" && ImageUrl != ""
    ? PostProduct(obj)
    : alert("Please Fill Fields First");
};


// ================= POST 'Method' of Bricks =================
const PostProduct = async (obj) => {
  try {

    const res = await fetch(BrdataPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    
    const data = await res.json();

    if (res.ok) {

      alert("Product Added Successfully");
      setTimeout(() => {
        document.querySelector("#title").value = "";
        document.querySelector("#desc").value = "";
        document.querySelector("#price").value = "";
        document.querySelector("#imageUrl").value = "";
      }, 1000);

    } else {

      alert("You are not Authorized");

    }
  } catch (error) {
    console.log(`Error in Posting Product: ${error}`);
  }
};


// ================= GET 'Method' of Bricks and Excavator =================

const BrGetProducts = async () => {
  try {
    const response = await fetch(BrdatasUrl);
    const data = await response.json();
    console.log(data);
    displayData1(data);
  } catch (error) {
    console.log("Error");
  }
};

const ExGetProducts = async () => {
  try {
    const response_1 = await fetch(ExdatasUrl);
    const data_1 = await response_1.json();
    console.log(data_1);
    displayData1(data_1);
  } catch (error) {
    console.log("Error");
  }
};


// ================= Initializing Values =================
const displayData1 = (data) => {
  const Containers = document.querySelector("#Container");
  Containers.innerHTML = "";
  data.forEach((el) => {
    const div = document.createElement("div");
    div.id = "smallDiv";

    const id = document.createElement("p");
    id.innerHTML = el._id;

    const image = document.createElement("img");
    image.setAttribute("src", el.ImageUrl);

    const title = document.createElement("h3");
    title.innerHTML = el.Title;

    const price = document.createElement("h4");
    if (el.Price == undefined) {
    } else {
      price.innerHTML = el.Price + " Lakh";
    }

    const Button = document.createElement("button");
    Button.innerHTML = "Delete";

    Button.addEventListener("click", (e) =>{
      console.log(id);
    })

    div.append(image, title, price, Button);
    Containers.append(div);
  });
};


// ================= Both Buttons Bricks and Excavator =================
const buttonsBandE = () => {
  const Containers = document.querySelector("#Container");
  Containers.innerHTML = `
    <div id="BtnBricks">Bricks</div>
    <div id="BtnExcavator">Excavator</div>
  `;
};


// ================= Appending Values of Bricks and Excavator =================
const funBr = () => {
  const BtBrick = document.querySelector("#BtnBricks");

  const Containers = document.querySelector("#Container");
  
  BtBrick.addEventListener("click", (e) => {
    Containers.innerHTML = "";
    BrGetProducts();
  });
};

const funEx = () => {
  const BtExcavator = document.querySelector("#BtnExcavator");

  const Containers = document.querySelector("#Container");

  BtExcavator.addEventListener("click", (e) => {
    Containers.innerHTML = "";
    ExGetProducts();
  });
};
