const baseUrl = `https://hindbazaar-mandal.up.railway.app`
const defaultUrl = `${baseUrl}/products`               // default Endpoint

// Bricks
const BrdatasUrl = `${defaultUrl}/BricksData`          //GET
const BrdataByIdUrl = `${defaultUrl}/Bricks`           //GET BY ID(params)
const BrdataByLimit = `${defaultUrl}/Brlimit`          //Limit(Pagination)
const BrdataBytitleQuery = `${defaultUrl}/Brtitle`     //Search by title
const BrdatasortAscToDsc = `${defaultUrl}/Brasctodesc` //Sort ascending
const BrdatasortDscToAsc = `${defaultUrl}/Brdesctoasc` //Sort descending

// Excavator 
const ExdatasUrl = `${defaultUrl}/ExcavatorData`       //GET
const ExdataByIdUrl = `${defaultUrl}/Excavator`        //GET BY ID(params)
const ExdataByLimit = `${defaultUrl}/Exlimit`          //Limit(Pagination)
const ExdataBytitleQuery = `${defaultUrl}/Extitle`     //Search by title
const ExdatasortAscToDsc = `${defaultUrl}/Exasctodesc` //Sort ascending
const ExdatasortDscToAsc = `${defaultUrl}/Exdesctoasc` //Sort descending


// Buttons

const brickButton = document.querySelector("#brick")
const excavatorButton = document.querySelector("#excavator");

// Appending Values
const RightDiv = document.querySelector("#right")

// Search Products
const butVal = document.querySelector(".but")

// Locations 

document.querySelector("#sign").addEventListener("click",()=>{
    location.pathname = '/Views/signup.html'
})

document.querySelector("#admin").addEventListener("click",()=>{
    location.pathname = '/Views/adminLogin.html'
})


// Fetching By Clicking

document.querySelector('#photo').addEventListener("click", () =>{
    location.pathname="/index.html"
})

brickButton.addEventListener("click",(e)=>{
    RightDiv.innerHTML = ""
    mainfetch1();
})

excavatorButton.addEventListener("click",(e)=>{
    RightDiv.innerHTML = ""
    mainfetch2();
})

butVal.addEventListener("click",(e)=>{
    e.preventDefault();
    const SearchVal = document.querySelector("#ProductsVal").value;

    if(SearchVal==""){
        alert("Please Enter a Product")
    }else{
        RightDiv.innerHTML = ""
        searchFetching(SearchVal)
    }
    
})


// Fetching data Brick

const mainfetch1 = async () =>{
    try {
        const res = await fetch(BrdatasUrl,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        displayData1(data);
    } catch (error) {
        console.log(`Error: ${error}`);
        alert(`Error: ${error}`);
    }
}
mainfetch1();


const displayData1 = (data)=>{
    RightDiv.innerHTML = ""
    data.forEach(el=>{
        const div = document.createElement("div");
        div.id = "smallDiv";

        const image = document.createElement("img")
        image.setAttribute("src", el.ImageUrl);

        const title = document.createElement("h3")
        title.innerHTML = el.Title

        const price = document.createElement("h4")
        if(el.Price==undefined){
            
        }else{
            price.innerHTML = el.Price
        }

        const Button = document.createElement("button")
        Button.innerHTML = "Add to Cart"

        div.append(image,title,price,Button)
        RightDiv.append(div);
    })
}


// Excavator

const mainfetch2 = async () =>{
    try {
        const res = await fetch(ExdatasUrl,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        displayData2(data);
    } catch (error) {
        console.log(`Error: ${error}`);
        alert(`Error: ${error}`);
    }
}

const displayData2 = (data)=>{
    RightDiv.innerHTML=""
    data.forEach(el=>{
        const div = document.createElement("div");
        div.id = "smallDiv";

        const image = document.createElement("img")
        image.setAttribute("src", el.ImageUrl);

        const title = document.createElement("h3")
        title.innerHTML = el.Title

        const price = document.createElement("h4")
        if(el.Price==undefined){
            
        }else{
            price.innerHTML = el.Price
        }

        const Button = document.createElement("button")
        Button.innerHTML = "Add to Cart"

        div.append(image,title,price,Button)
        RightDiv.append(div);
    })
}

const searchFetching = async(SearchVal)=>{
    try {
        const res = await fetch(`${BrdataBytitleQuery}?q=${SearchVal}`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
       if(data.Message !== "Data not found"){
            displayData1(data)
       }else{
         alert("Data Not Found")
       }
    } catch (error) {
        console.log(`Error: ${error}`);
        alert(`Error: ${error}`);
    }
}