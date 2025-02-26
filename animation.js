gsap.registerPlugin(ScrollTrigger);

let cards = gsap.utils.toArray(".card");

cards.forEach((card, index) => {
    let offset = (index % 2 === 0) ? 135 : -135;
    const baseY = window.innerHeight * 0.25
    const baseX = window.innerWidth * 0.25

    gsap.set(card, {
        x: offset,
    });


    gsap.to(card, {
        x: 0,
        // zIndex: index-=10,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=300',
            end: "top bottom-=300",
            markers: true,


        }
    });


    gsap.to(card, {
        x: (index % 2 === 0) ? -(baseX + index * 25) : (baseX + index * 25),
        scrollTrigger: {
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
});