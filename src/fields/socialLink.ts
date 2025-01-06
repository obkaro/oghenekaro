import type { Field } from 'payload'

import deepMerge from '@/utilities/deepMerge'

export type LinkAppearances = 'default' | 'monochrome'

export const appearanceOptions: Record<LinkAppearances, { label: string; value: string }> = {
  default: {
    label: 'Default',
    value: 'default',
  },
  monochrome: {
    label: 'Monochrome',
    value: 'monochrome',
  },
}

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false
  overrides?: Record<string, unknown>
}) => Field

export const socialLink: LinkType = ({ appearances, overrides = {} } = {}) => {
  const socialLinkResult: Field = {
    name: 'socialLink',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'select' as const,
            admin: {
              width: '50%',
            },
            defaultValue: 'linkedin',
            options: [
              {
                label: 'LinkedIn',
                value: 'linkedin',
              },
              {
                label: 'Email',
                value: 'email',
              },
              { label: 'GitHub', value: 'github' },
              {
                label: 'Instagram',
                value: 'instagram',
              },
              {
                label: 'Facebook',
                value: 'facebook',
              },
              {
                label: 'X',
                value: 'x',
              },
            ],
            required: true,
          },
          ...(appearances !== false
            ? [
                {
                  name: 'appearance',
                  type: 'select' as const,
                  admin: {
                    width: '50%',
                  },
                  defaultValue: 'default',
                  options: appearances
                    ? appearances.map((appearance) => appearanceOptions[appearance])
                    : [appearanceOptions.default, appearanceOptions.monochrome],
                },
              ]
            : []),
        ],
      },
      {
        type: 'row',
        fields: [
          {
            name: 'handle',
            type: 'text',
            admin: {
              width: '50%',
              description: 'Username or handle (e.g. @username)',
            },
          },
          {
            name: 'url',
            type: 'text',
            admin: {
              width: '50%',
              description: 'Full URL to profile',
            },
            required: true,
          },
        ],
      },
    ],
  }

  return deepMerge(socialLinkResult, overrides)
}
