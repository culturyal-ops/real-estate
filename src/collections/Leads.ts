import type { CollectionConfig } from 'payload';

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'inquiryType', 'status', 'createdAt'],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'inquiryType',
      type: 'select',
      required: true,
      options: [
        { label: 'Property', value: 'property' },
        { label: 'Land', value: 'land' },
        { label: 'Project', value: 'project' },
        { label: 'General', value: 'general' },
        { label: 'Schedule Visit', value: 'schedule-visit' },
      ],
    },
    {
      name: 'relatedListing',
      type: 'text',
      admin: {
        description: 'Slug of the listing inquired about',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [
      async ({ operation, doc }) => {
        if (operation === 'create') {
          // Send email notification to admin
          try {
            const { sendLeadNotification } = await import('../lib/resend');
            await sendLeadNotification(doc);
          } catch (error) {
            console.error('Failed to send lead notification:', error);
          }
        }
      },
    ],
  },
};
