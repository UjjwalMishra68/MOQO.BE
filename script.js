function page1Animation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1",
            scrub: 3.5,
            scroller: "body",
            start: "top 0",
            end: "top -250%",
            pin: true,
        },
    });
    tl.to(".page1_content h1", {
        transform: "translateX(-190%)",
        fontWeight: "300",
        duration: 12,
    },);
    tl.to(".page1 video", {
        transform: "translateY(-120%)",
        duration: 12,
    },);

    tl.to(".page1 video", {
        scale: 1.7,
        duration: 12,
    },);
}
page1Animation()
gsap.to(".left2 h1", {
    y: "-450%",
    duration: 5,
    power: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: true,
        endTrigger: ".last"
    }
})




