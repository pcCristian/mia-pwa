if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrato con successo!'))
    .catch(err => console.error('Errore nella registrazione del SW:', err));
}
const frasi = [
  "Sono così single che anche il mio cuscino ha chiesto la separazione.",
  "Ho scritto a una ragazza: 'Ciao'. Lei ha risposto con lo screenshot alla psicologa.",
  "Mia vita sentimentale è come il mio hard disk: vuoto, ma pieno di errori.",
  "Le ho detto 'mi piaci'. Ha aggiornato Tinder.",
  "Mi ha chiesto di fare qualcosa di selvaggio a letto. Ho liberato RAM.",
  "Ho fatto una battuta sporca. Il mio modem ha perso la connessione per vergogna.",
  "L’unica cosa che spingo forte… è il carrello della spesa da solo.",
  "Mi ha detto: 'Fammi tremare'. Le ho letto il mio estratto conto.",
  "Ho cercato conforto nel sesso... e ho trovato buffering.",
  "Ogni volta che provo a flirtare, qualcuno si scusa con me per pietà.",
  "Il mio ex mi ha detto che ero troppo emotivo. Ho pianto così forte che ora esce con Alexa.",
  "Le ho mandato un audio hot. Ha risposto con un link per la terapia online.",
  "Mi ha chiesto cosa mi accende. Le ho risposto: il microonde a fine ciclo.",
  "Quando lei ha detto 'vieni da me', ho pensato fosse uno scherzo. E avevo ragione.",
  "L’unico contatto fisico che ho è col router quando non va internet.",
  "Mi ha detto: 'Voglio sentirti dentro'. Le ho inviato un PDF di 200 pagine.",
  "Mi ha detto che ha i brividi. Le ho chiesto se era per me. No, era il riscaldamento rotto.",
  "L’unico match che ho avuto quest’anno... è stato con un bot.",
  "La mia ragazza ideale? Quella che non ha il blocco attivo su WhatsApp.",
  "Mi ha chiesto: 'Che tipo sei a letto?'. Ho risposto: 'Statico, come il mio amore'.",
  "Le ho detto 'Hai fuoco dentro'. Mi ha risposto: 'Sì, è reflusso'.",
  "Quando mi ha detto 'spogliami con gli occhi', sono partiti gli occhiali.",
  "Lei cercava un uomo maturo. Io cercavo il Wi-Fi.",
  "Il mio cuore è così spezzato che anche i puzzle mi evitano.",
  "Mi ha detto 'fammi ridere'. Le ho raccontato la mia vita.",
  "Sono come un dildo scarico: non servo più a niente ma continuo a vibrare.",
  "Ogni volta che mi eccito, anche il PC si surriscalda per solidarietà.",
  "Quando mi dicono 'pensa positivo', visualizzo solo il test del Covid.",
  "Sono talmente cringe che quando rido... pure l'eco mi ignora.",
  "Ho detto 'ti amo' e lei ha risposto 'questo numero non è attivo'.",
  "Sono come il sesso senza consenso... impossibile e sbagliato.",
  "Mi ha detto 'voglio uno che mi faccia volare'. Le ho suggerito Ryanair.",
  "Quando mi abbracciano, controllo se hanno il portafoglio.",
  "Ho così poca vita sociale che parlo da solo e mi do anche torto.",
  "Sono l’unico che riesce a venire... deluso ogni volta.",
  "Ogni volta che flirto, qualcuno chiama il 118 pensando che abbia un ictus.",
  "Mi ha chiesto se mi piace il dirty talk. Ho risposto: 'Mutuo, tasse, bollette'.",
  "Sono come un floppy disk: piccolo, fragile e inutile dal 2001.",
  "L’unico tocco umano che ricevo è lo swipe per chiudermi.",
  "Sono come il sesso con la luce accesa... tutti vogliono evitarlo.",
  "Quando ho detto 'vieni a casa mia', mi ha bloccato. Anche l’elettricità.",
  "Sei talmente fredda che quando ti bacio mi si formano i ghiaccioli sul cuore.",
  "L’ultima volta che ho toccato una ragazza... era su un mouse pad con ragazza anime.",
  "Mi ha detto 'voglio un uomo caldo'. Le ho risposto 'ho 39 di febbre'.",
  "Sono come il primo amore: tutti lo ricordano... per non ripeterlo mai più.",
  "Ho scritto una poesia erotica. Google Docs ha chiesto conferma per contenuti disturbanti.",
  "Quando guardo film hot, mi concentro sull'arredamento per sentirmi meno solo.",
  "Sono talmente sfigato che anche la mia ombra mi ghosta.",
  "Le ho detto 'sono passionale'. Ha risposto 'Io invece sono presa'.",
  "Voglio una relazione seria. Tipo il mio viso quando la vedo con un altro.",
  "L’unico segnale che ricevo è: 'nessun servizio disponibile'.",
  "L’unico momento in cui sono in alto è quando salgo sulla bilancia.",
  "Sono come il Wi-Fi del vicino: disponibile ma protetto da password emotive.",
  "L’unico orgasmo che ho avuto quest’anno era scritto in un libro.",
  "Mi ha detto 'sei intenso'. Io: 'Sì, d'umore nero'.",
  "Ho tentato un approccio in discoteca. Lei ha chiamato il DJ per cambiare traccia.",
  "Il mio romanticismo è come il mio conto in banca: triste e senza fondi.",
  "L’unica che mi ha mai detto 'sei l’uomo della mia vita' era mia madre. Ironicamente.",
  "Sono il tipo di persona che se fa l'amore... è sicuramente con l'immaginazione.",
  "Se fossi una posizione del kamasutra... sarei 'solitudine laterale sinistra'.",
  "Lei voleva un uomo avventuroso. L'ho portata all’INPS.",
  "La mia autostima è così bassa che ogni tanto scava per sport.",
  "Quando mi guardo allo specchio, lui spegne la luce per pietà.",
  "Ho un solo neurone e soffre di ansia sociale.",
  "L’unica lingua che parlo fluentemente... è quella con cui mi mordo per non parlare.",
  "Ogni volta che ci provo con qualcuno, si aggiorna il firewall emotivo.",
  "Lei: 'Fammi venire'. Io: 'Sto ancora aggiornando i driver'.",
  "Mi ha chiesto 'Hai voglia?'. Ho risposto 'Solo di carboidrati e piangere'.",
  "Sono così triste che Netflix mi ha suggerito i Teletubbies per sollevarmi.",
  "Il mio cervello è una pagina 404.",
  "L’unico fruscio che sento nel letto è il mio metabolismo che se ne va.",
  "Mi eccito solo quando arriva una notifica bancaria positiva.",
  "Mi ha detto 'sei profondo'. Forse troppo... mi sono perso.",
  "Ho una fantasia erotica: che il corriere mi guardi con affetto.",
  "Mi ha chiesto se ho qualcosa di duro. Le ho mostrato il mio calendario emotivo.",
  "La mia sola interazione a tre? Io, la depressione e Spotify.",
  "Ho detto 'mi piaci'. Ha attivato l'autodistruzione.",
  "Mi ha detto 'dimmi qualcosa di sporco'. Le ho letto il mio estratto conto.",
  "Sono il tipo di persona che si eccita quando trova parcheggio al primo colpo.",
  "Sei così fredda che ogni volta che ti vedo mi esce vapore dalla bocca.",
  "La mia relazione più lunga è con il mio loop di pensieri negativi.",
  "L’unica volta che sono andato duro... era l’esame di matematica.",
  "Ho detto 'ti voglio'. Lei ha detto 'sta zitto e paga l'aperitivo'.",
  "Lei: 'Dimmi qualcosa che mi faccia impazzire'. Io: 'Ti amo'.",
  "Mi ha lasciato perché ero troppo pesante... e stavo solo respirando.",
  "L’unico momento bollente che ho vissuto era dentro la sauna della palestra. Da solo.",
  "Mi ha detto: 'Fammi godere'. Ho lasciato la stanza.",
  "Quando ho detto 'ti desidero', ha risposto: 'Ho già ordinato su Amazon'.",
  "Sono un disastro a letto. Mi muovo come l'app delle poste: lento e frustrante.",
  "Sono così cringe che anche i miei sogni hanno deciso di cambiare protagonista."
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


