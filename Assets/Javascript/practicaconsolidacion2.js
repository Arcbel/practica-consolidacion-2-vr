var contenido = document.querySelector('#contenido')

fetch ('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        tabla(datos)
})

function tabla(datos){
    contenido.innerHTML = ''

    for(let temp of datos){
        contenido.innerHTML+=
        `
        <tr>
            <td>${temp.name}</td>
            <td>${temp.level}</td>
        </tr>
        `
    }
}