/* PORTADA DE DIARIO — site behavior
   ES static default; EN swap via [data-en]; the press-run entrance is CSS. */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---------- Bilingual swap ---------- */

  var LANG_KEY = "mf-lang";

  function applyLang(lang) {
    var en = lang === "en";
    document.documentElement.lang = en ? "en" : "es";

    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (!el.hasAttribute("data-es")) {
        el.setAttribute("data-es", el.innerHTML);
      }
      el.innerHTML = en ? el.getAttribute("data-en") : el.getAttribute("data-es");
    });

    document.querySelectorAll("[data-en-ph]").forEach(function (el) {
      if (!el.hasAttribute("data-es-ph")) {
        el.setAttribute("data-es-ph", el.getAttribute("placeholder") || "");
      }
      el.setAttribute(
        "placeholder",
        en ? el.getAttribute("data-en-ph") : el.getAttribute("data-es-ph")
      );
    });

    document.querySelectorAll("[data-en-alt]").forEach(function (el) {
      if (!el.hasAttribute("data-es-alt")) {
        el.setAttribute("data-es-alt", el.getAttribute("alt") || "");
      }
      el.setAttribute(
        "alt",
        en ? el.getAttribute("data-en-alt") : el.getAttribute("data-es-alt")
      );
    });

    document.querySelectorAll("[data-en-label]").forEach(function (el) {
      if (!el.hasAttribute("data-es-label")) {
        el.setAttribute("data-es-label", el.getAttribute("aria-label") || "");
      }
      el.setAttribute(
        "aria-label",
        en ? el.getAttribute("data-en-label") : el.getAttribute("data-es-label")
      );
    });

    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
  }

  var saved = "es";
  try {
    saved = localStorage.getItem(LANG_KEY) || "es";
  } catch (e) {}

  /* Snapshot original ES markup once, before any copy feedback or swap can
     flatten it (innerHTML keeps authored markup such as <strong>). */
  document.querySelectorAll("[data-en]").forEach(function (el) {
    if (!el.hasAttribute("data-es")) {
      el.setAttribute("data-es", el.innerHTML);
    }
  });

  if (saved === "en") applyLang("en");

  document.querySelectorAll(".lang__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.dataset.lang);
    });
  });

  /* ---------- Copy address ---------- */

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var done = function () {
        btn.classList.add("is-copied");
        var label = btn.querySelector("[data-copy-label]");
        if (label) {
          if (!label.hasAttribute("data-orig")) {
            label.setAttribute("data-orig", label.textContent);
          }
          var en = document.documentElement.lang === "en";
          label.textContent = en
            ? label.getAttribute("data-en-copied") || "COPIED"
            : label.getAttribute("data-es-copied") || "COPIADO";
          setTimeout(function () {
            var enNow = document.documentElement.lang === "en";
            label.innerHTML =
              enNow && label.hasAttribute("data-en")
                ? label.getAttribute("data-en")
                : label.getAttribute("data-orig");
            btn.classList.remove("is-copied");
          }, 1800);
        }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
        } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  });

  /* ---------- Mail: mailto with webmail fallback ---------- */

  var MAIL_ADDR = "matifelissia2205@gmail.com";

  function parseMailto(href) {
    var rest = href.slice("mailto:".length);
    var q = rest.indexOf("?");
    var to = q >= 0 ? rest.slice(0, q) : rest;
    var params = {};
    if (q >= 0) {
      rest.slice(q + 1).split("&").forEach(function (pair) {
        var eq = pair.indexOf("=");
        if (eq > 0) {
          var key = pair.slice(0, eq);
          var val = decodeURIComponent(pair.slice(eq + 1).replace(/\+/g, " "));
          params[key.toLowerCase()] = val;
        }
      });
    }
    return { to: to || MAIL_ADDR, subject: params.subject || "", body: params.body || "" };
  }

  function gmailUrl(href) {
    var m = parseMailto(href);
    return (
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      encodeURIComponent(m.to) +
      (m.subject ? "&su=" + encodeURIComponent(m.subject) : "") +
      (m.body ? "&body=" + encodeURIComponent(m.body) : "")
    );
  }

  function openMail(href) {
    window.location.href = href;
    /* If no system mail handler exists, mailto does nothing and the tab
       keeps focus: fall back to Gmail web compose a moment later. */
    setTimeout(function () {
      if (document.hasFocus()) {
        window.location.href = gmailUrl(href);
      }
    }, 1200);
  }

  document.addEventListener("click", function (e) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest ? e.target.closest('a[href^="mailto:"]') : null;
    if (!a) return;
    e.preventDefault();
    openMail(a.getAttribute("href"));
  });

  /* ---------- Payload composer (opens mail client) ---------- */

  var composer = document.getElementById("composer");
  if (composer) {
    composer.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (composer.querySelector("#f-name") || {}).value || "";
      var msg = (composer.querySelector("#f-msg") || {}).value || "";
      var subject =
        (document.documentElement.lang === "en"
          ? "Portfolio contact"
          : "Contacto desde el portafolio") +
        (name ? " — " + name : "");
      var body = (name ? name + "\n\n" : "") + msg;
      var href =
        "mailto:" + MAIL_ADDR + "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      openMail(href);
    });
  }
})();
