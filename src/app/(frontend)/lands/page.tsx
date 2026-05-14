import LandCard from '@/components/LandCard';
import FilterSidebar from '@/components/FilterSidebar';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@/payload.config';

// Force dynamic rendering since we need database access
export const dynamic = 'force-dynamic';

export default async function LandsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const payload = await getPayloadHMR({ config: configPromise });
  const params = await searchParams;

  const where: any = {};

  if (params.status) {
    where.status = { equals: params.status };
  } else {
    where.status = { equals: 'available' };
  }

  if (params.minPrice || params.maxPrice) {
    where.price = {};
    if (params.minPrice) {
      where.price.greater_than_equal = parseFloat(params.minPrice as string);
    }
    if (params.maxPrice) {
      where.price.less_than_equal = parseFloat(params.maxPrice as string);
    }
  }

  if (params.minArea || params.maxArea) {
    where.totalArea = {};
    if (params.minArea) {
      where.totalArea.greater_than_equal = parseFloat(params.minArea as string);
    }
    if (params.maxArea) {
      where.totalArea.less_than_equal = parseFloat(params.maxArea as string);
    }
  }

  if (params.city) {
    where['location.city'] = { contains: params.city };
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
