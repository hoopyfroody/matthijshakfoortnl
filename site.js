// Behaviour shared by the English and the Dutch page. Every text it shows
// comes from the page's own markup, so this file holds no copy. Each part
// sits in its own block, so nothing leaks into the global scope that
// background.js shares.

// The build-or-buy check: three yes/no questions. One "yes" means the tool
// needs a spec, checks and an owner; three "no"s mean build it quickly.
// The text for each state is a data-text-<state> attribute on the <output>.
{
  document.querySelectorAll("form[data-check]").forEach((form) => {
    const verdict = form.querySelector("output");
    const questions = Array.from(form.querySelectorAll("fieldset"));

    form.addEventListener("change", () => {
      const answers = questions.map((fieldset) => {
        const checked = fieldset.querySelector("input:checked");
        return checked ? checked.value : null;
      });
      let state = "build";
      if (answers.includes("yes")) state = "needs-owner";
      else if (answers.includes(null)) state = "unanswered";
      verdict.dataset.state = state;
      verdict.textContent = verdict.getAttribute(`data-text-${state}`);
    });
  });
}

// The rail marks the pillar that is in view. Sections without a nav link
// (the point of view, the closing section) clear the mark.
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
