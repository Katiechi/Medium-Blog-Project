import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'medium_blog',

  projectId: 'bddxsrt5',
  dataset: 'medium',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
