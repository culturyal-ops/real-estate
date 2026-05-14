import Link from 'next/link';
import { ArrowRight, Building2, Home, MapPin } from 'lucide-react';
import HeroSearch from '@/components/HeroSearch';
import PropertyCard from '@/components/PropertyCard';
import ProjectCard from '@/components/ProjectCard';
import LandCard from '@/components/LandCard';
import { Button } from '@/components/ui/button';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@/payload.config';

export default async function HomePage() {
  const payload = await getPayloadHMR({ config: configPromise });

  // Fetch featured properties
  const { docs: featuredProperties } = await payload.find({
    collection: 'properties',
    where: {
      featured: { equals: true },
      status: { equals: 'available' },
    },
    limit: 3,
  });

  // Fetch featured projects
  const { docs: featuredProjects } = await payload.find({
    collection: 'projects',
    where: {
      featured: { equals: true },
    },
    limit: 3,
  });

  // Fetch featured lands
  const { docs: featuredLands } = await payload.find({
    collection: 'lands',
    where: {
      featured: { equals: true },
      status: { equals: 'available' },
    },
    limit: 3,
  });

  // Get counts
  const { totalDocs: propertiesCount } = await payload.find({
    collection: 'properties',
    where: { status: { equals: 'available' } },
    limit: 0,
  });

  const { totalDocs: landsCount } = await payload.find({
    collection: 'lands',
    where: { status: { equals: 'available' } },
    limit: 0,
  });

  const { totalDocs: projectsCount } = await payload.find({
    collection: 'projects',
    limit: 0,
  });

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

      {/* Featured Properties */}
      {featuredProperties.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-2">
                  Featured Properties
                </h2>
                <p className="text-gray-600">
                  Handpicked premium properties for you
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/properties">
                  View All <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map((property: any) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-2">
                  New Development Projects
                </h2>
                <p className="text-gray-600">
                  Upcoming and ongoing residential enclaves
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/projects">
                  View All <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project: any) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Lands */}
      {featuredLands.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-2">
                  Premium Land Plots
                </h2>
                <p className="text-gray-600">
                  Build your dream home on these prime locations
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/lands">
                  View All <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredLands.map((land: any) => (
                <LandCard key={land.id} land={land} />
              ))}
            </div>
          </div>
        </section>
      )}

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
