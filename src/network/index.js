const url = 'https://fakestoreapi.com/';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${url}products`);
    const json = await response.json();

    return json;
  } catch (error) {
    throw error;
  }
};
