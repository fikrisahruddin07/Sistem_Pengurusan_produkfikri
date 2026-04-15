const form = document.getElementById("productForm");
const table = document.getElementById("productTable");

let products = [];

// FETCH API (10 DATA)
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
  <td data-label="Nama">${p.title}</td>
  <td data-label="Kategori">${p.category}</td>
  <td data-label="Harga">${p.price}</td>
  <td>
    <button class="delete-btn" onclick="deleteProduct(${index})">Hapus</button>
  </td>
</tr>
    `;
  });
}

// DELETE FUNCTION
function deleteProduct(index) {
  products.splice(index, 1);
  renderTable();
}

// ADD PRODUCT (FORM)
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
});