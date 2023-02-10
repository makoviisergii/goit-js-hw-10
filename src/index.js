import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
//                     _____поменять время на 300__________
const DEBOUNCE_DELAY = 600;

const input = document.getElementById('search-box');
const List = document.querySelector('.country-list');
const Info = document.querySelector('.country-info');
let countryInfo = '';
let countrysList = '';

input.addEventListener('input', debounce(getContrieName, DEBOUNCE_DELAY));

function getContrieName(event) {
  if (event.target.value.trim() !== '') {
    name = event.target.value.trim();
    return getContriesData(name);
  }
  countryInfo.insertAdjacentHTML = '';
  countrysList.insertAdjacentHTML = '';
}

function getContriesData(name) {
  fetchCountries(name).then(countrys => {
    // ???
    console.log(countrys.length);

    if (countrys.length === 1) {
      return makupCountry(countrys);
    } else if (countrys.length > 10) {
      console.log('Too many matches found. Please enter a more specific name.');
      return;
    }
    makupCountrysList(countrys);
  });
}

function makupCountry(countrys) {
  console.log(countrys);
}

function makupCountrysList(countrys) {
  countrys.forEach(country => {
    console.log(country.name.common);
  });
}
