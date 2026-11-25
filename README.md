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

Project summaries appear in both the page and the project dialog data. Update both when changing a project. iScore is marked **in development** based on the supplied résumé. Career metrics, titles, and employment dates reflect that résumé.

## GitHub Pages

This site uses the `main` branch and repository root as the publishing source. The `.nojekyll` file allows GitHub Pages to serve the static files directly. No custom domain or external service is required.

To publish a copy:

1. Create a public GitHub repository named `<your-username>.github.io`.
2. Upload this folder’s contents to its `main` branch.
3. In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then **main** and **/ (root)**, and save.
4. Update the profile link, canonical URL, Open Graph URLs, contact details, and structured data in `index.html` for the new owner.

See [GitHub’s publishing source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

There are no analytics, tracking scripts, remote fonts, or runtime dependencies.
