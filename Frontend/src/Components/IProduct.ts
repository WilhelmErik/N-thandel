export interface ProductType {
    id: number;
    name: string;
    price: number;
    category: string;
    theme: string;
    imageURL: string;
}

export interface ProductDetailsType extends ProductType {
    stock: number,
    description: string
    weight: string
}


export type ProductsResponseType = {
    status: string;
    statusCode: number;
    items: number;
    data: ProductType[];
};
export type ProductResponseType = {
    status: string;
    statusCode: number;
    data: ProductDetailsType;
}