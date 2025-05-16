if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrato con successo!'))
    .catch(err => console.error('Errore nella registrazione del SW:', err));
}
const frasi = [
  "La felicità non è qualcosa di pronto. Viene dalle tue azioni.",
  "Non smettere mai di imparare, perché la vita non smette mai di insegnare.",
  "Il segreto del cambiamento è concentrare tutta la tua energia non nel combattere il vecchio, ma nel costruire il nuovo.",
  "Sii il cambiamento che vuoi vedere nel mondo.",
  "Anche questo passerà.",
  "Fai oggi ciò che gli altri non vogliono, per avere domani ciò che gli altri non possono.",
  "La vita è un viaggio, non una destinazione.",
  "Un sorriso è la curva più bella del corpo.",
  "Non aspettare. Il tempo non sarà mai giusto.",
  "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni."
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
