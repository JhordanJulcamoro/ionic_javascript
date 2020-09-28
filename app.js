const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const buttonSave = document.querySelector("#button-save");
const buttonCancel = document.querySelector("#button-cancel");
const productList = document.querySelector("#productList");
const total = document.querySelector("#total");

let sumaTotal = 0;

const createNewProduct = (name, price) => {
  const ionCard = document.createElement("ion-card");
  const newProductItem = document.createElement("ion-card-content");
  newProductItem.textContent = name + ": $" + price;
  ionCard.appendChild(newProductItem);
  productList.appendChild(ionCard);
};

const clearImputs = () => {
  productName.value = "";
  productPrice.value = "";
};

const presentAlertInvalid = () => {
  const alert = document.createElement("ion-alert");
  alert.header = "INVALID DATA";
  alert.subHeader = "Datos incorrectos";
  alert.message = "Los datos ingresados no son válidos.";
  alert.buttons = ["Ok"];
  document.body.appendChild(alert);
  return alert.present();
};

const presentAlertDelete = () => {
  const alert = document.createElement("ion-alert");
  alert.header = "DELETE DATA";
  alert.subHeader = "Los datos serán eliminados";
  alert.message = "Esta opción eliminará los datos ingresados";
  alert.buttons = ["Continuar", "Cancel"];
  document.body.appendChild(alert);
  return alert.present();
};

const isEmpty = (str) => !str.trim().length;

buttonSave.addEventListener("click", () => {
  const name = productName.value;
  const price = productPrice.value;
  //console.log(name, price);

  if (isEmpty(name) || price <= 0 || isEmpty(price)) {
    console.log("Datos no validados");
    //crear alerta
    presentAlertInvalid();
    return;
  }
  createNewProduct(name, price);
  sumaTotal += +price;
  total.textContent = sumaTotal;
  clearImputs();
});

buttonCancel.addEventListener("click", () => {
  presentAlertDelete();
  clearImputs();
});
