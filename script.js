const revealItems = document.querySelectorAll(".reveal");
const autoplayVideos = document.querySelectorAll("video[autoplay]");

if (autoplayVideos.length) {
  const playVideos = () => {
    autoplayVideos.forEach((video) => {
      video.muted = true;
      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => {});
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", playVideos, { once: true });
  } else {
    playVideos();
  }
}

const translations = {
  "Портфолио ELMMY: 3D-дизайн, архитектурная визуализация, моушен дизайн и моделирование.": "ELMMY portfolio: 3D design, architectural visualization, motion design, and modeling.",
  "Архитектурная визуализация ELMMY: интерьеры, экстерьеры, предметное окружение, свет и материалы.": "ELMMY architectural visualization: interiors, exteriors, object environments, lighting, and materials.",
  "CHEERS CHIPS: проект ELMMY. Моделирование, шейдинг и анимация для рекламного 3D-ролика.": "CHEERS CHIPS: an ELMMY project. Modeling, shading, and animation for a commercial 3D video.",
  "BLINK APP: проект ELMMY. Моделирование, шейдинг, анимация, VFX и композ для 3D-визуала приложения.": "BLINK APP: an ELMMY project. Modeling, shading, animation, VFX, and compositing for an app 3D visual.",
  "ELITECH: проект ELMMY. Шейдинг, анимация и рендер для 3D-визуала с архитектурным CGI.": "ELITECH: an ELMMY project. Shading, animation, and rendering for a 3D visual with architectural CGI.",
  "KORZINKA: проект ELMMY. Моделирование, шейдинг и анимация для рекламного 3D-визуала.": "KORZINKA: an ELMMY project. Modeling, shading, and animation for a commercial 3D visual.",
  "ELMMY | Архитектурная визуализация": "ELMMY | Architectural Visualization",
  "К контенту": "Skip to content",
  "Навигация": "Navigation",
  "Основные разделы": "Main sections",
  "ELMMY на главный экран": "ELMMY home",
  "Направления": "Services",
  "Проекты": "Projects",
  "Софт": "Software",
  "Контакты": "Contacts",
  "Привет": "Hi",
  "я Макс": "I'm Max",
  "или же: ELMMY": "also known as: ELMMY",
  "3D-дизайнер с опытом в создании рекламной графики, моделировании, анимации персонажей и продуктовой визуализации.": "3D designer experienced in advertising graphics, modeling, character animation, and product visualization.",
  "Портрет Макса, 3D-дизайнера ELMMY": "Portrait of Max, ELMMY 3D designer",
  "Открыть страницу архитектурной визуализации": "Open the architectural visualization page",
  "Архитектурная визуализация": "Architectural Visualization",
  "Интерьеры, экстерьеры, предметное окружение, свет и материалы.": "Interiors, exteriors, object environments, lighting, and materials.",
  "Моушен дизайн": "Motion Design",
  "Анимация объектов, персонажей, камер и графических сцен.": "Animation of objects, characters, cameras, and graphic scenes.",
  "Моделирование": "Modeling",
  "3D-модели для рекламной графики, визуализации и производства.": "3D models for advertising graphics, visualization, and production.",
  "Кейсы": "Cases",
  "Открыть проект CHEERS CHIPS": "Open the CHEERS CHIPS project",
  "Обложка проекта CHEERS CHIPS": "CHEERS CHIPS project cover",
  "Моделирование, шейдинг и анимация для рекламного 3D-ролика.": "Modeling, shading, and animation for a commercial 3D video.",
  "Открыть проект BLINK APP": "Open the BLINK APP project",
  "Обложка проекта BLINK APP": "BLINK APP project cover",
  "Моделирование, шейдинг, анимация, VFX и композ для 3D-визуала приложения.": "Modeling, shading, animation, VFX, and compositing for an app 3D visual.",
  "Открыть проект ELITECH": "Open the ELITECH project",
  "Обложка проекта ELITECH": "ELITECH project cover",
  "Шейдинг, анимация и рендер для 3D-визуала с архитектурным CGI.": "Shading, animation, and rendering for a 3D visual with architectural CGI.",
  "Открыть проект KORZINKA": "Open the KORZINKA project",
  "Обложка проекта KORZINKA": "KORZINKA project cover",
  "Моделирование, шейдинг и анимация для рекламного 3D-визуала.": "Modeling, shading, and animation for a commercial 3D visual.",
  "Открыть проект Архитектурная визуализация": "Open the Architectural Visualization project",
  "Обложка проекта Архитектурная визуализация": "Architectural Visualization project cover",
  "Работы": "Works",
  "Другие проекты": "Other Projects",
  "Подборка видео-работ": "Selected video works",
  "Интересы": "Interests",
  "Хобби": "Hobbies",
  "Контактная информация": "Contact Information",
  "Грузия / Тбилиси": "Georgia / Tbilisi",
  "Назад": "Back",
  "Видео": "Video",
  "Материалы": "Materials",
  "Проект": "Project",
  "Обязанности на проекте: моделирование, шейдинг, анимация.": "Project responsibilities: modeling, shading, animation.",
  "Обязанности на проекте: моделирование, шейдинг, анимация, VFX, композ.": "Project responsibilities: modeling, shading, animation, VFX, compositing.",
  "Обязанности на проекте: шейдинг, анимация, рендер.": "Project responsibilities: shading, animation, rendering.",
  "Информация о проекте": "Project information",
  "Формат": "Format",
  "Рекламный 3D-ролик": "Commercial 3D video",
  "Рекламный 3D-визуал": "Commercial 3D visual",
  "3D-визуал приложения": "App 3D visual",
  "Архитектурный CGI": "Architectural CGI",
  "Зона работы": "Work Scope",
  "CHEERS CHIPS: анимационный фрагмент 01": "CHEERS CHIPS: animated fragment 01",
  "CHEERS CHIPS: анимационный фрагмент 02": "CHEERS CHIPS: animated fragment 02",
  "CHEERS CHIPS: анимационный фрагмент 03": "CHEERS CHIPS: animated fragment 03",
  "CHEERS CHIPS: анимационный фрагмент 04": "CHEERS CHIPS: animated fragment 04",
  "CHEERS CHIPS: анимационный фрагмент 05": "CHEERS CHIPS: animated fragment 05",
  "CHEERS CHIPS: анимационный фрагмент 06": "CHEERS CHIPS: animated fragment 06",
  "CHEERS CHIPS: анимационный фрагмент 07": "CHEERS CHIPS: animated fragment 07",
  "BLINK APP: анимационный фрагмент 01": "BLINK APP: animated fragment 01",
  "BLINK APP: анимационный фрагмент 02": "BLINK APP: animated fragment 02",
  "BLINK APP: анимационный фрагмент 03": "BLINK APP: animated fragment 03",
  "BLINK APP: анимационный фрагмент 04": "BLINK APP: animated fragment 04",
  "BLINK APP: анимационный фрагмент 05": "BLINK APP: animated fragment 05",
  "ELITECH: анимационный фрагмент 01": "ELITECH: animated fragment 01",
  "ELITECH: анимационный фрагмент 02": "ELITECH: animated fragment 02",
  "ELITECH: анимационный фрагмент 03": "ELITECH: animated fragment 03",
  "ELITECH: анимационный фрагмент 04": "ELITECH: animated fragment 04",
  "ELITECH: анимационный фрагмент 05": "ELITECH: animated fragment 05",
  "ELITECH: анимационный фрагмент 06": "ELITECH: animated fragment 06",
  "KORZINKA: анимационный фрагмент 01": "KORZINKA: animated fragment 01",
  "KORZINKA: анимационный фрагмент 00": "KORZINKA: animated fragment 00",
  "KORZINKA: анимационный фрагмент 02": "KORZINKA: animated fragment 02",
  "KORZINKA: анимационный фрагмент 03": "KORZINKA: animated fragment 03",
  "KORZINKA: анимационный фрагмент 04": "KORZINKA: animated fragment 04",
  "KORZINKA: анимационный фрагмент 05": "KORZINKA: animated fragment 05",
  "KORZINKA: визуальный фрагмент 06": "KORZINKA: visual fragment 06",
  "KORZINKA: анимационный фрагмент 07": "KORZINKA: animated fragment 07",
  "Вид работ": "Work Type",
  "Галерея": "Gallery",
  "Визуализация гостиной": "Living room visualization",
  "Визуализация кухни": "Kitchen visualization",
  "Кухня": "Kitchen",
  "Визуализация мастер спальни": "Master bedroom visualization",
  "Мастер спальня": "Master Bedroom",
  "Визуализация детской комнаты": "Kids room visualization",
  "Детская": "Kids Room",
  "Визуализация кабинета": "Office visualization",
  "Кабинет": "Office",
  "Визуализация прихожей": "Hallway visualization",
  "Прихожая": "Hallway",
  "Визуализация ванной комнаты": "Bathroom visualization",
  "Мастер СУ": "Master Bathroom",
  "Визуализация гостевой спальни": "Guest bedroom visualization",
  "Гостевая спальня": "Guest Bedroom",
  "Открыть фото: Кухня": "Open photo: Kitchen",
  "Открыть фото: Мастер спальня": "Open photo: Master Bedroom",
  "Открыть фото: Детская": "Open photo: Kids Room",
  "Открыть фото: Кабинет": "Open photo: Office",
  "Открыть фото: Прихожая": "Open photo: Hallway",
  "Открыть фото: Мастер СУ": "Open photo: Master Bathroom",
  "Открыть фото: Гостевая спальня": "Open photo: Guest Bedroom",
  "Просмотр галереи": "Gallery viewer",
  "Закрыть просмотр": "Close viewer",
  "Предыдущее изображение": "Previous image",
  "Следующее изображение": "Next image",
  "Открыть фото": "Open photo",
  "Кабинет Олеси": "Office",
  "Гостевой СУ": "Guest Bathroom",
  "Общий СУ": "Shared Bathroom",
  "Гостиная": "Living Room",
  "Кухня 01": "Kitchen 01",
  "Кухня 02": "Kitchen 02",
  "Остров 01": "Island 01",
  "Остров 02": "Island 02",
  "Столовая": "Dining Area",
  "Вид на комод": "Dresser View",
  "Вид на коридор": "Hallway View",
  "Вид на кресло": "Armchair View",
  "Вид на кровать": "Bed View",
  "Вид на ручки": "Hardware Detail",
  "Вид на скамью": "Bench View",
  "Вид на тумбу": "Bedside Table View",
  "Общий вид 1": "General View 1",
  "Общий вид 2": "General View 2",
  "Вид на стол": "Desk View",
  "Крупный план": "Close-up",
  "Коридор и зеркало": "Hallway and Mirror",
  "Коридор": "Hallway",
  "Прямой вид 1": "Front View 1",
  "Прямой вид 2": "Front View 2",
  "Вид на диван": "Sofa View",
  "Вид на стеллажи": "Shelving View",
  "Общий вид на арт": "Art Wall View",
  "Общий вид": "General View",
  "Вид на зеркало": "Mirror View",
  "Ракурс 1": "Angle 1",
  "Ракурс 2": "Angle 2",
  "Ракурс 3": "Angle 3",
  "Ракурс 4": "Angle 4",
  "Вид сбоку": "Side View",
  "Кресло и камин": "Armchair and Fireplace",
  "фото": "photos",
  "Открыть галерею: Кухня": "Open gallery: Kitchen",
  "Открыть галерею: Мастер спальня": "Open gallery: Master Bedroom",
  "Открыть галерею: Детская": "Open gallery: Kids Room",
  "Открыть галерею: Кабинет Олеси": "Open gallery: Office",
  "Открыть галерею: Прихожая": "Open gallery: Hallway",
  "Открыть галерею: Мастер СУ": "Open gallery: Master Bathroom",
  "Открыть галерею: Гостевая спальня": "Open gallery: Guest Bedroom",
  "Открыть галерею: Гостиная": "Open gallery: Living Room",
  "Открыть галерею: Гостевой СУ": "Open gallery: Guest Bathroom",
  "Открыть галерею: Общий СУ": "Open gallery: Shared Bathroom",
  "Просмотр видео": "Video player",
  "Закрыть видео": "Close video",
  "Открыть видео: Wide CGI": "Open video: Wide CGI",
  "Открыть видео: Vertical Motion": "Open video: Vertical Motion",
  "Открыть видео: Auto Visual": "Open video: Auto Visual",
  "Открыть видео: Character Scene": "Open video: Character Scene",
  "Открыть видео: Motion Detail": "Open video: Motion Detail"
};

const reverseTranslations = Object.fromEntries(
  Object.entries(translations).map(([ru, en]) => [en, ru])
);

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const translateValue = (value, language) => {
  const normalized = normalizeText(value);
  const dictionary = language === "en" ? translations : reverseTranslations;
  return dictionary[normalized] || value;
};

const translateTextNode = (node, language) => {
  const translated = translateValue(node.textContent, language);
  if (translated !== node.textContent) node.textContent = translated;
};

const translateAttribute = (element, attribute, language) => {
  const value = element.getAttribute(attribute);
  if (!value) return;
  const translated = translateValue(value, language);
  if (translated !== value) element.setAttribute(attribute, translated);
};

const applyLanguage = (language) => {
  const safeLanguage = language === "en" ? "en" : "ru";
  document.documentElement.lang = safeLanguage;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "SVG", "CANVAS"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return normalizeText(node.textContent) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => translateTextNode(node, safeLanguage));

  document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
    ["aria-label", "alt", "title"].forEach((attribute) => translateAttribute(element, attribute, safeLanguage));
  });

  document.querySelectorAll('meta[name="description"]').forEach((element) => {
    translateAttribute(element, "content", safeLanguage);
  });

  document.title = translateValue(document.title, safeLanguage);

  const toggle = document.querySelector("[data-lang-toggle]");
  const label = document.querySelector("[data-lang-label]");
  if (toggle && label) {
    const nextLanguage = safeLanguage === "ru" ? "en" : "ru";
    label.textContent = nextLanguage.toUpperCase();
    toggle.setAttribute("aria-label", safeLanguage === "ru" ? "Switch language to English" : "Переключить язык на русский");
    toggle.setAttribute("aria-pressed", String(safeLanguage === "en"));
  }
};

const getInitialLanguage = () => {
  const savedLanguage = getStoredLanguage();
  if (savedLanguage === "ru" || savedLanguage === "en") return savedLanguage;

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language || ""];
  return browserLanguages.some((language) => language.toLowerCase().startsWith("ru")) ? "ru" : "en";
};

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("elmmy-language");
  } catch {
    return null;
  }
};

const setStoredLanguage = (language) => {
  try {
    localStorage.setItem("elmmy-language", language);
  } catch {}
};

const languageToggle = document.querySelector("[data-lang-toggle]");
let currentLanguage = getInitialLanguage();
applyLanguage(currentLanguage);

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "ru" ? "en" : "ru";
    setStoredLanguage(currentLanguage);
    applyLanguage(currentLanguage);
  });
}

const lightbox = document.querySelector("[data-lightbox]");
const roomGalleryCards = Array.from(document.querySelectorAll("[data-room-gallery]"));

if (lightbox && roomGalleryCards.length) {
  const lightboxImage = lightbox.querySelector("[data-lightbox-image]");
  const lightboxCaption = lightbox.querySelector("[data-lightbox-caption]");
  const lightboxCount = lightbox.querySelector("[data-lightbox-count]");
  const closeButton = lightbox.querySelector("[data-lightbox-close]");
  const previousButton = lightbox.querySelector("[data-lightbox-previous]");
  const nextButton = lightbox.querySelector("[data-lightbox-next]");
  let activeLightboxItems = [];
  let activeLightboxIndex = 0;
  let lastFocusedElement = null;
  let pointerStartX = null;

  const showLightboxImage = (index) => {
    activeLightboxIndex = (index + activeLightboxItems.length) % activeLightboxItems.length;
    const item = activeLightboxItems[activeLightboxIndex];
    const image = item.querySelector("img");
    const caption = item.querySelector("figcaption");
    const roomTitle = item.closest(".gallery-room")?.querySelector(".gallery-room-heading h3");

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = [roomTitle?.textContent.trim(), caption?.textContent.trim()]
      .filter(Boolean)
      .join(" — ") || image.alt;
    lightboxCount.textContent = `${activeLightboxIndex + 1} / ${activeLightboxItems.length}`;
  };

  const openLightbox = (card) => {
    const source = document.querySelector(card.dataset.roomGallery);
    activeLightboxItems = source ? Array.from(source.querySelectorAll("[data-lightbox-item]")) : [];
    if (!activeLightboxItems.length) return;

    lastFocusedElement = document.activeElement;
    showLightboxImage(0);
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    requestAnimationFrame(() => {
      lightbox.classList.add("is-open");
      closeButton.focus();
    });
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    window.setTimeout(() => {
      lightbox.hidden = true;
      lightboxImage.removeAttribute("src");
      if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
    }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180);
  };

  roomGalleryCards.forEach((card) => {
    card.addEventListener("click", () => openLightbox(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(card);
      }
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", () => showLightboxImage(activeLightboxIndex - 1));
  nextButton.addEventListener("click", () => showLightboxImage(activeLightboxIndex + 1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  lightbox.addEventListener("pointerdown", (event) => {
    pointerStartX = event.clientX;
  });

  lightbox.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) < 60) return;
    showLightboxImage(activeLightboxIndex + (distance < 0 ? 1 : -1));
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showLightboxImage(activeLightboxIndex - 1);
    if (event.key === "ArrowRight") showLightboxImage(activeLightboxIndex + 1);
  });
}

const videoLightbox = document.querySelector("[data-video-lightbox]");
const videoTiles = Array.from(document.querySelectorAll("[data-video-tile]"));

if (videoLightbox && videoTiles.length) {
  const player = videoLightbox.querySelector("[data-video-lightbox-player]");
  const caption = videoLightbox.querySelector("[data-video-lightbox-caption]");
  const closeButton = videoLightbox.querySelector("[data-video-lightbox-close]");
  let lastFocusedVideoTile = null;

  const closeVideoLightbox = () => {
    videoLightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    player.pause();
    window.setTimeout(() => {
      videoLightbox.hidden = true;
      player.removeAttribute("src");
      player.load();
      if (lastFocusedVideoTile instanceof HTMLElement) lastFocusedVideoTile.focus();
    }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180);
  };

  const openVideoLightbox = (tile) => {
    const source = tile.querySelector("video source")?.getAttribute("src");
    const title = tile.querySelector(".video-caption strong")?.textContent.trim();
    if (!source) return;

    lastFocusedVideoTile = document.activeElement;
    player.src = source;
    player.muted = false;
    player.volume = 1;
    caption.textContent = title || "";
    videoLightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    requestAnimationFrame(() => {
      videoLightbox.classList.add("is-open");
      closeButton.focus();
      const playAttempt = player.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => {});
      }
    });
  };

  videoTiles.forEach((tile) => {
    tile.addEventListener("click", () => openVideoLightbox(tile));
    tile.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openVideoLightbox(tile);
      }
    });
  });

  closeButton.addEventListener("click", closeVideoLightbox);
  videoLightbox.addEventListener("click", (event) => {
    if (event.target === videoLightbox) closeVideoLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (!videoLightbox.hidden && event.key === "Escape") closeVideoLightbox();
  });
}

const snapSections = Array.from(document.querySelectorAll(".hero, .case-intro, main > .section"));
const desktopSnapQuery = window.matchMedia("(min-width: 921px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)");
const isArchitecturePage = document.documentElement.classList.contains("architecture-page");
let snapIndex = 0;
let snapIsAnimating = false;

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const sectionTop = (section) => {
  const headerOffset = 86;
  return Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerOffset);
};

const nearestSnapIndex = () => {
  const currentY = window.scrollY;
  return snapSections.reduce((nearest, section, index) => {
    const distance = Math.abs(sectionTop(section) - currentY);
    return distance < nearest.distance ? { index, distance } : nearest;
  }, { index: 0, distance: Infinity }).index;
};

const animateScrollTo = (targetY, duration = 620) => {
  const startY = window.scrollY;
  const delta = targetY - startY;
  const start = performance.now();
  snapIsAnimating = true;

  const frame = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    window.scrollTo(0, startY + delta * easeOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      snapIsAnimating = false;
      snapIndex = nearestSnapIndex();
    }
  };

  requestAnimationFrame(frame);
};

const handleSnapWheel = (event) => {
  if (document.body.classList.contains("lightbox-open")) return;
  if (isArchitecturePage) return;
  if (!desktopSnapQuery.matches || snapSections.length < 2 || Math.abs(event.deltaY) < 1) return;
  event.preventDefault();
  if (snapIsAnimating) return;

  snapIndex = nearestSnapIndex();
  const direction = event.deltaY > 0 ? 1 : -1;
  const nextIndex = Math.min(Math.max(snapIndex + direction, 0), snapSections.length - 1);
  if (nextIndex === snapIndex) return;

  snapIndex = nextIndex;
  animateScrollTo(sectionTop(snapSections[nextIndex]));
};

window.addEventListener("wheel", handleSnapWheel, { passive: false });
window.addEventListener("resize", () => {
  snapIndex = nearestSnapIndex();
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.04 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 35, 140)}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const fragmentShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec3 u_color;

#define FC gl_FragCoord.xy
#define R resolution
#define T (time+660.)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}

void main(){
  vec2 uv=(FC-.5*R)/R.y;
  vec3 col=vec3(1);
  uv.x+=.25;
  uv*=vec2(2,1);

  float n=fbm(uv*.28-vec2(T*.01,0));
  n=noise(uv*3.+n*2.);

  col.r-=fbm(uv+vec2(0,T*.015)+n);
  col.g-=fbm(uv*1.003+vec2(0,T*.015)+n+.003);
  col.b-=fbm(uv*1.006+vec2(0,T*.015)+n+.006);

  col=mix(col, u_color, dot(col,vec3(.21,.71,.07)));
  col=mix(vec3(.08),col,min(time*.1,1.));
  col=clamp(col,.08,1.);
  O=vec4(col,1);
}`;

class SmokeRenderer {
  constructor(canvas, fragmentSource) {
    this.vertexSrc = "#version 300 es\nprecision highp float;\nin vec4 position;\nvoid main(){gl_Position=position;}";
    this.vertices = [-1, 1, -1, -1, 1, 1, 1, -1];
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl2", { alpha: true, antialias: false });
    this.program = null;
    this.buffer = null;
    this.locations = {};
    this.color = [0.87, 0.85, 0.95];

    if (!this.gl) return;
    this.setup(fragmentSource);
    this.init();
  }

  updateColor(newColor) {
    this.color = newColor;
  }

  updateScale() {
    if (!this.gl) return;
    const dpr = Math.min(Math.max(1, window.devicePixelRatio || 1), 2);
    this.canvas.width = Math.floor(window.innerWidth * dpr);
    this.canvas.height = Math.floor(window.innerHeight * dpr);
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  compile(type, source) {
    const shader = this.gl.createShader(type);
    if (!shader) return null;
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.error(`Shader compilation error: ${this.gl.getShaderInfoLog(shader)}`);
      this.gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  setup(fragmentSource) {
    const vs = this.compile(this.gl.VERTEX_SHADER, this.vertexSrc);
    const fs = this.compile(this.gl.FRAGMENT_SHADER, fragmentSource);
    const program = this.gl.createProgram();
    if (!vs || !fs || !program) return;

    this.gl.attachShader(program, vs);
    this.gl.attachShader(program, fs);
    this.gl.linkProgram(program);
    this.gl.deleteShader(vs);
    this.gl.deleteShader(fs);

    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      console.error(`Program linking error: ${this.gl.getProgramInfoLog(program)}`);
      this.gl.deleteProgram(program);
      return;
    }

    this.program = program;
  }

  init() {
    if (!this.program) return;
    this.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.vertices), this.gl.STATIC_DRAW);

    const position = this.gl.getAttribLocation(this.program, "position");
    this.gl.enableVertexAttribArray(position);
    this.gl.vertexAttribPointer(position, 2, this.gl.FLOAT, false, 0, 0);

    this.locations.resolution = this.gl.getUniformLocation(this.program, "resolution");
    this.locations.time = this.gl.getUniformLocation(this.program, "time");
    this.locations.color = this.gl.getUniformLocation(this.program, "u_color");
  }

  render(now = 0) {
    if (!this.gl || !this.program || !this.buffer) return;
    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.useProgram(this.program);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.uniform2f(this.locations.resolution, this.canvas.width, this.canvas.height);
    this.gl.uniform1f(this.locations.time, now * 0.001);
    this.gl.uniform3fv(this.locations.color, this.color);
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }

  reset() {
    if (!this.gl || !this.program) return;
    this.gl.deleteProgram(this.program);
    this.program = null;
  }
}

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : null;
};

const smokeCanvas = document.querySelector(".smoke-background");

if (smokeCanvas && window.getComputedStyle(smokeCanvas).display !== "none") {
  const renderer = new SmokeRenderer(smokeCanvas, fragmentShaderSource);
  const smokeColor = hexToRgb(smokeCanvas.dataset.smokeColor || "#dedaf1");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (smokeColor) renderer.updateColor(smokeColor);

  const handleResize = () => {
    renderer.updateScale();
    renderer.render(0);
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  if (!reduceMotion) {
    const loop = (now) => {
      renderer.render(now);
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }
}
