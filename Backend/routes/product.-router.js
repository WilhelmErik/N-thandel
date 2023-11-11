import { express } from "express";
import { listProducts, getProduct } from "../controllers/products-controller";
const productRouter = express.Router();

productRouter.route("/").get(listProducts);
productRouter.route("/:id").get(getProduct);

// en route för bara alla produkter

// en annan route för enskild produkt
