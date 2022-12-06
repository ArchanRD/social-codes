let cards = document.querySelectorAll(".card")

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    })
}

let myObserver = new IntersectionObserver(callback, options);

for (let i = 0; i < cards.length; i++) {
    myObserver.observe(cards[i])
}