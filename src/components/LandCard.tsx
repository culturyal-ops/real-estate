import Link from 'next/link';
import Image from 'next/image';
import { Maximize, MapPin, Tag } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { formatPrice, formatArea } from '@/lib/utils';

interface LandCardProps {
  land: {
    id: string;
    slug: string;
    title: string;
    price: number;
    totalArea: number;
    areaUnit: string;
    zoning: string;
    status: string;
    location: {
      city: string;
      address: string;
    };
    images: Array<{
      image: {
        url?: string;
      };
    }>;
  };
}

export default function LandCard({ land }: LandCardProps) {
  const imageUrl = land.images?.[0]?.image?.url || '/placeholder.jpg';
  const isSoldOrBooked = land.status === 'sold' || land.status === 'booked';

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={land.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {isSoldOrBooked && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-lg uppercase">
              {land.status}
            </span>
          </div>
        )}
        {land.status === 'available' && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Available
          </div>
        )}
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
          {land.zoning}
        </div>
      </div>

      <CardContent className="p-5">
        <div className="mb-3">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {land.title}
          </h3>
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <MapPin size={16} className="mr-1" />
            <span className="line-clamp-1">{land.location.city}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 pb-4 border-b">
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Maximize size={18} className="mr-1" />
              <span className="text-sm">{formatArea(land.totalArea, land.areaUnit)}</span>
            </div>
            <div className="flex items-center">
              <Tag size={18} className="mr-1" />
              <span className="text-sm capitalize">{land.zoning}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">
              {formatPrice(land.price)}
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href={`/lands/${land.slug}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
