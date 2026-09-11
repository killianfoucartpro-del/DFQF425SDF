# Musée Horizon

Site vitrine de **Musée Horizon**, un musée d’art contemporain fictif pensé comme une expérience éditoriale, accessible et immersive.

## Direction artistique

L’identité associe une grille institutionnelle rigoureuse à des compositions monumentales. La palette ivoire, cobalt, vermillon et ambre fait écho aux deux visuels d’exposition originaux intégrés au site.

## Stack

- HTML5 sémantique
- CSS responsive sans framework
- JavaScript léger et progressif
- Assets visuels locaux optimisés pour le web
- Aucun tracker ni dépendance de build

## Aperçu local

```bash
python3 -m http.server 8080
# puis ouvrir http://localhost:8080/
```

## Structure

```text
.
├── assets/
│   ├── exhibition-museum-optimized.jpg
│   └── hero-museum-optimized.jpg
├── docs/
│   └── CONTRIBUTING.md
├── portfolio/
│   └── index.html        # compatibilité avec l’ancienne URL
├── index.html
├── script.js
├── style.css
├── LICENSE
└── README.md
```

## Accessibilité

Le site comprend une navigation clavier, un lien d’évitement, des états ARIA pour le menu mobile, des textes alternatifs utiles et une adaptation à `prefers-reduced-motion`.

## Licence

[MIT](./LICENSE).
