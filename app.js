if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrato con successo!'))
    .catch(err => console.error('Errore nella registrazione del SW:', err));
}