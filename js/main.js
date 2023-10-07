// API : [Url api liste des cinémas](https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records)

"use strict";

console.log('hello')

import haversine from "/math.js"

const elements = {
    list: document.querySelector('#cine_list')
}

const url = `https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?limit=20`;

const getLocation = () => {
    let location;
    navigator.geolocation.getCurrentPosition(position => {
        
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        location = [latitude, longitude];

        return location;
    });
};

// sort cinemas 
onload = () => {

    getLocation();

    // display cinemas
    fetch(url).then(response => response.json()).then(response => {

        let outputHTML = "";

        response.results.sort((a, b) => b.fauteuils - a.fauteuils).forEach(cinema => {
            
            //calcDistance
            // const calcDistance = async () => {
            //     const userLoc = await getLocation();
            //     const cineLoc = [cinema.latitude, cinema.longitude];
            //     const distance = haversine(userLoc, cineLoc);
            //     console.log(distance);

            //     return distance;
            // }

            // calcDistance();

            outputHTML += `
                <tr>
                    <td>${cinema.nom}</td>
                    <td>${cinema.adresse}, ${cinema.commune}</td>
                    <td>${distance}</td>
                </tr>
            ` 
            elements.list.innerHTML = outputHTML;

        })

    });

};

