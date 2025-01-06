import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      heroText?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      heroText?: Page['hero']['heroText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, heroText }) => {
  return (
    <div className="container mt-16">
      <div className="max-w-[48rem]">
        {children || (heroText && <RichText data={heroText} enableGutter={false} />)}
      </div>
    </div>
  )
}
