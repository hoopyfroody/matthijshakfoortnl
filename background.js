const GRID_STEP_REM = 5;
const TILE_SIZE_REM = 80;

const tetrominoes = {
  I: [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  J: [
    [1, 0],
    [1, 1],
    [1, 2],
    [0, 2],
  ],
  L: [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
  O: [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
  ],
  S: [
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
  ],
  T: [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
  ],
  Z: [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
};

const placements = [
  ["O", 2, 3],
  ["T", 8, 2],
  ["L", 13, 4],
  ["S", 4, 8],
  ["I", 10, 11],
  ["J", 6, 13],
  ["Z", 13, 13],
];

const parallax = document.createElement("div");
const background = document.createElement("div");
const field = document.createElement("div");
parallax.className = "tetris-parallax";
parallax.setAttribute("aria-hidden", "true");
background.className = "tetris-background";
field.className = "tetromino-field";

for (let tileRow = -1; tileRow <= 1; tileRow += 1) {
  for (let tileColumn = -1; tileColumn <= 1; tileColumn += 1) {
    const tile = document.createElement("div");
    tile.className = "tetromino-tile";
    tile.style.setProperty("--tile-left", `${tileColumn * TILE_SIZE_REM}rem`);
    tile.style.setProperty("--tile-top", `${tileRow * TILE_SIZE_REM}rem`);

    placements.forEach(([shape, column, row], index) => {
      const piece = document.createElement("div");
      piece.className = "tetromino-piece";
      piece.style.setProperty("--left", `${column * GRID_STEP_REM}rem`);
      piece.style.setProperty("--top", `${row * GRID_STEP_REM}rem`);
      piece.style.setProperty("--piece-opacity", `${0.3 + (index % 3) * 0.08}`);

      tetrominoes[shape].forEach(([cellColumn, cellRow]) => {
        const cell = document.createElement("span");
        cell.className = "tetromino-cell";
        cell.style.setProperty(
          "--cell-left",
          `${cellColumn * GRID_STEP_REM}rem`,
        );
        cell.style.setProperty("--cell-top", `${cellRow * GRID_STEP_REM}rem`);
        piece.append(cell);
      });

      tile.append(piece);
    });

    field.append(tile);
  }
}

background.append(field);
parallax.append(background);
document.body.prepend(parallax);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let parallaxFrameRequested = false;

function updateParallax() {
  parallaxFrameRequested = false;
  if (reducedMotion.matches) return;

  const scrollRange =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollRange > 0 ? window.scrollY / scrollRange : 0;
  parallax.style.setProperty("--parallax-y", `${12 - progress * 24}vh`);
}

function requestParallaxUpdate() {
  if (parallaxFrameRequested || reducedMotion.matches) return;
  parallaxFrameRequested = true;
  window.requestAnimationFrame(updateParallax);
}

reducedMotion.addEventListener("change", () => {
  parallax.style.removeProperty("--parallax-y");
  requestParallaxUpdate();
});
window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
window.addEventListener("resize", requestParallaxUpdate);
updateParallax();
