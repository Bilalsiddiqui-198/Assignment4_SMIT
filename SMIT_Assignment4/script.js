var products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];

//   task1
let filtered_titles = products.map((product) => product.title);
console.log(filtered_titles);

// task2
let filtered_product = products.filter((f) =>
  f.variations.find((p) => p.color === "black")
);
console.log(filtered_product);

// task3
let totalstock = products.reduce(
  (acc, product3) =>
    acc +
    product3.variations.reduce((sum, variation) => sum + variation.quantity, 0),
  0
);
console.log(totalstock);



// task4
const products_avgrating = products.map((product4) => {
  const true_reviews = product4.reviews.filter((r) => r.status);

  const avgrating = true_reviews.length
    ? true_reviews.reduce((acc, r) => acc + r.rating, 0) / true_reviews.length
    : 0;

  return {
    Title: product4.title,
    avgRating:avgrating
  };
});

console.log(products_avgrating)

// task5
const five_starRating=products.filter((p)=> p.reviews.find((r)=>r.rating===5.0))
console.log(five_starRating)

// task6
const newproduct_array=products.map((product5)=>({
  Title:product5.title,
  variations:product5.variations.map((vari)=>({
    color:vari.color,
    price: vari.price,
    quantity: vari.quantity
  }))
}));
console.log(newproduct_array)

// task7
const total_revenue=products.reduce((acc,pro7)=>acc+pro7.variations.reduce((variAcc, variation)=> variAcc+(variation.quantity*variation.price),0),0)
console.log(total_revenue)



// task8
const moreThan5=products.filter((p)=> p.variations.find((v)=>v.quantity>5))
console.log(moreThan5)

// task9
const summary=products.map((pro9)=>({
  title:pro9.title,
  totalVariation:pro9.variations.reduce((acc,variat)=>acc+variat.quantity,0),
  totalReviews:pro9.reviews.length
})
 )
console.log(summary)


