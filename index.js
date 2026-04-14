const canciones = [
    "Stardew Valley OST - Summer (Nature_s Crescendo)(MP3_160K).mp3",
    "Stardew Valley OST - A Glimpse Of The Other World (Wizard_s Theme)(MP3_160K).mp3",
    "Stardew Valley OST - Spring (Wild Horseradish Jam)(MP3_160K).mp3",
    "Stardew Valley OST - Spring (The Valley Comes Alive)(MP3_160K).mp3",
    "Stardew Valley OST - Spring (It_s a Big World Outside)(MP3_160K).mp3",
    "Stardew Valley OST - Distant Banjo(MP3_160K).mp3",
    "Stardew Valley OST - Fun Festival(MP3_160K).mp3",
    "Stardew Valley OST - Pelican Town(MP3_160K).mp3",
    "Stardew Valley OST - Flower Dance(MP3_160K).mp3",
    "Stardew Valley OST - Settling In(MP3_160K).mp3"
];

const musica = document.getElementById("musicaFondo");
const btnMusica = document.getElementById("btnMusica");
const textoMusica = document.getElementById("iconoAltavoz");
const btnTema = document.getElementById("btnTema");
const contenedor = document.getElementById("contenido-dinamico");
const modal = document.getElementById("modalAviso");
const btnAbrir = document.getElementById("btnAviso");
const btnCerrar = document.getElementById("btnCerrar");

let estaSonando = false;

function reproducirAleatorio() {
    const proxima = canciones[Math.floor(Math.random() * canciones.length)];
    musica.src = proxima;
    musica.volume = 0.2;
    musica.play().catch(e => console.log("Esperando interacción..."));
    estaSonando = true;
    textoMusica.innerText = "♫";
    textoMusica.style.opacity = "1";
}

btnMusica.onclick = () => {
    if (!estaSonando) {
        reproducirAleatorio();
    } else {
        musica.pause();
        estaSonando = false;
        textoMusica.innerText = "X";
        textoMusica.style.opacity = "0.5";
    }
};

musica.onended = reproducirAleatorio;

btnTema.onclick = () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("temaGuardado", "dark");
    } else {
        localStorage.setItem("temaGuardado", "light");
    }
};

document.addEventListener("click", e => {
    const link = e.target.closest("a");
    if (link && link.getAttribute("href") && link.getAttribute("href").includes("sv")) {
        e.preventDefault();
        const url = link.getAttribute("href");
        fetch(url)
            .then(res => res.text())
            .then(data => {
                const parser = new DOMParser();
                const nuevoDoc = parser.parseFromString(data, "text/html");
                const nuevoContenido = nuevoDoc.getElementById("contenido-dinamico");
                if (nuevoContenido) {
                    contenedor.innerHTML = nuevoContenido.innerHTML;
                    window.history.pushState({}, "", url);
                }
            })
            .catch(err => {
                window.location.href = url;
            });
    }
});

btnAbrir.onclick = () => modal.style.display = "flex";
btnCerrar.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

window.addEventListener('load', () => {
    const tema = localStorage.getItem('temaGuardado');
    if (tema === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
