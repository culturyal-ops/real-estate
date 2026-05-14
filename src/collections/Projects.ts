import type { CollectionConfig } from 'payload';
import { slugify } from '../lib/utils';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'siteName',
    defaultColumns: ['siteName', 'status', 'totalUnits', 'launchDate'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ data, operation }) => {
            if (operation === 'create' && data?.siteName && !data?.slug) {
              return slugify(data.siteName);
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
      defaultValue: 'upcoming',
      options: [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Ongoing', value: 'ongoing' },
        { label: 'Completed', value: 'completed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'totalUnits',
      type: 'number',
      required: true,
    },
    {
      name: 'launchDate',
      type: 'date',
    },
    {
      name: 'possessionDate',
      type: 'date',
    },
    {
      name: 'reraNumber',
      type: 'text',
      admin: {
        description: 'RERA registration number',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'layoutPlan',
      type: 'upload',
      relationTo: 'media',
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
      name: 'brochure',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'promoVideoUrl',
      type: 'text',
      admin: {
        description: 'YouTube or Vimeo video URL',
      },
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
        },
        {
          name: 'longitude',
          type: 'number',
        },
      ],
    },
    {
      name: 'startingPrice',
      type: 'number',
    },
    {
      name: 'priceRange',
      type: 'text',
      admin: {
        description: 'e.g., ₹50L - ₹1.2Cr',
      },
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
    },
    {
      name: 'metaDescription',
      type: 'textarea',
    },
  ],
};
