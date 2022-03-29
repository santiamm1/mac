import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value;
    const formulacion = document.getElementById("formulacion").value;
    const dosis = document.getElementById("dosis").value;
    const capacidadDelTanque = document.getElementById("capacidadDelTanque").value;
    const tasaDeAplicacion = document.getElementById("tasaDeAplicacion").value;
    const superficieATratar = document.getElementById("superficieATratar").value;

    // Create a new Oject Product
    const product = new Product(name,formulacion, dosis, capacidadDelTanque, tasaDeAplicacion, superficieATratar);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === ""||  formulacion === "" ||  dosis === "" || capacidadDelTanque === "" || tasaDeAplicacion === "" || superficieATratar === "") {
      ui.showMessage("Por favor, complete todos los campos", "danger");
    }

    // Save Product
    ui.addProduct(product);
    ui.showMessage("Producto agregado correctamente", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});

