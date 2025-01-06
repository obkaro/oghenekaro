// Dependencies: pnpm install lucide-react

import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'
import { Progress } from '@/components/ui/progress'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Bell, LifeBuoy, Link2, Plus, ShieldCheck } from 'lucide-react'
import type { Doing, DoingsAccordionBlockType as DoingsAccordionBlockProps } from '@/payload-types'

export const DoingsAccordionBlock: React.FC<DoingsAccordionBlockProps> = ({
  title,
  description,
  infoText,
  doings,
}) => {
  // doings.map((item) => {
  //   console.log(item.doing)
  // })
  return (
    <div className="container max-w-screen-md py-12 space-y-4">
      {title && <h2 className="text-xl font-bold md:text-center">{title}</h2>}
      {description && <p className="text-muted-foreground">{description}</p>}
      <Accordion type="single" collapsible className="w-full">
        {doings?.map((item) => {
          if (!item?.doing) return null
          const doing = item.doing as Doing

          return (
            <AccordionItem value={String(doing.id)} key={doing.id} className="py-2">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                  <span className="flex items-center gap-3 w-full">
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border"
                      aria-hidden="true"
                    >
                      <Link2 size={16} strokeWidth={2} className="opacity-60" />
                    </span>
                    <span className="flex flex-col space-y-2 w-full">
                      <span>{doing.title}</span>
                      {/* {doing.description && (
                        <span className="text-sm font-normal text-muted-foreground">
                          {doing.description}
                        </span>
                      )} */}
                      {doing.level && (
                        <div className="pr-4">
                          <Progress value={doing.level} />
                        </div>
                      )}
                    </span>
                  </span>
                  <Plus
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 opacity-60 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="ms-3 py-6 ps-10 text-muted-foreground">
                {doing.description}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
      {infoText && <p className="text-sm text-muted-foreground">{infoText}</p>}
    </div>
  )
}
