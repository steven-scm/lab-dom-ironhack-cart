// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!', product);

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  // console.log(price.textContent);
  // console.log(quantity.value);

  //step 3
  const resultSubtotal = price.textContent * quantity.value;
  console.log(resultSubtotal);

  //step 4
  const subtotal = product.querySelector(".subtotal span");

  //step 5
  subtotal.textContent = resultSubtotal;
  console.log(typeof resultSubtotal);
  return resultSubtotal;


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProduct = document.getElementsByClassName("product");
  console.log(multipleProduct);
  let sumSubtotal = 0;
  for (i = 0; i < multipleProduct.length; i++) {
    updateSubtotal(multipleProduct[i]);
    sumSubtotal += updateSubtotal(multipleProduct[i]);
  }
  console.log(sumSubtotal);


  // ITERATION 3
  //... your code goes here
  // for (i = 0; i < multipleProduct.length; i++) {
  // sumSubtotal += updateSubtotal(multipleProduct[i]);
  // }

  const total = document.querySelector('#total-value span');
  total.textContent = sumSubtotal;



}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const product = target.parentElement.parentElement;
  console.log(target.parentElement.parentElement);
  console.log(product.querySelector('.subtotal'));
  const subTotal = product.querySelector('.subtotal span');

  const total = document.querySelector('#total-value span');
  const difference = total.innerHTML - subTotal.innerHTML;
  console.log(difference);
  product.remove();

  total.textContent = difference;

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  console.log(removeBtn);
  removeBtn.forEach(ele => ele.addEventListener('click', removeProduct))


  //... your code goes here
});


