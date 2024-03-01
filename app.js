const API_KEY = "42648600-a8b591bbffd5c17b95ecf64b4";

const buscarImagenes = async (categoria) => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${categoria}&image_type=photo`;
  const respuesta = await fetch(url);
  const data = await respuesta.json();
  return data.hits;
};

const mostrarImagenes = (imagenes) => {
  const contenedorResultados = document.getElementById("resultados");
  contenedorResultados.innerHTML = "";

  imagenes.forEach((imagen) => {
    const divImagen = document.createElement("div");
    divImagen.classList.add("imagen");

    const img = document.createElement("img");
    img.src = imagen.webformatURL;
    img.alt = imagen.tags;

    divImagen.appendChild(img);
    contenedorResultados.appendChild(divImagen);
  });
};

const buscar = () => {
  const categoria = document.getElementById("busqueda").value;
  buscarImagenes(categoria).then((imagenes) => mostrarImagenes(imagenes));
};

document.getElementById("buscar").addEventListener("click", buscar);

