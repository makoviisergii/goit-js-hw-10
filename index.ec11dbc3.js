document.getElementById("search-box"),document.querySelector(".country-list"),document.querySelector(".country-info");(e=>fetch(`https://restcountries.com/v3.1/name/${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e))))("peru").then((e=>{console.log(lang)}));
//# sourceMappingURL=index.ec11dbc3.js.map
