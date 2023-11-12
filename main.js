const URL_API = 'https://api.thecatapi.com/v1/images/search?limit=4';

// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img');
//         img.src = data[0].url;
//     });

async function getCat() {
    const res = await fetch(URL_API);
    const data = await res.json();

    console.log('data', data);

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    img4.src = data[3].url;
}

const boton = document.querySelector('button');
boton.onclick = getCat;

getCat();
