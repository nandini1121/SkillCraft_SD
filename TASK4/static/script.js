const scrapeBtn = document.getElementById("scrapeBtn");
const loader = document.getElementById("loader");
const container = document.getElementById("productsContainer");

const productCount = document.getElementById("productCount");
const bestRating = document.getElementById("bestRating");
const statusText = document.getElementById("status");

const searchInput = document.getElementById("searchInput");

let productsData = [];

function renderProducts(products){

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
            <div class="product-card">

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-price">
                    £${product.price}
                </div>

                <div class="product-rating">
                    ⭐ ${product.rating}
                </div>

            </div>
        `;
    });
}

scrapeBtn.addEventListener("click", async () => {

    loader.classList.remove("hidden");

    statusText.textContent = "Scraping...";

    const response = await fetch("/scrape");

    const data = await response.json();

    productsData = data;

    loader.classList.add("hidden");

    productCount.textContent = data.length;

    statusText.textContent = "Completed";

    const ratings = [
        "One",
        "Two",
        "Three",
        "Four",
        "Five"
    ];

    let highest = "One";

    data.forEach(item => {

        if(
            ratings.indexOf(item.rating) >
            ratings.indexOf(highest)
        ){
            highest = item.rating;
        }

    });

    bestRating.textContent = highest;

    renderProducts(data);
});

searchInput.addEventListener("input", () => {

    const value =
        searchInput.value.toLowerCase();

    const filtered =
        productsData.filter(product =>
            product.name
            .toLowerCase()
            .includes(value)
        );

    renderProducts(filtered);

});