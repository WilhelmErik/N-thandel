import fetchProducts from "../utils/fetchData.js";

const listProducts = async (req, res) => {
  const response = await fetchProducts();
  res.status(200).json(response);
};

const getProduct = async (req, res) => {
  if (req.params.id === undefined) {
    res
      .status(400)
      .json({ success: false, message: "Bad request, product id is missing" });
    return;
  }

  const id = +req.params.id;
  const response = await fetchProducts();
  const targetProduct = response.find((product) => product.id === id);
  res.status(200).json(targetProduct);
};

export { listProducts, getProduct };
