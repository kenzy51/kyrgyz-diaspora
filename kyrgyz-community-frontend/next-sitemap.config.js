// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kyrgyz-diaspora.vercel.app', 
  generateRobotsTxt: true, 
  sitemapSize: 7000, 
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/dashboard', '/admin/*'], 
};