!function(){document.getElementById("search-box"),document.querySelector(".country-list"),document.querySelector(".country-info");(function(n){var t=new URLSearchParams({fields:"name,capital,population,flags,languages"});return fetch("".concat("https://restcountries.com/v3.1/name/").concat(n,"?").concat(t)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).catch((function(n){return console.log(n)}))})("peru").then((function(n){console.log(n)}))}();
//# sourceMappingURL=index.867a37c1.js.map
