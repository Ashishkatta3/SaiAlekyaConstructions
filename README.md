# Sai Alekya Constructions — Website

A single-page static website. **No backend, no database, no build step.** Just files
you upload to a host. This README explains how to put it online and how to edit it later.

---

## What's in this folder

```
sai-alekya-website/
├── index.html          ← the whole website (text + layout live here)
├── images/             ← all photos and the floor plan
│   ├── completed_thunga.jpg
│   ├── render_alekya.jpg
│   ├── ongoing1.jpg
│   ├── ongoing2.jpg
│   ├── floorplan.jpg
│   ├── site_rebar.jpg
│   ├── site_pump.jpg
│   └── site_pour.jpg
├── favicon.ico / favicon.svg / favicon-16/32 / apple-touch-icon.png / icon-192/512.png
├── site.webmanifest    ← app icon info (leave as-is)
└── README.md           ← this file
```

To preview on your own computer, just double-click `index.html`.

---

## Put it online (pick ONE — all free)

**Easiest — Netlify Drop**
1. Go to https://app.netlify.com/drop
2. Drag this whole `sai-alekya-website` folder onto the page.
3. You get a live link in a few seconds. Done.
4. Later, to update: drag the folder again to replace it (or connect a custom domain in Netlify settings).

**GitHub Pages**
1. Create a repo, upload all these files (keep the `images/` folder).
2. Settings → Pages → deploy from the `main` branch, root folder.

**Your own domain (e.g. saialekyaconstructions.com)**
- Buy the domain, then either point it at Netlify (free), or upload the files into your
  hosting account's `public_html` folder via cPanel / FTP. Keep the folder structure intact.

> Keep `index.html` and the `images/` folder together — the site references images by their
> folder path, so they must stay side by side.

---

## The four projects

| # | Project | Status | Photo | Brochure |
|---|---------|--------|-------|----------|
| 1 | Samatha Block, Avilala | Completed | ✅ live | ✅ `samatha-block.pdf` (rebuilt) |
| 2 | Thunga Residency, Postal Colony | Completed | ✅ live | ✅ `thunga-residency.pdf` (rebuilt) |
| 3 | Alekya Homes, R.C. Road | Under construction | ✅ live | ✅ `alekya-homes.pdf` |
| 4 | Alekya Towers A & B, Srivari Nagar | Under construction | ✅ live | ⚠️ floor plan only, for now |

### Swapping any photo
Put the new image in `images/`, then in `index.html` change that project's
`<img src="images/....jpg">` to the new filename — or simply overwrite the old file
keeping the same name, and nothing in the HTML needs to change.

Current filenames: `samatha.jpg`, `thunga.jpg`, `alekya_homes.jpg`, `alekya_towers.jpg`,
`hero.jpg`, plus the on-site set `site_ah_*.jpg` (Alekya Homes) and `site_at_*.jpg` (Alekya Towers).

### When the Alekya Towers brochure is ready
1. Save it as `brochures/alekya-towers.pdf`.
2. In `index.html`, find the Alekya Towers card and change:
   `href="brochures/alekya-towers-floorplan.pdf"` → `href="brochures/alekya-towers.pdf"`
   and the button text `Floor plan (PDF)` → `View brochure`.
There is a comment right above that link reminding you of exactly this.

### About the two rebuilt brochures
Samatha Block and Thunga Residency were rebuilt as clean, designed PDFs from your printed
copies (the artwork was lifted out of the photographs and the text reset). Two things were
deliberately updated rather than copied:
- **Contact details** now use the current office (Postal Colony, Renigunta Road) and the
  numbers 95027 21030 / 98854 55082, replacing the older Abhigna Towers address.
- Samatha's tax note now reads **GST** instead of the outdated "VAT and Service Tax".
If you would rather have the originals reproduced exactly, say so and they can be changed.

### Changing a project's status
In the project's photo area, swap the tag class:
`tag-done` = Completed (dark green) · `tag-live` = Under construction (brass)
Also update the wording inside the tag and the matching chip below the description.

> Keep brochure PDFs reasonably small (a few MB). Large scans make the page slow to open on
> mobile data.

---

## Editing the site later

Open `index.html` in any plain text editor (Notepad, VS Code, TextEdit). Everything is
labelled with comments like `<!-- ============ PROJECTS ============ -->` so you can find
sections quickly. Save the file, refresh the browser, and your change is live.

### Change text
Find the words on the page inside `index.html` and type over them. That's it.

### Add or replace a photo
1. Put your new image in the `images/` folder (JPG works best; keep it under ~1600px wide
   and a reasonable file size so pages stay fast).
2. In `index.html`, find the existing image line, e.g.
   `<img src="images/ongoing1.jpg" ...>` and change the filename to your new one, or just
   overwrite the old file with the same name.

### The two "Residential Project" cards
Under the **Projects** section there are two placeholder cards for your under-construction
buildings. Search `index.html` for:
```
<!-- NOTE: rename this to the actual project name when available -->
```
Replace `Residential Project` with the real project name, update the location line, and
swap the image if you have a better one.

### Add a whole new project card
In the Projects section, copy one existing `<article class="proj"> ... </article>` block,
paste it below, then change the image, tag, title, location and description. Tags available:
`tag-done` (Delivered), `tag-live` (Under construction), `tag-soon` (Booking open).

### Phone numbers & WhatsApp
Search for `919502721030` and `919885455082` and replace with your numbers.
(Format for WhatsApp/tel links is country code + number, no `+` or spaces, e.g. `9198…`.)

### The map
Search for `Renigunta%20Road` in `index.html`. Replace the address in that Google Maps
line with your exact site address to move the map pin.

---

## Notes

- **Contact form:** it doesn't email anyone — it opens WhatsApp with the enquiry pre-filled
  and sends it to your number. No setup needed. If you'd rather receive enquiries by email,
  a free service like Formspree can be added later.
- **Fonts:** the page loads two Google Fonts online. If a visitor is offline it falls back to
  standard system fonts and still looks clean.
- **Images are already optimised** for web. When adding your own, compress large phone photos
  first (e.g. squoosh.app) so the site stays fast.

Questions or bigger changes (new pages, a gallery lightbox, email enquiries)? Those are all
easy add-ons from here.
