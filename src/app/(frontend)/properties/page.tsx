import PropertyCard from '@/components/PropertyCard';
import FilterSidebar from '@/components/FilterSidebar';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@/payload.config';

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const payload = await getPayloadHMR({ config: configPromise });

  // Build query based on filters
  const where: any = {};

  if (searchParams.status) {
    where.status = { equals: searchParams.status };
  } else {
    where.status = { equals: 'available' };
  }

  if (searchParams.type) {
    where.type = { equals: searchParams.type };
  }

  if (searchParams.bedrooms) {
    where.bedrooms = { equals: parseInt(searchParams.bedrooms as string) };
  }

  if (searchParams.minPrice || searchParams.maxPrice) {
    where.price = {};
    if (searchParams.minPrice) {
      where.price.greater_than_equal = parseFloat(searchParams.minPrice as string);
    }
    if (searchParams.maxPrice) {
      where.price.less_than_equal = parseFloat(searchParams.maxPrice as string);
    }
  }

  if (searchParams.minArea || searchParams.maxArea) {
    where.sqftSuperBuiltUp = {};
    if (searchParams.minArea) {
      where.sqftSuperBuiltUp.greater_than_equal = parseFloat(searchParams.minArea as string);
    }
    if (searchParams.maxArea) {
      where.sqftSuperBuiltUp.less_than_equal = parseFloat(searchParams.maxArea as string);
    }
  }

  if (searchParams.city) {
    where['location.city'] = { contains: searchParams.city };
  }

  if (searchParams.search) {
    where.or = [
      { title: { contains: searchParams.search } },
      { 'location.city': { contains: searchParams.search } },
      { 'location.address': { contains: searchParams.search } },
    ];
  }

  const { docs: properties, totalDocs } = await payload.find({
    collection: 'properties',
    where,
    limit: 50,
    sort: '-createdAt',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-2">
            Properties for Sale
          </h1>
          <p className="text-gray-600">
            {totalDocs} {totalDocs === 1 ? 'property' : 'properties'} found
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <aside className="lg:w-80 flex-shrink-0">
            <FilterSidebar type="properties" />
          </aside>

          {/* Results */}
          <main className="flex-1">
            {properties.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">
                  No properties found matching your criteria.
                </p>
                <p className="text-gray-500 mt-2">
                  Try adjusting your filters or search terms.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property: any) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
