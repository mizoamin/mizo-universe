import { buildPersonSchema, buildWebSiteSchema } from "@/lib/seo/structured-data";
import { PLANETS } from "@/lib/seo/planets";
import Link from "next/link";

export default function Home() {
  const websiteSchema = buildWebSiteSchema();
  const personSchema = buildPersonSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="sr-only">
          Mizo Universe — The Digital Ecosystem of Captain Mizo Amin
        </h1>
        <nav aria-label="Planet navigation">
          <ul className="sr-only">
            {PLANETS.map((planet) => (
              <li key={planet.slug}>
                <Link href={`/planet/${planet.slug}`}>{planet.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
}
