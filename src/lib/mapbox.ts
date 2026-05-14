export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

export const DEFAULT_CENTER: [number, number] = [77.5946, 12.9716]; // Bangalore
export const DEFAULT_ZOOM = 11;

export interface MapPin {
  id: string;
  type: 'property' | 'land' | 'project';
  title: string;
  latitude: number;
  longitude: number;
  price?: number;
  image?: string;
  slug: string;
  status: string;
}
