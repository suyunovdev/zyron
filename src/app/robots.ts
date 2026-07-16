import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Yandexbot",
        allow: "/",
      },
    ],
    sitemap: "https://zyron.uz/sitemap.xml",
    host: "https://zyron.uz",
  };
}
