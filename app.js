const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const buttonSave = document.querySelector('#button-save');
const buttonCancel = document.querySelector('#button-cancel');
const productList = document.querySelector('#product-list');
const totalOutput = document.querySelector('#total');

total = 0; 


const createNewProduct = (name, price) => {
    const ionCard = document.createElement('ion-card');
    const newProductItem = document.createElement('ion-card-content');
    ionCard.appendChild(newProductItem)
    newProductItem.textContent = name + ": $ " + price;
    productList.appendChild(ionCard);
};

/* for reset the form */
const clearInputs = () => {
    productName.value = "";
    productPrice.value = "";
}

buttonSave.addEventListener("click", () => {
    const name = productName.value;
    const price = productPrice.value;
    

    createNewProduct(name, price);
    total += +price;
    totalOutput.textContent = total;
    clearInputs();
   
})








 /* clear Inputs of the form before you add nothing */
buttonCancel.addEventListener("click", clearInputs);
