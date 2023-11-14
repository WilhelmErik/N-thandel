let url = "http://localhost:3000/api/v1/products/"
async function fetchData<T>(id?: number): Promise<T> {
    if (id) url += id
    const response = await fetch(url);
    if (!response) {
        throw new Error("Gick inte att hämta data");
    }
    const jsonResult = (await response.json()) as unknown;
    return jsonResult as T
}
export { fetchData }