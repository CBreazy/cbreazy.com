// sanity/schemaTypes/project.ts
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
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    // ... other fields
  ],
});