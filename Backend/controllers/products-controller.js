const BASE_URL =
  "https://my-json-server.typicode.com/WilhelmErik/N-thandel/testProducts";

const listProducts = async (req, res) => {};

const getProduct = async (req, res) => {
  if (req.params.id === undefined) {
    res
      .status(400)
      .json({ success: false, message: "Bad request, product id is missing" });
    return;
  }

  const id = req.params.id;
};

async function fetchproducts() {
  const response = await fetch(BASE_URL);
}

export { listProducts, getProduct };
