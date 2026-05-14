import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@/payload.config';

async function seed() {
  console.log('🌱 Starting database seed...');

  const payload = await getPayloadHMR({ config: configPromise });

  try {
    // Create sample properties
    console.log('Creating sample properties...');
    
    const property1 = await payload.create({
      collection: 'properties',
      data: {
        title: 'Luxurious 3 BHK Villa with Private Garden',
        slug: 'luxurious-3-bhk-villa-with-private-garden',
        status: 'available',
        type: 'villa',
        price: 8500000,
        priceLabel: '₹85 Lakhs',
        bedrooms: 3,
        bathrooms: 3,
        sqftSuperBuiltUp: 2200,
        sqftCarpet: 1800,
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Stunning independent villa with modern architecture, spacious rooms, and a beautiful garden. Located in a premium gated community with world-class amenities.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        location: {
          address: 'Villa No. 12, Palm Meadows, Sarjapur Road',
          city: 'Bangalore',
          state: 'Karnataka',
          latitude: 12.9082,
          longitude: 77.7832,
        },
        amenities: [
          { item: 'Modular Kitchen' },
          { item: 'Private Garden' },
          { item: 'Covered Parking' },
          { item: 'Security System' },
          { item: 'Power Backup' },
        ],
        yearBuilt: 2022,
        parking: 2,
        furnishingStatus: 'semi-furnished',
        featured: true,
        metaTitle: 'Luxurious 3 BHK Villa for Sale in Sarjapur Road, Bangalore',
        metaDescription: 'Beautiful 3 bedroom villa with private garden, modern amenities, and premium finishes. Perfect for families.',
      },
    });

    const property2 = await payload.create({
      collection: 'properties',
      data: {
        title: 'Spacious 2 BHK Apartment with City View',
        slug: 'spacious-2-bhk-apartment-with-city-view',
        status: 'available',
        type: 'apartment',
        price: 5500000,
        priceLabel: '₹55 Lakhs',
        bedrooms: 2,
        bathrooms: 2,
        sqftSuperBuiltUp: 1250,
        sqftCarpet: 1050,
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Well-maintained apartment with excellent ventilation and natural light. Prime location with easy access to schools, hospitals, and shopping centers.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        location: {
          address: 'Flat 304, Tower B, Prestige Apartments, 100 Feet Road',
          city: 'Bangalore',
          state: 'Karnataka',
          latitude: 12.9784,
          longitude: 77.6408,
        },
        amenities: [
          { item: 'Gym' },
          { item: 'Swimming Pool' },
          { item: 'Power Backup' },
          { item: 'Lift' },
          { item: 'Visitor Parking' },
        ],
        yearBuilt: 2020,
        parking: 1,
        furnishingStatus: 'unfurnished',
        featured: true,
      },
    });

    const property3 = await payload.create({
      collection: 'properties',
      data: {
        title: 'Elegant 4 BHK Independent House',
        slug: 'elegant-4-bhk-independent-house',
        status: 'booked',
        type: 'independent-house',
        price: 12000000,
        priceLabel: '₹1.2 Cr',
        bedrooms: 4,
        bathrooms: 4,
        sqftSuperBuiltUp: 3000,
        sqftCarpet: 2500,
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Beautifully designed independent house with premium finishes. Perfect for large families seeking comfort and luxury.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        location: {
          address: 'House No. 567, 5th Block, Koramangala',
          city: 'Bangalore',
          state: 'Karnataka',
          latitude: 12.9352,
          longitude: 77.6245,
        },
        amenities: [
          { item: 'Home Theater' },
          { item: 'Terrace Garden' },
          { item: 'Solar Panels' },
          { item: 'Smart Home Features' },
        ],
        yearBuilt: 2021,
        parking: 3,
        furnishingStatus: 'furnished',
        featured: false,
      },
    });

    console.log('✅ Created 3 sample properties');

    // Create sample lands
    console.log('Creating sample lands...');

    const land1 = await payload.create({
      collection: 'lands',
      data: {
        title: 'Premium Residential Plot in Green Valley',
        slug: 'premium-residential-plot-in-green-valley',
        status: 'available',
        totalArea: 2400,
        areaUnit: 'sqft',
        dimensions: '40x60 ft',
        price: 4500000,
        pricePerUnit: 1875,
        zoning: 'residential',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Spacious residential plot in a gated community with excellent connectivity. Perfect for building your dream home.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        location: {
          address: 'Plot No. 45, Green Valley Layout, Phase 2',
          city: 'Bangalore',
          state: 'Karnataka',
          latitude: 12.9716,
          longitude: 77.5946,
        },
        featured: true,
      },
    });

    const land2 = await payload.create({
      collection: 'lands',
      data: {
        title: 'Commercial Land Near IT Hub',
        slug: 'commercial-land-near-it-hub',
        status: 'available',
        totalArea: 5000,
        areaUnit: 'sqft',
        dimensions: '50x100 ft',
        price: 12000000,
        pricePerUnit: 2400,
        zoning: 'commercial',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Prime commercial land with high visibility and excellent ROI potential. Ideal for retail or office development.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        location: {
          address: 'Survey No. 123, Whitefield Main Road',
          city: 'Bangalore',
          state: 'Karnataka',
          latitude: 12.9698,
          longitude: 77.7499,
        },
        featured: true,
      },
    });

    console.log('✅ Created 2 sample lands');

    // Create sample project
    console.log('Creating sample project...');

    const project1 = await payload.create({
      collection: 'projects',
      data: {
        siteName: 'Sunrise Residency',
        slug: 'sunrise-residency',
        status: 'ongoing',
        totalUnits: 120,
        launchDate: '2024-06-01',
        possessionDate: '2026-12-31',
        reraNumber: 'PRM/KA/RERA/1251/446/PR/171120/003789',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Modern residential enclave with world-class amenities. 120 premium apartments with 2, 3, and 4 BHK configurations. Located in the heart of Electronic City with excellent connectivity.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        location: {
          address: 'Electronic City Phase 1, Hosur Road',
          city: 'Bangalore',
          state: 'Karnataka',
          latitude: 12.8456,
          longitude: 77.6603,
        },
        amenities: [
          { item: 'Swimming Pool' },
          { item: 'Gym' },
          { item: 'Clubhouse' },
          { item: 'Children Play Area' },
          { item: '24/7 Security' },
          { item: 'Power Backup' },
          { item: 'Landscaped Gardens' },
        ],
        startingPrice: 5000000,
        priceRange: '₹50L - ₹1.2Cr',
        featured: true,
      },
    });

    console.log('✅ Created 1 sample project');

    console.log('🎉 Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log('- 3 Properties created');
    console.log('- 2 Lands created');
    console.log('- 1 Project created');
    console.log('\n✨ You can now view these in the admin panel at /admin');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }

  process.exit(0);
}

seed();
