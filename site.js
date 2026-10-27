// Behaviour shared by the English and the Dutch page. Every text it shows
// comes from the page's own markup, so this file holds no copy. Each part
// sits in its own block, so nothing leaks into the global scope that
// background.js shares.

// The build-or-buy check: three yes/no questions. One "yes" means the tool
// needs a spec, checks and an owner; three "no"s mean build it quickly.
// The text for each state is a data-text-<state> attribute on the <output>.
// A question can also hold a .outcome line, whose data-text-yes shows while
// that question is answered "yes".
{
  document.querySelectorAll("form[data-check]").forEach((form) => {
    const verdict = form.querySelector("output");
    const questions = Array.from(form.querySelectorAll("fieldset"));

    form.addEventListener("change", () => {
      const answers = questions.map((fieldset) => {
        const checked = fieldset.querySelector("input:checked");
        const answer = checked ? checked.value : null;
        const outcome = fieldset.querySelector(".outcome");
        if (outcome) {
          outcome.textContent =
            answer === "yes" ? outcome.getAttribute("data-text-yes") : "";
        }
        return answer;
      });
      let state = "build";
      if (answers.includes("yes")) state = "needs-owner";
      else if (answers.includes(null)) state = "unanswered";
      verdict.dataset.state = state;
      verdict.textContent = verdict.getAttribute(`data-text-${state}`);
    });
  });
}

// On wide screens the pillar nav starts as a list at the top of the
// flow. Once the list starts to leave the top of the viewport it becomes
// the bar that sticks there (data-stuck), and back when it returns. The
// CSS gives the section under the nav the height the nav gives up, from
// the list height measured here (--list-height), so nothing under it
// jumps. The question and the answers glide between the two.
{
  const nav = document.querySelector(".pillar-nav");
  const wide = window.matchMedia("(min-width: 60.01rem)");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (nav && nav.nextElementSibling) {
    // Marks where the list starts, which a stuck bar no longer shows.
    const marker = document.createElement("div");
    nav.before(marker);
    const parts = [nav.querySelector("h2"), ...nav.querySelectorAll("a")];

    const setStuck = (stuck, animate) => {
      if (nav.hasAttribute("data-stuck") === stuck) return;
      const from = parts.map((el) => el.getBoundingClientRect());
      const sizes = parts.map((el) => parseFloat(getComputedStyle(el).fontSize));
      nav.toggleAttribute("data-stuck", stuck);

      if (!animate || calm.matches) return;
      parts.forEach((el, i) => {
        const to = el.getBoundingClientRect();
        const scale = sizes[i] / parseFloat(getComputedStyle(el).fontSize);
        const dx = from[i].left - to.left;
        const dy = from[i].top - to.top;
        el.animate(
          [
            { transform: `translate(${dx}px, ${dy}px) scale(${scale})` },
            { transform: "none" },
          ],
          { duration: 260, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)" },
        );
      });
    };

    // Only the list has the height to measure, so measure while it is one.
    const measure = () => {
      nav.parentElement.style.setProperty(
        "--list-height",
        `${nav.getBoundingClientRect().height}px`,
      );
    };

    const update = (animate) =>
      setStuck(wide.matches && marker.getBoundingClientRect().top < 0, animate);

    let queued = false;
    window.addEventListener(
      "scroll",
      () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(() => {
          queued = false;
          update(true);
        });
      },
      { passive: true },
    );
    // A new width changes the list height, so measure it again as a list.
    window.addEventListener("resize", () => {
      setStuck(false, false);
      measure();
      update(false);
    });
    measure();
    update(false);
  }
}

// The nav marks the pillar that is in view. Sections without a nav link
// (the closing section) clear the mark.
{
  const navLinks = Array.from(document.querySelectorAll(".pillar-nav a"));
  if (navLinks.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            if (link.hash === `#${entry.target.id}`) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    document
      .querySelectorAll(".flow > section")
      .forEach((section) => observer.observe(section));
  }
}
