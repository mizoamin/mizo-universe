import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  generatePlanetAlternates,
  generatePlanetOpenGraph,
  generatePlanetTwitterCard,
  getPlanetMetadata,
} from "@/lib/seo/metadata";
import { getPlanetBySlug, PLANET_SLUGS } from "@/lib/seo/planets";
import { buildPlanetSchema } from "@/lib/seo/structured-data";

interface Props {
  params: Promise<{ planetName: string }>;
}

export function generateStaticParams() {
  return PLANET_SLUGS.map((slug) => ({ planetName: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { planetName } = await params;
  const planet = getPlanetBySlug(planetName);

  if (!planet) {
    return {
      title: "Planet Not Found",
      robots: { index: false, follow: false },
    };
  }

  const { title, description, keywords } = getPlanetMetadata(planet);

  return {
    title,
    description,
    keywords,
    alternates: generatePlanetAlternates(planet),
    openGraph: generatePlanetOpenGraph(planet),
    twitter: generatePlanetTwitterCard(planet),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function PlanetPage({ params }: Props) {
  const { planetName } = await params;
  const planet = getPlanetBySlug(planetName);

  if (!planet) {
    notFound();
  }

  const planetSchema = buildPlanetSchema(planet);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(planetSchema) }}
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="sr-only">
          {planet.name} — {planet.theme} dimension of Mizo Universe
        </h1>
        <p className="sr-only">{planet.description}</p>
      </main>
    </>
  );
}
