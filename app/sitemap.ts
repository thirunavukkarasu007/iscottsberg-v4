import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://iscottsberg.com",
      lastModified: new Date(),
    },
    {
      url: "https://iscottsberg.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://iscottsberg.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://iscottsberg.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://iscottsberg.com/careers",
      lastModified: new Date(),
    },
    {
      url: "https://iscottsberg.com/contact",
      lastModified: new Date(),
    },
  ];
}