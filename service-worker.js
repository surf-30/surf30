  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://www.tuservidor.com/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration.scope);
      })
      .catch(function(error) {
        console.log('Fallo al registrar el Service Worker:', error);
      });
  }
