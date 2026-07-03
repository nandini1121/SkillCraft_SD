from flask import Flask, render_template, jsonify, send_file
from scraper import scrape_products

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/scrape")
def scrape():
    data = scrape_products()
    return jsonify(data)

@app.route("/download")
def download():
    return send_file(
        "products.csv",
        as_attachment=True
    )

if __name__ == "__main__":
    app.run(debug=True)