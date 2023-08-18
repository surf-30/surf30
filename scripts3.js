// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);
// News Ticker plugin ~ URL: http://jonmifsud.com/open-source/jquery/jquery-webticker
(function(e){function n(e,t){var s=e.data("settings");if(typeof t==="undefined")t=false;if(t){i(e)}var o=r(e);e.animate(o.css,o.time,"linear",function(){e.css(s.direction,"0");n(e,true)})}function r(e){var t=e.data("settings");var n=e.children().first();var r=Math.abs(-e.css(t.direction).replace("px","").replace("auto","0")-n.outerWidth(true));var t=e.data("settings");var i=r*1e3/t.speed;var s={};s[t.direction]=e.css(t.direction).replace("px","").replace("auto","0")-r;return{css:s,time:i}}function i(e){var t=e.data("settings");e.css("transition-duration","0s").css(t.direction,"0");var n=e.children().first();if(n.hasClass("webticker-init"))n.remove();else e.children().last().after(n)}function s(e,t){if(typeof t==="undefined")t=false;if(t){i(e)}var n=r(e);var s=n.time/1e3;s+="s";e.css(n.css).css("transition-duration",s)}function o(t,n,r){var i;e.get(t,function(t){var s=e(t);s.find("item").each(function(){var t=e(this),n={title:t.find("title").text(),link:t.find("link").text()};listItem="<li><a href='"+n.link+"'>"+n.title+"</a></li>";i+=listItem});r.webTicker("update",i,n)})}function u(t){var n=t.data("settings");t.width("auto");var r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});if(r<t.parent().width()||t.children().length==1){if(n.duplicate){itemWidth=Math.max.apply(Math,t.children().map(function(){return e(this).width()}).get());while(r-itemWidth<t.parent().width()||t.children().length==1){var i=t.children().clone();t.append(i);r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});itemWidth=Math.max.apply(Math,t.children().map(function(){return e(this).width()}).get())}}else{var s=t.parent().width()-r;s+=t.find("li:first").width();var o=t.find("li:first").height();t.append('<li class="ticker-spacer" style="width:'+s+"px;height:"+o+'px;"></li>')}}if(n.startEmpty){var o=t.find("li:first").height();t.prepend('<li class="webticker-init" style="width:'+t.parent().width()+"px;height:"+o+'px;"></li>')}r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});t.width(r+200);widthCompare=0;t.children("li").each(function(){widthCompare+=e(this).outerWidth(true)});while(widthCompare>=t.width()){t.width(t.width()+200);widthCompare=0;t.children("li").each(function(){widthCompare+=e(this).outerWidth(true)})}}var t=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(e["transition"]=="")return true;while(t.length)if(t.pop()+"Transition"in e)return true;return false}();var a={init:function(r){r=jQuery.extend({speed:50,direction:"left",moving:true,startEmpty:true,duplicate:false,rssurl:false,hoverpause:true,rssfrequency:0,updatetype:"reset"},r);return this.each(function(){jQuery(this).data("settings",r);var i=jQuery(this);i.addClass("newsticker");var a=i.wrap("<div class='mask'></div>");a.after("<span class='tickeroverlay-left'>&nbsp;</span><span class='tickeroverlay-right'>&nbsp;</span>");var f=i.parent().wrap("<div class='tickercontainer'></div>");u(i);if(r.rssurl){o(r.rssurl,r.type,i);if(r.rssfrequency>0){window.setInterval(function(){o(r.rssurl,r.type,i)},r.rssfrequency*1e3*60)}}if(t){i.css("transition-duration","0s").css(r.direction,"0");s(i,false);i.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(t){if(!i.is(t.target)){return false}s(e(this),true)})}else{n(e(this))}if(r.hoverpause){i.hover(function(){if(t){var n=e(this).css(r.direction);e(this).css("transition-duration","0s").css(r.direction,n)}else jQuery(this).stop()},function(){if(jQuery(this).data("settings").moving){if(t){s(e(this),false)}else{n(i)}}})}})},stop:function(){var n=e(this).data("settings");if(n.moving){n.moving=false;return this.each(function(){if(t){var r=e(this).css(n.direction);e(this).css("transition-duration","0s").css(n.direction,r)}else e(this).stop()})}},cont:function(){var r=e(this).data("settings");if(!r.moving){r.moving=true;return this.each(function(){if(t){s(e(this),false)}else{n(e(this))}})}},update:function(t,n,r,i){n=n||"reset";if(typeof r==="undefined")r=true;if(typeof i==="undefined")i=false;if(typeof t==="string"){t=e(t)}var s=e(this);s.webTicker("stop");var o=e(this).data("settings");if(n=="reset"){s.html(t);s.css(o.direction,"0");u(s)}else if(n=="swap"){s.children("li").addClass("old");for(var a=0;a<t.length;a++){id=e(t[a]).data("update");match=s.find('[data-update="'+id+'"]');if(match.length<1){if(r){if(s.find(".ticker-spacer:first-child").length==0&&s.find(".ticker-spacer").length>0){s.children("li.ticker-spacer").before(t[a])}else{s.append(t[a])}}}else s.find('[data-update="'+id+'"]').replaceWith(t[a]);}s.children("li.webticker-init, li.ticker-spacer").removeClass("old");if(i)s.children("li").remove(".old");stripWidth=0;s.children("li").each(function(){stripWidth+=e(this).outerWidth(true)});s.width(stripWidth+200)}s.webTicker("cont")}};e.fn.webTicker=function(t){if(a[t]){return a[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return a.init.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.webTicker")}}})(jQuery);
// Timeago jQuery plugin ~ URL: http://timeago.yarp.com
(function(e){ if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function r(){var n=i(this);var r=t.settings;if(!isNaN(n.datetime)){if(r.cutoff==0||Math.abs(o(n.datetime))<r.cutoff){e(this).text(s(n.datetime))}}return this}function i(n){n=e(n);if(!n.data("timeago")){n.data("timeago",{datetime:t.datetime(n)});var r=e.trim(n.text());if(t.settings.localeTitle){n.attr("title",n.data("timeago").datetime.toLocaleString())}else if(r.length>0&&!(t.isTime(n)&&n.attr("title"))){n.attr("title",r)}}return n.data("timeago")}function s(e){return t.inWords(o(e))}function o(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){if(t instanceof Date){return s(t)}else if(typeof t==="string"){return s(e.timeago.parse(t))}else if(typeof t==="number"){return s(new Date(t))}else{return s(e.timeago.datetime(t))}};var t=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"",suffixFromNow:"Ahora",inPast:"Hace un momento",seconds:"hace unos segundos",minute:"hace un minuto",minutes:"hace %d minutos",hour:"hace una hora",hours:"hace %d horas",day:"hace un día",days:"hace %d días",month:"hace un mes",months:"hace %d meses",year:"hace un año",years:"hace %d años",wordSeparator:" ",numbers:[]}},inWords:function(t){function l(r,i){var s=e.isFunction(r)?r(i,t):r;var o=n.numbers&&n.numbers[i]||i;return s.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture){throw"timeago allowPast and allowFuture settings can not both be set to false."}var n=this.settings.strings;var r=n.prefixAgo;var i=n.suffixAgo;if(this.settings.allowFuture){if(t<0){r=n.prefixFromNow;i=n.suffixFromNow}}if(!this.settings.allowPast&&t>=0){return this.settings.strings.inPast}var s=Math.abs(t)/1e3;var o=s/60;var u=o/60;var a=u/24;var f=a/365;var c=s<45&&l(n.seconds,Math.round(s))||s<90&&l(n.minute,1)||o<45&&l(n.minutes,Math.round(o))||o<90&&l(n.hour,1)||u<24&&l(n.hours,Math.round(u))||u<42&&l(n.day,1)||a<30&&l(n.days,Math.round(a))||a<45&&l(n.month,1)||a<365&&l(n.months,Math.round(a/30))||f<1.5&&l(n.year,1)||l(n.years,Math.round(f));var h=n.wordSeparator||"";if(n.wordSeparator===undefined){h=" "}return e.trim([r,c,i].join(h))},parse:function(t){var n=e.trim(t);n=n.replace(/\.\d+/,"");n=n.replace(/-/,"/").replace(/-/,"/");n=n.replace(/T/," ").replace(/Z/," UTC");n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");n=n.replace(/([\+\-]\d\d)$/," $100");return new Date(n)},datetime:function(n){var r=t.isTime(n)?e(n).attr("datetime"):e(n).attr("title");return t.parse(r)},isTime:function(t){return e(t).get(0).tagName.toLowerCase()==="time"}});var n={init:function(){var n=e.proxy(r,this);n();var i=t.settings;if(i.refreshMillis>0){this._timeagoInterval=setInterval(n,i.refreshMillis)}},update:function(n){var i=t.parse(n);e(this).data("timeago",{datetime:i});if(t.settings.localeTitle)e(this).attr("title",i.toLocaleString());r.apply(this)},updateFromDOM:function(){e(this).data("timeago",{datetime:t.parse(t.isTime(this)?e(this).attr("datetime"):e(this).attr("title"))});r.apply(this)},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval);this._timeagoInterval=null}}};e.fn.timeago=function(e,t){var r=e?n[e]:n.init;if(!r){throw new Error("Unknown function name '"+e+"' for timeago")}this.each(function(){r.call(this,t)});return this};document.createElement("abbr");document.createElement("time")});
// SelectNav.js - by: https://github.com/lukaszfiszer/selectnav.js
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"-",u=n.label||"Menu",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();$(document).ready(function(){selectnav('nav');selectnav('nav1');});
// Simple Tab JQuery Plugin by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(a){a.fn.simplyTab=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("simplyTab").prepend('<ul class="wrap-tab"></ul>');c.addClass("content-tab").each(function(){a(this).hide();e.find(".wrap-tab").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".wrap-tab a").on("click",function(){var f=a(this).parent().index();a(this).closest(".wrap-tab").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);
$(".ticker .HTML .widget-content").each(function() {
  var b = $(this).find("span").attr("data-no") || "",
  v = $(this).find("span").attr("data-label") || "",
  box = $(this).find("span").attr("data-type") || "";


  if ( box != undefined && box.match('recent')) {
    $.ajax({
      url: "https://www.surf30.net/feeds/posts/default?alt=json-in-script&max-results=" + b,
      type: 'get',
      dataType: "jsonp",
      success: function(e) {
        var u = "";
        var h = '<ul>';
        for (var i = 0; i < e.feed.entry.length; i++) {
          for (var j = 0; j < e.feed.entry[i].link.length; j++) {
            if (e.feed.entry[i].link[j].rel == "alternate") {
              u = e.feed.entry[i].link[j].href;
              break
            }
          }
          var g = e.feed.entry[i].title.$t;
          var s = e.feed.entry[i].category[0].term;
          var c = e.feed.entry[i].content.$t;
          var $c = $('<div>').html(c);
          if (c.indexOf("//www.youtube.com/embed/") > -1) {
            var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
            var k = p
          } else if (c.indexOf("<img") > -1) {
            var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
            var k = q
          } else {
            var k = NO_IMAGE
          }
          h += '<li><div class="tk-thumb"><a class="tk-img" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><h3 class="tyard-title"><a href="' + u + '">' + g + '</a></h3></li>'
        }
        h += '</ul>';
        $(".ticker .widget-content").each(function() {
          $(this).html(h);
          $(this).prev('h2').wrapInner('<span></span>');
          $(this).prev('h2').prepend('<i class="fa fa-fire"></i>');
          $(this).find('ul').webTicker()
        })
      }
    })
  } else if ( box != undefined && box.match('label')) {
    $.ajax({
      url: "https://www.surf30.net/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + b,
      type: 'get',
      dataType: "jsonp",
      success: function(e) {
        var u = "";
        var h = '<ul>';
        for (var i = 0; i < e.feed.entry.length; i++) {
          for (var j = 0; j < e.feed.entry[i].link.length; j++) {
            if (e.feed.entry[i].link[j].rel == "alternate") {
              u = e.feed.entry[i].link[j].href;
              break
            }
          }
          var g = e.feed.entry[i].title.$t;
          var s = e.feed.entry[i].category[0].term;
          var c = e.feed.entry[i].content.$t;
          var $c = $('<div>').html(c);
          if (c.indexOf("//www.youtube.com/embed/") > -1) {
            var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
            var k = p
          } else if (c.indexOf("<img") > -1) {
            var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
            var k = q
          } else {
            var k = NO_IMAGE
          }
          h += '<li><div class="tk-thumb"><a class="tk-img" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><h3 class="tyard-title"><a href="' + u + '">' + g + '</a></h3></li>'
        }
        h += '</ul>';
        $(".ticker .HTML .widget-content").each(function() {
          $(this).html(h);
          $(this).prev('h2').wrapInner('<span></span>');
          $(this).prev('h2').prepend('<i class="fa fa-fire"></i>');
          $(this).find('ul').webTicker()
        })
      }
    })
  }
});
/* Slider Widget
--------------------------------------*/
var slider = $('#blog_featured_posts .widget-content');
var sliderContent = slider.text().trim();
function getPostUrl(entry) {
  for (var k = 0; k < entry.link.length; k++) {
    if (entry.link[k].rel == 'alternate') {
      var posturl = entry.link[k].href;
      return posturl;
    }
  }
}
function getPostPublishDate(entry) {
  var postdate = entry.published.$t,
  day = postdate.split("-")[2].substring(0,2),
  m = postdate.split("-")[1],
  y = postdate.split("-")[0],
  months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  month = months[m-1],
  daystr = day + ' de ' + month + ' de ' + y;
  daystr = ' ';
  return postdate ? daystr : "";
}
function getPostCategory(entry) {
  var post_category = entry.category;
  if(post_category) {
    post_category = entry.category[0].term;
  }
  var category = '<div class="category-wrapper"><a class="category" href="/search/label/'+ post_category +'?max-results=10">'+ post_category +'</a></div>';
  return post_category ? category : "";
}
function Slider(e) {
  var img = new Array(),
  trtd= '',
  numOfEntries = e.feed.entry.length;
  for (var i = 0; i < numOfEntries; i++) {
    var entry = e.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl = getPostUrl(entry);
    var author = entry.author[0].name.$t;
    var daystr = getPostPublishDate(entry);
    var category = getPostCategory(entry);
    var tag = entry.category[0].term;
    var c = e.feed.entry[i].content.$t;
    var $c = $('<div>').html(c);
    if (c.indexOf("//www.youtube.com/embed/") > -1) {
      var p = e.feed.entry[i].media$thumbnail.url;
      var postimage = p
    } else if (c.indexOf("<img") > -1) {
      var q = $c.find('img:first').attr('src');
      var postimage = q.replace('s16000', 's800');
    } else {
      var postimage = NO_IMAGE
    }
    if (i == 0) {
      trtd = trtd + '<div class="blog_featured_first_con"><div class="blog_featured_post first"><a href="' + posturl + '"><div class="blog_contents"><span style="background-color:#5AA628">'+ tag +'</span><span>' + daystr + '</span><h3>' + posttitle + '</h3></div><div class="feat-img" style="background-image:url(' + postimage + ');"></div></a></div>';
    }


    if (i == 1) {
      trtd = trtd + '<div class="blog_featured_post second"><a href="' + posturl + '"><div class="blog_contents"><span style="background-color:#FFA905; ">'+ tag +'</span><span>' + daystr + '</span><h3>' + posttitle + '</h3></div><div class="feat-img" style="background-image:url(' + postimage + ');"></div></a></div></div><div class="clear"></div>';
    }

    if (i == 2) {
      trtd = trtd + '<div class="blog_featured_rest_con"><div class="blog_featured_post third"><a href="' + posturl + '"><div class="blog_contents"><span style="background-color:#20C1DD; ">'+ tag +'</span><span>' + daystr + '</span><h3>' + posttitle + '</h3></div><div class="feat-img" style="background-image:url(' + postimage + ');"></div></a></div>';
    }

    if (i == 3) {
      trtd = trtd + '<div class="blog_featured_post fourth"><a href="' + posturl + '"><div class="blog_contents"><span style="background-color:#F04A3C; ">'+ tag +'</span><span>' + daystr + '</span><h3>' + posttitle + '</h3></div><div class="feat-img" style="background-image:url(' + postimage + ');"></div></a></div>';
    }

    if (i == 4) {
      trtd = trtd + '<div class="blog_featured_post fifth"><a href="' + posturl + '"><div class="blog_contents"><span style="background-color:#e040fb; ">'+ tag +'</span><span>' + daystr + '</span><h3>' + posttitle + '</h3></div><div class="feat-img" style="background-image:url(' + postimage + ');"></div></a></div></div>';
    }
  }
  slider.html('<div class="blog_featured_posts">' + trtd + '</div>');
  $('.blog_featured_posts').find('.feat-img').each(function() {
    $(this).attr('style', function(i, src) {
      return src.replace('/default.jpg', '/mqdefault.jpg')
    }).attr('style', function(i, src) {
      return src.replace('s72-c', 's1600')
    }).attr('style', function(i, src) {
      return src.replace('s320', 's1600')
    }).attr('style', function(i, src) {
      return src.replace('s400', 's1600')
    }).attr('style', function(i, src) {
      return src.replace('s640', 's1600')
    })
  });
} // function Slider(e)
if((sliderContent.toLowerCase().trim() !== 'no') && (sliderContent.toLowerCase() !== '"no"') && (sliderContent !== '')) {
  if(sliderContent !== "[recent]") {
    $.ajax({
      url: "https://www.surf30.net/feeds/posts/default/-/"+ sliderContent +"?alt=json-in-script&max-results=5",
      type: "get",
      dataType: "jsonp",
      success: function (e) {
        Slider(e);
      }
    });
  } else {
    $.ajax({
      url: "https://www.surf30.net/feeds/posts/default?alt=json-in-script&max-results=5",
      type: "get",
      dataType: "jsonp",
      success: function (e) {
        Slider(e);
      }
    });
  }
} else {
  $("#slider").remove();
}
