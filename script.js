var crsr = document.querySelector("#cursor")
var crsrblur = document.querySelector("#cursorBlur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrblur.style.left = dets.x -90 + "px"
    crsrblur.style.top = dets.y -90 + "px"
})

gsap.to("#nav",{
    height:"100px",
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(29, 43, 83,0.4)",
    duration :0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub:4
    }
})