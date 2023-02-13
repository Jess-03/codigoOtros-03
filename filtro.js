// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]
//Cambio de nombre de variables
// li --> lista
// $i --> input
//ti --> titulo

//Se cambio el obtener los elementos por id
const lista = document.getElementById('#lista-de-productos')
const $input = document.querySelector('.input');

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var titulo = document.createElement("p")
  titulo.classList.add("titulo")
  titulo.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(titulo)
  d.appendChild(imagen)

  li.appendChild(d)
}

displayProductos(productos)
//Se cambió el querySelector por getElementById
const botonDeFiltro = document.getElementById("#button");

botonDeFiltro.onclick = function() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const texto = $input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(titulo)
    d.appendChild(imagen)
  
    //Se que hay un fallo aquí, pero no se como resolverlo
    lista.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  