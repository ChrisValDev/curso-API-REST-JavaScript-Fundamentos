const API_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_G2Mo7qyg759KUXFkALRfIwZaixR8AWO25m6XgCLpgf37bNJL5Gb2QVgfxXMLBAUA';
const API_FAVORITES = 'https://api.thecatapi.com/v1/favourites?&api_key=live_G2Mo7qyg759KUXFkALRfIwZaixR8AWO25m6XgCLpgf37bNJL5Gb2QVgfxXMLBAUA';
const API_KEY = 'live_G2Mo7qyg759KUXFkALRfIwZaixR8AWO25m6XgCLpgf37bNJL5Gb2QVgfxXMLBAUA';

let spanError = document.getElementById("orto");


async function loadRandomMichis() {
    const res = await fetch(API_RANDOM);
    const data = await res.json();
    console.log('Random')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
}

async function loadFavoritesMichis() {
    const res = await fetch(API_FAVORITES);
    const data = await res.json();
    console.log('Favoritos');
    console.log(data);

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status;
    }
}

loadRandomMichis();
loadFavoritesMichis();
