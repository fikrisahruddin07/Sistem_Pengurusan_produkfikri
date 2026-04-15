const form = document.getElementById("productForm");
const table = document.getElementById("productTable");

let products = [];

// FETCH 10 DATA DARI API
fetch("https://dummyjson.com/products?limit=10")
  .then(res => res.json())
  .then(data => {
    products = data.products;
    renderTable();
  });

// RENDER TABLE
function renderTable() {
  table.innerHTML = "";

  products.forEach((p, index) => {
    table.innerHTML += `
      <tr>
        <td>${p.title}</td>
        <td>${p.category}</td>
        <td>${p.price}</td>
        <td><button onclick="deleteProduct(${index})">Hapus</button></td>
      </tr>
    `;
  });
}

// DELETE
function deleteProduct(index) {
  products.splice(index, 1);
  renderTable();
}

// ADD PRODUCT
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const price = document.getElementById("price").value;

  products.push({
    title: name,
    category: category,
    price: price
  });

  renderTable();
  form.reset();

  console.log("Produk ditambah");
});