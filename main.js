// Unificado desde plantilla Blogger

// Meses en español
var text_month = [,"Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sept","Oct","Nov","Dic"];

// Metadescripción y formatos
$(document).ready(function(){
  $(".widget h2").wrapInner("<span></span>");
  $(".twitter-tweet").attr('align','center');
  if (!$('#metadescription').attr('content')){
    $('#metadescription').attr('content', $(".my-wrapz").text().substr(0, 255).replace(/(\r\n|\n|\r|\")/gm, "").trim());
  }
});

// Metadescripción específica para búsqueda por etiquetas
if (window.location.href.indexOf("/search/label/") > -1) {
  $(document).ready(function(){
    $('#metadescription').attr('content', $(".entradilla:first").text().substr(0, 255).replace(/(\r\n|\n|\r|\")/gm, "").trim());
  });
}

// Facebook SDK
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Volver arriba
window.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// Sitemap dinámico
var postbody, static_page_text = $.trim($(".static_page .post-body").text());
if (static_page_text === "[sitemap]") {
  postbody = $(".static_page .post-body");
  $.ajax({
    url: "/feeds/posts/default?alt=json-in-script",
    type: "get",
    dataType: "jsonp",
    success: function(e) {
      var t = [];
      for (var a = 0; a < e.feed.category.length; a++) {
        t.push(e.feed.category[a].term);
      }
      t = t.join("/");
      postbody.html('<div class="siteLabel"></div>');
      $(".static_page .post-body .siteLabel").text(t);
      var s = $(".siteLabel").text().split("/"), i = "";
      for (get = 0; get < s.length; ++get)
        i += "<span>" + s[get] + "</span>";
      $(".siteLabel").html(i);

      $(".siteLabel span").each(function(){
        var p = $(this), d = $(this).text();
        $.ajax({
          url: "/feeds/posts/default/-/" + d + "?alt=json-in-script",
          type: "get",
          dataType: "jsonp",
          success: function(e) {
            var a = '<div class="mapa">';
            for (var s = 0; s < e.feed.entry.length; s++) {
              var t = "";
              for (var i = 0; i < e.feed.entry[s].link.length; i++) {
                if ("alternate" === e.feed.entry[s].link[i].rel) {
                  t = e.feed.entry[s].link[i].href;
                  break;
                }
              }
              var n = e.feed.entry[s].title.$t,
                  r = e.feed.entry[s].author[0].name.$t,
                  l = e.feed.entry[s].published.$t,
                  c = l.substring(0,4),
                  o = l.substring(5,7),
                  d2 = l.substring(8,10);
              l = text_month[parseInt(o,10)] + " " + d2 + ", " + c;
              var thumb = e.feed.entry[s].media$thumbnail.url;
              a += '<div class="mapapost"><div class="map-thumb"><div class="map-img"><a href="'+t+'" style="background:url('+thumb+') no-repeat center center;background-size: cover"/></div></div><h3 class="wrp-titulo"><a href="'+t+'">'+n+'</a></h3><div class="map-meta"><span class="p-author">'+r+'</span><span class="p-date" style="color:#fff">'+l+"</span></div></div>";
            }
            a += "</div>";
            p.replaceWith('<div class="mapasite"><h2>'+d+'<span class="botao"><i class="fa fa-plus-circle"></i></span></h2>'+a+"</div>");
            $(document).on("click", ".mapasite h2", function(){
              var parent = $(this).parent(".mapasite");
              parent.toggleClass("active");
              $(this).find(".botao .fa").toggleClass("fa-plus-circle fa-minus-circle");
            });
          }
        });
      });
    }
  });
}

// Mejorar thumbnails en listas
$(".index .post-outer, archive .post-outer").each(function() {
  $(this).find(".block-image .thumb a")
    .attr("style", function(_, t) {
      return t.replace("/default.jpg", "/mqdefault.jpg");
    })
    .attr("style", function(_, t) {
      return t.replace("s72-c", "s400").replace("s1600", "s400");
    });
});
