import type { CollectionConfig } from 'payload';
import { slugify } from '../lib/utils';

export const Properties: CollectionConfig = {
  slug: 'properties',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'price', 'bedrooms'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-generated from title. Can be manually overridden.',
      },
      hooks: {
        beforeValidate: [
          ({ data, operation }) => {
            if (operation === 'create' && data?.title && !data?.slug) {
              return slugify(data.title);
            }
            return data?.slug;
          },
        ],
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'available',
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Booked', value: 'booked' },
        { label: 'Sold', value: 'sold' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Villa', value: 'villa' },
        { label: 'Apartment', value: 'apartment' },
        { label: 'Independent House', value: 'independent-house' },
      ],
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      admin: {
        description: 'Price in INR',
      },
    },
    {
      name: 'priceLabel',
      type: 'text',
      admin: {
        description: 'e.g., ₹45 Lakhs or ₹1.2 Cr',
      },
    },
    {
      name: 'bedrooms',
      type: 'number',
      required: true,
    },
    {
      name: 'bathrooms',
      type: 'number',
      required: true,
    },
    {
      name: 'sqftSuperBuiltUp',
      type: 'number',
      required: true,
      admin: {
        description: 'Super built-up area in sq. ft.',
      },
    },
    {
      name: 'sqftCarpet',
      type: 'number',
      admin: {
        description: 'Carpet area in sq. ft.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'floorPlan',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'brochure',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'PDF brochure for download',
      },
    },
    {
      name: 'virtualTourUrl',
      type: 'text',
      admin: {
        description: 'Paste 360° tour link (Matterport, etc.)',
      },
    },
    {
      name: 'location',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'state',
          type: 'text',
          required: true,
        },
        {
          name: 'latitude',
          type: 'number',
          admin: {
            description: 'Click on map to set coordinates',
          },
        },
        {
          name: 'longitude',
          type: 'number',
        },
      ],
    },
    {
      name: 'amenities',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'yearBuilt',
      type: 'number',
    },
    {
      name: 'parking',
      type: 'number',
      admin: {
        description: 'Number of parking spaces',
      },
    },
    {
      name: 'furnishingStatus',
      type: 'select',
      options: [
        { label: 'Furnished', value: 'furnished' },
        { label: 'Semi-Furnished', value: 'semi-furnished' },
        { label: 'Unfurnished', value: 'unfurnished' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'metaTitle',
      type: 'text',
      admin: {
        description: 'SEO title (leave empty to use property title)',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      admin: {
        description: 'SEO description for search engines',
      },
    },
  ],
};
