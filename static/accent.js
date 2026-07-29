document.addEventListener("DOMContentLoaded", function () {
  var ACCENTS = [
    "",
    "pink",
    "red",
    "orange",
    "green",
    "teal",
    "indigo",
    "purple",
  ];
  var root = document.documentElement;
  var swatches = document.querySelectorAll(".accent-swatch");

  function currentAccent() {
    var stored = null;
    try {
      stored = localStorage.getItem("accent");
    } catch (e) {}
    return ACCENTS.indexOf(stored) === -1 ? "" : stored;
  }

  function applyAccent(accent) {
    if (accent) {
      root.setAttribute("data-accent", accent);
    } else {
      root.removeAttribute("data-accent");
    }
    swatches.forEach(function (btn) {
      btn.setAttribute(
        "aria-pressed",
        btn.getAttribute("data-accent") === accent ? "true" : "false",
      );
    });
  }

  applyAccent(currentAccent());

  swatches.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var accent = btn.getAttribute("data-accent");
      try {
        if (accent) {
          localStorage.setItem("accent", accent);
        } else {
          localStorage.removeItem("accent");
        }
      } catch (e) {}
      applyAccent(accent);
    });
  });

  window.addEventListener("storage", function (event) {
    if (event.key === "accent") {
      applyAccent(currentAccent());
    }
  });
});
