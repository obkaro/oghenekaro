import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  HeadingFeature,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const ProseText: Block = {
  slug: 'proseText',
  interfaceName: 'ProseTextBlockType',
  fields: [
    {
      name: 'text',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'topMargin',
      type: 'select',
      options: [
        {
          label: 'Negative',
          value: 'negative',
        },
        {
          label: 'Regular',
          value: 'regular',
        },
      ],
      defaultValue: 'regular',
    },
  ],
}
