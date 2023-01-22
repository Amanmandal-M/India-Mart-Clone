const baseUrl = `http://localhost:5094`
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


brickButton.addEventListener("click",(e)=>{
    RightDiv.innerHTML = ""
    mainfetch1();
})

excavatorButton.addEventListener("click",(e)=>{
    RightDiv.innerHTML = ""
    mainfetch2();
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