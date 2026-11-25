# Mohamed Taher — Portfolio

A responsive portfolio for Mohamed Taher, Senior Mobile Engineer & Team Lead, based on his résumé. Built with HTML, CSS, and JavaScript, with no packages or build step.

**Website:** https://mohamedtaher.github.io/

## Included

- Career highlights, selected work, full employment timeline, toolkit, education, and contact details.
- Filterable projects and accessible project detail dialogs.
- Downloadable résumé, email links, email copying, and a GitHub profile link.
- Original CSS and SVG concept illustrations. These are not screenshots of the featured products.
- Responsive layouts, keyboard focus styles, reduced-motion support, page metadata, and structured profile data.

## Preview

Open `index.html` in a browser, or serve this folder locally:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. The email-copy button uses the Clipboard API, which requires HTTPS or localhost; email links work independently.

## Edit

- `index.html`: biography, projects, career history, skills, contact details, and page metadata.
- `styles.css`: colors, typography, layout, and responsive styles.
- `script.js`: project dialog content, filters, and email copying.
- `assets/Mohamed-Taher-Resume.pdf`: downloadable résumé.
- `assets/social-preview.png`: social sharing image.
- `assets/cairo-university-logo.png`: unchanged official university web logo; the education badge displays its emblem using a CSS crop. [Original source](http://cu.edu.eg/templates/ts_barrister/images/presets/preset1/logo.png).

Project summaries appear in both the page and the project dialog data. Update both when changing a project. iScore is marked **in development** based on the supplied résumé. Career metrics, titles, and employment dates reflect that résumé.

## GitHub Pages

This site is published by the **Publish portfolio** GitHub Actions workflow in `.github/workflows/deploy-pages.yml`. Every push to `main` deploys the static website. The workflow can also be started manually from the repository’s **Actions** tab. No packages, build step, custom domain, or external hosting service are required.

The workflow uploads only the website files and `assets/` directory. Repository documentation and workflow configuration are excluded from the published website.

To publish a copy:

1. Create a public GitHub repository named `<your-username>.github.io`.
2. Upload this folder’s contents to its `main` branch.
3. In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
4. Update the profile link, canonical URL, Open Graph URLs, contact details, and structured data in `index.html` for the new owner.

5. Open **Actions → Publish portfolio → Run workflow**, select `main`, and start the first deployment.

See [GitHub’s custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

There are no analytics, tracking scripts, remote fonts, or runtime dependencies.
