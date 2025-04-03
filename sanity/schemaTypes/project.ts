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
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description:
                'Important for SEO and accessibility. Leave empty if not applicable.',
            },
          ],
        },
      ],
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
    // begin new gallery field
    {
      name: 'galleryImages',
      type: 'array',
      title: 'Gallery Images',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Important for SEO and accessibility.',
            },
          ],
        },
      ],
    },
    // project sort order field
    // This field is used to determine the order in which projects are displayed
    // in the project list. Projects with lower sortOrder values will appear first.
    {
      name: 'sortOrder',
      type: 'number',
      title: 'Sort Order',
      description: 'Determines the order in which projects are displayed.',
    },
  ],
});