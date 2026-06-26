import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="py-24">
      <h1 className="text-4xl font-semibold">
        {siteConfig.name}
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        {siteConfig.role}
      </p>

      <p className="mt-8 text-xl leading-relaxed max-w-2xl">
        {siteConfig.mission}
      </p>

      <div className="mt-12 text-gray-700 space-y-2">
        <p>Building technology, systems, and companies.</p>
        <p>Focused on long-term value creation.</p>
        <p>Committed to stewardship and excellence.</p>
      </div>
    </main>
  );
}
