function caller(){
    document.querySelector("#main").style.display="initial";
    function loader1(){
        var a = 0;
        setInterval(function(){
            if(a<30)
            {
                document.querySelector("#varieties").innerHTML=a+"+";
                a++;
            }
            else
            {
                a =30;
                document.querySelector("#varieties").innerHTML=a+"+";
            }
        },20)
    }
    function loader2(){
        var a = 0;
        setInterval(function(){
            if(a<25)
            {
                document.querySelector("#location").innerHTML=a+"+";
                a++;
            }
            else
            {
                a =25;
                document.querySelector("#location").innerHTML=a+"+";
            }
        },30)
    }
    function loader3(){
        var a = 0;
        setInterval(function(){
            if(a<9)
            {
                document.querySelector("#state").innerHTML=a;
                a++;
            }
            else
            {
                a =9;
                document.querySelector("#state").innerHTML=a;
            }
        },50)
    }
    
    gsap.to("#varieties",{
        scrollTrigger:{
            trigger: "#varieties",
            start: "top 80%",
            // markers: true,
        },
        onComplete: function(){
            loader1();
        }
    })
    
    gsap.to("#location",{
        scrollTrigger:{
            trigger: "#location",
            start: "top 80%",
            // markers: true,
        },
        onComplete: function(){
            loader2();
        }
    })
    
    gsap.to("#state",{
        scrollTrigger:{
            trigger: "#state",
            start: "top 80%",
            // markers: true,
        },
        onComplete: function(){
            loader3();
        }
    })
    
    
    
    var clut = "";
    document.querySelector("#section3 p").textContent.split("")
    .forEach(function(tex){
        clut += `<span>${tex}</span>`
    })
    document.querySelector("#section3 p").innerHTML = clut
    gsap.from("#section3 p>span",{
        scrollTrigger:{
            trigger:"#section3 p",
            start:"top 95%",
           scrub:2,
            end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        stagger:.02,
        y:50
        
    })
    
    
    gsap.from("#section3 h1",{
        scrollTrigger:{
            trigger:"#section3 h1",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        // y:10    
    })
    gsap.from("#section3 img",{
        scrollTrigger:{
            trigger:"#section3 img",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        x:-50,
        stagger:.8
    })
    gsap.from("#section3 button",{
        scrollTrigger:{
            trigger:"#section3 button",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0
    })
    
    
    
    var clut2 = "";
    document.querySelector("#section4 p").textContent.split("")
    .forEach(function(tex){
        if(tex ==="*")
        {
            clut2 += `<span><br><br></span>`
        }
        else
        {
            clut2 += `<span>${tex}</span>`        
        }
    
    })
    document.querySelector("#section4 p").innerHTML = clut2
    gsap.from("#section4 p>span",{
        scrollTrigger:{
            trigger:"#section4 p",
            start:"top 95%",
           scrub:2,
            end:"bottom 80%",
            // markers:true
            
        },
        opacity:0,
        stagger:.02,
        y:50
        
    })
    
    
    gsap.from("#section4 h1",{
        scrollTrigger:{
            trigger:"#section4 h1",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        // y:10    
    })
    gsap.from("#section4 img",{
        scrollTrigger:{
            trigger:"#section4 img",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        x:-50,
        stagger:.8
    })
    
    
    function fakeswiper(){
        document.querySelector("#leftmoveone").addEventListener("click",function(){
            document.querySelector("#navigator1").style.display="none";
            document.querySelector("#navigator2").style.display="none";
            document.querySelector("#navigator3").style.display="flex";
            document.querySelector("#one").style.opacity=0;
            document.querySelector("#two").style.opacity=0;
            document.querySelector("#three").style.opacity=1;
        })
        
        document.querySelector("#rightmoveone").addEventListener("click",function(){
            document.querySelector("#navigator1").style.display="none";
            document.querySelector("#navigator2").style.display="flex";
            document.querySelector("#navigator3").style.display="none";
            document.querySelector("#one").style.opacity=0;
            document.querySelector("#two").style.opacity=1;
            document.querySelector("#three").style.opacity=0;
        })
        
        document.querySelector("#leftmovetwo").addEventListener("click",function(){
            document.querySelector("#navigator1").style.display="flex";
            document.querySelector("#navigator2").style.display="none";
            document.querySelector("#navigator3").style.display="none";
            document.querySelector("#one").style.opacity=1;
            document.querySelector("#two").style.opacity=0;
            document.querySelector("#three").style.opacity=0;
        })
        
        document.querySelector("#rightmovetwo").addEventListener("click",function(){
            document.querySelector("#navigator1").style.display="none";
            document.querySelector("#navigator2").style.display="none";
            document.querySelector("#navigator3").style.display="flex";
            document.querySelector("#one").style.opacity=0;
            document.querySelector("#two").style.opacity=0;
            document.querySelector("#three").style.opacity=1;
        })
        
        document.querySelector("#leftmovethree").addEventListener("click",function(){
            document.querySelector("#navigator1").style.display="none";
            document.querySelector("#navigator2").style.display="flex";
            document.querySelector("#navigator3").style.display="none";
            document.querySelector("#one").style.opacity=0;
            document.querySelector("#two").style.opacity=1;
            document.querySelector("#three").style.opacity=0;
        })
        
        document.querySelector("#rightmovethree").addEventListener("click",function(){
            document.querySelector("#navigator1").style.display="flex";
            document.querySelector("#navigator2").style.display="none";
            document.querySelector("#navigator3").style.display="none";
            document.querySelector("#one").style.opacity=1;
            document.querySelector("#two").style.opacity=0;
            document.querySelector("#three").style.opacity=0;
        })
    }
    fakeswiper();
    
    
    
    gsap.from("#section5 h1",{
        scrollTrigger:{
            trigger:"#section5 h1",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        // y:10    
    })
    gsap.from("#section5>img",{
        scrollTrigger:{
            trigger:"#section5>img",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        x:-50,
        stagger:.8
    })
    gsap.from("#section5 h3",{
        scrollTrigger:{
            trigger:"#section5 h3",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        // y:10    
    })
    
    gsap.from("#section5 #changer",{
        scrollTrigger:{
            trigger:"#section5 #changer",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        y:100    
    })
    
    
    
    gsap.from("#footer #border img",{
        scrollTrigger:{
            trigger:"#footer #border img",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        stagger:.025
    })
    
    gsap.from("#footer #news h1",{
        scrollTrigger:{
            trigger:"#footer #news h1",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        // y:10    
    })
    gsap.from("#footer #news>img",{
        scrollTrigger:{
            trigger:"#footer #news>img",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        x:-50,
        stagger:.8
    })
    gsap.from("#footer #news p",{
        scrollTrigger:{
            trigger:"#footer #news p",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        // y:10    
    })
    gsap.from("#footer #news #input",{
        scrollTrigger:{
            trigger:"#footer #news #input",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        y:50 
    })
    
    gsap.from("#footer #foot p",{
        scrollTrigger:{
            trigger:"#footer #foot p",
            start:"top 85%",
            // end:"bottom 90%",
            // markers:true
            
        },
        opacity:0,
        y:10,
        stagger:.3 
    })
}


window.addEventListener("load",function(){
    document.querySelector("#loader").style.display="none";
    caller();
})