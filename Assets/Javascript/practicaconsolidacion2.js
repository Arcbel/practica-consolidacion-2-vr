var contenido = document.querySelector('#contenido')
var card = document.querySelector('#card')

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        tabla(datos)
        mostrarDigimon(datos[0])
    })

function tabla(datos) {
    contenido.innerHTML = ''

    for (let temp of datos) {
        contenido.innerHTML +=
            `
        <tr>
        <td><button type="button" class="btn btn-light" onclick="mostrarDigimonEspecifico('${temp.name}', '${temp.img}', '${temp.level}')">${temp.name}</button></td>
        <td>${temp.level}</td>
        </tr>
        `
    }
}

function mostrarDigimon(digimon) {

    card.innerHTML =
        `
        <div class="card">
            <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}">
            <div class="card-body">
                <h5 class="card-title">${digimon.name}</h5>
                <p class="card-text">Nivel: ${digimon.level}</p>
            </div>
        </div>
        `
}

function mostrarDigimonEspecifico(nombre, imagen, nivel) {
    card.innerHTML =
        `
      <div class="card">
          <img src="${imagen}" class="card-img-top" alt="${nombre}">
          <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
              <p class="card-text">Nivel: ${nivel}</p>
          </div>
      </div>
      `
    const imagenElemento = card.querySelector('img');
    imagenElemento.scrollIntoView({ behavior: 'smooth' });
}