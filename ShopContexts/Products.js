import React, { useReducer, useContext, createContext } from 'react';
import Client from "shopify-buy";

export default function storeReducer(state, { type }) {
  return {
    ...state,
  };
}

const client = Client.buildClient({
  domain: "trendy-savages-5.myshopify.com",
  storefrontAccessToken: "ea3170d7107d5e4fb55cf97255d1d414"
});

let products = [];
let storeCollections = [];
client.product.fetchAll().then((product) => {
  // Do something with the products
  products.push(product);
});

client.collection.fetchAllWithProducts().then((collections) => {
  // Do something with the collections
    collections.map(collection => {
      storeCollections.push(collection);
    });
    console.log('loaded');
});

const StoreStateContext = createContext();
const StoreDispatchContext = createContext();
export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, {
    storeCollections,
    products
  });

  return (
    <StoreStateContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  )
}

export const useStoreStateContext = () => {
  const context = useContext(StoreStateContext);
  if (context === undefined ) {
    throw new Error(`useStoreStateContext must be used in a StoreContextProvider`)
  } return context;
}

export const useStoreDispatchContext = () => {
  const context = useContext(StoreDispatchContext);
  if (context === undefined ) {
    throw new Error(`useStoreDispatchContext must be used in a StoreContextProvider`)
  } return context;
}
