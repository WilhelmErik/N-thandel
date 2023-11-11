export default async function fetchProducts() {
    console.log("Fetching in progress");
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
    return data;
  }