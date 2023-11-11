import fetchProducts from "../utils/fetchData.js";

const BASE_URL =
  "https://my-json-server.typicode.com/WilhelmErik/N-thandel/testProducts/";

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

  const id = req.params.id;
  const response = await fetchProducts();
  console.log(response, " What is the shape");
  const targetProduct = response.find((product) => product.id === id);
  console.log(targetProduct);
  res.status(200).json(response);
};

export { listProducts, getProduct };
