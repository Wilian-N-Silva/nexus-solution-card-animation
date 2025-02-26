gsap.registerPlugin(ScrollTrigger);

let cards = gsap.utils.toArray(".card");

cards.forEach((card, index) => {
    let offset = (index % 2 === 0) ? 135 : -135;

    gsap.set(card, { x: offset });

    gsap.to(card, {
        x: 0,
        scrollTrigger: {
            trigger: card,
            start: "bottom bottom",
            end: "center center",
        }
    });

    gsap.to(card, {
        x: (index % 2 === 0) ? `-50vw` : `50vw`, scrollTrigger: {
            trigger: card,
            start: "center center",
            end: "top top",
            toggleActions: 'play none none reverse',
        },
    });

    gsap.to(card, {
        opacity: 0, scrollTrigger: {
            trigger: card,
            start: "top 10%",
            end: "top top",
            toggleActions: 'play none none reverse',

        },
    });
});