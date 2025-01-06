'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { SocialIconGroup, type SocialLink } from '@/components/SocialIcon'

export const HighImpactHero: React.FC<Page['hero']> = ({
  links,
  socialLinks,
  media,
  heroText,
  kicker,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })
  console.log(links)

  // Transform social links to the format expected by SocialIconGroup
  const validSocialLinks: SocialLink[] =
    socialLinks
      ?.filter((link) => link.socialLink?.type && link.socialLink?.url)
      .map((link) => ({
        platform: link.socialLink.type,
        handle: link.socialLink.handle || undefined,
        url: link.socialLink.url,
      })) ?? []

  return (
    <div
      className="relative -mt-[6rem] py-12 flex items-center justify-center text-white"
      data-theme="dark"
    >
      <div className="container z-10 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] md:text-center">
          {kicker && (
            <RichText
              className="mb-16 leading-none [&_h2]:mb-1"
              data={kicker}
              enableGutter={false}
            />
          )}
          {heroText && (
            <RichText className="mb-16 [&_h1]:text-6xl" data={heroText} enableGutter={false} />
          )}
          <div className="flex flex-col items-start md:items-center gap-4">
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex flex-wrap gap-4">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
            {validSocialLinks.length > 0 && (
              <div className="flex">
                <SocialIconGroup
                  links={validSocialLinks}
                  className="text-white hover:text-white/80"
                  size={20}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="min-h-[60vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover brightness-30" priority resource={media} />
        )}
      </div>
    </div>
  )
}
