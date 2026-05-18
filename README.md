# DFQF425SDF — kira.loiseau

Personal site of **Kira Loiseau**, ML engineer based in Amsterdam.

Static HTML/CSS, no build step, no JavaScript trackers. The portfolio
lives under [`/portfolio`](./portfolio/), the root page is intentionally
minimal.

## Stack

- Plain HTML5
- One hand-written CSS file
- Hosted on GitHub Pages

## Local preview

Any static server works:

```bash
python -m http.server 8080
# then open http://localhost:8080/portfolio/
```

## Structure

```
.
├── index.html          # entry page
├── portfolio/          # main site
│   ├── index.html
│   └── style.css
├── docs/
│   └── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## License

[MIT](./LICENSE).
