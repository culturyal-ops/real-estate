import LandCard from '@/components/LandCard';
import FilterSidebar from '@/components/FilterSidebar';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@/payload.config';

export default async function LandsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const payload = await getPayloadHMR({ config: configPromise });

  const where: any = {};

  if (searchParams.status) {
    where.status = { equals: searchParams.status };
  } else {
    where.status = { equals: 'available' };
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
    where.totalArea = {};
    if (searchParams.minArea) {
      where.totalArea.greater_than_equal = parseFloat(searchParams.minArea as string);
    }
    if (searchParams.maxArea) {
      where.totalArea.less_than_equal = parseFloat(searchParams.maxArea as string);
    }
  }

  if (searchParams.city) {
    where['location.city'] = { contains: searchParams.city };
  }

  const { docs: lands, totalDocs } = await payload.find({
    collection: 'lands',
    where,
    limit: 50,
    sort: '-createdAt',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-2">
            Land Plots for Sale
          </h1>
          <p className="text-gray-600">
            {totalDocs} {totalDocs === 1 ? 'plot' : 'plots'} found
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 flex-shrink-0">
            <FilterSidebar type="lands" />
          </aside>

          <main className="flex-1">
            {lands.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">
                  No land plots found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {lands.map((land: any) => (
                  <LandCard key={land.id} land={land} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
