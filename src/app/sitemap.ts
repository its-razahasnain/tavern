import type { MetadataRoute } from "next";

const siteUrl = "https://tavern.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/menu",
    "/about",
    "/gallery",
    "/contact",
    "/reservation",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/reservation"
          ? 0.9
          : 0.8,
  }));
}