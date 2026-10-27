// PROTOTYPE, throwaway. Variant switching and the "engaged" state.
// ?variant= holds the variant, so a reload or a shared link shows the
// same one. <html data-engaged> records that the visitor chose to read
// on; the floating bar shows both. ↺ resets the choice.
{
  const variants = [
    { key: "A", name: "Index" },
    { key: "B", name: "Drawer" },
    { key: "C", name: "Curtain" },
    { key: "0", name: "Current page" },
  ];
  const root = document.documentElement;
  const bar = document.querySelector(".proto-switcher");
  const label = bar.querySelector("output");
  const wide = window.matchMedia("(min-width: 60.01rem)");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)");

  const variant = () => root.dataset.variant;
  const engaged = () => root.hasAttribute("data-engaged");
  // A and B hold the pillars back until the visitor engages. C and 0
  // only scroll, so for them "engaged" just means "scrolled".
  const gated = () => wide.matches && ["A", "B"].includes(variant());

  const render = () => {
    const v = variants.find((v) => v.key === variant());
    label.textContent = `${v.key} (${v.name}) · engaged: ${engaged() ? "yes" : "no"}`;
  };

  // site.js measures the pillar list on resize, so a layout change
  // needs one.
  const relayout = () => window.dispatchEvent(new Event("resize"));

  const jump = (hash) => {
    const target = hash && document.querySelector(hash);
    if (!target) return;
    history.replaceState(null, "", location.pathname + location.search + hash);
    target.scrollIntoView();
  };

  const engage = (hash) => {
    if (engaged()) return;
    root.setAttribute("data-engaged", "");
    render();
    // B opens with a 0.5s transition; jump once the columns are set.
    const wait = variant() === "B" && !calm.matches ? 520 : 0;
    setTimeout(() => {
      relayout();
      jump(hash);
    }, wait);
  };

  const reset = () => {
    root.removeAttribute("data-engaged");
    history.replaceState(null, "", location.pathname + location.search);
    window.scrollTo(0, 0);
    relayout();
    render();
  };

  const show = (key) => {
    root.dataset.variant = key;
    const url = new URL(location.href);
    url.searchParams.set("variant", key);
    url.hash = "";
    history.replaceState(null, "", url);
    reset();
  };

  const step = (n) => {
    const i = variants.findIndex((v) => v.key === variant());
    show(variants[(i + n + variants.length) % variants.length].key);
  };

  document.addEventListener("click", (e) => {
    if (!gated() || engaged()) return;
    const link = e.target.closest(".pillar-nav a");
    if (link) {
      e.preventDefault();
      engage(link.hash);
    } else if (variant() === "B" && e.target.closest(".flow")) {
      engage();
    }
  });

  // B opens on a scroll down too. A waits for a pick.
  window.addEventListener(
    "wheel",
    (e) => {
      if (gated() && !engaged() && variant() === "B" && e.deltaY > 0) engage();
    },
    { passive: true },
  );

  window.addEventListener(
    "scroll",
    () => {
      if (gated()) return;
      root.toggleAttribute("data-engaged", window.scrollY > 0);
      render();
    },
    { passive: true },
  );

  document.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea, [contenteditable]")) return;
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      step(e.key === "ArrowLeft" ? -1 : 1);
    } else if (
      gated() &&
      variant() === "B" &&
      ["ArrowDown", "PageDown", " ", "End"].includes(e.key)
    ) {
      engage();
    }
  });

  bar.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;
    if (button.hasAttribute("data-reset")) reset();
    else step(Number(button.dataset.step));
  });

  wide.addEventListener("change", render);

  // Never shown on the live domain, so a stray deploy cannot ship it.
  if (!/(^|\.)matthijshakfoort\.nl$/.test(location.hostname)) {
    bar.hidden = false;
  }

  const requested = (
    new URLSearchParams(location.search).get("variant") || "A"
  ).toUpperCase();
  root.dataset.variant = variants.some((v) => v.key === requested)
    ? requested
    : "A";
  // A link to a pillar counts as a choice.
  if (gated() && location.hash && document.querySelector(location.hash)) {
    engage(location.hash);
  } else {
    relayout();
    render();
  }
}
