import LandCard from '@/components/LandCard';
import { mockLands } from '@/lib/mockData';

export default function LandsPage() {
  const lands = mockLands;
  const totalDocs = lands.length;

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
        <main className="w-full">
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
  );
}
