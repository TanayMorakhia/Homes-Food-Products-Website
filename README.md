# Homes Food Products Website

Next.js website for Homes Food Products.

## Run With Docker

Build and start the app:

```powershell
docker compose up --build
```

Open:

```text
http://localhost:3000
```

## Change WhatsApp Number

Update the build argument in `docker-compose.yml`:

```yaml
NEXT_PUBLIC_WHATSAPP_NUMBER: "919999999999"
```

Then rebuild:

```powershell
docker compose up --build
```

## Temporary GitHub Pages hosting

This repo can be exported as a static site and published to GitHub Pages.

How it works:

- The workflow builds the Next.js app and runs `next export` to produce the `out/` directory.
- The action then publishes `out/` to the `gh-pages` branch.

To deploy manually locally:

```bash
npm ci
npm run export
# push the generated `out/` contents to the `gh-pages` branch (or use the action)
```
