if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrato con successo!'))
    .catch(err => console.error('Errore nella registrazione del SW:', err));
}
const frasi = [
  "Nu mă bate că-s bolnav!.",
  "Ședea frumos și tăcea.",
  "Mânca-ți-aș gura ta de băiet!.",
  "No, hai pa!",
  "Tăt e bun, numa' să nu fie rău.",
  "Ai grijă cum grăiești, că limba n-are os!",
  "Tu cu d-ale tale, eu cu d-ale mele, și ne vedem la colț.",
  "Shio spus brat!",
  "Ma sono moldavo!",
  "Ți-o zis ăl bătrân de bine, da’ tu tot cu coarnele înainte.",
  "Nu știu, frate, da' mie-mi place.",
  "Am fost și eu acolo, da’ numa’ cu sufletul.",
  "Dă-mi un păhărel, că-s cam slab de fire.",
  "Da parca da , da parca nu. Ceva nu ajunge!",
  "Dacă bei, rămâi prost. Dacă nu bei, ești deja.",
  "Nu-s beat, da’ îs în stare să te iubesc.",
  "Nu mâncați seara, că visul vine greu și foamea mușcă.",
  "Ce-ai făcut, măi, Costele?",
  "Mamăăă, ce bine e să n-ai bani...",
  "Nu sunt perfect, dar sunt ediție limitată.",
  "Mă iubește da’ din sărăcie nu poate arăta.",
  "Nu o masa da trei mese!",
  "Tu taci, că pe tine nici mă-ta nu te crede."
];

const fraseEl = document.getElementById("frase");
const nuovaFraseBtn = document.getElementById("nuovaFraseBtn");
const aggiungiPreferitaBtn = document.getElementById("aggiungiPreferitaBtn");
const listaPreferitiEl = document.getElementById("listaPreferiti");

let fraseCorrente = "";

function mostraFrase() {
  let nuovaFrase;
  do {
    nuovaFrase = frasi[Math.floor(Math.random() * frasi.length)];
  } while (nuovaFrase === fraseCorrente);

  fraseCorrente = nuovaFrase;

  // Animazione dissolvenza
  fraseEl.style.opacity = 0;
  setTimeout(() => {
    fraseEl.textContent = fraseCorrente;
    fraseEl.style.opacity = 1;
    aggiungiPreferitaBtn.disabled = false;
  }, 300);
}

function salvaPreferiti() {
  const preferiti = getPreferiti();
  if (!preferiti.includes(fraseCorrente)) {
    preferiti.push(fraseCorrente);
    localStorage.setItem("preferiti", JSON.stringify(preferiti));
    caricaPreferiti();
  }
}

function getPreferiti() {
  const dati = localStorage.getItem("preferiti");
  return dati ? JSON.parse(dati) : [];
}

function caricaPreferiti() {
  listaPreferitiEl.innerHTML = "";
  const preferiti = getPreferiti();
  preferiti.forEach((frase, index) => {
    const li = document.createElement("li");
    li.textContent = frase;
    li.onclick = () => {
      fraseCorrente = frase;
      fraseEl.textContent = frase;
      aggiungiPreferitaBtn.disabled = true;
    };
    listaPreferitiEl.appendChild(li);
  });
}


nuovaFraseBtn.addEventListener("click", mostraFrase);
aggiungiPreferitaBtn.addEventListener("click", salvaPreferiti);

// Carica preferiti all'avvio
caricaPreferiti();
// TIMER CONTO ALL'INDIETRO FINO ALL'11 AGOSTO
const timerEl = {
  giorni: document.getElementById("giorni"),
  ore: document.getElementById("ore"),
  minuti: document.getElementById("minuti"),
  secondi: document.getElementById("secondi")
};

// Imposta la data obiettivo: 11 agosto (ora 00:00:00)
const targetDate = new Date(new Date().getFullYear(), 7, 11, 0, 0, 0); // Mese 7 = agosto (0-based)

// Se siamo oltre l'11 agosto di quest'anno, passa all'anno prossimo
if (new Date() > targetDate) {
  targetDate.setFullYear(targetDate.getFullYear() + 1);
}

function aggiornaTimer() {
  const oraAdesso = new Date();
  const diff = targetDate - oraAdesso;

  if (diff <= 0) {
    timerEl.giorni.textContent = "00";
    timerEl.ore.textContent = "00";
    timerEl.minuti.textContent = "00";
    timerEl.secondi.textContent = "00";
    clearInterval(timerInterval);
    return;
  }

  const giorni = Math.floor(diff / (1000 * 60 * 60 * 24));
  const ore = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minuti = Math.floor((diff / (1000 * 60)) % 60);
  const secondi = Math.floor((diff / 1000) % 60);

  timerEl.giorni.textContent = String(giorni).padStart(2, "0");
  timerEl.ore.textContent = String(ore).padStart(2, "0");
  timerEl.minuti.textContent = String(minuti).padStart(2, "0");
  timerEl.secondi.textContent = String(secondi).padStart(2, "0");
}

const timerInterval = setInterval(aggiornaTimer, 1000);
aggiornaTimer();


