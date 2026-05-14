import Link from 'next/link';
import Image from 'next/image';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { formatPrice } from '@/lib/utils';

interface PropertyCardProps {
  property: {
    id: string;
    slug: string;
    title: string;
    price: number;
    priceLabel?: string;
    bedrooms: number;
    bathrooms: number;
    sqftSuperBuiltUp: number;
    status: string;
    location: {
      city: string;
      address: string;
    };
    gallery: Array<{
      image: {
        url?: string;
        filename?: string;
      };
    }>;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const imageUrl = property.gallery?.[0]?.image?.url || '/placeholder.jpg';
  const isSoldOrBooked = property.status === 'sold' || property.status === 'booked';

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {isSoldOrBooked && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-lg uppercase">
              {property.status}
            </span>
          </div>
        )}
        {property.status === 'available' && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Available
          </div>
        )}
      </div>

      <CardContent className="p-5">
        <div className="mb-3">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <MapPin size={16} className="mr-1" />
            <span className="line-clamp-1">{property.location.city}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 pb-4 border-b">
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Bed size={18} className="mr-1" />
              <span className="text-sm">{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath size={18} className="mr-1" />
              <span className="text-sm">{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Maximize size={18} className="mr-1" />
              <span className="text-sm">{property.sqftSuperBuiltUp} sqft</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">
              {property.priceLabel || formatPrice(property.price)}
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href={`/properties/${property.slug}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
