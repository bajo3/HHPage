// Función para mostrar el loader
function showLoader() {
    const loaderOverlay = document.createElement('div');
    loaderOverlay.classList.add('loader-overlay');
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loaderOverlay.appendChild(loader);
    document.body.appendChild(loaderOverlay);
  }
  
  // Función para ocultar el loader
  function hideLoader() {
    const loaderOverlay = document.querySelector('.loader-overlay');
    if (loaderOverlay) {
      document.body.removeChild(loaderOverlay);
    }
  }
  
  // Mostrar el loader al cargar la página
  window.addEventListener('load', function() {
    showLoader(); // Muestra el loader al cargar la página
    setTimeout(function() {
      hideLoader(); // Oculta el loader después de un tiempo (simulado)
    }, 2000); // Cambia este valor a la cantidad de tiempo deseada en milisegundos
  });
  

const popup = document.getElementById('popup');
const closeButton = document.getElementById('popup-close');

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.style.display = 'block';
