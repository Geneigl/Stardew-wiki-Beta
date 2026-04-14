// 1. Base de datos
const dbItems = [
    // Categoría de Armas
    { id: "(W)0", nombre: "Espada oxidada", tipo: "Arma" },
    { id: "(W)1", nombre: "Sable de plata", tipo: "Arma" },
    { id: "(W)2", nombre: "Espada oscura", tipo: "Arma" },
    { id: "(W)3", nombre: "Espada sagrada", tipo: "Arma" },
    { id: "(W)4", nombre: "Espada galáctica", tipo: "Arma" },
    { id: "(W)5", nombre: "Espada de hueso", tipo: "Arma" },
    { id: "(W)6", nombre: "Filo de hierro", tipo: "Arma" },
    { id: "(W)7", nombre: "Espada del Templario", tipo: "Arma" },
    { id: "(W)8", nombre: "Borde de obsidiana", tipo: "Arma" },
    { id: "(W)9", nombre: "Katana de lava", tipo: "Arma" },
    { id: "(W)10", nombre: "Claymore antigua", tipo: "Arma" },
    { id: "(W)11", nombre: "Espada corta de acero", tipo: "Arma" },
    { id: "(W)12", nombre: "Hoja de madera", tipo: "Arma" },
    { id: "(W)13", nombre: "Cabeza de insecto", tipo: "Arma" },
    { id: "(W)14", nombre: "La guía de Neptuno", tipo: "Arma" },
    { id: "(W)15", nombre: "Espada del bosque", tipo: "Arma" },
    { id: "(W)16", nombre: "Cuchillo de trinchar", tipo: "Arma" },
    { id: "(W)17", nombre: "Daga de hierro", tipo: "Arma" },
    { id: "(W)18", nombre: "El cuchillo del ladrón", tipo: "Arma" },
    { id: "(W)19", nombre: "Daga de las Sombras", tipo: "Arma" },
    { id: "(W)20", nombre: "Espada élfica", tipo: "Arma" },
    { id: "(W)21", nombre: "Daga de cristal", tipo: "Arma" },
    { id: "(W)22", nombre: "Aguja de viento", tipo: "Arma" },
    { id: "(W)23", nombre: "Daga galáctica", tipo: "Arma" },
    { id: "(W)24", nombre: "Club de madera", tipo: "Arma" },
    { id: "(W)25", nombre: "El bate de Alex", tipo: "Arma" },
    { id: "(W)26", nombre: "Varilla de plomo", tipo: "Arma" },
    { id: "(W)27", nombre: "Mazo de madera", tipo: "Arma" },
    { id: "(W)28", nombre: "El Slammer", tipo: "Arma" },
    { id: "(W)29", nombre: "Martillo galáctico", tipo: "Arma" },
    { id: "(W)30", nombre: "La vieja guitarra de Sam", tipo: "Arma" },
    { id: "(W)31", nombre: "Fémur", tipo: "Arma" },
    { id: "(W)32", nombre: "Honda", tipo: "Arma" },
    { id: "(W)33", nombre: "Maestro de la honda", tipo: "Arma" },
    { id: "(W)34", nombre: "Tirachinas galáctico", tipo: "Arma" },
    { id: "(W)35", nombre: "El lápiz de Elliott", tipo: "Arma" },
    { id: "(W)36", nombre: "La llave inglesa de Maru", tipo: "Arma" },
    { id: "(W)37", nombre: "El mazo de Harvey", tipo: "Arma" },
    { id: "(W)38", nombre: "Sartén de Penny", tipo: "Arma" },
    { id: "(W)39", nombre: "Lealtad de Leah", tipo: "Arma" },
    { id: "(W)40", nombre: "Planchita de Abby", tipo: "Arma" },
    { id: "(W)41", nombre: "La maza perdida de Seb", tipo: "Arma" },
    { id: "(W)42", nombre: "El hierro de Haley", tipo: "Arma" },
    { id: "(W)43", nombre: "Espada de pirata", tipo: "Arma" },
    { id: "(W)44", nombre: "Cutlass", tipo: "Arma" },
    { id: "(W)45", nombre: "Kris malvado", tipo: "Arma" },
    { id: "(W)46", nombre: "Kudgel", tipo: "Arma" },
    { id: "(W)47", nombre: "Guadaña", tipo: "Arma" },
    { id: "(W)48", nombre: "Diente de Yeti", tipo: "Arma" },
    { id: "(W)49", nombre: "Estoque", tipo: "Arma" },
    { id: "(W)50", nombre: "Falchion de acero", tipo: "Arma" },
    { id: "(W)51", nombre: "Tridente roto", tipo: "Arma" },
    { id: "(W)52", nombre: "Espada ancha templada", tipo: "Arma" },
    { id: "(W)53", nombre: "Guadaña dorada", tipo: "Arma" },
    { id: "(W)54", nombre: "Espada enana", tipo: "Arma" },
    { id: "(W)55", nombre: "Martillo enano", tipo: "Arma" },
    { id: "(W)56", nombre: "Daga enana", tipo: "Arma" },
    { id: "(W)57", nombre: "Cimitarra de dientes de dragón", tipo: "Arma" },
    { id: "(W)58", nombre: "Club Diente de Dragón", tipo: "Arma" },
    { id: "(W)59", nombre: "Daga de dientes de dragón", tipo: "Arma" },
    { id: "(W)60", nombre: "Hoja calcinada", tipo: "Arma" },
    { id: "(W)61", nombre: "Aguja de iridio", tipo: "Arma" },
    { id: "(W)62", nombre: "Espada del Infinito", tipo: "Arma" },
    { id: "(W)63", nombre: "Mazo del Infinito", tipo: "Arma" },
    { id: "(W)64", nombre: "Daga del Infinito", tipo: "Arma" },
    { id: "(W)65", nombre: "Meowmere", tipo: "Arma" },
    { id: "(W)66", nombre: "Guadaña de iridio", tipo: "Arma" },

    // Categoría de Herramientas

    { id: "(T)Axe", nombre: "Hacha", tipo: "Herramienta" },
    { id: "(T)CopperAxe", nombre: "Hacha de cobre", tipo: "Herramienta" },
    { id: "(T)SteelAxe", nombre: "Hacha de acero", tipo: "Herramienta" },
    { id: "(T)GoldAxe", nombre: "Hacha de oro", tipo: "Herramienta" },
    { id: "(T)IridiumAxe", nombre: "Hacha de iridio", tipo: "Herramienta" },
    { id: "(T)BambooPole", nombre: "Poste de bambú", tipo: "Herramienta" },
    { id: "(T)TrainingRod", nombre: "Varilla de entrenamiento", tipo: "Herramienta" },
    { id: "(T)FiberglassRod", nombre: "Varilla de fibra de vidrio", tipo: "Herramienta" },
    { id: "(T)IridiumRod", nombre: "Varilla de iridio", tipo: "Herramienta" },
    { id: "(T)AdvancedIridiumRod", nombre: "Varilla de iridio avanzada", tipo: "Herramienta" },
    { id: "(T)Hoe", nombre: "Azada", tipo: "Herramienta" },
    { id: "(T)CopperHoe", nombre: "Azada de cobre", tipo: "Herramienta" },
    { id: "(T)SteelHoe", nombre: "Azada de acero", tipo: "Herramienta" },
    { id: "(T)GoldHoe", nombre: "Azada de oro", tipo: "Herramienta" },
    { id: "(T)IridiumHoe", nombre: "Azada de iridio", tipo: "Herramienta" },
    { id: "(T)Lantern", nombre: "Linterna", tipo: "Herramienta" },
    { id: "(T)MilkPail", nombre: "Cubo de leche", tipo: "Herramienta" },
    { id: "(T)Pan", nombre: "Sartén de cobre", tipo: "Herramienta" },
    { id: "(T)SteelPan", nombre: "Sartén de acero", tipo: "Herramienta" },
    { id: "(T)GoldPan", nombre: "Batidora de oro", tipo: "Herramienta" },
    { id: "(T)IridiumPan", nombre: "Sartén de iridio", tipo: "Herramienta" },
    { id: "(T)Pickaxe", nombre: "Piqueta", tipo: "Herramienta" },
    { id: "(T)CopperPickaxe", nombre: "Pico de cobre", tipo: "Herramienta" },
    { id: "(T)SteelPickaxe", nombre: "Pico de acero", tipo: "Herramienta" },
    { id: "(T)GoldPickaxe", nombre: "Pico de oro", tipo: "Herramienta" },
    { id: "(T)IridiumPickaxe", nombre: "Pico de iridio", tipo: "Herramienta" },
    { id: "(T)ReturnScepter", nombre: "Cetro de Retorno", tipo: "Herramienta" },
    { id: "(T)Shears", nombre: "Tijeras", tipo: "Herramienta" },
    { id: "(T)WateringCan", nombre: "Regadera", tipo: "Herramienta" },
    { id: "(T)CopperWateringCan", nombre: "Regadera de cobre", tipo: "Herramienta" },
    { id: "(T)SteelWateringCan", nombre: "Regadera de acero", tipo: "Herramienta" },
    { id: "(T)GoldWateringCan", nombre: "Regadera dorada", tipo: "Herramienta" },
    { id: "(T)IridiumWateringCan", nombre: "Regadera de iridio", tipo: "Herramienta" },
    { id: "(T)CopperTrashCan", nombre: "Cubo de basura de cobre", tipo: "Herramienta" },
    { id: "(T)SteelTrashCan", nombre: "Cubo de basura de acero", tipo: "Herramienta" },
    { id: "(T)GoldTrashCan", nombre: "Cubo de basura dorado", tipo: "Herramienta" },
    { id: "(T)IridiumTrashCan", nombre: "Papelera de iridio", tipo: "Herramienta" },

    // Categoría de Baratijas
{ id: "(TR)MagicHairDye", nombre: "Gel Mágico para el Pelo", tipo: "Baratija" },
{ id: "(TR)FrogEgg", nombre: "Huevo de Rana", tipo: "Baratija" },
{ id: "(TR)MagicQuiver", nombre: "Carcaj Mágico", tipo: "Baratija" },
{ id: "(TR)FairyBox", nombre: "Caja de Hada", tipo: "Baratija" },
{ id: "(TR)ParrotEgg", nombre: "Huevo de Loro", tipo: "Baratija" },
{ id: "(TR)IceRod", nombre: "Vara de Hielo", tipo: "Baratija" },
{ id: "(TR)IridiumSpur", nombre: "Espuela de Oro", tipo: "Baratija" },
{ id: "(TR)BasiliskPaw", nombre: "Pata de Basilisco", tipo: "Baratija" }
];

const listaVisual = document.getElementById("listaVisual");
const inputFiltro = document.getElementById("filtro");

function cargarItems(items) {
    if (!listaVisual) return;
    listaVisual.innerHTML = ""; 

    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="item-id">[${item.id}]</span>
            <span class="item-nombre"> - ${item.nombre}</span>
            <button class="btn-copy-corner" onclick="copiarID('${item.id}')" title="Copiar ID">
                <img src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png" alt="copy">
            </button>
            <span class="tag-tipo">${item.tipo}</span>
        `;
        listaVisual.appendChild(li);
    });
}

function copiarID(id) {
    const textoACopiar = "[" + id + "]";
    navigator.clipboard.writeText(textoACopiar).then(() => {
        console.log("Copiado: " + textoACopiar);
    }).catch(err => {
        console.error("Error: ", err);
    });
}

function filtrar() {
    const busqueda = inputFiltro.value.toLowerCase();
    const filtrados = dbItems.filter(item => 
        item.nombre.toLowerCase().includes(busqueda) || 
        item.id.toString().toLowerCase().includes(busqueda)
    );
    cargarItems(filtrados);
}

function filtrarPorClase(categoriaSeleccionada) {
    if (categoriaSeleccionada === 'Todos') {
        cargarItems(dbItems);
    } else {
        const filtrados = dbItems.filter(item => item.tipo === categoriaSeleccionada);
        cargarItems(filtrados);
    }
    inputFiltro.value = ""; 
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
}

window.onload = () => {
    if (typeof dbItems !== 'undefined') {
        cargarItems(dbItems);
    } else {
        console.error("dbItems no definido.");
    }
};
