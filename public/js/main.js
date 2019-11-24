(() => {
    // Try to interact with the object and get it to interact back
    const seeMoreButtons = document.querySelectorAll('.see-more'),
          popOver = document.querySelector('.popover');

    function buildPopover(db_sea_turtles, el) {
        popOver.querySelector(".ipa-rating").textContent = `Scientific Name: ${db_sea_turtles.scientificName}`;
        popOver.querySelector(".ratings").textContent = `Conservation Status: ${db_sea_turtles.conservationStatus}`;
        popOver.querySelector(".beer-description").textContent = `Weight: ${db_sea_turtles.weight}`;

        // Show the popover
        popOver.classList.add('show-popover');
        el.appendChild(popOver);
    }

    // Run the fetch API and get the DB data
    function fetchData() {
        let targetEl = this,
            url = `/svgdata/${this.dataset.target}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // Populate the popover
            buildPopover(data, targetEl); // target element
        })

        // If there is an error, the catch function will log it to the browser so you can see what is wrong
        .catch((err) => console.log(err));
    }

    const svgGraphic = document.querySelector(".svg-wrapper");

    // svgGraphic.addEventListener("click", () => {
    //     console.log(this.querySelector('.svg-graphic'));
    // })

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));
})();