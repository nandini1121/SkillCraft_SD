import requests
import pandas as pd
from bs4 import BeautifulSoup


def scrape_products():

    url = "https://books.toscrape.com/"

    response = requests.get(
        url,
        timeout=10
    )

    soup = BeautifulSoup(
        response.text,
        "html.parser"
    )

    books = soup.find_all(
        "article",
        class_="product_pod"
    )

    products = []

    for book in books:

        name = book.h3.a["title"]

        raw_price = (
            book.find(
                "p",
                class_="price_color"
            )
            .get_text(strip=True)
        )

        # Extract only numbers and decimal point
        price = "".join(
            ch for ch in raw_price
            if ch.isdigit() or ch == "."
        )

        rating = book.p["class"][1]

        products.append({
            "name": name,
            "price": price,
            "rating": rating
        })

    df = pd.DataFrame(products)

    df.to_csv(
        "products.csv",
        index=False
    )

    return products