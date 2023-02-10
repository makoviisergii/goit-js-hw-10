const BASE_URL = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = name => {
  const params = new URLSearchParams({
    fields: 'name,capital,population,flags,languages',
  });

  return fetch(`${BASE_URL}${name}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log('Oops, there is no country with that name'));
};
