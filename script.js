var crsr = document.querySelector("#cursor")
var crsrblur = document.querySelector("#cursorBlur")
document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('cursor');
    const cursorBlur = document.getElementById('cursorBlur');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursorBlur.style.left = `${e.clientX}px`;
    cursorBlur.style.top = `${e.clientY}px`;
});


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

function generateBackground() {
    const containers = document.querySelectorAll("#starry-background");
    containers.forEach((container) => {
        // Remove existing stars and meteoroids to avoid duplication
        container.innerHTML = "";

        // Generate stars
        for (let i = 0; i < 200; i++) {
            let star = document.createElement("div");
            star.className = "star";
            star.style.top = Math.random() * 100 + "%";
            star.style.left = Math.random() * 100 + "%";
            star.style.animationDelay = Math.random() * 3 + "s";
            container.appendChild(star);
        }

        // Generate meteoroids with different shooting directions
        const directions = ['s', 'sw', 'se', 'nw', 'ne'];
        for (let i = 0; i < 10; i++) {
            let meteoroid = document.createElement("div");
            meteoroid.className = `meteoroid ${directions[Math.floor(Math.random() * directions.length)]}`;
            meteoroid.style.top = Math.random() * 100 + "%";
            meteoroid.style.left = Math.random() * 100 + "%";
            meteoroid.style.animationDuration = Math.random() * 50 + 10 + "s"; // Duration between 1s to 3s
            meteoroid.style.animationDelay = Math.random() * 10 + "s"; // Delay to stagger meteoroids
            container.appendChild(meteoroid);
        }
    });
}

generateBackground();

  
