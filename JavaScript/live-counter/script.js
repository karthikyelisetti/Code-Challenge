const counter = document.querySelectorAll(".counter"); // to get the array of the counter
counter.forEach((count) => {
    count.innerText = "0"

    const updateCounter=() => {
        const target = count.getAttribute("data-target"); // to get the attribute value
        const c =+ count.innerText;
        const increment = target/600;

        if(c < target) {
            count.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1) // Asynchronous code
        }else {
            count.innerText = target;
        }
    }
    updateCounter();
})