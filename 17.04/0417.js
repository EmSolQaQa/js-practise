let body = document.body
let row = document.createElement("div")


async function getUsers(){
    let arr = await fetch("http://localhost:3000/users")
    let data = await arr.json()
    console.log(data)
    data.forEach(element => {
        let card = document.createElement("div")
let img = document.createElement("img")
let name = document.createElement("div")
let job = document.createElement("div")
row.setAttribute("class","row")
img.setAttribute("class","img")
name.setAttribute("class","name")
job.setAttribute("class","job")

    img.setAttribute("src",element.img_url) 
    
    name = element.name
    job = element.job
    card.setAttribute("class","card")

    card.append(img,name,job)
    row.append(card)
    body.append(row)
    });
}

getUsers()

