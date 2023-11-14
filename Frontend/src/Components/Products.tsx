import React from "react";
import { useEffect, useState, type ReactNode } from "react";
// import PropTypes from "prop-types";
import { fetchData } from "../utilities/fetchData";
import { candle1 } from "../assets/img/candle (1).png";
type ProductsType = {
  id: number;
  name: string;
  price: number;
  category: string;
  theme: string;
  imageURL: string;
};

type ProductsResponseType = {
  status: string;
  statisCode: number;
  items: number;
  data: ProductsType[];
};

function Products() {
  const [products, setProducts] = useState<ProductsType[]>();

  useEffect(() => {
    const getProducts = async () => {
      const result = await fetchData<ProductsResponseType>();
      console.log(result);
      console.log(result.data);
      setProducts(result.data);
      //   const data = await result.json();
      //   console.log(data);
      //   try {
      //     setIsloading(true);
      //     const result = await get<IVehicleDetailResponseType>(
      //       `http://localhost:3003/api/${params.id}`
      //     );
      //     setVehicle(result.data);
      //     const result = await get<VehicleReponseType>(
      //       `http://localhost:3003/api/${params.id}`
      //     );
      //     setVehicle(result.data as IVehicleDetail)
      //   } catch (error) {
      //     if (error instanceof Error) setError(error.message);
      //   }
      //   setIsloading(false);
    };
    getProducts();
  }, []);

  // let content: ReactNode;

  // if (products) {
  //   content = products?.map((product) => <p> {product.name}</p>);
  // }

  // return <div>{content}Products</div>;

  return (
    <div>
      {products?.map((product) => (
        <div>
          <img src={`./src/assets/img/${product.imageURL}`} alt="" />
          <p> {product.name}</p>
        </div>
      ))}
    </div>
  );
}

Products.propTypes = {};

export default Products;
