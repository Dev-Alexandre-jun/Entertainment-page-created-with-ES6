const b = document.body;

const STYLE_ROOT = document.createElement("style");
STYLE_ROOT.textContent = `
*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

:root {
  --theme-dark-: #000;
  --theme-light-: #fff;
  --page-max: 1100px;
  --gutter: clamp(14px, 4vw, 40px);
  --safe-top: env(safe-area-inset-top, 0px);
  --safe-right: env(safe-area-inset-right, 0px);
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --safe-left: env(safe-area-inset-left, 0px);
}

html {
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  overflow-x: hidden;
}

body {
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: hidden;
  background-color: var(--theme-light-);
  color: var(--theme-dark-);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color 0.8s, color 0.8s;
}

body[data-theme="dark"] {
  background-color: var(--theme-dark-);
  color: var(--theme-light-);
}

img, canvas { max-width: 100%; }

button {
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  touch-action: manipulation;
}

button:focus-visible, a:focus-visible {
  outline: 3px solid #4f5bd5;
  outline-offset: 2px;
}

@keyframes o {
  0% { -webkit-filter: hue-rotate(180deg); filter: hue-rotate(180deg); }
  100% { -webkit-filter: hue-rotate(360deg); filter: hue-rotate(360deg); }
}

.animation { animation: o 7s linear infinite; }

header {
  position: relative;
  width: 100%;
  height: clamp(170px, 32vw, 380px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 4px solid #000;
  box-shadow: 2px 2px 18px #000;
  padding-top: var(--safe-top);
  display: flex;
  align-items: center;
  justify-content: center;
}

header h1 {
  text-align: center;
  font-size: clamp(20px, 5.5vw, 56px);
  font-weight: 900;
  padding: 0 64px;
  line-height: 1.15;
  -webkit-text-stroke: 0.4px #000;
  background-image: linear-gradient(to left, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  transition: opacity .3s, visibility .3s;
}

header h1.hidden { visibility: hidden; opacity: 0; }

.icon_btn {
  position: absolute;
  bottom: 10px;
  min-width: 44px;
  min-height: 44px;
  font-size: clamp(24px, 4vw, 34px);
  background: transparent;
  color: #fff;
  border: none;
  text-shadow: 0 0 6px #000, 0 0 12px #000;
}

#btn_menu { left: calc(9px + var(--safe-left)); }

#btn_theme { right: calc(9px + var(--safe-right)); }

nav {
  display: none;
  position: absolute;
  left: calc(14px + var(--safe-left));
  top: calc(14px + var(--safe-top));
  z-index: 10;
}

nav.open { display: block; }

nav ul { list-style: none; }

nav li { margin-bottom: 6px; }

nav a {
  display: inline-block;
  padding: 6px 4px;
  text-decoration: none;
  font-weight: 900;
  color: #fff;
  font-size: clamp(18px, 2.6vw, 26px);
  text-shadow: 0 0 6px #000, 0 0 12px #000;
}

main {
  width: 100%;
  max-width: var(--page-max);
  margin: 0 auto;
  padding: clamp(20px, 4vw, 48px) calc(var(--gutter) + var(--safe-right)) 0 calc(var(--gutter) + var(--safe-left));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(20px, 3vw, 36px);
}

.canvas_photos {
  display: block;
  width: 100%;
  max-width: 420px;
  height: auto;
  aspect-ratio: 320 / 220;
  background-color: #000;
}

.description_canvas {
  font-weight: 900;
  text-decoration: underline;
  text-align: center;
  font-size: clamp(14px, 2vw, 20px);
}

.div_card {
  width: 100%;
  text-align: justify;
  -webkit-hyphens: auto;
  hyphens: auto;
  border-radius: 10px;
  font-weight: 900;
  font-size: clamp(14px, 1.2vw + 10px, 22px);
  line-height: 1.55;
  overflow-wrap: anywhere;
}

.game_box {
  width: 100%;
  max-width: 760px;
  padding: clamp(16px, 4vw, 48px) 12px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 4px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.game_canvas {
  display: block;
  width: 100%;
  max-width: 460px;
  height: auto;
  aspect-ratio: 310 / 300;
  border: 2px solid #000;
  background-color: #fff;
  touch-action: none;
}

.dpad {
  display: grid;
  grid-template-columns: repeat(3, clamp(52px, 14vw, 64px));
  grid-template-rows: repeat(3, clamp(52px, 14vw, 64px));
  gap: 6px;
}

.dpad button {
  border-radius: 8px;
  outline: solid 0.5px #6610f2;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 4px 8px 11px #000;
  background: linear-gradient(#000, #007bff);
  color: #fff;
  border: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}

.dpad button:active { -webkit-filter: brightness(1.4); filter: brightness(1.4); }

#TOP { grid-column: 2; grid-row: 1; }
#RIGHT { grid-column: 1; grid-row: 2; }
#BOTTOM { grid-column: 2; grid-row: 3; }
#LEFT { grid-column: 3; grid-row: 2; }

footer {
  width: 100%;
  max-width: var(--page-max);
  margin: 0 auto;
  padding: clamp(20px, 3vw, 36px) var(--gutter) calc(20px + var(--safe-bottom));
}

footer p {
  text-align: center;
  font-weight: 900;
  font-size: clamp(10px, 1.4vw, 18px);
}

@media (min-width: 720px) {
  main { gap: 40px; }
  .canvas_photos { max-width: 480px; }
}

@media (min-width: 1025px) {
  .div_card { font-size: 22px; }
  .game_box { flex-direction: row; justify-content: center; gap: 40px; }
  .game_canvas { width: 460px; }
}

@media (max-height: 480px) and (orientation: landscape) {
  header { height: 150px; }
}

@media (min-width: 1800px) {
  :root { --page-max: 1300px; }
}

@media (prefers-reduced-motion: reduce) {
  .animation { animation: none; }
  body { transition: none; }
}
`;

document.head.appendChild(STYLE_ROOT);

const PRECONNECT = document.createElement("link");
PRECONNECT.rel = "preconnect";
PRECONNECT.href = "https://fonts.gstatic.com";
PRECONNECT.crossOrigin = "anonymous";
document.head.appendChild(PRECONNECT);

const GOOGLE_FONT = document.createElement("link");
GOOGLE_FONT.rel = "stylesheet";
GOOGLE_FONT.href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap";
document.head.appendChild(GOOGLE_FONT);

const AJAX_FONT = document.createElement("link");
AJAX_FONT.rel = "stylesheet";
AJAX_FONT.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
document.head.appendChild(AJAX_FONT);

function BROWSER_WEB(element, style) {
  Object.entries(style).forEach(([props, value]) => {
    element.style[props] = value;
  });
};

document.addEventListener("DOMContentLoaded", function () {

  const HEADER_CARD = document.createElement("header");
  BROWSER_WEB(HEADER_CARD, {
    backgroundImage: `url('../Media/HEADER_PHOTO.jpeg')`
  });
  b.appendChild(HEADER_CARD);

  const SUB_TITLE = document.createElement("h1");
  SUB_TITLE.textContent = "DEV - ALEXANDRE";
  SUB_TITLE.className = "animation";
  HEADER_CARD.appendChild(SUB_TITLE);

  const MENU_USR = document.createElement("button");
  MENU_USR.id = "btn_menu";
  MENU_USR.className = "icon_btn";
  MENU_USR.type = "button";
  MENU_USR.setAttribute("aria-label", "Abrir menu");
  MENU_USR.setAttribute("aria-expanded", "false");

  const ICON_MENU = document.createElement("i");
  ICON_MENU.className = "fa-solid fa-bars";
  MENU_USR.appendChild(ICON_MENU);

  const NAV_LINKS_WEB = document.createElement("nav");

  MENU_USR.addEventListener("click", () => {
    const open = NAV_LINKS_WEB.classList.toggle("open");
    SUB_TITLE.classList.toggle("hidden", open);
    ICON_MENU.classList.toggle("fa-bars", !open);
    ICON_MENU.classList.toggle("fa-times", open);
    MENU_USR.setAttribute("aria-expanded", String(open));
    MENU_USR.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });

  HEADER_CARD.appendChild(MENU_USR);
  HEADER_CARD.appendChild(NAV_LINKS_WEB);

  const LINKS_MENU = [
    { TEXT: "PÁGINA", HREF: "#" },
    { TEXT: "SOBRE", HREF: "#" },
    { TEXT: "SERVIÇOS", HREF: "#" }
  ];

  const UL = document.createElement("ul");
  LINKS_MENU.forEach((link) => {
    const LI = document.createElement("li");
    const A = document.createElement("a");
    A.textContent = link.TEXT;
    A.href = link.HREF;
    LI.appendChild(A);
    UL.appendChild(LI);
  });
  NAV_LINKS_WEB.appendChild(UL);

  const DATA_THEME = document.createElement("button");
  DATA_THEME.id = "btn_theme";
  DATA_THEME.className = "icon_btn";
  DATA_THEME.type = "button";
  DATA_THEME.setAttribute("aria-label", "Alternar tema claro/escuro");

  const ICON_THEME = document.createElement("i");
  ICON_THEME.id = "data_theme";
  ICON_THEME.className = "fa fa-sun";
  DATA_THEME.appendChild(ICON_THEME);

  DATA_THEME.addEventListener("click", () => {
    const dark = b.getAttribute("data-theme") !== "dark";
    b.setAttribute("data-theme", dark ? "dark" : "light");
    ICON_THEME.classList.toggle("fa-sun", !dark);
    ICON_THEME.classList.toggle("fa-moon", dark);
  });
  HEADER_CARD.appendChild(DATA_THEME);

  const MAIN = document.createElement("main");
  b.appendChild(MAIN);

  const CS = document.createElement("canvas");
  CS.className = "canvas_photos";
  const CX = CS.getContext("2d");
  CS.width = 320;
  CS.height = 220;
  CS.setAttribute("role", "img");
  CS.setAttribute("aria-label", "Duas fotos lado a lado");

  const URL_PHOTO = [
    "../Media/212054677.jpg",
    "../Media/212351399.jpg"
  ];

  function BROWSER_IMG(src, x, y, w, z) {
    const photo = new Image();
    photo.onload = () => {
      CX.drawImage(photo, x, y, w, z);
    };
    photo.src = src;
  }

  BROWSER_IMG(URL_PHOTO[0], 1, 1, 167.8, 218.7);
  BROWSER_IMG(URL_PHOTO[1], 169, 1, 158, 219);
  MAIN.appendChild(CS);

  const DESCRIPTION_CANVAS = document.createElement("p");
  DESCRIPTION_CANVAS.className = "description_canvas";
  DESCRIPTION_CANVAS.textContent = "RESOLUÇÃO ( 2d )";
  MAIN.appendChild(DESCRIPTION_CANVAS);

  const DIV_CARD_TEXT = document.createElement("div");
  const TEXT_CARD = document.createElement("p");

  TEXT_CARD.textContent = "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional). Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo. É atualmente a principal linguagem para programação client-side em navegadores web.";

  DIV_CARD_TEXT.className = "div_card";
  DIV_CARD_TEXT.appendChild(TEXT_CARD);
  MAIN.appendChild(DIV_CARD_TEXT);

  const PHOTO = [
    "../Media/81737283733.jpg",
    "../Media/8273828328.jpg",
    "../Media/103768283.jpg",
    "../Media/19736492737923.jpg"
  ];

  const GAME = document.createElement("canvas");
  GAME.className = "game_canvas";
  const CTX = GAME.getContext("2d");
  GAME.width = 310;
  GAME.height = 300;
  GAME.setAttribute("role", "img");
  GAME.setAttribute("aria-label", "Área do jogo");

  const IMG_P = 100;
  const IMG_VX = 1;
  const IMG_VY = 1;
  let IMG_X = 100;
  let IMG_Y = 100;
  let IMG_MOV_X = 0;
  let IMG_MOV_Y = 0;

  const PSNG = new Image();
  PSNG.src = PHOTO[2];

  function animationGame() {
    CTX.clearRect(0, 0, GAME.width, GAME.height);
    if (PSNG.complete && PSNG.naturalWidth) {
      CTX.drawImage(PSNG, IMG_X, IMG_Y, IMG_P, IMG_P);
    };

    IMG_X += IMG_MOV_X;
    IMG_Y += IMG_MOV_Y;

    if (IMG_X < 0) IMG_X = 0;
    if (IMG_X + IMG_P > GAME.width) IMG_X = GAME.width - IMG_P;
    if (IMG_Y < 0) IMG_Y = 0;
    if (IMG_Y + IMG_P > GAME.height) IMG_Y = GAME.height - IMG_P;

    requestAnimationFrame(animationGame);
  };
  animationGame();

  const MOVES = {
    TOP:    { x: 0,       y: -IMG_VY, img: 0, label: "Cima",     value: "&uarr;" },
    RIGHT:  { x: -IMG_VX, y: 0,       img: 1, label: "Esquerda", value: "&larr;" },
    LEFT:   { x: IMG_VX,  y: 0,       img: 2, label: "Direita",  value: "&rarr;" },
    BOTTOM: { x: 0,       y: IMG_VY,  img: 3, label: "Baixo",    value: "&darr;" }
  };

  function move(id) {
    const m = MOVES[id];
    IMG_MOV_X = m.x;
    IMG_MOV_Y = m.y;
    PSNG.src = PHOTO[m.img];
  };

  const CONTAINER_BTN_GAME = document.createElement("div");
  CONTAINER_BTN_GAME.className = "dpad";

  Object.keys(MOVES).forEach((id) => {
    const BTN = document.createElement("button");
    BTN.type = "button";
    BTN.id = id;
    BTN.innerHTML = MOVES[id].value;
    BTN.setAttribute("aria-label", MOVES[id].label);
    BTN.addEventListener("click", () => move(id));
    CONTAINER_BTN_GAME.appendChild(BTN);
  });

  const KEYS = {
    ArrowUp: "TOP", ArrowDown: "BOTTOM", ArrowLeft: "RIGHT", ArrowRight: "LEFT",
    w: "TOP", s: "BOTTOM", a: "RIGHT", d: "LEFT"
  };
  document.addEventListener("keydown", (e) => {
    const id = KEYS[e.key];
    if (!id) return;
    e.preventDefault();
    move(id);
  });

  const DIV_GAME = document.createElement("div");
  DIV_GAME.className = "game_box";
  BROWSER_WEB(DIV_GAME, {
    backgroundImage: `url('../Media/9274520376283.jpg')`
  });
  DIV_GAME.appendChild(GAME);
  DIV_GAME.appendChild(CONTAINER_BTN_GAME);
  MAIN.appendChild(DIV_GAME);

  const FOOT_CARD = document.createElement("footer");
  const FOOT = document.createElement("p");
  FOOT.textContent = "DIREITOS RESERVADOS: DEV ALEXANDRE";
  FOOT_CARD.appendChild(FOOT);
  b.appendChild(FOOT_CARD);
});
