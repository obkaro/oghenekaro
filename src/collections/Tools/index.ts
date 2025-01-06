import { authenticated } from '@/access/authenticated'
import { CollectionConfig } from 'payload'

export const Tools: CollectionConfig = {
  slug: 'tools',
  access: {
    read: () => true,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedDoings',
      type: 'join',
      collection: 'doings',
      on: 'tools',
    },
  ],
}
