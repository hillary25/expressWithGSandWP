(() => {
    // Try to interact with the object and get it to interact back
    const seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover');

    const waypoint = new Waypoint({
        // What element is the waypoint looking at?
        // The handler will fire when it scrolls into view
        element: document.getElementById('beer2'),
        // What should we do when we hit the waypoint? This is up to you
        // You can trigger animation, do an AJAX call, etc.
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
          this.element.innerHTML += `
          <p>Added this with Waypoint! We are scrolling ${direction}</p>`
        }
      })

      // New waypoint
    const waypoint2 = new Waypoint({
        element: document.getElementById('beer3'),
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
        },

        offset: 100
      })

    function buildPopover(beerdata, el) {
        popOver.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOver.querySelector(".ratings").textContent = `Average Rating: ${beerdata.ratings}`;
        popOver.querySelector(".beer-description").textContent = beerdata.description;

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