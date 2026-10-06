# Katagun

Qataghan (Қатаған) shezhire. One static page: `index.html` draws the tree, `tree.js` is the only genealogy source.

## Names

Edit people and parent links in `tree.js` only. Kazakh spelling is the source. English and Russian labels are letter-by-letter transliterations (`transliterate`). Do not hand-copy a second tree.

Interface sentences (subtitle, legend, search, zoom, theme) are translations. They live in the locale maps in `index.html`, not in `tree.js`.

`graphError()` must stay empty: every person except the root has one parent, and every edge names a real person. Khantemir's group is everyone descended from him. Do not keep a separate membership list.

## Lines

- `dotted` on an edge: tribe name to an oldest known ancestor. Today that is only Қатаған → Күлдір, Дүрмен, Мамай, Шаңышқылы.
- `solid`: father to son.
- After Mermaid draws the SVG, `joinStems` replaces each parent's edges with one centered stem, a horizontal bar, and a drop to each child. Dotted parents stay dotted (`stroke-dasharray: 2 3`).

## Page

Serve the folder locally; do not open `index.html` as a file (Mermaid and `tree.js` need HTTP):

```bash
python3 -m http.server 8753
```

`index.html` loads `tree.js?v=…`. Bump that query when `tree.js` changes so browsers do not keep the old graph.

Theme is `system`, `light`, or `dark`, stored as `katagun-theme`. Mermaid bakes ink and paper into the SVG, so a theme change re-renders the diagram. Search highlight uses `--hit` and `--seal`.

The site is published from the repository root on GitHub Pages, with `CNAME` set to `katagun.com`.
