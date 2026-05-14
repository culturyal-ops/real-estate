import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroSearch from '@/components/HeroSearch';
import { Button } from '@/components/ui/button';

// Force dynamic rendering since we need database access
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  // Temporary: Return static content without database
  const propertiesCount = 0;
  const landsCount = 0;
  const projectsCount = 0;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Property
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Discover premium lands, villas, apartments, and new development
            projects in prime locations
          </p>
          <HeroSearch />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{propertiesCount}</div>
              <div className="text-sm opacity-90">Properties Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{landsCount}</div>
              <div className="text-sm opacity-90">Land Plots</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{projectsCount}</div>
              <div className="text-sm opacity-90">New Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Happy Families</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Property Listings Coming Soon
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're currently setting up our database with premium properties. Check back soon for amazing listings!
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with us today and let our experts guide you
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
