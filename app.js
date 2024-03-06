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
    img.addEventListener("click", () => ampliarImagen(imagen.largeImageURL));

    divImagen.appendChild(img);
    contenedorResultados.appendChild(divImagen);
  });
};

const ampliarImagen = (url) => {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const imagenAmpliada = document.createElement("img");
  imagenAmpliada.src = url;
  imagenAmpliada.alt = "Imagen ampliada";

  modal.appendChild(imagenAmpliada);
  document.body.appendChild(modal);

  modal.addEventListener("click", () => {
    modal.remove();
  });
};

const buscar = () => {
  const categoria = document.getElementById("busqueda").value;
  buscarImagenes(categoria).then((imagenes) => mostrarImagenes(imagenes));
};

document.getElementById("buscar").addEventListener("click", buscar);
