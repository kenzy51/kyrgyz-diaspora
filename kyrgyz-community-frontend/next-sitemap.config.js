// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kyrgyz-diaspora.vercel.app', // ← Your live URL
  generateRobotsTxt: true, // Generates robots.txt too
  sitemapSize: 7000, // Max URLs per sitemap file
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/dashboard', '/admin/*'], // Optional: hide private pages
};