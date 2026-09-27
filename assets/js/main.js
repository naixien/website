/* Naixien site interactions
 *
 * Waitlist forms use mailto by default.
 * To swap to Formspree (or similar free endpoint) later:
 *   1. Create a form at formspree.io (or another free form backend)
 *   2. Set data-form-endpoint="https://formspree.io/f/YOUR_ID" on the <form>
 *   3. Remove or leave data-form-mode="mailto" unset
 * No paid services are required for the current mailto flow.
 */

(function () {
  "use strict";

  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal, .score-mock").forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal, .score-mock").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  function buildMailto(form) {
    var to = form.getAttribute("data-mailto") || "hello@naixien.com";
    var subject = form.getAttribute("data-subject") || "Naixien waitlist interest";
    var fields = ["name", "email", "business", "country", "interest", "message"];
    var lines = ["Naixien waitlist submission", ""];

    fields.forEach(function (name) {
      var field = form.elements.namedItem(name);
      if (!field) return;
      var value = (field.value || "").trim();
      if (!value) return;
      var label = field.getAttribute("data-label") || name;
      lines.push(label + ": " + value);
    });

    return (
      "mailto:" +
      to +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(lines.join("\n"))
    );
  }

  document.querySelectorAll("form[data-waitlist]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var status = form.querySelector(".form-status");
      var endpoint = form.getAttribute("data-form-endpoint");
      var mode = form.getAttribute("data-form-mode") || (endpoint ? "fetch" : "mailto");

      if (mode === "fetch" && endpoint) {
        var data = new FormData(form);
        fetch(endpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        })
          .then(function (res) {
            if (!res.ok) throw new Error("Submit failed");
            form.reset();
            if (status) status.textContent = "Thanks. You are on the list.";
          })
          .catch(function () {
            if (status) {
              status.textContent =
                "We could not submit online. Opening your email client instead.";
            }
            window.location.href = buildMailto(form);
          });
        return;
      }

      // Default: mailto placeholder (free, no backend)
      if (status) {
        status.textContent = "Opening your email client to complete the request.";
      }
      window.location.href = buildMailto(form);
    });
  });
})();
