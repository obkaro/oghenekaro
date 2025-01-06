import RichText from '@/components/RichText'

import type { ProseTextBlockType as ProseTextBlockProps } from '@/payload-types'
import { cn } from '@/utilities/cn'

export const ProseTextBlock: React.FC<ProseTextBlockProps> = ({ text, topMargin }) => {
  const margin =
    topMargin === 'negative' ? 'mt-0 h-sm:mt-[-4rem] h-md:mt-[-8rem] h-lg:mt-[-12rem]' : ''

  return (
    <div className={cn('container max-w-screen-sm', margin)}>
      <div className="bg-card rounded-none border-none p-8 md:p-12">
        {text && <RichText data={text} enableGutter={false} />}
      </div>
    </div>
  )
}
