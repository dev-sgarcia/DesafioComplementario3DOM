//  Genero objeto para cargar los paquetes
class Paquete {
    constructor(nombre, id, precio, stock, ) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }
}

//  Inicializo los arrays para las categorias de los paquetes
const paquetes = [];
const dulces = [];

//  Cargo los paquetes disponibles.
paquetes.push(new Paquete("Transporte Redondo y Acceso a Six Flags", 1, 450, 40));
paquetes.push(new Paquete("Transporte Redondo", 2, 200, 20));
paquetes.push(new Paquete("Acceso a Six Flags", 3, 300, 20));
paquetes.push(new Paquete("Transporte Sencillo", 4, 120, 40));

dulces.push(new Paquete("Refresco", 5, 25, 40));
dulces.push(new Paquete("Sandwich", 6, 25, 40));


//  Comienza la manipulación del HTMl mediante el DOM
//  Guardo el "section" para después modificar su HTML
let sectionPaquetes = document.getElementById("section-paquetes");

//  Creo la función para generar el HTMl de las CARDS
function crearCard (paquete) {
    //  Creo un div para cada card y le aplico los estilos mediante el bootstrap
    let card = document.createElement("div");
    card.setAttribute("class", "card card-paquete");
    card.style.width = "18rem";
    //  Le asigno las cards al elemento padre "section"
    sectionPaquetes.appendChild(card);
    //  Genero los divs con las imagenes de los paquetes y asigno los hijos a las cards
    let cardImg = document.createElement("div");
    cardImg.innerHTML = `<img src="./media/${paquete.id}.jpg" class="card-img-top" alt="${paquete.nombre}"></img>`;
    card.appendChild(cardImg);
    //creo divs que contengan los nombres de los productos y los botones, despues se los asigno como hijos a las cards
    let cardBody = document.createElement("div");
    cardBody.innerHTML = `<h5 class="card-title">${paquete.nombre}</h5>
                            <p class="card-text"> Precio: $${paquete.precio} </p>
                            <button class="btn btn-dark">Comprar</button>`;
    card.appendChild(cardBody);
    cardBody.setAttribute("class", "card-body");
}

//  Recorro los arrays para agregarlos paquetes y se generen las cards
for (const paquete of paquetes) {
   crearCard(paquete);
}

for (const dulce of dulces) {
    crearCard(dulce);
}