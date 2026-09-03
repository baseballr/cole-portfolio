# Cole — Portfolio (Blazor WebAssembly)

A personal portfolio site built with Blazor WebAssembly (.NET 8), deployed as a
static site to GitHub Pages via GitHub Actions.

## Pages
- **About** (`/`) — bio and core skills
- **Experience** (`/experience`) — work history timeline
- **Projects** (`/projects`) — placeholder project cards — replace with your own
- **Contact** (`/contact`) — placeholder email/LinkedIn/GitHub links — replace with your own

## Before you push: run this locally first

I built this in a sandboxed environment where NuGet package restore is network-blocked,
so I was **not able to run `dotnet build` to confirm it compiles**. The file structure and
syntax are correct for .NET 8 Blazor WASM, but please verify locally before you rely on it:

```bash
dotnet restore
dotnet build
dotnet run
```

Then open the local URL it gives you (something like `http://localhost:5xxx`) and click
through all four pages. Fix anything that doesn't look right before pushing.

## One-time setup

1. **Create a new GitHub repo** (e.g. `cole-portfolio`). Don't initialize it with a
   README/gitignore — you already have those here.

2. **404.html routing fix:** `wwwroot/404.html` has `pathSegmentsToKeep = 1`, correct for
   a normal project repo (`github.com/you/cole-portfolio`). If you instead deploy to a
   `you.github.io` user/org repo, change that to `0`.

3. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio scaffold"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/cole-portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages via Actions:**
   - Go to your repo → **Settings → Pages**
   - Under "Build and deployment", set **Source** to **GitHub Actions**
   - That's it — the workflow in `.github/workflows/deploy.yml` will run automatically

5. **Watch it deploy:**
   - Go to the **Actions** tab in your repo to watch the build/deploy run
   - Once it finishes, your site will be live at `https://YOUR-USERNAME.github.io/cole-portfolio/`

From here on, every push to `main` automatically rebuilds and redeploys the site.

## What to personalize
- `Pages/Projects.razor` — swap in your real projects, links, and tags
- `Pages/Contact.razor` — swap in your real email, LinkedIn, GitHub links
- `Pages/Experience.razor` — add earlier roles as additional `.timeline-item` blocks
- `wwwroot/images/carousel/` — replace the placeholder gradient images with your own
  photos (same filenames, or update the list in `Pages/Home.razor`'s `@code` block).
  Landscape photos around 1600x900 work best. Since it sits behind text on a dark
  overlay, photos with clear/high-contrast areas read best (e.g. dirt biking, fishing,
  outdoor shots could all work nicely here).
- `wwwroot/index.html` — update `<title>` and meta description if desired

## Note on the hero carousel
`Shared/HeroCarousel.razor` cross-fades through the images in `wwwroot/images/carousel/`
behind the "Hi, I'm Cole" text, with a dark gradient overlay so the text stays readable.
Change how often it rotates via the `IntervalMs` parameter on `<HeroCarousel>` in
`Pages/Home.razor` (currently 5000ms).

## Note on base href (fixed)
`index.html` is checked in with `<base href="/" />` so `dotnet run` works locally without
any manual edits. The GitHub Actions workflow automatically rewrites this to
`/your-repo-name/` in the *deployed* copy only — you never need to touch it, unless you're
deploying to a `you.github.io` user/org repo, in which case delete that sed step from
`.github/workflows/deploy.yml` since those sites are served from `/` already.
