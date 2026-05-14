'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface FilterSidebarProps {
  type: 'properties' | 'lands' | 'projects';
}

export default function FilterSidebar({ type }: FilterSidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    minArea: searchParams.get('minArea') || '',
    maxArea: searchParams.get('maxArea') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    type: searchParams.get('type') || '',
    status: searchParams.get('status') || 'available',
    city: searchParams.get('city') || '',
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    router.push(`/${type}?${params.toString()}`);
  };

  const clearFilters = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      minArea: '',
      maxArea: '',
      bedrooms: '',
      type: '',
      status: 'available',
      city: '',
    });
    router.push(`/${type}`);
  };

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <Label className="mb-2 block">Price Range (₹)</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            />
          </div>
        </div>

        {/* Property Type (for properties only) */}
        {type === 'properties' && (
          <>
            <div>
              <Label className="mb-2 block">Property Type</Label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
              >
                <option value="">All Types</option>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
                <option value="independent-house">Independent House</option>
              </select>
            </div>

            <div>
              <Label className="mb-2 block">Bedrooms</Label>
              <select
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
              >
                <option value="">Any</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4+ BHK</option>
              </select>
            </div>
          </>
        )}

        {/* Area Range */}
        <div>
          <Label className="mb-2 block">Area (sq. ft.)</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.minArea}
              onChange={(e) => handleFilterChange('minArea', e.target.value)}
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.maxArea}
              onChange={(e) => handleFilterChange('maxArea', e.target.value)}
            />
          </div>
        </div>

        {/* City */}
        <div>
          <Label className="mb-2 block">City</Label>
          <Input
            type="text"
            placeholder="Enter city"
            value={filters.city}
            onChange={(e) => handleFilterChange('city', e.target.value)}
          />
        </div>

        {/* Status */}
        <div>
          <Label className="mb-2 block">Status</Label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background"
          >
            <option value="available">Available Only</option>
            <option value="">All (Including Sold/Booked)</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="space-y-2 pt-4">
          <Button onClick={applyFilters} className="w-full">
            Apply Filters
          </Button>
          <Button onClick={clearFilters} variant="outline" className="w-full">
            Clear All
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
