const snippetCount = 120;

/**
 * Elimina etiquetas HTML y devuelve un fragmento de texto limitado
 * @param {string} html - El contenido HTML original
 * @param {number} limit - Número máximo de caracteres del snippet
 * @returns {string} - Texto plano sin HTML, limitado por palabras
 */
function removeHtmlTag(html, limit = snippetCount) {
  // Eliminar scripts
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Eliminar todas las etiquetas HTML
  let text = html.replace(/<\/?[^>]+(>|$)/g, '');

  // Limitar por palabras sin cortar a la mitad
  if (text.length > limit) {
    let cutIndex = text.lastIndexOf(' ', limit);
    return text.substring(0, cutIndex !== -1 ? cutIndex : limit);
  }

  return text;
}

/**
 * Reemplaza el contenido HTML con un snippet limpio dentro de un div.snippets
 * @param {string} elementId - ID del elemento HTML objetivo
 */
function createSnippet(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    const cleanText = removeHtmlTag(el.innerHTML);
    el.innerHTML = `<div class="snippets">${cleanText}</div>`;
  }
}

/**
 * Genera una etiqueta de imagen con tamaño redimensionado para miniaturas
 * @param {string} url - URL de la imagen original
 * @param {string} title - Texto alternativo (alt/title)
 * @returns {string} - Etiqueta <img> con tamaño ajustado
 */
function arlinaThumbnailResize(url, title = "") {
  const width = 350, height = 210;
  const resizedUrl = url
    .replace("/s72-c/", `/w${width}-h${height}-c/`)
    .replace("/s1600/", `/w${width}-h${height}-c/`);

  if (!title) return "";

  const cleanTitle = title.replace(/"/g, "");
  return `<img width="${width}" height="${height}" src="${resizedUrl}" alt="${cleanTitle}" title="${cleanTitle}"/>`;
}
