const body = document.createElement("body")
const row = document.createElement("div")
const card = document.createElement("div")
const img = document.createAttribute("img")
const name = document.createElement("div")
const job = document.createElement("div")
async function getUsers(){
    let arr = await fetch("http://localhost:3000/users")
    let data = arr.json()
    data.forEach(element => {
        img = element.img_url
    name = element.name
    job = element.job
    card.append(img,name,job)
    row.append(card)
    body.append(row)
    console.log("salam");
    });
}


