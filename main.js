// Funciones de SEO
$(document).ready(function(){
  $(".widget h2").wrapInner("<span></span>");
  $(".twitter-tweet").attr('align','center');

  if (!$('#metadescription').attr('content')) {
    $('#metadescription').attr('content', $(".my-wrapz").text().substr(0, 255).replace(/(\r\n|\n|\r|\")/gm, "").trim());
  }
});

// Mapa del sitio y slider
function cargarSitemap() {
  // lógica de sitemap
}

function cargarSlider() {
  // lógica del slider de destacados
}

// Compartir en redes (si es necesario JS)
window.addEventListener('DOMContentLoaded', function () {
  // acciones adicionales si las hay
});
