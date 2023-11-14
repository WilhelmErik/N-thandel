import fetchProducts from "../utils/fetchData.js";

const listProducts = async (req, res) => {
  const products = await fetchProducts();
  res.status(200).json({
    status: "Successss",
    statusCode: 200,
    items: products.length,
    data: products,
  });
};

const error = {
  success: false,
  message: "Bad request, product id is missing",
};

const getProduct = async (req, res) => {
  // if (req.params.id === undefined || req.params.id === "undefined") {
  //   res.status(400).json(error);
  //   return;
  // }
  console.log(req.params.id, " params id");
  const id = +req.params.id;
  console.log(id);
  const response = await fetchProducts();
  const targetProduct = response.find((product) => product.id === id);
  if (!targetProduct) {
    res.status(400).json(error);
    return;
  }

  res.status(200).json({
    status: "Successs",
    statusCode: 200,
    data: targetProduct,
  });
};

export { listProducts, getProduct };
