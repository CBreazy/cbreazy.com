// sanity/sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'cbreazy.com', // Replace with your project title
  projectId: 'k6zzea0g'!, // Note: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID is not working
  dataset: 'production', // Note: process.env.NEXT_PUBLIC_SANITY_DATASET is not working
  plugins: [structureTool()],
  schema: {
    types: schema.types,
  },
});