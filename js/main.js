// API : [Url api liste des cinémas](https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records)

"use strict";

// import haversine from "/math.js"

const elements = {
    list: document.querySelector('#cine_list')
}

const url = `https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?limit=20`;

// sort cinemas 
onload = () => {


    // get geoloc info
    let location;
    navigator.geolocation.getCurrentPosition(position => {
        
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        location = [latitude, longitude];
        console.log(location);

    });

    // display cinemas
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

};

