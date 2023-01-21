const BaseUrl = "https://pear-gleaming-skunk.cyclic.app";
const DefaultUrl = `${BaseUrl}/products`;
const GetAllProductsUrl = `${DefaultUrl}/`; // GET
const PostUrl = `${DefaultUrl}/create`; // POST
const UpdateUrl = `${DefaultUrl}/update/id`; // PATCH
const DeleteUrl = `${DefaultUrl}/delete/id`; // DELETE

const Username = sessionStorage.getItem("Username");
const Token = sessionStorage.getItem("Token");

// Create A Product

const submitButton = document.querySelector("#SubmitButton");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  Token ? GettingValuesInput() : alert("Please Login First");
});

const GettingValuesInput = () => {
  const Title = document.querySelector("#title").value;
  const Description = document.querySelector("#desc").value;
  const Price = document.querySelector("#price").value;
  const ImageUrl = document.querySelector("#imageUrl").value;
  const Quantity = document.querySelector("#quantity").value;

  let obj = {
    Title: Title,
    Description: Description,
    Price: Price,
    ImageUrl: ImageUrl,
    Quantity: Quantity,
  };
  Title != "" &&
  Description != "" &&
  Price != "" &&
  ImageUrl != "" &&
  Quantity != ""
    ? PostProduct(obj)
    : alert("Please Fill Fields First");
};

const PostProduct = async (obj) => {
  try {
    const res = await fetch(PostUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${Token}`,
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

// Get All Products

const getButton = document.querySelector("#GetButton");

getButton.addEventListener("click", (e) => {
  const email = sessionStorage.getItem("EmailId");
  const password = sessionStorage.getItem("Password");

  email == "amanmandal644@gmail.com" && password == "aman123@#"
    ? 
    (GetProducts(),
     sessionStorage.removeItem("EmailId"),
     sessionStorage.removeItem("Password"))
    : 
    (alert("You are not Authorized"),
     sessionStorage.removeItem("EmailId"),
     sessionStorage.removeItem("Password"));
    ;
});

const GetProducts = async () => {
  try {
    const res = await fetch(GetAllProductsUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${Token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    showingProducts(data);
  } catch (error) {
    console.log(`Error in Getting Products: ${error}`);
  }
};

const showingProducts = (data) => {
  const divInsider = document.querySelector("#Container");
  divInsider.innerHTML = `
        ${data.map((el) => {
          return `
                <div class="ProductsData">
                    <img src=${el.ImageUrl} alt="Error">
                    <p>ID : ${el._id}</p>
                    <p>User Id : ${el.UserID}</p>  
                    <p>Title : ${el.Title}</p>
                    <p>Description : ${el.Description}</p>
                    <p>Quantity : ${el.Quantity}</p>
                    <p>Price : ${el.Price}</p>   
                </div>
                `;
        }).join(' ')}
    `;
    setTimeout(()=>{
        divInsider.innerHTML = ""
    },10000)
};
