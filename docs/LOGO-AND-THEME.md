# Logo and theme

## Logo

### Where to put your logo

Put your logo file in the **`public`** folder of the project:

- **Path:** `public/logo.png` (or `public/logo.svg`, `public/logo.webp`)
- **Full path example:** `C:\Users\arbaa\cleanspree-uk\public\logo.png`

Recommended:
- **Format:** PNG or SVG (SVG stays sharp on all screens)
- **Size:** Around 280×72 px (or similar; it’s shown at 36px height)
- **Name:** `logo.png` or `logo.svg` (then use `/logo.png` or `/logo.svg` in config)

### How the logo is loaded

The site uses **`/api/logo`**, which looks for `logo.png`, `logo.svg`, or `logo.webp` in the **`public`** folder (in the project where the app runs, or in a `cleanspree-uk` subfolder). No path change in code is needed.

In **`src/lib/constants.ts`**, `SITE_CONFIG.logo` is set to `"/api/logo"`. To show only the letter badge (no image), set:

```ts
logo: "",
```

The logo appears in the **header** and **footer**. If no logo file is found or the image fails to load, the first letter of your site name in a coloured box is shown instead.

---

## Theme (colours and fonts)

### Where to change the theme

**File:** `src/app/globals.css`

In the **`:root`** block at the top you can change:

| Variable        | What it affects              | Example value |
|----------------|------------------------------|---------------|
| `--background` | Page background              | `#ffffff`     |
| `--foreground` | Main text colour             | `#0f172a`     |
| `--primary`    | Buttons, links, accents      | `#0d9488`     |
| `--primary-dark` | Hover / darker primary    | `#0f766e`     |
| `--primary-light` | Lighter primary           | `#14b8a6`     |
| `--accent`     | Extra highlight (e.g. badges)| `#f59e0b`     |
| `--muted`      | Secondary text               | `#64748b`     |
| `--muted-bg`   | Light grey backgrounds       | `#f1f5f9`     |
| `--border`     | Borders and dividers         | `#e2e8f0`     |

The site uses **Tailwind** with **teal** (`teal-600`, etc.) for buttons and links. To match a new primary colour, either:

1. Change the `--primary` (and related) values in `globals.css` and use those in custom CSS, or  
2. Do a project-wide find/replace for Tailwind colour classes (e.g. `teal-600` → `blue-600`) in `src/`.

### Font

The main font is set in **`src/app/layout.tsx`** (e.g. **DM Sans**). To change it, pick another [Google Font](https://fonts.google.com/), add it in `layout.tsx` the same way, and update the `--font-sans` value in `globals.css` if needed.
