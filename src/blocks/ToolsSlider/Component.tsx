import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ToolsSliderBlockType, Media } from '@/payload-types'
import Image from 'next/image'
import { Tool } from '@/payload-types'

export const ToolsSlider: React.FC<ToolsSliderBlockType> = ({ tools, title }) => {
  return (
    <div className="flex items-center">
      <h3 className="text-2xl font-bold bg-black dark:bg-white dark:text-black text-white p-6 border-none leading-relaxed">
        {title}
      </h3>
      <InfiniteSlider durationOnHover={120} gap={120}>
        {tools?.map(({ id, tool }: { id: string; tool: Tool }) => {
          if (!tool) return null
          const logoUrl = tool.logo && typeof tool.logo !== 'number' ? tool.logo.url : null
          return (
            <div key={id} className="flex items-center gap-2">
              {logoUrl && (
                <Image
                  src={logoUrl}
                  alt={tool.name}
                  width={80}
                  height={80}
                  className="aspect-square rounded-[4px] dark:invert dark:brightness-0"
                />
              )}
              <h3 className="text-xl font-bold">{tool.name}</h3>
            </div>
          )
        })}
      </InfiniteSlider>
    </div>
  )
}
