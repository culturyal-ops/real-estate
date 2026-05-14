import Link from 'next/link';
import Image from 'next/image';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    siteName: string;
    totalUnits: number;
    priceRange?: string;
    status: string;
    possessionDate?: string;
    location: {
      city: string;
    };
    gallery: Array<{
      image: {
        url?: string;
      };
    }>;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = project.gallery?.[0]?.image?.url || '/placeholder.jpg';

  const statusColors = {
    upcoming: 'bg-blue-600',
    ongoing: 'bg-amber-600',
    completed: 'bg-green-600',
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={project.siteName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className={`absolute top-4 right-4 ${statusColors[project.status as keyof typeof statusColors]} text-white px-3 py-1 rounded-full text-sm font-semibold capitalize`}>
          {project.status}
        </div>
      </div>

      <CardContent className="p-5">
        <div className="mb-3">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {project.siteName}
          </h3>
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <MapPin size={16} className="mr-1" />
            <span className="line-clamp-1">{project.location.city}</span>
          </div>
        </div>

        <div className="space-y-2 mb-4 pb-4 border-b text-sm text-gray-600">
          <div className="flex items-center">
            <Building2 size={18} className="mr-2" />
            <span>{project.totalUnits} Units</span>
          </div>
          {project.possessionDate && (
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>Possession: {new Date(project.possessionDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            {project.priceRange && (
              <p className="text-lg font-bold text-primary">
                {project.priceRange}
              </p>
            )}
          </div>
          <Button asChild variant="outline">
            <Link href={`/projects/${project.slug}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
