gsap.to("#d1 p",{
    opacity:1,
    duration:1,
    delay:1,
    x:10
})
gsap.to("#d1 h1",{
    opacity:1,
    duration:2,
    delay:1.5,
    x:10
})
gsap.to("#d1 h2",{
    opacity:1,
    duration:1,
    delay:2,
    x:10
})
gsap.to("#resume-div",{
    opacity:1,
    duration:1,
    delay:2,
    x:10
})
gsap.to(".circle",{
    opacity:1,
    duration:1,
    delay:2,
    y:10
})
gsap.to("#box",{
    height:"100vh",
    delay:1,
    duration:1
})
gsap.to("#page1 img",{
    opacity:1,
    x:10,
    duration:1
})
gsap.to("nav",{
    opacity:1,
    x:-3,
    delay:2
})
gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:-20,
    scrollTrigger:{
        trigger:"#page2 h1",
        scoller:"body",
        start:"top 80%",
        end:"top 80%",
        scrub:1
    }
})
gsap.from("#body3-container",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#body3-container",
        scoller:"body",
        start:"top 80%",
        end:"top 90%",
        scrub:1
    }
})
gsap.from("#page3 h1 ",{
    opacity:0,
    duration:2,
    x:-20,
    scrollTrigger:{
        trigger:"#page3 h1",
        scoller:"body",
        start:"top 60%",
        end:"top 80%",
        scrub:1
    }
})
gsap.from("#card img ",{
    opacity:0,
    duration:2,
    scale:0.8,
    scrollTrigger:{
        trigger:"#card img",
        scoller:"body",
        start:"top 60%",
        end:"top 80%",
        scrub:1
    }
})
gsap.from("#page4 h1",{
    opacity:0,
    duration:2,
    x:-20,
    scrollTrigger:{
        trigger:"#page4 h1",
        scoller:"body",
        start:"top 50%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from(".grid-container",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".grid-container",
        scoller:"body",
        start:"top 50%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#page5 h1",{
    opacity:0,
    duration:2,
    x:-20,
    scrollTrigger:{
        trigger:"#page5 h1",
        scoller:"body",
        start:"top 50%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#container",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#container",
        scoller:"body",
        start:"top 50%",
        end:"top 70%",
        scrub:1
    }
})
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "saivarshith18@gmail.com",
        Password : "BD99DBE496F5E515D8FEED9B4C256B09ED21",
        To : 'saivarshith18@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Portfolio Contact Form",
        Body : "Name: " + document.getElementById("name").value + 
        "<br> Email: "+ document.getElementById("email").value + 
        "<br> Phone no: "+ document.getElementById("phone").value+
        "<br> Message: "+ document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully")
    );
    

}