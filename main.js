const API_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_G2Mo7qyg759KUXFkALRfIwZaixR8AWO25m6XgCLpgf37bNJL5Gb2QVgfxXMLBAUA';
const API_FAVORITES = 'https://api.thecatapi.com/v1/favourites?&api_key=live_G2Mo7qyg759KUXFkALRfIwZaixR8AWO25m6XgCLpgf37bNJL5Gb2QVgfxXMLBAUA';
const API_KEY = 'live_G2Mo7qyg759KUXFkALRfIwZaixR8AWO25m6XgCLpgf37bNJL5Gb2QVgfxXMLBAUA';

const spanError = document.getElementById("orto");


async function loadRandomMichis() {
    const res = await fetch(API_RANDOM);
    const data = await res.json();
    console.log('Random')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        
        img1.src = data[0].url;
        img2.src = data[1].url;

        btn1.onclick = () => saveFavoriteMichi(data[0].id);
        btn2.onclick = () => saveFavoriteMichi(data[1].id);

    }
}

async function loadFavoriteMichis() {
    const res = await fetch(API_FAVORITES);
    const data = await res.json();
    console.log('Favoritos');
    console.log(data);

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message;
    } else {
        data.forEach(michi => {
            const section = document.getElementById('favoriteMichis');
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Sacar michi de favoritos');

            btn.appendChild(btnText);
            img.src = michi.image.url;
            img.width = 300;
            article.appendChild(btn);
            article.appendChild(img);
            section.appendChild(article);

        });
    }
}

async function saveFavoriteMichi(id) {
    const res = await fetch(API_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: id
        }),
    });
    const data = await res.json();

    console.log('Save')
    console.log(res)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message;
    }
}


loadRandomMichis();
loadFavoriteMichis();
