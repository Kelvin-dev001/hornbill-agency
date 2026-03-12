/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://hornbill-agency.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
}
