# Корпоративний сайт ЕНЕРГОЗАХІД

This is a code bundle for Корпоративний сайт ЕНЕРГОЗАХІД. The original project is available at https://www.figma.com/design/1PWGsAsUSNevCXgFtcB6Yd/%D0%9A%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B8%D0%B9-%D1%81%D0%B0%D0%B9%D1%82-%D0%95%D0%9D%D0%95%D0%A0%D0%93%D0%9E%D0%97%D0%90%D0%A5%D0%86%D0%94.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deploying to GitHub Pages

Run `npm run deploy` to build the project and publish the contents of the `dist` directory to the `gh-pages` branch using the `gh-pages` CLI. The `predeploy` script runs `npm run build` automatically before publishing.

Make sure you have push access to the repository before running the command.

### Custom domain

This project is configured for the `www.energowest.org` domain.

1. Edit `public/CNAME` and put your domain name inside if you need a different one.
2. Point the domain’s DNS records to GitHub Pages.
3. Run `npm run deploy` again so the `CNAME` file is published along with the build.
