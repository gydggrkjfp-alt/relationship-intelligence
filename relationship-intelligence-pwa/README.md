# Relationship Intelligence PWA Beta

This is a local-first beta web app.

## Easiest deploy: Netlify Drop

1. Go to https://app.netlify.com/drop
2. Drag the whole `relationship-intelligence-pwa` folder onto the page.
3. Netlify gives you a live URL.
4. Open the URL on your phone.
5. On iPhone: Share → Add to Home Screen.

Your profiles save in that browser using localStorage. Use Export Backup if you want a copy.

## Alternative: GitHub Pages

1. Create a new GitHub repository.
2. Upload these files.
3. Settings → Pages → deploy from main branch.
4. Open the GitHub Pages URL.

## Files

- `index.html` — app structure
- `styles.css` — design
- `app.js` — profiles, sliders, autosave, scoring
- `manifest.json` — PWA info
- `sw.js` — offline cache
