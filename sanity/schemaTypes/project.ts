import { defineType } from 'sanity';

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
    },
    {
      name: 'subheading',
      type: 'text',
      title: 'Subheading',
    },
    {
      name: 'description',
      type: 'text', // Changed to 'text' type
      title: 'Description',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [{ type: 'string' }],
    },
    {
      name: 'integrations',
      type: 'array',
      title: 'Integrations',
      of: [{ type: 'string' }],
    },
  ],
});