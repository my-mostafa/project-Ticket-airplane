arycontr = {
    iran:["Tehran","Esfahan","Rasht","shiraz"],
    usa : ["New york", "San diego" , "Chicago" , "Los angeles"],
    china : ["Nanjing","Shanghai","Chongqing","Shenzhen"],
    canada : ["Toronto","Vancouver","Ottawa","Edmonton"]
}

let country = ["iran","usa","china","canada"]
let contry
let op

country.forEach(function(e) {
    contry = document.querySelector("#contry")
    op = document.createElement("option")
    op.innerHTML = e
    op.value =e
    contry.append(op)
    
})


let i 
let t 
let io
let city = document.querySelector("#city")

contry.addEventListener("change",function () {
    
    i = contry.value 
    if(i==="select"){alert("please enter the country")}else{
    t = arycontr[i]   
    city.innerHTML = '' 
    t.forEach(function(d) {
       
        city.innerHTML = city.innerHTML+'<Option>'+d+'</Option>'
        
    })
}
})

