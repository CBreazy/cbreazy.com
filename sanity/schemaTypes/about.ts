// sanity/schemaTypes/about.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'bio',
      type: 'array',
      title: 'Bio',
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
              description: 'Important for SEO and accessibility.',
            },
          ],
        },
      ],
    },
    {
      name: 'headshot',
      type: 'image',
      title: 'Headshot',
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
      name: 'contactInfo',
      type: 'object',
      title: 'Contact Information',
      fields: [
        {
          name: 'email',
          type: 'string',
          title: 'Email',
        },
        {
          name: 'linkedin',
          type: 'url',
          title: 'LinkedIn',
        },
        {
          name: 'github',
          type: 'url',
          title: 'GitHub',
        },
      ],
    },
  ],
});