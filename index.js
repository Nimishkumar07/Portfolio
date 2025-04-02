let menuIcon=document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-bar")
let sections = document.querySelectorAll("section");
let navLinks =document.querySelectorAll(".header .nav-bar a");

menuIcon.addEventListener("click" ,()=>{
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active");
})

window.addEventListener("click",()=>{
    sections.forEach(sec=>{
        let top =window.scrollY;
        let offset = sec.offsetTop-150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute("id")

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove("active");
                // document.querySelectorAll(".header .nav-bar a[href*='+ id +']").classList.add("active")  - video
                document.querySelector(".header .nav-bar a[href*='" + id + "']").classList.add("active");

            })
        }
    })
})

let form=document.querySelector("form")
form.addEventListener("submit",function(event){
   // event.preventDefault();  // prevent default action
    alert("Form submitted");
    let details=document.querySelectorAll(" form .det");
    // for(info of details){
    // console.log(`${info.placeholder}: `,info.value)

    // }
    details.forEach(info => {
        console.log(`${info.placeholder}: `,info.value)
    });
});