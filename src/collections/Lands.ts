import type { CollectionConfig } from 'payload';
import { slugify } from '../lib/utils';

export const Lands: CollectionConfig = {
  slug: 'lands',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'price', 'totalArea'],
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
      name: 'totalArea',
      type: 'number',
      required: true,
      admin: {
        description: 'Total area in selected unit',
      },
    },
    {
      name: 'areaUnit',
      type: 'select',
      required: true,
      defaultValue: 'sqft',
      options: [
        { label: 'Square Feet', value: 'sqft' },
        { label: 'Cents', value: 'cents' },
        { label: 'Acres', value: 'acres' },
        { label: 'Guntas', value: 'guntas' },
      ],
    },
    {
      name: 'dimensions',
      type: 'text',
      admin: {
        description: 'e.g., 40x60 ft',
      },
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'pricePerUnit',
      type: 'number',
      admin: {
        description: 'Price per cent/sqft',
      },
    },
    {
      name: 'zoning',
      type: 'select',
      required: true,
      options: [
        { label: 'Residential', value: 'residential' },
        { label: 'Commercial', value: 'commercial' },
        { label: 'Agricultural', value: 'agricultural' },
        { label: 'Industrial', value: 'industrial' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'images',
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
      name: 'masterPlan',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'brochure',
      type: 'upload',
      relationTo: 'media',
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
