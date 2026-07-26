const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");
menuBtn.onclick=()=>{
navLinks.classList.toggle("active");
};
document.querySelectorAll(".nav-links a").forEach(link=>{
link.onclick=()=>{
navLinks.classList.remove("active");
};
});
const text=[
"Frontend Web Developer",
"JavaScript Developer",
"Responsive Web Designer",
"BS Computer Science Student"
];
let textIndex=0;
let charIndex=0;
let deleting=false;
const typing=document.getElementById("typing");
function typeEffect(){
const current=text[textIndex];
if(!deleting){
typing.textContent=current.substring(0,charIndex++);
if(charIndex>current.length){
deleting=true;
setTimeout(typeEffect,1500);
return;
}
}else{
typing.textContent=current.substring(0,charIndex--);
if(charIndex<0){
deleting=false;
textIndex++;
if(textIndex>=text.length)textIndex=0;
}
}
setTimeout(typeEffect,deleting?50:120);
}
typeEffect();
const navbar=document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
if(window.scrollY>80){
navbar.style.background="#0f172a";
navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";
}else{
navbar.style.background="rgba(15,23,42,.9)";
navbar.style.boxShadow="none";
}
});
const reveals=document.querySelectorAll("section");
function reveal(){
reveals.forEach(sec=>{
const top=sec.getBoundingClientRect().top;
if(top<window.innerHeight-120){
sec.classList.add("active");
}
});
}
window.addEventListener("scroll",reveal);
reveal();
const links=document.querySelectorAll(".nav-links a");
const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
let current="";
sections.forEach(section=>{
const top=section.offsetTop-150;
const height=section.clientHeight;
if(pageYOffset>=top){
current=section.getAttribute("id");
}
});
links.forEach(link=>{
link.classList.remove("current");
if(link.getAttribute("href")==="#"+current){
link.classList.add("current");
}
});
});
emailjs.init("ZWdGteAEb9Nyl12S7");
const form=document.getElementById("contact-form");
form.addEventListener("submit",function(e){
e.preventDefault();
emailjs.send("service_ex0at8p","template_iujwj3s",{
from_name:document.getElementById("name").value,
from_email:document.getElementById("email").value,
subject:document.getElementById("subject").value,
message:document.getElementById("message").value
}).then(function(){
alert("Message sent successfully!");
form.reset();
},function(error){
alert("Failed to send message.");
console.log(error);
});
});
const topBtn=document.createElement("button");
topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';
topBtn.className="top-btn";
document.body.appendChild(topBtn);
window.addEventListener("scroll",()=>{
if(window.scrollY>500){
topBtn.classList.add("show");
}else{
topBtn.classList.remove("show");
}
});
topBtn.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
};