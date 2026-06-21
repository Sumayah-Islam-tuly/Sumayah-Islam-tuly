/* ============================================
   SUMAYAH ISLAM — Portfolio JavaScript
   Scroll triggers, marquee, interactions
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {

  // ============================================
  // 1. SCROLL REVEAL (Intersection Observer)
  // ============================================
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll("[data-animate]").forEach(function (el) {
    observer.observe(el);
  });

  // ============================================
  // 2. STAGGER CHILDREN
  // ============================================
  document.querySelectorAll("[data-stagger]").forEach(function (parent) {
    var children = Array.from(parent.children);
    children.forEach(function (child, i) {
      child.style.animationDelay = (i * 100) + "ms";
      child.setAttribute("data-animate", "");
      observer.observe(child);
    });
  });

  // ============================================
  // 3. NAV SCROLL EFFECT
  // ============================================
  var nav = document.querySelector(".navbar");
  var lastScroll = 0;

  window.addEventListener("scroll", function () {
    var currentScroll = window.scrollY;

    if (currentScroll > 100) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });

  // ============================================
  // 4. MENU TOGGLE
  // ============================================
  var menuBtn = document.querySelector(".menu-btn");
  var menuOverlay = document.querySelector(".menu-overlay");
  var menuOpen = false;

  if (menuBtn && menuOverlay) {
    menuBtn.addEventListener("click", function () {
      menuOpen = !menuOpen;
      menuOverlay.classList.toggle("open");
      document.body.style.overflow = menuOpen ? "hidden" : "";

      // Animate menu button
      var btnText = menuBtn.querySelector(".menu-btn-text");
      if (btnText) {
        btnText.textContent = menuOpen ? "CLOSE" : "MENU";
      }
    });

    // Close menu on link click
    menuOverlay.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuOpen = false;
        menuOverlay.classList.remove("open");
        document.body.style.overflow = "";
        var btnText = menuBtn.querySelector(".menu-btn-text");
        if (btnText) btnText.textContent = "MENU";
      });
    });
  }

  // ============================================
  // 5. ANIMATED COUNTER (Stats)
  // ============================================
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = el.getAttribute("data-count");
        var suffix = el.getAttribute("data-suffix") || "";
        var prefix = el.getAttribute("data-prefix") || "";
        var duration = 2000;
        var start = 0;
        var end = parseInt(target);
        var startTime = null;

        function animate(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          // Ease out cubic
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.floor(eased * end);
          el.textContent = prefix + current + suffix;
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            el.textContent = prefix + end + suffix;
          }
        }

        requestAnimationFrame(animate);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll("[data-count]").forEach(function (el) {
    counterObserver.observe(el);
  });

  // ============================================
  // 6. HORIZONTAL CAROUSEL (Ventures / Gallery)
  // ============================================
  document.querySelectorAll(".carousel-container").forEach(function (container) {
    var strip = container.querySelector(".carousel-strip");
    var prevBtn = container.querySelector(".carousel-prev");
    var nextBtn = container.querySelector(".carousel-next");

    if (strip && nextBtn) {
      nextBtn.addEventListener("click", function () {
        strip.scrollBy({ left: 420, behavior: "smooth" });
      });
    }
    if (strip && prevBtn) {
      prevBtn.addEventListener("click", function () {
        strip.scrollBy({ left: -420, behavior: "smooth" });
      });
    }
  });

  // ============================================
  // 7. CUSTOM CURSOR (Desktop only)
  // ============================================
  if (window.innerWidth > 1024) {
    var cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function (e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    // Enlarge on interactive elements
    document.querySelectorAll("a, button, .project-card, .service-card, .blog-card, .testimonial-card").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        cursor.style.width = "32px";
        cursor.style.height = "32px";
        cursor.style.background = "rgba(168, 85, 247, 0.3)";
      });
      el.addEventListener("mouseleave", function () {
        cursor.style.width = "12px";
        cursor.style.height = "12px";
        cursor.style.background = "rgba(168, 85, 247, 0.6)";
      });
    });
  }

  // ============================================
  // 8. MAGNETIC BUTTONS
  // ============================================
  if (window.innerWidth > 1024) {
    document.querySelectorAll(".magnetic").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = "translate(" + (x * 0.3) + "px, " + (y * 0.3) + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "translate(0, 0)";
        btn.style.transition = "transform 500ms ease";
      });
    });
  }

  // ============================================
  // 9. SMOOTH ANCHOR SCROLL
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#") return;
      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ============================================
  // 10. PARALLAX INTERLUDE BACKGROUND
  // ============================================
  var interlude = document.querySelector(".interlude");
  if (interlude) {
    window.addEventListener("scroll", function () {
      var rect = interlude.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        var scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        var offset = (scrollPercent - 0.5) * 50;
        var bg = interlude.querySelector(".interlude-bg");
        if (bg) {
          bg.style.transform = "translateY(" + offset + "px) scale(1.1)";
        }
      }
    });
  }

  // ============================================
  // 11. TEXT SCRAMBLE ON NAV HOVER
  // ============================================
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.originalText = el.textContent;
    }
    setText(newText) {
      var length = Math.max(this.originalText.length, newText.length);
      var promise = new Promise(function (resolve) {
        var queue = [];
        for (var i = 0; i < length; i++) {
          var from = this.originalText[i] || "";
          var to = newText[i] || "";
          var start = Math.floor(Math.random() * 40);
          var end = start + Math.floor(Math.random() * 40);
          queue.push({ from: from, to: to, start: start, end: end });
        }
        cancelAnimationFrame(this.frameRequest);
        var frame = 0;
        var self = this;
        function update() {
          var output = "";
          var complete = 0;
          for (var i = 0, n = queue.length; i < n; i++) {
            var q = queue[i];
            if (frame >= q.end) {
              complete++;
              output += q.to;
            } else if (frame >= q.start) {
              if (!q.char || Math.random() < 0.28) {
                q.char = self.chars[Math.floor(Math.random() * self.chars.length)];
              }
              output += q.char;
            } else {
              output += q.from;
            }
          }
          self.el.textContent = output;
          if (complete === queue.length) {
            resolve();
          } else {
            self.frameRequest = requestAnimationFrame(update);
            frame++;
          }
        }
        self.frameRequest = requestAnimationFrame(update);
      }.bind(this));
      return promise;
    }
  }

  document.querySelectorAll(".scramble-text").forEach(function (el) {
    var scrambler = new TextScramble(el);
    el.addEventListener("mouseenter", function () {
      scrambler.setText(el.textContent);
    });
  });

  // ============================================
  // 12. FLOATING PARTICLES (Hero)
  // ============================================
  var heroSection = document.querySelector(".hero");
  if (heroSection && window.innerWidth > 768) {
    for (var i = 0; i < 15; i++) {
      var particle = document.createElement("div");
      particle.style.cssText = "position:absolute;width:2px;height:2px;background:rgba(168,85,247,0.3);border-radius:50%;pointer-events:none;left:" +
        Math.random() * 100 + "%;top:" + Math.random() * 100 + "%;animation:float " +
        (3 + Math.random() * 4) + "s ease-in-out infinite;animation-delay:" +
        Math.random() * 3 + "s;opacity:" + (0.2 + Math.random() * 0.3);
      heroSection.appendChild(particle);
    }
  }

});
