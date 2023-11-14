const BASE_URL =
  "https://my-json-server.typicode.com/WilhelmErik/N-thandel/testProducts/";
export default async function fetchProducts() {
  console.log("Fetching in progress");
  const response = await fetch(BASE_URL);
  const data = await response.json();
  // console.log(data)
  return data;
}
