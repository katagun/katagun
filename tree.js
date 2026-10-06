// Source of truth: Kazakh labels and edges.
// English and Russian diagrams are transliterations of this graph.
// Edit names and edges here only.

const SOURCE = {
  phrases: {
    name: "Қатаған",
  },
  root: "katagan",
  nodes: {
    katagan: "Қатаған",
    kuldir: "Күлдір",
    durmen: "Дүрмен",
    mamay: "Мамай",
    shanyshkyly: "Шаңышқылы",
    karaman: "Қараман",
    mynas: "Мынас",
    qulaq: "Құлақ",
    shahaman: "Шахаман",
    qalqaman: "Қалқаман",
    imeshek: "Имешек",
    bekalai: "Бекалай",
    bekbauyl: "Бекбауыл",
    azynabai: "Азынабай",
    nauryzbai: "Наурызбай (Көк көз)",
    qazynabai: "Қазынабай",
    sungibai: "Сүнгібай",
    adai: "Адай",
    aqan: "Ақан",
    aituar: "Айтуар",
    tuman: "Тұман",
    barqy: "Барқы",
    asylbek: "Асылбек",
    khantemir: "Хантемир",
    amantay: "Амантай",
    daulet: "Дәулет",
    azamat: "Азамат",
    ainamkul: "Айнамкүл",
    erik: "Ерік",
    erzhan: "Ержан",
    andakul: "Андақұл",
    amantur: "Амантұр",
    bulat: "Болат",
    kaysar: "Қайсар",
    askar: "Асқар",
    kairat: "Қайрат",
    marat: "Марат",
    baurzhan: "Бауыржан",
    bekezhan: "Бекежан",
    bakhytzhan: "Бақытжан",
    asan: "Асан",
    zhumabek: "Жұмабек",
    serik: "Серік",
    berik: "Берік",
    malikaidar: "Малик-Айдар",
    timur: "Тимур",
    murat: "Мұрат",
    aidar: "Айдар",
    shamil: "Шамиль",
    temujin: "Темүжін",
    adam: "Адам",
    malik: "Малик",
  },
  // kind: solid father-to-son, dotted tribe-to-oldest-ancestor, rank layout-only
  edges: [
    ["katagan", "kuldir", "dotted"],
    ["katagan", "durmen", "dotted"],
    ["katagan", "mamay", "dotted"],
    ["katagan", "shanyshkyly", "dotted"],
    ["mamay", "mynas", "solid"],
    ["mamay", "qulaq", "solid"],
    ["mynas", "karaman", "solid"],
    ["mynas", "qalqaman", "solid"],
    ["mynas", "shahaman", "solid"],
    ["mynas", "imeshek", "solid"],
    ["shahaman", "bekalai", "solid"],
    ["bekalai", "bekbauyl", "solid"],
    ["bekbauyl", "azynabai", "solid"],
    ["bekbauyl", "nauryzbai", "solid"],
    ["bekbauyl", "qazynabai", "solid"],
    ["nauryzbai", "sungibai", "solid"],
    ["nauryzbai", "aqan", "solid"],
    ["nauryzbai", "adai", "solid"],
    ["nauryzbai", "aituar", "solid"],
    ["nauryzbai", "tuman", "solid"],
    ["nauryzbai", "barqy", "solid"],
    ["adai", "asylbek", "solid"],
    ["asylbek", "asan", "solid"],
    ["asan", "zhumabek", "solid"],
    ["asan", "serik", "solid"],
    ["asan", "berik", "solid"],
    ["asylbek", "khantemir", "solid"],
    ["khantemir", "amantay", "solid"],
    ["amantay", "daulet", "solid"],
    ["amantay", "azamat", "solid"],
    ["khantemir", "ainamkul", "solid"],
    ["ainamkul", "erik", "solid"],
    ["ainamkul", "erzhan", "solid"],
    ["khantemir", "malikaidar", "solid"],
    ["khantemir", "andakul", "solid"],
    ["khantemir", "amantur", "solid"],
    ["amantur", "bulat", "solid"],
    ["amantur", "kaysar", "solid"],
    ["amantur", "askar", "solid"],
    ["andakul", "kairat", "solid"],
    ["andakul", "marat", "solid"],
    ["andakul", "baurzhan", "solid"],
    ["andakul", "bekezhan", "solid"],
    ["andakul", "bakhytzhan", "solid"],
    ["malikaidar", "timur", "solid"],
    ["malikaidar", "murat", "solid"],
    ["timur", "aidar", "solid"],
    ["murat", "shamil", "solid"],
    ["shamil", "temujin", "solid"],
    ["shamil", "adam", "solid"],
    ["murat", "malik", "solid"],
  ],
};

const EN = {
  а: "a", ә: "ä", б: "b", в: "v", г: "g", ғ: "gh", д: "d", е: "e", ё: "yo",
  ж: "zh", з: "z", и: "i", й: "y", к: "k", қ: "q", л: "l", м: "m", н: "n",
  ң: "n", о: "o", ө: "ö", п: "p", р: "r", с: "s", т: "t", у: "u", ұ: "ū",
  ү: "ü", ф: "f", х: "kh", һ: "h", ц: "ts", ч: "ch", ш: "sh", щ: "shch",
  ъ: "", ы: "y", і: "i", ь: "", э: "e", ю: "yu", я: "ya",
};

// Kazakh letters Russian Cyrillic does not have.
const RU = {
  ә: "а", ғ: "г", қ: "к", ң: "н", ө: "о", ұ: "у", ү: "у", і: "и", һ: "х",
};

function transliterate(text, lang) {
  if (lang === "kz") return text;
  const map = lang === "ru" ? RU : EN;
  let out = "";
  for (const ch of text) {
    const lower = ch.toLowerCase();
    const upper = ch !== lower;
    let next = Object.prototype.hasOwnProperty.call(map, lower) ? map[lower] : ch;
    if (upper && next) next = next[0].toUpperCase() + next.slice(1);
    out += next;
  }
  return out;
}

function mermaidText(text) {
  return text.replace(/&/g, "#amp;").replace(/"/g, "#quot;").replace(/</g, "#lt;").replace(/>/g, "#gt;");
}

function childrenOf() {
  const children = new Map();
  for (const [from, to, kind] of SOURCE.edges) {
    if (kind === "rank") continue;
    if (!children.has(from)) children.set(from, []);
    children.get(from).push(to);
  }
  return children;
}

function descendants(id) {
  const children = childrenOf();
  const ids = [];
  const visit = (current) => {
    ids.push(current);
    for (const child of children.get(current) || []) visit(child);
  };
  visit(id);
  return ids;
}

function graphError() {
  const ids = new Set(Object.keys(SOURCE.nodes));
  const parents = new Map();
  for (const [from, to, kind] of SOURCE.edges) {
    if (kind === "rank") continue;
    if (!ids.has(from) || !ids.has(to)) return `Unknown node in ${from} → ${to}`;
    if (parents.has(to)) return `${to} has more than one parent`;
    parents.set(to, from);
  }
  if (parents.has(SOURCE.root)) return "The root has a parent";
  for (const id of ids) {
    if (id !== SOURCE.root && !parents.has(id)) return `${id} has no parent`;
  }
  return "";
}

function nodeDecl(id, lang) {
  const label = mermaidText(transliterate(SOURCE.nodes[id], lang));
  return id === SOURCE.root ? `${id}(("${label}"))` : `${id}["${label}"]`;
}

function layoutOrder() {
  const children = childrenOf();
  const seen = new Set();
  const order = [];
  const visit = (id) => {
    if (seen.has(id) || !SOURCE.nodes[id]) return;
    seen.add(id);
    order.push(id);
    for (const child of children.get(id) || []) visit(child);
  };
  visit(SOURCE.root);
  for (const id of Object.keys(SOURCE.nodes)) visit(id);
  return order;
}

function buildDiagram(lang) {
  const problem = graphError();
  if (problem) throw new Error(problem);
  const cluster = new Set(descendants("khantemir"));
  const lines = ["flowchart TD"];
  for (const id of layoutOrder()) {
    if (!cluster.has(id)) lines.push(`  ${nodeDecl(id, lang)}`);
  }
  lines.push('  subgraph khantemirLine[" "]');
  for (const id of layoutOrder()) {
    if (cluster.has(id)) lines.push(`    ${nodeDecl(id, lang)}`);
  }
  lines.push("  end");
  for (const [from, to, kind] of SOURCE.edges) {
    const op = kind === "dotted" ? "-.-" : kind === "rank" ? "~~~" : "---";
    lines.push(`  ${from} ${op} ${to}`);
  }
  lines.push("  style khantemirLine fill:none,stroke:none,color:transparent");
  return lines.join("\n");
}

function localize(lang) {
  return {
    name: transliterate(SOURCE.phrases.name, lang),
    diagram: buildDiagram(lang),
  };
}
