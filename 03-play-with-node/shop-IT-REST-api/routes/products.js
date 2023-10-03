var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
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
  res.json(products);
});

router.get("/:productId/reviews", function (req, res, next) {
  var productId = req.params.productId;
  var reviews = [
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
  ];
  res.json(reviews);
});

module.exports = router;
