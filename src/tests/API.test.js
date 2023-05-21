import { apiRequest, getCurrencies } from '../services/API';

describe('API', () => {
  test('apiRequest should make a request to the API and return data', async () => {
    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ someData: 'example' }),
    });

    // Call the apiRequest function
    const data = await apiRequest();

    // Check if the fetch function is called with the correct URL
    expect(fetch).toHaveBeenCalledWith('https://economia.awesomeapi.com.br/json/all');

    // Check if the returned data is correct
    expect(data).toEqual({ someData: 'example' });
  });

  test('getCurrencies should make a request to the API and return the list of currencies', async () => {
    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        BRL: { someData: 'example' },
        USD: { someData: 'example' },
      }),
    });

    // Call the getCurrencies function
    const currencies = await getCurrencies();

    // Check if the fetch function is called with the correct URL
    expect(fetch).toHaveBeenCalledWith('https://economia.awesomeapi.com.br/json/all');

    // Check if the returned currencies are correct
    expect(currencies).toEqual(['BRL', 'USD']);
  });
});
