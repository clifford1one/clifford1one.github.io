// ── AUDIO ────────────────────────────────────────────────────────────────────
let audioCtx = null;
function getCtx() {
  if (!audioCtx)
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function beep(freq, type, duration, vol = 0.08, delay = 0) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
  gain.gain.setValueAtTime(vol, ctx.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    ctx.currentTime + delay + duration,
  );
  osc.start(ctx.currentTime + delay);
  osc.stop(ctx.currentTime + delay + duration);
}

function playSpinSound() {
  // ratchet clicks while spinning
  for (let i = 0; i < 18; i++) {
    beep(80 + Math.random() * 40, "square", 0.04, 0.04, i * 0.08);
  }
}

function playReelStop(reelIndex) {
  beep(200 + reelIndex * 60, "square", 0.06, 0.06);
}

function playWin() {
  const notes = [523, 659, 784, 1047, 784, 1047, 1319];
  notes.forEach((f, i) => beep(f, "square", 0.18, 0.07, i * 0.1));
  setTimeout(() => {
    const shimmer = [1047, 1319, 1568, 1319, 1047];
    shimmer.forEach((f, i) => beep(f, "triangle", 0.12, 0.05, i * 0.07));
  }, 800);
}

function playLose() {
  beep(220, "sawtooth", 0.08, 0.06);
  beep(180, "sawtooth", 0.1, 0.06, 0.1);
  beep(140, "sawtooth", 0.15, 0.06, 0.22);
}

function playClick() {
  beep(440, "square", 0.04, 0.04);
}

// ── SLOTS ────────────────────────────────────────────────────────────────────

// Imágenes para cada símbolo de la slot machine
const SYMS_IMG = {
  udeChile_U: "imgs/slot-italiano.png",
  p5js: "imgs/slot-p5.png",
  pokeball: "imgs/slot-pokeball.png",
  omnitrix: "imgs/slot-omnitrix.png",
  chuncho: "imgs/slot-chuncho.png",
  arduino: "imgs/slot-billar.webp",
  clifford: "imgs/slot-clifford.png",
  baltica: "imgs/slot-baltica.png",
  wario: "imgs/slot-wario.png",
  mushroom: "imgs/slot-marioMushroom.png",
};

const SYM_KEYS = Object.keys(SYMS_IMG);
const CELL = 60;
const STRIP_LEN = 40;
const LAND_IDX = 20;
const WIN_P = 1 / 20;

let credits = 99,
  busy = false;

function makeCell(symKey) {
  const cell = document.createElement("div");
  cell.className = "reel-cell";
  const img = document.createElement("img");
  img.src = SYMS_IMG[symKey];
  img.alt = symKey;
  cell.appendChild(img);
  cell.dataset.sym = symKey;
  return cell;
}

function buildStrips() {
  for (let i = 0; i < 3; i++) {
    const strip = document.getElementById("s" + i);
    strip.innerHTML = "";
    for (let j = 0; j < STRIP_LEN; j++) {
      strip.appendChild(makeCell(SYM_KEYS[j % SYM_KEYS.length]));
    }
    posStrip(strip, 0);
  }
}

function posStrip(strip, cellIdx) {
  strip.style.transition = "none";
  strip.style.top = -(cellIdx * CELL) + "px";
}

function animStrip(strip, targetIdx, duration) {
  return new Promise((res) => {
    strip.getBoundingClientRect(); // force reflow
    strip.style.transition = `top ${duration}ms cubic-bezier(0.22,1,0.36,1)`;
    strip.style.top = -(targetIdx * CELL) + "px";
    setTimeout(res, duration);
  });
}

buildStrips();

async function doSpin() {
  if (busy || credits <= 0) return;
  busy = true;
  playClick();

  credits--;
  document.getElementById("cred").textContent = credits;
  document.getElementById("winv").textContent = 0;
  const btn = document.getElementById("sb");
  const st = document.getElementById("st");
  btn.disabled = true;
  st.className = "sst";
  st.textContent = "· · ·";

  const isWin = Math.random() < WIN_P;
  let res;
  if (isWin) {
    const s = SYM_KEYS[Math.floor(Math.random() * SYM_KEYS.length)];
    res = [s, s, s];
  } else {
    res = Array.from(
      { length: 3 },
      () => SYM_KEYS[Math.floor(Math.random() * SYM_KEYS.length)],
    );
    if (res[0] === res[1] && res[1] === res[2]) {
      res[2] = SYM_KEYS[(SYM_KEYS.indexOf(res[2]) + 1) % SYM_KEYS.length];
    }
  }

  // Place landing symbols & reset all strips to top before animating
  for (let i = 0; i < 3; i++) {
    const strip = document.getElementById("s" + i);
    for (let j = 0; j < STRIP_LEN; j++) {
      const key = j === LAND_IDX ? res[i] : SYM_KEYS[j % SYM_KEYS.length];
      strip.children[j].innerHTML =
        '<img src="' + SYMS_IMG[key] + '" alt="' + key + '">';
      strip.children[j].dataset.sym = key;
    }
    posStrip(strip, 0);
  }

  // Force reflow so the reset is applied before animation starts
  document.body.getBoundingClientRect();

  playSpinSound();

  const durations = [900, 1100, 1350];
  const delays = [0, 140, 280];

  await Promise.all(
    durations.map(
      (dur, i) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const strip = document.getElementById("s" + i);
            animStrip(strip, LAND_IDX, dur).then(() => {
              playReelStop(i);
              resolve();
            });
          }, delays[i]);
        }),
    ),
  );

  if (isWin) {
    const prize = 20;
    credits += prize;
    document.getElementById("cred").textContent = credits;
    document.getElementById("winv").textContent = prize;
    st.className = "sst win";
    st.textContent = "★ JACKPOT! +" + prize + " ★";
    playWin();
    celebrate();
  } else {
    st.className = "sst lose";
    st.textContent = ["SIN SUERTE", "OTRA VEZ", "CASI...", "SIGUE"][
      Math.floor(Math.random() * 4)
    ];
    playLose();
  }

  if (credits <= 0) {
    btn.textContent = "GAME OVER";
  } else {
    btn.disabled = false;
  }
  busy = false;
}

function celebrate() {
  const flash = document.getElementById("flash");
  flash.classList.add("on");
  setTimeout(() => flash.classList.remove("on"), 280);

  const container = document.getElementById("conf");
  container.innerHTML = "";
  container.className = "on";
  const cols = [
    "#ff1a3c",
    "#ffe000",
    "#00e5ff",
    "#00ff66",
    "#ff88ff",
    "#ff8800",
    "#fff",
  ];
  for (let i = 0; i < 65; i++) {
    const d = document.createElement("div");
    d.className = "cp";
    d.style.cssText = `left:${Math.random() * 100}vw;top:-10px;width:${5 + Math.random() * 9}px;height:${5 + Math.random() * 9}px;background:${cols[i % cols.length]};animation-duration:${1.3 + Math.random() * 1.7}s;animation-delay:${Math.random() * 0.6}s;`;
    container.appendChild(d);
  }

  const slotEl = document.querySelector(".slot-col");
  const r = slotEl.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    const coin = document.createElement("div");
    coin.style.cssText = `position:fixed;left:${r.left + Math.random() * r.width}px;top:${r.top + r.height * 0.4}px;font-size:18px;z-index:10000;pointer-events:none;animation:coinup ${0.6 + Math.random() * 0.5}s ease-out ${Math.random() * 0.4}s forwards;`;
    coin.textContent = "🪙";
    document.body.appendChild(coin);
    setTimeout(() => coin.remove(), 1400);
  }

  setTimeout(() => {
    container.className = "";
    container.innerHTML = "";
  }, 3200);
}

// ── MARQUEE ──────────────────────────────────────────────────────────────────
const ALBUMS = [
  "Just As I Am — Bill Withers",
  "Techymuc — Chystemc",
  "Ser Hümano!! — Tiro de Gracia",
  "Corazones — Los Prisioneros",
  "Brat — Charli XCX",
  "Don't Tap the Glass — Tyler, The Creator",
  "Goofy and Sexy — Nelick",
  "The Miseducation of Lauryn Hill — Lauryn Hill",
  "Gemini Rights — Steve Lacy",
  "The Genius Sings the Blues — Ray Charles",
  "Daisy — Rusowsky",
  "Igor — Tyler the Creator",
  "Cocktail — Belanova",
  "Ysymo — YSY A",
  "TU DUO FAVORITO — YSY A, Bhavi",
  "Lágrima Pa' Otro Día — Delfuente",
  ".mp3 — Emilia",
  "El Madrileño — C. Tangana",
  "La Paranoia del Psycho Joke Fu - Chystemc",
  "Recortes - Frainstrumentos",
  "Pasado, Presente y Libertad - Cidtronick",
  "BAÑO MARÍA - CA7RIEL &  Paco Amoroso",
  "El Círuclo - Kase.O",
  "Artaud - Pescado Rabioso",
  "EL DISKO - CA7RIEL",
  "Hoy No Me Bañé - Matiah Chinaski",
  "GRASA - Nathy Peluso",
  "Stankonia - Outkast",
  "Tartamudos - Abelocaín",
  "5 - Lenny Kravitz",
  "Discovery - Daft Punk",
  "Flow Fantasy - Bubaseta",
  "La Medicina - Los Tetas",
  "Elefante - Menta Sabia Crew",
  "Doggystyle - Snoop Dogg",
];
(function buildMarquee() {
  const el = document.getElementById("mq");
  const sep = '<span class="mq-sep">◆</span>';
  const content = ALBUMS.map((a) => a.toUpperCase()).join(sep) + sep;
  el.innerHTML = content + content; // duplicate for seamless loop
})();
