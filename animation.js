gsap.registerPlugin(ScrollTrigger);

let cards = gsap.utils.toArray(".card");

cards.forEach((card, index) => {
    let offset = (index % 2 === 0) ? 135 : -135;

    gsap.set(card, {
        x: offset,
        // toggleActions: 'play none none reverse',
    });

    gsap.to(card, {
        x: 0,
        scrollTrigger: {
            trigger: card,
            start: "center 800",
            end: "center center",
            markers: true,
            // toggleActions: 'play none none reverse',
        }
    });

    const baseX = window.innerWidth * 0.25
    const baseY = window.innerHeight * 0.25

    gsap.to(card, {
        x: (index % 2 === 0) ? -(baseX + index * 25) : (baseX + index * 25), scrollTrigger: {
            trigger: card,
            markers: true,  
            markers: {
                startColor: "blue",
                endColor: "brown"
              },
            start: `top ${baseY}`,
            end: "center center",
            duration: .5,
            toggleActions: 'play none none reverse',
        },
    });

    // gsap.to(card, {
    //     opacity: 0, scrollTrigger: {
    //         trigger: card,
    //         start: "top 10%",
    //         end: "top top",
    //         toggleActions: 'play none none reverse',

    //     },
    // });
});