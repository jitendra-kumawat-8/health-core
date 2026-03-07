/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ashokamhealthcare.in",
  generateRobotsTxt: true,
  exclude: [
    "/dashboard",
    "/component-test",
    "/test",
    "/api/*",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard", "/component-test", "/test"],
      },
    ],
  },
};
