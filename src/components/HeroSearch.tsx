'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function HeroSearch() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('properties');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/${searchType}?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push(`/${searchType}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-4 flex flex-col md:flex-row gap-4"
    >
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Search by location, property type, or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-12 text-base"
        />
      </div>
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="h-12 px-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="properties">Properties</option>
        <option value="lands">Lands</option>
        <option value="projects">Projects</option>
      </select>
      <Button type="submit" size="lg" className="h-12 px-8">
        <Search className="mr-2" size={20} />
        Search
      </Button>
    </form>
  );
}
