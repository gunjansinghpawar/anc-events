import { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";
import { getAllServices } from "@/data/services";
import { getAllDestinations } from "@/data/destinations";
import { getAllJournalPosts } from "@/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ancevents.in";
  const currentDate = new Date().toISOString();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/about/story",
    "/about/approach",
    "/about/team",
    "/work",
    "/work/destination-weddings",
    "/work/weddings",
    "/work/bespoke-events",
    "/work/event-design",
    "/services",
    "/destinations",
    "/journal",
    "/contact",
    "/enquire",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic projects
  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((p) => ({
    url: `${siteUrl}/work/${p.slug}`,
    lastModified: p.updatedAt || currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic services
  const serviceRoutes: MetadataRoute.Sitemap = getAllServices().map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic destinations
  const destinationRoutes: MetadataRoute.Sitemap = getAllDestinations().map((d) => ({
    url: `${siteUrl}/destinations/${d.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic journal posts
  const journalRoutes: MetadataRoute.Sitemap = getAllJournalPosts().map((j) => ({
    url: `${siteUrl}/journal/${j.slug}`,
    lastModified: j.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...serviceRoutes,
    ...destinationRoutes,
    ...journalRoutes,
  ];
}
