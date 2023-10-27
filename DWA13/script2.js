const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//----------------------------Logging each product name---------------------------------------//
products.forEach((item) => {
  console.log(item.product);
});

//____________________________filtering product with length of > 5----------------------------------//
const filteredProduct = products.filter((item) => {
  if (item.product.length > 5) {
    return item.product;
  }
});

//-----------------------Coverting string prices to numbers---------------------------------------//
const StringPriceToNumber = products.map((item) => {
  if (!(typeof item.price === "number")) {
    item.price = parseInt(item.price);
    return item;
  } else {
    return item;
  }
});

//----------------------filtering  items with the number valu in price---------------------------------------//
const filteredPrice = StringPriceToNumber.filter((item) => {
  if (item.price >= 0) {
    return item;
  }
});

//-----------------------------------------------summing the values of prices------------------------------------------//
const totalPrice = filteredPrice.reduce(
  (accumulator, product) => accumulator + product.price,
  0
);

console.log(totalPrice);

//------------------------------------Concatenate the products names----------------------------------------------------------//
const ConcatenatedProduct = products.reduce((accumulator, item, index) => {
  if (index === 0) {
    return item.product;
  } else {
    return accumulator + ", " + item.product;
  }
}, "");

console.log(ConcatenatedProduct);

//-------------------------------------identifying the highest price and the lowest----------------------------//
const { highest, lowest } = products.reduce(
  (result, item) => {
    if (item.price > result.highest.price) {
      result.highest = item;
    }
    if (item.price < result.lowest.price) {
      result.lowest = item;
    }
    return result;
  },
  { highest: products[0], lowest: products[0] }
);

console.log(`Highest: ${highest.product}. Lowest: ${lowest.product}`);

//-----------------------------Changing the keys  of the objects------------------------------------------------//

const modifiedObject = Object.entries(products).reduce(
  (accumulator, [key, value]) => {
    if (key === "product") {
      accumulator["name"] = value;
    } else if (key === "price") {
      accumulator["cost"] = value;
    } else {
      accumulator[key] = value;
    }

    return accumulator;
  },
  {}
);

console.log(modifiedObject);
