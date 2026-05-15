import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Bed, Bath, Maximize, MapPin, AlertCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InquiryForm from '@/components/InquiryForm';
import { formatPrice, formatArea } from '@/lib/utils';
import type { Metadata } from 'next';
import { mockProperties } from '@/lib/mockData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = mockProperties.find(p => p.slug === slug);

  if (!property) return {};

  const imageUrl = property.gallery?.[0]?.image?.url || '';

  return {
    title: `${property.title} - BuildBase`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: imageUrl ? [imageUrl] : [],
      type: 'website',
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = mockProperties.find(p => p.slug === slug);

  if (!property) notFound();

  const isSoldOrBooked = property.status === 'sold' || property.status === 'booked';

  // Get similar properties
  const similarProperties = mockProperties
    .filter(p => 
      p.id !== property.id && 
      p.location.city === property.location.city && 
      p.status === 'available'
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {property.gallery?.slice(0, 4).map((item: any, index: number) => (
              <div
                key={index}
                className={`relative ${index === 0 ? 'md:row-span-2 aspect-[4/3] md:aspect-auto' : 'aspect-[4/3]'} overflow-hidden rounded-lg`}
              >
                <Image
                  src={item.image?.url || '/placeholder.jpg'}
                  alt={property.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>{property.location.address}, {property.location.city}</span>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  property.status === 'available' ? 'bg-green-100 text-green-800' :
                  property.status === 'booked' ? 'bg-amber-100 text-amber-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {property.status.toUpperCase()}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-3xl font-bold text-primary">
                  {property.priceLabel || formatPrice(property.price)}
                </div>
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center">
                    <Bed size={20} className="mr-2" />
                    <span className="font-semibold">{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={20} className="mr-2" />
                    <span className="font-semibold">{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize size={20} className="mr-2" />
                    <span className="font-semibold">{formatArea(property.sqftSuperBuiltUp)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                About This Property
              </h2>
              <div className="prose max-w-none text-gray-600">
                {property.description}
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Property Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-b pb-3">
                  <div className="text-sm text-gray-600">Property Type</div>
                  <div className="font-semibold capitalize">{property.type.replace('-', ' ')}</div>
                </div>
                <div className="border-b pb-3">
                  <div className="text-sm text-gray-600">Super Built-up Area</div>
                  <div className="font-semibold">{formatArea(property.sqftSuperBuiltUp)}</div>
                </div>
                {property.sqftCarpet && (
                  <div className="border-b pb-3">
                    <div className="text-sm text-gray-600">Carpet Area</div>
                    <div className="font-semibold">{formatArea(property.sqftCarpet)}</div>
                  </div>
                )}
                {property.yearBuilt && (
                  <div className="border-b pb-3">
                    <div className="text-sm text-gray-600">Year Built</div>
                    <div className="font-semibold">{property.yearBuilt}</div>
                  </div>
                )}
                {property.parking && (
                  <div className="border-b pb-3">
                    <div className="text-sm text-gray-600">Parking</div>
                    <div className="font-semibold">{property.parking} Spaces</div>
                  </div>
                )}
                {property.furnishingStatus && (
                  <div className="border-b pb-3">
                    <div className="text-sm text-gray-600">Furnishing</div>
                    <div className="font-semibold capitalize">{property.furnishingStatus.replace('-', ' ')}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Amenities */}
            {property.amenities && property.amenities.length > 0 && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity: any, index: number) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {amenity.item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {isSoldOrBooked ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">
                      Property {property.status === 'sold' ? 'Sold' : 'Booked'}
                    </h3>
                    <p className="text-red-700 text-sm">
                      This property is no longer available. Browse our other listings or contact us for similar properties.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-20">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  Interested in this property?
                </h3>
                <InquiryForm
                  inquiryType="property"
                  relatedListing={property.slug}
                />
              </div>
            )}

            {property.brochure && (
              <Button asChild className="w-full" variant="outline">
                <a href={property.brochure.url} download>
                  <Download className="mr-2" size={18} />
                  Download Brochure
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              Similar Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((prop: any) => (
                <div key={prop.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={prop.gallery[0].image.url}
                      alt={prop.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{prop.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{prop.location.address}</p>
                    <p className="text-primary font-bold text-xl">{prop.priceLabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
