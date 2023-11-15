import { fetchData } from "./fetchData.ts";
import { http } from 'msw'
import { describe, it, expect,vi } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import { setupServer } from "msw/node";
//  import { beforeAll, afterEach, afterAll } from 'vitest';
//  import { handlers } from './mocks/handlers';








describe('fetchData function', () => {
    it('fetches data successfully', async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: 'Mocked data' }),
        })
      ) as any;
  
      const data = await fetchData();
      expect(data).toEqual({ data: 'Mocked data' });
    }),
    
    it('fetches data with an ID successfully', async () => {
      const mockId = 123;
      global.fetch = vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: { id: mockId, name: 'Mock Product', price: 10 } }),
        })
      ) as any;
    
      const data = await fetchData(mockId);
      expect(data).toEqual({ data: { id: mockId, name: 'Mock Product', price: 10 } });
    });
});





//   const server = setupServer(
   
//     http.get("http://localhost:3000/api/v1/products/:id", (req, res, ctx) => {
//       const { id } = req.params;
//       return res(ctx.json({ data: { id: id, name: 'Mock Product', price: 10 } }));
//     }),
   
//     http.get("http://localhost:3000/api/v1/products/", (req, res, ctx) => {
//       return res(ctx.json({ data: "Mocked data" }));
//     })
//   );


// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe("FetchData function" ,()=>{

//   it('fetches product data successfully for a given ID', async () => {
//     const data = await fetchData(123);
//     expect(data).toEqual({  data:{id: 123,name: 'Mock Product', price: 10 }});
//   }),
  
  
//   it('fetches product data successfully', async () => {
//     const data = await fetchData();
//      expect(data).toEqual({ data:"Mocked data"});
//   })
// })



// describe("fetches data successfully from an API")


// it('fetches data successfully from an API', async () => {
//     const result = await fetchData();
//     expect(result).toEqual({ data: 'mocked data' });
//   });
  
//   it('fetches data for a specific ID', async () => {
//     const result = await fetchData(123);
//     expect(result).toEqual({ id: '123', data: 'mocked data for specific id' });
//   });
  
//   it('throws an error when the fetch fails', async () => {
//     server.use(
//       rest.get('http://localhost:3000/api/v1/products/', (req, res, ctx) => {
//         return res(ctx.status(500));
//       })
//     );
  
//     await expect(fetchData()).rejects.toThrow('Gick inte att hämta data');
//   });