import type { MetadataRoute } from "next";

const BASE_URL = "https://zyron.uz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: BASE_URL,
          uz: `${BASE_URL}/?lang=uz`,
          ru: `${BASE_URL}/?lang=ru`,
        },
      },
    },
  ];
}
