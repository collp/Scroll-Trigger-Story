// app.js
gsap.registerPlugin(ScrollTrigger);

// Title animation
gsap.to(".title", {
    x: 2500,
    duration: 1000,
    scrollTrigger: {
        trigger: ".title",
        start: "top 50%",
        end: "+=2000",
        toggleActions: "play reverse play reverse",
        pin: true,
        scrub: 3,
    },
});

gsap.to(".author", {
    x: -2500,
    duration: 1000,
    scrollTrigger: {
        trigger: ".author",
        start: "top 50%",
        end: "+=1000",
        toggleActions: "play reverse play reverse",
        pin: true,
        scrub: 3,
    }
});

// Workshop image pin
function updateDebug(message) {
    const debug = document.getElementById('debug');
    debug.innerHTML = message;
}

gsap.to(".Workshop", {
    scrollTrigger: {
        trigger: ".Workshop",
        start: "top+=450 center",
        end: "+=1000",
        pin: true,
        scrub: false,
        pinSpacing: false,
        anticipatePin: 0.5,
        toggleActions: "play reverse play reverse",
        onEnter: () => updateDebug("Workshop pinned"),
        onLeave: () => updateDebug("Workshop unpinned"),
        onEnterBack: () => updateDebug("Workshop pinned again"),
        onLeaveBack: () => updateDebug("Workshop unpinned again")
    }
});

// Elias and text entrance/exit animation
gsap.fromTo([".Elias", ".story-text"], 
    {
        x: -100,
        opacity: 0
    },
    {
        scrollTrigger: {
            trigger: ".Workshop",
            start: "top+=200 center",
            end: "top+=1000 center",
            toggleActions: "play reverse play reverse",
            scrub: false,
        },
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.2,
        ease: "power2.out"
    }
);

// Knock knock scene animation
gsap.fromTo(".knockknock", 
    {
        opacity: 0,
        y: 50
    },
    {
        scrollTrigger: {
            trigger: ".Workshop",  
            start: "top+=400 center",
            end: "+=1000",
            toggleActions: "play reverse play reverse",
            scrub: 1,
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out"
    }
);

// Text animation
gsap.fromTo(".story-text-3", 
    {
        opacity: 0,
        y: 50
    },
    {
        scrollTrigger: {
            trigger: ".Workshop",
            start: "top+=1000 center",
            end: "+=1000",
            toggleActions: "play reverse play reverse",
            scrub: 1,
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out"
    }
);

// Pin the knockknock container
gsap.to(".knockknock-container", {
    scrollTrigger: {
        trigger: ".Workshop",
        start: "top+=500 center",
        end: "+=2000",
        pin: false,
        scrub: 1,
        toggleActions: "play reverse play reverse"
    }
});