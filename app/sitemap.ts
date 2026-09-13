import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://teamnara.in";
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${baseUrl}/images/IMG_3117.PNG`,
        `${baseUrl}/images/IMG_3116.PNG`,
        `${baseUrl}/logo/logo.png`,
      ],
    },
    {
      url: `${baseUrl}/sessions`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
      images: [
        `${baseUrl}/images/IMG_3115.PNG`,
      ],
    },
    {
      url: `${baseUrl}/what-we-do`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${baseUrl}/images/IMG_3115.PNG`,
        `${baseUrl}/images/IMG_3117.PNG`,
        `${baseUrl}/images/IMG_3116.PNG`,
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [
        `${baseUrl}/images/IMG_3116.PNG`,
      ],
    },
    {
      url: `${baseUrl}/community`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [
        `${baseUrl}/images/IMG_3116.PNG`,
      ],
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [
        `${baseUrl}/photos/IMG_2282.webp`,
        `${baseUrl}/photos/IMG_2899.webp`,
        `${baseUrl}/photos/IMG_2900.webp`,
        `${baseUrl}/photos/IMG_2268.webp`,
        `${baseUrl}/photos/IMG_2264.webp`,
        `${baseUrl}/photos/IMG_2920.webp`,
        `${baseUrl}/photos/IMG_2902.webp`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
