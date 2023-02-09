import './css/styles.css';

import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');

const list = document.querySelector('.country-list');

const info = document.querySelector('.country-info');

function getContriesInfo(name) {
  fetchCountries(name).then(data => {
    console.log(data);
  });
}

getContriesInfo('peru');
