import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
const List = document.querySelector('.country-list');
const Info = document.querySelector('.country-info');

input.addEventListener('input', debounce(getContrieName, DEBOUNCE_DELAY));

function getContrieName(event) {
  if (event.target.value.trim() !== '') {
    Info.innerHTML = '';
    List.innerHTML = '';
    name = event.target.value.trim();
    return getContriesData(name);
  }
  Info.innerHTML = '';
  List.innerHTML = '';
}

function getContriesData(name) {
  fetchCountries(name)
    .then(countrys => {
      if (countrys.length === 1) {
        return makupCountry(countrys);
      } else if (countrys.length > 10) {
        Notiflix.Notify.failure(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      makupCountrysList(countrys);
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function makupCountry(countrys) {
  let countrysInfo = countrys.map(country => {
    const countryLanguages = Object.values(country.languages).join(', ');

    return `<div>
      <img width="30" height="30" src="${country.flags.svg}"> ${country.name.official}</div>
      <ul>
      <li>Capital: ${country.capital}</li>
      <li>Population: ${country.population}</li>
      <li>Languages: ${countryLanguages}</li>
      </ul>
      `;
  });
  Info.innerHTML = '';
  Info.insertAdjacentHTML('beforeend', countrysInfo.join(''));
  countrysInfo = [];
}

function makupCountrysList(countrys) {
  let countrysList = countrys.map(
    country =>
      `<li>
      <img width="30" height="30" src="${country.flags.svg}"> ${country.name.official}</li>`
  );
  List.innerHTML = '';
  List.insertAdjacentHTML('beforeend', countrysList.join(''));
  countrysList = [];
}
