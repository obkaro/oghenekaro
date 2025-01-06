import type { ArrayField, Field } from 'payload'

import type { LinkAppearances } from './socialLink'

import deepMerge from '@/utilities/deepMerge'
import { socialLink } from './socialLink'

type SocialLinkGroupType = (options?: {
  appearances?: LinkAppearances[] | false
  overrides?: Partial<ArrayField>
}) => Field

export const socialLinkGroup: SocialLinkGroupType = ({ appearances, overrides = {} } = {}) => {
  const generatedSocialLinkGroup: Field = {
    name: 'socialLinks',
    type: 'array',
    fields: [socialLink({ appearances })],
    admin: {
      initCollapsed: true,
    },
  }

  return deepMerge(generatedSocialLinkGroup, overrides)
}
