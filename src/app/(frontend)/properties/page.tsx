import PropertyCard from '@/components/PropertyCard';
import { mockProperties } from '@/lib/mockData';

export default function PropertiesPage() {
  const properties = mockProperties;
  const totalDocs = properties.length;

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
        <main className="w-full">
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
  );
}
