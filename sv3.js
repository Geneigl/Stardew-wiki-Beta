// BASE DE DATOS
const dbItems = [
    // Categoría Botas
    { id: "(B)504", nombre: "Zapatillas", tipo: "Bota" },
    { id: "(B)505", nombre: "Botas de Goma", tipo: "Bota" },
    { id: "(B)506", nombre: "Botas de Cuero", tipo: "Bota" },
    { id: "(B)507", nombre: "Botas de Trabajo", tipo: "Bota" },
    { id: "(B)508", nombre: "Botas de Combate", tipo: "Bota" },
    { id: "(B)509", nombre: "Botas de la Tundra", tipo: "Bota" },
    { id: "(B)510", nombre: "Botas Térmicas", tipo: "Bota" },
    { id: "(B)511", nombre: "Botas Oscuras", tipo: "Bota" },
    { id: "(B)512", nombre: "Botas de Caminante de Fuego", tipo: "Bota" },
    { id: "(B)513", nombre: "Zapatos de Genio", tipo: "Bota" },
    { id: "(B)514", nombre: "Botas Espaciales", tipo: "Bota" },
    { id: "(B)515", nombre: "Botas de Vaquero", tipo: "Bota" },
    { id: "(B)804", nombre: "Botas Mágicas de Emily", tipo: "Bota" },
    { id: "(B)806", nombre: "Zapatos de Leprechaun", tipo: "Bota" },
    { id: "(B)853", nombre: "Zapatos de Payaso de Ceniza", tipo: "Bota" },
    { id: "(B)854", nombre: "Botas de Sirena", tipo: "Bota" },
    { id: "(B)855", nombre: "Botas de Escamas de Dragón", tipo: "Bota" },
    { id: "(B)878", nombre: "Zapatos de Cristal", tipo: "Bota" },

    // Categoría de Camisas
    { id: "(S)1000", nombre: "Camisa de Lazo", tipo: "Camisa" },
    { id: "(S)1001", nombre: "Camisa de Corazón", tipo: "Camisa" },
    { id: "(S)1002", nombre: "Camisa de Esqueleto", tipo: "Camisa" },
    { id: "(S)1003", nombre: "Camisa de Relámpago", tipo: "Camisa" },
    { id: "(S)1004", nombre: "Camisa de Pato", tipo: "Camisa" },
    { id: "(S)1005", nombre: "Camisa de Llama", tipo: "Camisa" },
    { id: "(S)1006", nombre: "Camisa de Gato", tipo: "Camisa" },
    { id: "(S)1007", nombre: "Camisa de Pescado", tipo: "Camisa" },
    { id: "(S)1008", nombre: "Camisa de Barco", tipo: "Camisa" },
    { id: "(S)1009", nombre: "Camisa de Ancla", tipo: "Camisa" },
    { id: "(S)1010", nombre: "Camisa de Manzana", tipo: "Camisa" },
    { id: "(S)1011", nombre: "Camisa de Cereza", tipo: "Camisa" },
    { id: "(S)1012", nombre: "Camisa de Pollo", tipo: "Camisa" },
    { id: "(S)1013", nombre: "Camisa de Vaca", tipo: "Camisa" },
    { id: "(S)1014", nombre: "Camisa de Cerdo", tipo: "Camisa" },
    { id: "(S)1015", nombre: "Camisa de Conejo", tipo: "Camisa" },
    { id: "(S)1016", nombre: "Camisa de Dinosaurio", tipo: "Camisa" },
    { id: "(S)1017", nombre: "Camisa de Marciano", tipo: "Camisa" },
    { id: "(S)1018", nombre: "Camisa de Estrella", tipo: "Camisa" },
    { id: "(S)1019", nombre: "Camisa de Luna", tipo: "Camisa" },
    { id: "(S)1020", nombre: "Camisa de Sol", tipo: "Camisa" },
    { id: "(S)1021", nombre: "Camisa de Nube", tipo: "Camisa" },
    { id: "(S)1112", nombre: "Camisa de Rayas Azules", tipo: "Camisa" },
    { id: "(S)1113", nombre: "Camisa de Rayas Verdes", tipo: "Camisa" },
    { id: "(S)1114", nombre: "Camisa de Rayas Rojas", tipo: "Camisa" },
    { id: "(S)1115", nombre: "Camisa de Rayas Amarillas", tipo: "Camisa" },
    { id: "(S)1116", nombre: "Camisa de Rayas Púrpuras", tipo: "Camisa" },
    { id: "(S)1117", nombre: "Camisa de Rayas Naranjas", tipo: "Camisa" },
    { id: "(S)1118", nombre: "Camisa de Rayas Cian", tipo: "Camisa" },
    { id: "(S)1119", nombre: "Camisa de Rayas Rosadas", tipo: "Camisa" },
    { id: "(S)1120", nombre: "Camisa de Cuadros", tipo: "Camisa" },
    { id: "(S)1121", nombre: "Camisa y Corbata", tipo: "Camisa" },
    { id: "(S)1122", nombre: "Camisa de Esmoquin", tipo: "Camisa" },
    { id: "(S)1123", nombre: "Camisa Mágica de Emily", tipo: "Camisa" },
    { id: "(S)1124", nombre: "Top Corto Estilo Bikini", tipo: "Camisa" },
    { id: "(S)1125", nombre: "Poncho de Vaquero", tipo: "Camisa" },
    { id: "(S)1130", nombre: "Coraza de Hierro", tipo: "Camisa" },
    { id: "(S)1131", nombre: "Coraza de Oro", tipo: "Camisa" },
    { id: "(S)1132", nombre: "Coraza de Iridio", tipo: "Camisa" },
    { id: "(S)1133", nombre: "Camisa de Músculos Falsos", tipo: "Camisa" },
    { id: "(S)1134", nombre: "Chaleco de Pesca", tipo: "Camisa" },
    { id: "(S)1135", nombre: "Sudadera con Capucha Gris", tipo: "Camisa" },
    { id: "(S)1136", nombre: "Chaqueta de Mezclilla", tipo: "Camisa" },
    { id: "(S)1137", nombre: "Chaleco de Ante", tipo: "Camisa" },
    { id: "(S)1138", nombre: "Camisa de Neopreno", tipo: "Camisa" },
    { id: "(S)1139", nombre: "Delantal de Herrero", tipo: "Camisa" },
    { id: "(S)1140", nombre: "Jersey de Cuello Alto", tipo: "Camisa" },
    { id: "(S)1141", nombre: "Túnica de Granjero", tipo: "Camisa" },
    { id: "(S)1256", nombre: "Camisa Manchada de Aceite", tipo: "Camisa" },
    { id: "(S)1257", nombre: "Camisa de Colmenilla", tipo: "Camisa" },
    { id: "(S)1258", nombre: "Camisa de Primavera", tipo: "Camisa" },
    { id: "(S)1259", nombre: "Camisa de Marinero", tipo: "Camisa" },
    { id: "(S)1260", nombre: "Chubasquero", tipo: "Camisa" },
    { id: "(S)1261", nombre: "Camisa de Marinero Blanca", tipo: "Camisa" },
    { id: "(S)1262", nombre: "Camisa de Pañuelo Oscuro", tipo: "Camisa" },
    { id: "(S)1263", nombre: "Camisa de Rayas Oscuras", tipo: "Camisa" },
    { id: "(S)1264", nombre: "Camisa Omni", tipo: "Camisa" },
    { id: "(S)1265", nombre: "Camisa de Novia", tipo: "Camisa" },
    { id: "(S)1266", nombre: "Mono Marrón", tipo: "Camisa" },
    { id: "(S)1267", nombre: "Camisa de Lazo Naranja", tipo: "Camisa" },
    { id: "(S)1268", nombre: "Mono Blanco", tipo: "Camisa" },
    { id: "(S)1269", nombre: "Camisa de Café", tipo: "Camisa" },
    { id: "(S)1270", nombre: "Chaqueta Verde", tipo: "Camisa" },
    { id: "(S)1271", nombre: "Chaqueta Corta", tipo: "Camisa" },
    { id: "(S)1272", nombre: "Camisa de Lunares", tipo: "Camisa" },
    { id: "(S)1273", nombre: "Camisa de Puntos Blancos", tipo: "Camisa" },
    { id: "(S)1274", nombre: "Camisa de Camuflaje", tipo: "Camisa" },
    { id: "(S)1275", nombre: "Camisa Sucia", tipo: "Camisa" },
    { id: "(S)1276", nombre: "Camisa de Pastel de Cangrejo", tipo: "Camisa" },
    { id: "(S)1277", nombre: "Camisa Sedosa", tipo: "Camisa" },
    { id: "(S)1278", nombre: "Chaleco con Botones Azul", tipo: "Camisa" },
    { id: "(S)1279", nombre: "Camisa Vaquera Desgastada", tipo: "Camisa" },
    { id: "(S)1280", nombre: "Chaleco con Botones Rojo", tipo: "Camisa" },
    { id: "(S)1281", nombre: "Chaleco con Botones Verde", tipo: "Camisa" },
    { id: "(S)1282", nombre: "Camisa de Tomate", tipo: "Camisa" },
    { id: "(S)1283", nombre: "Chaleco con Flecos", tipo: "Camisa" },
    { id: "(S)1284", nombre: "Camisa Globby", tipo: "Camisa" },
    { id: "(S)1285", nombre: "Chaqueta de Perro de Medianoche", tipo: "Camisa" },
    { id: "(S)1286", nombre: "Camisa de Entusiasta del Camarón", tipo: "Camisa" },
    { id: "(S)1287", nombre: "Camisa de Té", tipo: "Camisa" },
    { id: "(S)1288", nombre: "Camisa de Baratija", tipo: "Camisa" },
    { id: "(S)1289", nombre: "Traje de Oscuridad", tipo: "Camisa" },
    { id: "(S)1290", nombre: "Chaqueta de Perro Mineral", tipo: "Camisa" },
    { id: "(S)1291", nombre: "Camisa Magenta", tipo: "Camisa" },
    { id: "(S)1292", nombre: "Mono de Jengibre", tipo: "Camisa" },
    { id: "(S)1293", nombre: "Camisa de Plátano", tipo: "Camisa" },
    { id: "(S)1294", nombre: "Traje Amarillo", tipo: "Camisa" },
    { id: "(S)1295", nombre: "Camisa Rosa Intenso", tipo: "Camisa" },
    { id: "(S)1296", nombre: "Camisa de Amanecer Tropical", tipo: "Camisa" },
    { id: "(S)1297", nombre: "Bikini de Isla", tipo: "Camisa" },
    { id: "(S)1997", nombre: "Camisa de Chispas Mágicas", tipo: "Camisa" },
    { id: "(S)1998", nombre: "Camisa Prismática", tipo: "Camisa" },
    { id: "(S)1999", nombre: "Camisa Prismática Larga", tipo: "Camisa" },
    { id: "(S)MysteryShirt", nombre: "Camisa Misteriosa", tipo: "Camisa" },
    { id: "(S)SoftEdgePullover", nombre: "Jersey de Bordes Suaves", tipo: "Camisa" },

    // Categoría de Maniquíes
    { id: "(M)MannequinMale", nombre: "Maniquí (M)", tipo: "Maniqui" },
    { id: "(M)MannequinFemale", nombre: "Maniquí (F)", tipo: "Maniqui" },
    { id: "(M)CursedMannequinMale", nombre: "Maniquí Maldito (M)", tipo: "Maniqui" },
    { id: "(M)CursedMannequinFemale", nombre: "Maniquí Maldito (F)", tipo: "Maniqui" },

    // Categoría de Pantalones
    { id: "(P)0", nombre: "Pantalones de granjero", tipo: "Pantalón" },
    { id: "(P)1", nombre: "Bermudas", tipo: "Pantalón" },
    { id: "(P)2", nombre: "Vestido largo", tipo: "Pantalón" },
    { id: "(P)3", nombre: "Falda", tipo: "Pantalón" },
    { id: "(P)4", nombre: "Falda plisada", tipo: "Pantalón" },
    { id: "(P)5", nombre: "Pantalones de dinosaurio", tipo: "Pantalón" },
    { id: "(P)6", nombre: "Falda de hierba", tipo: "Pantalón" },
    { id: "(P)7", nombre: "Falda Luau", tipo: "Pantalón" },
    { id: "(P)8", nombre: "Pantalones de genio", tipo: "Pantalón" },
    { id: "(P)9", nombre: "Pantalones ajustados", tipo: "Pantalón" },
    { id: "(P)10", nombre: "Pantalones anchos", tipo: "Pantalón" },
    { id: "(P)11", nombre: "Vestido sencillo", tipo: "Pantalón" },
    { id: "(P)12", nombre: "Pantalones de corte relajado", tipo: "Pantalón" },
    { id: "(P)13", nombre: "Pantalones cortos de corte relajado", tipo: "Pantalón" },
    { id: "(P)14", nombre: "Pantalones cortos de lunares", tipo: "Pantalón" },
    { id: "(P)15", nombre: "Pantalones cortos Lucky Purple recortados", tipo: "Pantalón" },
    { id: "(P)998", nombre: "Pantalones prismáticos", tipo: "Pantalón" },
    { id: "(P)999", nombre: "Pantalones de genio prismáticos", tipo: "Pantalón" },

    // Categoría de Sombreros
    { id: "(H)0", nombre: "Sombrero de vaquero", tipo: "Sombrero" },
    { id: "(H)1", nombre: "Sombrero de bombín", tipo: "Sombrero" },
    { id: "(H)2", nombre: "Sombrero de copa", tipo: "Sombrero" },
    { id: "(H)3", nombre: "Sombrero", tipo: "Sombrero" },
    { id: "(H)4", nombre: "Sombrero de paja", tipo: "Sombrero" },
    { id: "(H)5", nombre: "Gorra de oficial", tipo: "Sombrero" },
    { id: "(H)6", nombre: "Gorrito azul", tipo: "Sombrero" },
    { id: "(H)7", nombre: "Sombrero de pluma", tipo: "Sombrero" },
    { id: "(H)8", nombre: "Máscara de esqueleto", tipo: "Sombrero" },
    { id: "(H)9", nombre: "Máscara de duende", tipo: "Sombrero" },
    { id: "(H)10", nombre: "Máscara de pollo", tipo: "Sombrero" },
    { id: "(H)11", nombre: "Orejeras", tipo: "Sombrero" },
    { id: "(H)12", nombre: "Lazo delicado", tipo: "Sombrero" },
    { id: "(H)13", nombre: "Clip tropical", tipo: "Sombrero" },
    { id: "(H)14", nombre: "Lazo de mariposa", tipo: "Sombrero" },
    { id: "(H)15", nombre: "Gorra de cazador", tipo: "Sombrero" },
    { id: "(H)16", nombre: "Gorra de camionero", tipo: "Sombrero" },
    { id: "(H)17", nombre: "Gorra de marinero", tipo: "Sombrero" },
    { id: "(H)18", nombre: "Gorra vieja", tipo: "Sombrero" },
    { id: "(H)19", nombre: "Fedora", tipo: "Sombrero" },
    { id: "(H)20", nombre: "Sombrero frío", tipo: "Sombrero" },
    { id: "(H)21", nombre: "Lazo de la suerte", tipo: "Sombrero" },
    { id: "(H)22", nombre: "Lazo de lunares", tipo: "Sombrero" },
    { id: "(H)23", nombre: "Gorra de gnomo", tipo: "Sombrero" },
    { id: "(H)24", nombre: "Parche en el ojo", tipo: "Sombrero" },
    { id: "(H)25", nombre: "Gorro de Papá Noel", tipo: "Sombrero" },
    { id: "(H)26", nombre: "Tiara", tipo: "Sombrero" },
    { id: "(H)27", nombre: "Casco de obra", tipo: "Sombrero" },
    { id: "(H)28", nombre: "Impermeable sureño", tipo: "Sombrero" },
    { id: "(H)29", nombre: "Margarita", tipo: "Sombrero" },
    { id: "(H)30", nombre: "Banda de sandía", tipo: "Sombrero" },
    { id: "(H)31", nombre: "Orejas de ratón", tipo: "Sombrero" },
    { id: "(H)32", nombre: "Orejas de gato", tipo: "Sombrero" },
    { id: "(H)33", nombre: "Sombrero de vaquera", tipo: "Sombrero" },
    { id: "(H)34", nombre: "Sombrero de vaquero rústico", tipo: "Sombrero" },
    { id: "(H)35", nombre: "Gorra de arquero", tipo: "Sombrero" },
    { id: "(H)36", nombre: "Gorro de panda", tipo: "Sombrero" },
    { id: "(H)37", nombre: "Sombrero de vaquero azul", tipo: "Sombrero" },
    { id: "(H)38", nombre: "Sombrero de vaquero rojo", tipo: "Sombrero" },
    { id: "(H)39", nombre: "Gorra de cono", tipo: "Sombrero" },
    { id: "(H)40", nombre: "Sombrero viviente", tipo: "Sombrero" },
    { id: "(H)41", nombre: "Sombrero mágico de Emily", tipo: "Sombrero" },
    { id: "(H)42", nombre: "Gorra de champiñón", tipo: "Sombrero" },
    { id: "(H)43", nombre: "Sombrero de dinosaurio", tipo: "Sombrero" },
    { id: "(H)44", nombre: "Máscara de tótem", tipo: "Sombrero" },
    { id: "(H)45", nombre: "Gorra con logo", tipo: "Sombrero" },
    { id: "(H)46", nombre: "Casco de enano", tipo: "Sombrero" },
    { id: "(H)47", nombre: "Sombrero de moda", tipo: "Sombrero" },
    { id: "(H)48", nombre: "Máscara de calabaza", tipo: "Sombrero" },
    { id: "(H)49", nombre: "Hueso para el pelo", tipo: "Sombrero" },
    { id: "(H)50", nombre: "Casco de caballero", tipo: "Sombrero" },
    { id: "(H)51", nombre: "Casco de escudero", tipo: "Sombrero" },
    { id: "(H)52", nombre: "Pañuelo de puntos", tipo: "Sombrero" },
    { id: "(H)53", nombre: "Gorro", tipo: "Sombrero" },
    { id: "(H)54", nombre: "Gorro caído", tipo: "Sombrero" },
    { id: "(H)55", nombre: "Gorra de pesca", tipo: "Sombrero" },
    { id: "(H)56", nombre: "Máscara de pez borrón", tipo: "Sombrero" },
    { id: "(H)57", nombre: "Sombrero de fiesta (rojo)", tipo: "Sombrero" },
    { id: "(H)58", nombre: "Sombrero de fiesta (azul)", tipo: "Sombrero" },
    { id: "(H)59", nombre: "Sombrero de fiesta (verde)", tipo: "Sombrero" },
    { id: "(H)60", nombre: "Sombrero arcano", tipo: "Sombrero" },
    { id: "(H)61", nombre: "Sombrero de chef", tipo: "Sombrero" },
    { id: "(H)62", nombre: "Sombrero de pirata", tipo: "Sombrero" },
    { id: "(H)63", nombre: "Sombrero plano", tipo: "Sombrero" },
    { id: "(H)64", nombre: "Turbante elegante", tipo: "Sombrero" },
    { id: "(H)65", nombre: "Turbante blanco", tipo: "Sombrero" },
    { id: "(H)66", nombre: "Sombrero de basura", tipo: "Sombrero" },
    { id: "(H)67", nombre: "Máscara de oro", tipo: "Sombrero" },
    { id: "(H)68", nombre: "Sombrero de hélice", tipo: "Sombrero" },
    { id: "(H)69", nombre: "Velo de novia", tipo: "Sombrero" },
    { id: "(H)70", nombre: "Sombrero de bruja", tipo: "Sombrero" },
    { id: "(H)71", nombre: "Batea de cobre", tipo: "Sombrero" },
    { id: "(H)72", nombre: "Turbante verde", tipo: "Sombrero" },
    { id: "(H)73", nombre: "Sombrero de vaquero mágico", tipo: "Sombrero" },
    { id: "(H)74", nombre: "Turbante mágico", tipo: "Sombrero" },
    { id: "(H)75", nombre: "Casco dorado", tipo: "Sombrero" },
    { id: "(H)76", nombre: "Sombrero de pirata de lujo", tipo: "Sombrero" },
    { id: "(H)77", nombre: "Lazo rosa", tipo: "Sombrero" },
    { id: "(H)78", nombre: "Gorro de rana", tipo: "Sombrero" },
    { id: "(H)79", nombre: "Gorra pequeña", tipo: "Sombrero" },
    { id: "(H)80", nombre: "Máscara de pájaro azul", tipo: "Sombrero" },
    { id: "(H)81", nombre: "Sombrero de vaquero de lujo", tipo: "Sombrero" },
    { id: "(H)82", nombre: "Sombrero del Sr. Qi", tipo: "Sombrero" },
    { id: "(H)83", nombre: "Sombrero de vaquero oscuro", tipo: "Sombrero" },
    { id: "(H)84", nombre: "Gafas radiactivas", tipo: "Sombrero" },
    { id: "(H)85", nombre: "Sombrero de espadachín", tipo: "Sombrero" },
    { id: "(H)86", nombre: "Máscara de Qi", tipo: "Sombrero" },
    { id: "(H)87", nombre: "Casco estelar", tipo: "Sombrero" },
    { id: "(H)88", nombre: "Gafas de sol", tipo: "Sombrero" },
    { id: "(H)89", nombre: "Gafas", tipo: "Sombrero" },
    { id: "(H)90", nombre: "Sombrero de recolector", tipo: "Sombrero" },
    { id: "(H)91", nombre: "Gorra de tigre", tipo: "Sombrero" },
    { id: "(H)92", nombre: "???", tipo: "Sombrero" },
    { id: "(H)93", nombre: "Casco de guerrero", tipo: "Sombrero" },
    { id: "(H)AbigailsBow", nombre: "Lazo de Abigail", tipo: "Sombrero" },
    { id: "(H)TricornHat", nombre: "Tricornio", tipo: "Sombrero" },
    { id: "(H)JojaCap", nombre: "Gorra de Joja", tipo: "Sombrero" },
    { id: "(H)LaurelWreathCrown", nombre: "Corona de laurel", tipo: "Sombrero" },
    { id: "(H)QiisHat", nombre: "Sombrero de Qi", tipo: "Sombrero" },
    { id: "(H)BlueBow", nombre: "Lazo azul", tipo: "Sombrero" },
    { id: "(H)DarkVelvetBow", nombre: "Lazo de terciopelo oscuro", tipo: "Sombrero" },
    { id: "(H)MummyMask", nombre: "Máscara de momia", tipo: "Sombrero" },
    { id: "(H)BucketHat", nombre: "Sombrero de pescador", tipo: "Sombrero" },
    { id: "(H)SquidHat", nombre: "Sombrero de calamar", tipo: "Sombrero" },
    { id: "(H)SportsCap", nombre: "Gorra deportiva", tipo: "Sombrero" },
    { id: "(H)RedFez", nombre: "Fez rojo", tipo: "Sombrero" },
    { id: "(H)RaccoonHat", nombre: "Gorra de mapache", tipo: "Sombrero" },
    { id: "(H)SteelPan", nombre: "Batea de acero", tipo: "Sombrero" },
    { id: "(H)GoldPan", nombre: "Batea de oro", tipo: "Sombrero" },
    { id: "(H)IridiumPan", nombre: "Batea de iridio", tipo: "Sombrero" },
    { id: "(H)MysteryHat", nombre: "Sombrero misterioso", tipo: "Sombrero" },
    { id: "(H)DarkBallcap", nombre: "Gorra oscura", tipo: "Sombrero" },
    { id: "(H)LeprechaunHat", nombre: "Sombrero de leprechaun", tipo: "Sombrero" },
    { id: "(H)JunimoHat", nombre: "Gorro de Junimo", tipo: "Sombrero" },
    { id: "(H)PaperHat", nombre: "Sombrero de papel", tipo: "Sombrero" },
    { id: "(H)PageboyCap", nombre: "Gorra de repartidor", tipo: "Sombrero" },
    { id: "(H)JesterHat", nombre: "Gorro de bufón", tipo: "Sombrero" },
    { id: "(H)BlueRibbon", nombre: "Cinta azul", tipo: "Sombrero" },
    { id: "(H)GovernorsHat", nombre: "Sombrero del gobernador", tipo: "Sombrero" },
    { id: "(H)WhiteBow", nombre: "Lazo blanco", tipo: "Sombrero" },
    { id: "(H)SpaceHelmet", nombre: "Casco espacial", tipo: "Sombrero" },
    { id: "(H)InfinityCrown", nombre: "Corona del infinito", tipo: "Sombrero" },
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
