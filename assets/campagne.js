/* Inestimable et déductible (prototype) : simulateur + compte à rebours.
   Aucun appel réseau, aucun stockage, aucune insertion HTML : uniquement textContent.
   Taux 2026 (art. 200 CGI, BOFiP BOI-IR-RICI-250-30) : 75 % dans la limite de 2 000 € de dons,
   66 % au-delà et pour l'eau et l'éducation, dans la limite de 20 % du revenu imposable. */
(function () {
  "use strict";
  var PLAFOND_75 = 2000, TAUX_75 = 0.75, TAUX_66 = 0.66, LIMITE_REVENU = 0.20, MAX = 1000000;
  var FIN = new Date(2027, 0, 1, 0, 0, 0); // 1er janvier 2027 à 0 h, heure locale
  var PAGES = ["faire-un-don.html#don", "marseille.html#don-widget", "parrainer-un-orphelin.html#don-widget", "construire-un-puits.html#don-widget", "education.html#don-widget"];
  var fmt = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function $(id) { return document.getElementById(id); }
  function num(el, min, max) {
    var raw = String(el.value || "").replace(/\s/g, "").replace(",", ".");
    if (raw === "") return null;
    var v = Number(raw);
    if (!isFinite(v)) return NaN;
    return Math.min(Math.max(v, min), max);
  }
  function arrondi(v) { return Math.round(v * 100) / 100; }
  function li(txt) { var e = document.createElement("li"); e.textContent = txt; return e; }

  function calcul() {
    var m = num($("montant"), 0, MAX), err = $("err");
    var ok = m !== null && !isNaN(m) && m >= 1;
    $("montant").setAttribute("aria-invalid", ok ? "false" : "true");
    err.hidden = ok;
    if (!ok) return;
    var opt = $("projet").options[$("projet").selectedIndex];
    var taux75 = opt.value === "75";
    var deja = num($("deja"), 0, MAX) || 0;
    var revenu = num($("revenu"), 0, 100000000);

    var p75 = taux75 ? Math.min(m, Math.max(0, PLAFOND_75 - deja)) : 0;
    var p66 = m - p75, report = 0;
    if (revenu && revenu > 0) {
      var lim = LIMITE_REVENU * revenu;
      if (p66 > lim) { report = p66 - lim; p66 = lim; }
    }
    var red = arrondi(p75 * TAUX_75 + p66 * TAUX_66);
    $("r-cout").textContent = fmt.format(arrondi(m - red));
    $("r-red").textContent = fmt.format(red);

    var d = $("r-detail");
    while (d.firstChild) d.removeChild(d.firstChild);
    if (p75 > 0) d.appendChild(li(fmt.format(p75) + " à 75 % : " + fmt.format(arrondi(p75 * TAUX_75)) + " de réduction"));
    if (p66 > 0) d.appendChild(li(fmt.format(arrondi(p66)) + " à 66 % : " + fmt.format(arrondi(p66 * TAUX_66)) + " de réduction"));
    if (report > 0) d.appendChild(li(fmt.format(arrondi(report)) + " au-delà de 20 % de votre revenu : reportable sur les 5 années suivantes"));
    if (taux75 && deja >= PLAFOND_75) d.appendChild(li("Plafond de 2 000 € à 75 % déjà atteint : votre don est compté à 66 %."));

    var url = opt.getAttribute("data-url") || "";
    if (PAGES.indexOf(url) !== -1) $("r-cta").setAttribute("href", url); // liste blanche des pages de don du site
  }

  function chips() {
    var bs = document.querySelectorAll(".c-chips button");
    var v = String(num($("montant"), 0, MAX));
    for (var i = 0; i < bs.length; i++) bs[i].setAttribute("aria-pressed", bs[i].getAttribute("data-v") === v ? "true" : "false");
  }

  function rebours() {
    var n = $("cd-num"), t = $("cd-txt");
    if (!n || !t) return;
    var maintenant = new Date(), ms = FIN - maintenant;
    if (ms <= 0) { n.textContent = "Campagne terminée"; t.textContent = "Vos dons comptent désormais pour l’année 2027. Merci !"; return; }
    var j = Math.ceil(ms / 86400000); // jours restants, aujourd'hui compris
    if (j > 1) { n.textContent = "Plus que " + j + " jours"; t.textContent = "jusqu’au 31 décembre minuit pour réduire votre impôt 2026."; }
    else { var h = Math.max(1, Math.ceil(ms / 3600000)); n.textContent = "Dernier jour"; t.textContent = "Plus que " + h + " h pour réduire votre impôt 2026."; }
  }

  function init() {
    var f = $("simu");
    if (f) {
      f.addEventListener("input", function () { calcul(); chips(); });
      f.addEventListener("change", calcul);
      f.addEventListener("submit", function (e) { e.preventDefault(); });
      var bs = document.querySelectorAll(".c-chips button");
      for (var i = 0; i < bs.length; i++) bs[i].addEventListener("click", function () {
        $("montant").value = this.getAttribute("data-v"); calcul(); chips();
      });
      calcul(); chips();
    }
    rebours();
    setInterval(rebours, 60000);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
