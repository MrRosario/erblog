const fs = require('fs')
const globby = require('globby')

async function generateSiteMap() {

  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[slug].js',
    '!pages/api',
    'posts/*.md'
  ]);

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${pages.map(page => {
        
          const path = page
          .replace('pages/', '')
          .replace('.js', '')
          .replace('.md', '');

          const route = path === 'index' ? '' : path;

          return `
              <url>
                  <loc>${`https://eugeniorosario.com/${route}`}</loc>
                  <changefreq>${`daily`}</changefreq>
                  <priority>${`0.7`}</priority>
              </url>
              `
      }).join('')}
    </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()