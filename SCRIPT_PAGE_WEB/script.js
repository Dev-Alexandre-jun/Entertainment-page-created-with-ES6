const b = document.body;

const STYLE_ROOT = document.createElement("style");
STYLE_ROOT.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

* {
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

:root {
  --theme-dark-: #000;
  --theme-light-: #fff;
}

body[data-theme="dark"] {
  background-color: var(--theme-dark-);
  color: var(--theme-light-);
  transition: 0.8s;
}

@keyframes o {
  0% {
    filter: hue-rotate(180deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.animation {
  animation: o 7s linear infinite;
}

@media (min-width: 720px) and (max-width: 1024px) {
  header {
    min-height: 300px;
    height: 100%;
  }
  nav {
    transform: translate(40px, 30px);
  }
  i {
    font-size: 34px;
    margin-top: 105px;
  }
  canvas {
    width: 50%;
    transform: translate(250px, 150px);
  }
  .div_card {
    font-size: 24px;
  }
  .description_canvas {
    margin-top: 150px;
  }
  footer {
    font-size: 20px;
  }
}

@-moz-document url-prefix() {
  @media (max-width: 500px) {
    html, body {
      width: 100%;
      max-width: auto;
      overflow-x: hidden;
    }
    header {
      max-width: 100%;
      width: auto;
    }
    canvas {
      width: 272px;
      margin-left: 7px;
    }
    .div_card {
      max-width: 100 %;
      width: auto;
      font-size: 14px;
    }
    footer {
      font-size: 8px;
    }
  }
}

@-moz-document url-prefix() {
  @media (min-width: 720px) and (max-width: 1024px) {
    header {
      width: auto;
    }
    nav {
      transform: translate(40px, 30px);
    }
    #data_theme {
      position: relative;
      right: 18px;
    }
    canvas {
      margin-left: -20px;
    }
    .div_card {
      font-size: 28px;
      min-width: 100%;
      width: auto;
    }
    footer {
      font-size: 14px;
      color: red;
    }
  }
}

@media (min-width: 1025px) {
  canvas {
    position: absolute;
    left: 41.6%;
  }
  .div_card {
    font-size: 29px;
  }
  footer {
    font-size: 18px;
  }
}
`;

document.head.appendChild(STYLE_ROOT);

const AJAX_FONT = document.createElement("link");
AJAX_FONT.rel = "stylesheet";
AJAX_FONT.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
document.head.appendChild(AJAX_FONT);

function BROWSER_WEB(element, style) {
  Object.entries(style).forEach(([props, value]) => {
    element.style[props] = value;
  })
};

document.addEventListener("DOMContentLoaded", function () {

  BROWSER_WEB(b, {
    backgroundColor: "var(--theme-dark-);",
    color: "var(--theme-light-);"
  });

  const HEADER_CARD = document.createElement("header");
  BROWSER_WEB(HEADER_CARD, {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    height: "192px",
    width: "100%",
    marginBottom: "140px",
    backgroundImage: `url('../Media/HEADER_PHOTO.jpeg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "cover",
    border: "4px solid #000",
    boxShadow: "2px 2px 18px #000"
  });

  b.appendChild(HEADER_CARD);

  const SUB_TITLE = document.createElement("h1");
  SUB_TITLE.innerText = "DEV - ALEXANDRE";
  SUB_TITLE.className = "animation";

  const SUB_TITLE_BLOCK = {
    visibility: "hidden",
    opacity: "0"
  };

  const SUB_TITLE_NONE = {
    visibility: "visible",
    opacity: "1"
  };

  BROWSER_WEB(SUB_TITLE, {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "900",
    textDecoration: "4px underline transparent",
    webkitTextStroke: "0.4px #000",
    transform: "translateY(-2px)",
    backgroundClip: "text",
    webkitBackgroundClip: "text",
    webkitFillColor: "transparent",
    backgroundImage: "linear-gradient(to left, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
    color: "transparent",
    textShadow: "2px 4px 17px #000"
  });

  HEADER_CARD.appendChild(SUB_TITLE);

  const MENU_USR = document.createElement("button");
  MENU_USR.innerHTML = "";

  const ICON_MENU = document.createElement("i");
  ICON_MENU.className = "fa-solid fa-bars";

  const ICONS_USRS = {
    fontSize: "28px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "none"
  };

  BROWSER_WEB(MENU_USR, ICONS_USRS);
  BROWSER_WEB(MENU_USR, {
    position: "absolute",
    top: "150px",
    left: "9px"
  });

  const NAV_LINKS_WEB = document.createElement("nav");
  BROWSER_WEB(NAV_LINKS_WEB, {
    display: "none",
    width: "150px"
  });

  let toggle = true;

  ICON_MENU.addEventListener("click", () => {
    if (NAV_LINKS_WEB.style.display == "none") {
      BROWSER_WEB(NAV_LINKS_WEB, {
        display: "block",
        position: "relative",
        top: "-34px",
        left: "5px",
        bottom: "3.4pc",
        textShadow: "2px 4px 8px #fff"
      });

      BROWSER_WEB(SUB_TITLE, SUB_TITLE_BLOCK);
      ICON_MENU.classList.replace("fa-bars", "fa-times");
      toggle = false;
    } else {
      BROWSER_WEB(NAV_LINKS_WEB, {
        display: "none"
      });

      BROWSER_WEB(SUB_TITLE, SUB_TITLE_NONE);
      ICON_MENU.classList.replace("fa-times", "fa-bars");
      toggle = true;
    }
  });

  MENU_USR.appendChild(ICON_MENU);
  HEADER_CARD.appendChild(MENU_USR);
  HEADER_CARD.appendChild(NAV_LINKS_WEB);

  const LINKS_MENU = [
    { TEXT: "PÁGINA", HREF: "#" },
    { TEXT: "SOBRE", HREF: "#" },
    { TEXT: "SERVIÇOS", HREF: "#" }
  ];

  LINKS_MENU.forEach((link) => {
    const UL_LINKS_WEB = document.createElement("ul");
    const LI_LINKS_WEB = document.createElement("li");
    const LINKS_WEB = document.createElement("a");

    LINKS_WEB.innerHTML = link.TEXT;
    LINKS_WEB.href = link.HREF;

    const UL_LINKS_WEB_STYLES = {
      listStyle: "none"
    };

    const LINKS_WEB_STYLES = {
      textDecoration: "none",
      fontWeight: "900",
      color: "#fff",
      fontSize: "20px"
    };

    BROWSER_WEB(UL_LINKS_WEB, UL_LINKS_WEB_STYLES);
    BROWSER_WEB(LINKS_WEB, LINKS_WEB_STYLES);

    NAV_LINKS_WEB.appendChild(UL_LINKS_WEB);
    UL_LINKS_WEB.appendChild(LI_LINKS_WEB);
    LI_LINKS_WEB.appendChild(LINKS_WEB);

    switch (true) {
      case window.innerWidth >= 720 && window.innerWidth <= 1024:
        BROWSER_WEB(LINKS_WEB, {
          position: "relative",
          right: "40px",
          bottom: "25px",
          fontSize: "28px"
        });
        break;
      default:
    }
  });

  const DATA_THEME = document.createElement("button");
  DATA_THEME.innerHTML = "";

  BROWSER_WEB(DATA_THEME, ICONS_USRS);
  BROWSER_WEB(DATA_THEME, {
    position: "absolute",
    top: "150px",
    right: "9px"
  });

  const ICON_THEME = document.createElement("i");
  ICON_THEME.id = "data_theme";
  ICON_THEME.className = "fa fa-sun";

  ICON_THEME.addEventListener("click", () => {
    const a = b.getAttribute("data-theme");
    const n = a === "dark" ? "light" : "dark";

    b.setAttribute("data-theme", n);
    ICON_THEME.classList.toggle("fa-moon");
    ICON_THEME.classList.toggle("sun");
  });

  DATA_THEME.appendChild(ICON_THEME);
  HEADER_CARD.appendChild(DATA_THEME);

  const CS = document.createElement("canvas");
  const CX = CS.getContext("2d");

  CS.width = 328;
  CS.height = 220;

  BROWSER_WEB(CS, {
    position: "relative",
    top: "0",
    marginTop: "200px",
    marginBottom: "50px",
    backgroundColor: "#000"
  });

  const URL_PHOTO = [
    "../Media/212054677.jpg",
    "../Media/212351399.jpg"
  ];

  function BROWSER_IMG(src, x, y, w, z) {
    const photo = new Image();
    photo.src = src;

    photo.onload = () => {
      CX.drawImage(photo, x, y, w, z);
    };
  }

  BROWSER_IMG(URL_PHOTO[0], 1, 1, 167.8, 218.7);
  BROWSER_IMG(URL_PHOTO[1], 169, 1, 158, 219);

  b.appendChild(CS);

  const DESCRIPTION_CANVAS = document.createElement("p");
  DESCRIPTION_CANVAS.className = "description_canvas";
  DESCRIPTION_CANVAS.innerText = "RESOLUÇÃO ( 2d )";

  b.appendChild(DESCRIPTION_CANVAS);

  BROWSER_WEB(DESCRIPTION_CANVAS, {
    fontWeight: "900",
    textDecoration: "1px underline #000",
    textAlign: "center",
    transform: "translateY(-55px)"
  });

  const TEXT_CARD = document.createElement("p");
  TEXT_CARD.innerText = "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional).[2][3] Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.[4] É atualmente a principal linguagem para programação client-side em navegadores web.";

  const DIV_CARD_LAYOUT = document.createElement("div");
  const DIV_CARD_TEXT = document.createElement("div");

  DIV_CARD_TEXT.className = "div_card";

  DIV_CARD_LAYOUT.appendChild(DIV_CARD_TEXT);
  DIV_CARD_TEXT.appendChild(TEXT_CARD);
  b.appendChild(DIV_CARD_LAYOUT);

  BROWSER_WEB(DIV_CARD_LAYOUT, {
    position: "relative",
    top: "0",
    marginTop: "20px",
    padding: "20px"
  });

  BROWSER_WEB(DIV_CARD_TEXT, {
    textAlign: "justify",
    borderRadius: "10px",
    fontWeight: "900"
  });

  const FOOT_CARD = document.createElement("footer");

  BROWSER_WEB(FOOT_CARD, {
    position: "relative",
    marginTop: "20px"
  });

  DIV_CARD_LAYOUT.appendChild(FOOT_CARD);

  const FOOT = document.createElement("p");
  FOOT.innerText = "DIREITOS RESERVADOS: DEV ALEXANDRE";

  BROWSER_WEB(FOOT, {
    textAlign: "center",
    fontSize: "9px",
    fontWeight: "900"
  });

  FOOT_CARD.appendChild(FOOT);
});