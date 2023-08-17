(function() {
  var host = &#39;www.themoneytizer.com&#39;;
  var element = document.createElement(&#39;script&#39;);
  var firstScript = document.getElementsByTagName(&#39;script&#39;)[0];
  var url = &#39;https://cmp.quantcast.com&#39;
    .concat(&#39;/choice/&#39;, &#39;6Fv0cGNfc_bw8&#39;, &#39;/&#39;, host, &#39;/choice.js&#39;);
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = &#39;text/javascript&#39;;
  element.src = url;
  firstScript.parentNode.insertBefore(element, firstScript);
  function makeStub() {
    var TCF_LOCATOR_NAME = &#39;__tcfapiLocator&#39;;
    var queue = [];
    var win = window;
    var cmpFrame;
    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);
      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement(&#39;iframe&#39;);
          iframe.style.cssText = &#39;display:none&#39;;
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }
    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;
      if (!args.length) {
        return queue;
      } else if (args[0] === &#39;setGdprApplies&#39;) {
        if (
          args.length &gt; 3 &amp;&amp;
          args[2] === 2 &amp;&amp;
          typeof args[3] === &#39;boolean&#39;
        ) {
          gdprApplies = args[3];
          if (typeof args[2] === &#39;function&#39;) {
            args[2](&#39;set&#39;, true);
          }
        }
      } else if (args[0] === &#39;ping&#39;) {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: &#39;stub&#39;
        };
        if (typeof args[2] === &#39;function&#39;) {
          args[2](retr);
        }
      } else {
        if(args[0] === &#39;init&#39; &amp;&amp; typeof args[3] === &#39;object&#39;) {
          args[3] = { ...args[3], tag_version: &#39;V2&#39; };
        }
        queue.push(args);
      }
    }
    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === &#39;string&#39;;
      var json = {};
      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}
      var payload = json.__tcfapiCall;
      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function(retValue, success) {
            var returnMsg = {
              __tcfapiReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId
              }
            };
            if (msgIsString) {
              returnMsg = JSON.stringify(returnMsg);
            }
            if (event &amp;&amp; event.source &amp;&amp; event.source.postMessage) {
              event.source.postMessage(returnMsg, &#39;*&#39;);
            }
          },
          payload.parameter
        );
      }
    }
    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}
      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener(&#39;message&#39;, postMessageEventHandler, false);
    }
  };
  makeStub();
  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() {
        if (typeof window.__uspapi !== &#39;undefined&#39;) {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };
  var checkIfUspIsReady = function() {
    uspTries++;
    if (window.__uspapi === uspStubFunction &amp;&amp; uspTries &lt; uspTriesLimit) {
      console.warn(&#39;USP is not accessible&#39;);
    } else {
      clearInterval(uspInterval);
    }
  };
  if (typeof window.__uspapi === &#39;undefined&#39;) {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
})();
