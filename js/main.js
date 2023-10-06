// API : [Url api liste des cinémas](https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records)

"use strict";

const elements = {
    list: document.querySelector('#cine_list')
}

const url = `https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?limit=20`;



//recup loca user
onload = () => {
    console.log("Loaded");
  };


// sort cinemas 
fetch(url).then(response => response.json()).then(response => {

    let outputHTML = "";
    response.results.sort((a, b) => b.fauteuils - a.fauteuils).forEach(cinema => {
        outputHTML += `
            <tr>
                <td>${cinema.nom}</td>
                <td>${cinema.adresse}</td>
                <td>${cinema.commune}</td>
            </tr>
        ` 
        elements.list.innerHTML = outputHTML;

    })

});

//