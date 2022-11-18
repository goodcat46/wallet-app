import { PRIVATE_URL } from 'constans/constans';

const fetchExchangeRate = async () => {
  const response = await fetch(PRIVATE_URL);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

export default fetchExchangeRate;
