const containerDiv = document.querySelector(".container");

const productURL = "https://fakestoreapi.com/products";

fetch(productURL)
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const itemContainer = document.createElement("div");
      itemContainer.classList = ["item-container"];

      const itemImage = document.createElement("img");
      itemImage.classList.add("item_image");
      itemImage.src = item.image;

      const titleH2 = document.createElement("h2");
      titleH2.innerText = item.title;
      titleH2.classList.add("item_title")

      const priceP = document.createElement("p");
      priceP.innerText = item.price;

      const categoryP = document.createElement("p");
      categoryP.innerText = item.category;

      const avg_rating = document.createElement("p");
      avg_rating.innerText = `${item.rating.rate} (${item.rating.count})`;

      itemContainer.appendChild(itemImage);
      itemContainer.appendChild(titleH2);
      itemContainer.appendChild(priceP);
      itemContainer.appendChild(categoryP);
      itemContainer.appendChild(avg_rating);

      containerDiv.appendChild(itemContainer);
    }
  })
  .catch((e) => {
    throw e;
  });
