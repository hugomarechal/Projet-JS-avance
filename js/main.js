// onload get list cinema
// display list  (nom addresse commune)
// sort by nb fauteuils
// API : [Url api liste des cinémas](https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records)

"use strict";

const elements = {
    list: document.querySelector('#cine_list')
}

const url = `https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?limit=20`;
console.log("update");
fetch(url).then(response => response.json()).then(response => {
});

