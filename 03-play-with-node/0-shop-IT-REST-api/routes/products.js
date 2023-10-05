var express = require("express");
var router = express.Router();

var products = [
  {
    id: 1,
    name: "Laptop",
    price: {
      value: 1000,
      currency: "usd",
    },
    image: "assets/Laptop.png",
    description: "Laptop product description",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Mobile",
    price: {
      value: 500,
      currency: "usd",
    },
    image: "assets/Mobile.png",
    description: "Mobile product description",
    isAvailable: true,
  },
];

var reviews={
  1: [
    {
      id: 1,
      stars: 4,
      body: "Very good product",
      author: "<Who-1>",
    },
    {
      id: 1,
      stars: 3,
      body: "Good product",
      author: "<Who-2>",
    },
  ],
  2: [
    {
      id: 1,
      stars: 4,
      body: "Very good product",
      author: "<Who-1>",
    },
    {
      id: 1,
      stars: 3,
      body: "Good product",
      author: "<Who-2>",
    },
  ]
}

router.get("/", function (req, res, next) {
  res.json(products);
});

router.get("/:productId/reviews", function (req, res, next) {
  var productId = req.params.productId;
  res.json(reviews[productId]||[]);
});

router.post("/:productId/reviews", function (req, res, next) {
  var productId = req.params.productId;
  var review = req.body;
  reviews[productId].push(review);
  res.json(review);
});

module.exports = router;
