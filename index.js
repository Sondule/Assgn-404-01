
const planets = [
    {planetName: "---Select planet---"},
    { planetName: "Sun", gravity: 27.9, image: "sun.jpeg" },
    { planetName: "Moon", gravity: 0.1655, image: "Moon.jpeg" },
    { planetName: "Mercury", gravity: 0.377, image: "Mercury.jpeg" },
    { planetName: "Venus", gravity: 0.9032, image: "Venus.jpeg" },
    { planetName: "Earth", gravity: 1, image: "Earth.jpeg" },
    { planetName: "Mars", gravity: 0.3895, image: "Mars.jpeg" },
    { planetName: "Jupiter", gravity: 2.640, image: "Jupiter.jpeg" },
    { planetName: "Saturn", gravity: 1.139, image: "Saturn.jpeg" },
    { planetName: "Uranus", gravity: 0.917, image: "Uranus.jpeg" },
    { planetName: "Neptune", gravity: 1.148, image: "Neptune.jpeg" },
]
planets.map((element)=>{
let option=document.createElement("option");
option.classList.add("optioncss")
option.innerHTML=element.planetName;
option.value=element.gravity;
let name=document.getElementById("planetname");
name.appendChild(option);
option.setAttribute("imagesrc",element.image);

}

)
let clear_error=document.getElementById("error");
function calculate(){
let mass= +document.getElementById("massIN").value;
let select=document.getElementById("planetname");
let selectindex=select.selectedIndex;
let myvalue=select.options[selectindex];
let weight=Math.abs(mass*myvalue.value);
// let outputdiv=document.getElementById("outputdiv");
let error='Please enter specific value';

let maindiv=document.getElementById("outputdiv");

if(mass=="" || selectindex==0){
    var h1error=document.getElementById("error");
    h1error.innerText=error;
    // clear_outputdiv.innerHTML=" ";
    maindiv.style.display="none";
    console.log(error);
h1error.classList.add("errorshow");
}

else{
    maindiv.style.display="flex";
clear_error.innerHTML=" ";
maindiv.classList.add("outputdiv1");
var imgsrc= myvalue.getAttribute("imagesrc");
var img=document.getElementById("planet-img");
img.src=imgsrc;
img.classList.add("seeimg");
let p=document.getElementById("text"); 
p.innerText=`The weight of the object on ${myvalue.innerHTML} `;
let h1=document.getElementById("getvalue");
h1.classList.add("valuecss");
h1.innerText=weight.toFixed(2)+' N';

}
}const planets = [
    {planetName: "---Select planet---"},
    { planetName: "Sun", gravity: 27.9, image: "sun.jpeg" },
    { planetName: "Moon", gravity: 0.1655, image: "Moon.jpeg" },
    { planetName: "Mercury", gravity: 0.377, image: "Mercury.jpeg" },
    { planetName: "Venus", gravity: 0.9032, image: "Venus.jpeg" },
    { planetName: "Earth", gravity: 1, image: "Earth.jpeg" },
    { planetName: "Mars", gravity: 0.3895, image: "Mars.jpeg" },
    { planetName: "Jupiter", gravity: 2.640, image: "Jupiter.jpeg" },
    { planetName: "Saturn", gravity: 1.139, image: "Saturn.jpeg" },
    { planetName: "Uranus", gravity: 0.917, image: "Uranus.jpeg" },
    { planetName: "Neptune", gravity: 1.148, image: "Neptune.jpeg" },
]
planets.map((element)=>{
let option=document.createElement("option");
option.classList.add("optioncss")
option.innerHTML=element.planetName;
option.value=element.gravity;
let name=document.getElementById("planetname");
name.appendChild(option);
option.setAttribute("imagesrc",element.image);

}

)
let clear_error=document.getElementById("error");
function calculate(){
let mass= +document.getElementById("massIN").value;
let select=document.getElementById("planetname");
let selectindex=select.selectedIndex;
let myvalue=select.options[selectindex];
let weight=Math.abs(mass*myvalue.value);
// let outputdiv=document.getElementById("outputdiv");
let error='Please enter specific value';

let maindiv=document.getElementById("outputdiv");

if(mass=="" || selectindex==0){
    var h1error=document.getElementById("error");
    h1error.innerText=error;
    // clear_outputdiv.innerHTML=" ";
    maindiv.style.display="none";
    console.log(error);
h1error.classList.add("errorshow");
}

else{
    maindiv.style.display="flex";
clear_error.innerHTML=" ";
maindiv.classList.add("outputdiv1");
var imgsrc= myvalue.getAttribute("imagesrc");
var img=document.getElementById("planet-img");
img.src=imgsrc;
img.classList.add("seeimg");
let p=document.getElementById("text"); 
p.innerText=`The weight of the object on ${myvalue.innerHTML} `;
let h1=document.getElementById("getvalue");
h1.classList.add("valuecss");
h1.innerText=weight.toFixed(2)+' N';

}
}