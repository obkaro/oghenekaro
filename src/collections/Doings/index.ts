import { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
// import { Content } from '@/blocks/Content/config'
// import { DoingsAccordion } from '@/blocks/DoingsAccordion/config'

export const Doings: CollectionConfig = {
  slug: 'doings',
  access: {
    create: authenticated,
    read: () => true,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'tools',
      type: 'relationship',
      relationTo: 'tools',
      hasMany: true,
    },
    {
      name: 'level',
      type: 'number',
      required: true,
      admin: {
        position: 'sidebar',
      },
      validate: (value: number) => {
        return (value >= 0 && value <= 100) || 'Level must be between 0 and 100'
      },
    },
  ],
}
