import { Block } from 'payload'

export const DoingsAccordion: Block = {
  slug: 'doingsAccordion',
  interfaceName: 'DoingsAccordionBlockType',
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
      name: 'infoText',
      type: 'text',
    },
    {
      name: 'doings',
      type: 'array',
      fields: [
        {
          name: 'doing',
          type: 'relationship',
          relationTo: 'doings',
          required: true,
        },
      ],
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
