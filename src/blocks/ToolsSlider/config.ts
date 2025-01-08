import { Block, FilterOptions, FilterOptionsProps } from 'payload'
import { Tool, ToolsSliderBlockType } from '@/payload-types'

export const ToolsSlider: Block = {
  slug: 'toolsSlider',
  interfaceName: 'ToolsSliderBlockType',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'tools',
      type: 'array',
      fields: [
        {
          name: 'tool',
          type: 'relationship',
          relationTo: 'tools',
          filterOptions: (options: FilterOptionsProps<any>) => {
            const { siblingData, data } = options
            console.log('Current field data:', siblingData)

            // Find the current tools block in the layout
            const currentBlock = data?.layout?.find(
              (block) => block.blockType === 'toolsSlider' && block.tools,
            )
            console.log('Current block:', currentBlock)

            // Get all tools from the current block
            const allTools = currentBlock?.tools || []
            console.log('All tools:', allTools)

            // Get the current tool's ID
            const currentToolId = (siblingData as { id?: string })?.id

            // Filter out all tools except the current one
            const selectedTools = allTools
              .filter((item) => item && item.tool && item.id !== currentToolId) // Exclude current tool
              .map((item) => item.tool)

            console.log('Selected tool IDs to filter:', selectedTools)

            return {
              id: {
                not_in: selectedTools,
              },
            }
          },
        },
      ],
    },
  ],
}
