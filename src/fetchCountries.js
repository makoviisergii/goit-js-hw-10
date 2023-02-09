const BASE_URL = 'https://restcountries.com/v3.1/name/';

// https://restcountries.com/v2/all?fields=name,capital,currencies

export const fetchCountries = name => {
  //   const ofName = data.name.official;
  //   const capital = data.capital;
  //   const population = data.population;
  //   const flags = data.flags.svg;
  //   const lang = data.languages;

  const params = new URLSearchParams({
    fields: 'name,capital,population,flags,languages',
  });
  //  ,capital,population,flags.svg,languages
  //   return fetch(`${BASE_URL}${name}?fields=name.official`);
  return fetch(`${BASE_URL}${name}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
};
