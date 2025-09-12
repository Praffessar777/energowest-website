# Корпоративний сайт ЕНЕРГОЗАХІД

  This is a code bundle for Корпоративний сайт ЕНЕРГОЗАХІД. The original project is available at https://www.figma.com/design/1PWGsAsUSNevCXgFtcB6Yd/%D0%9A%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B8%D0%B9-%D1%81%D0%B0%D0%B9%D1%82-%D0%95%D0%9D%D0%95%D0%A0%D0%93%D0%9E%D0%97%D0%90%D0%A5%D0%86%D0%94.

  ## Running the code

  Run `npm i` to install the dependencies.
  
Run `npm run dev` to start the development server.

## Building for production

 Run `npm run build` to generate a static version of the site in the `dist/` directory. Then preview the result on the same port as the dev server:

```
npm run build
npm run preview
```

The preview script serves `dist/` on `http://localhost:3000`. Vite uses ports in the `4173` range by default, but pinning the preview to `3000` avoids confusion and matches the development server.

Opening `dist/index.html` directly or deploying the `dist/` directory ensures all modules are served with the correct MIME type and prevents the "Failed to load module script" error.

Run `npm run dev` to start the development server.

## Building for production

 Run `npm run build` to generate a static version of the site in the `dist/` directory. Then preview the result on the same port as the dev server:

```
npm run build
npm run preview
```

The preview script serves `dist/` on `http://localhost:3000`. Vite uses ports in the `4173` range by default, but pinning the preview to `3000` avoids confusion and matches the development server.

Opening `dist/index.html` directly or deploying the `dist/` directory ensures all modules are served with the correct MIME type and prevents the "Failed to load module script" error.

The app now uses a `HashRouter`, so routes work on static hosts without needing special rewrite rules.

## Deployment

Run `npm run deploy` to build the project and copy the production files into the `docs/` directory. Commit and push the `docs/` folder to publish the site on static hosts such as GitHub Pages. If you deploy elsewhere, upload the contents of `docs/` (or `dist/`) to your hosting provider.
