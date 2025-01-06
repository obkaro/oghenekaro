import React from 'react'
import { IconType } from 'react-icons'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { z } from 'zod'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

// Define supported social platforms with their labels
export const socialPlatformSchema = z
  .enum(['facebook', 'x', 'instagram', 'linkedin', 'github', 'email'])
  .describe('Supported social media platforms')

export type SocialPlatform = z.infer<typeof socialPlatformSchema>

// Map platform names to their respective icons and labels
const platformConfig: Record<SocialPlatform, { icon: IconType; label: string }> = {
  facebook: { icon: FaFacebook, label: 'Facebook' },
  x: { icon: FaXTwitter, label: 'X (Twitter)' },
  instagram: { icon: FaInstagram, label: 'Instagram' },
  linkedin: { icon: FaLinkedin, label: 'LinkedIn' },
  github: { icon: FaGithub, label: 'GitHub' },
  email: { icon: FaEnvelope, label: 'Email' },
}

export interface SocialLink {
  platform: SocialPlatform
  handle?: string
  url: string
}

interface SocialIconProps extends Omit<SocialLink, 'platform'> {
  platform: SocialPlatform
  className?: string
  size?: number
  showLabel?: boolean
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  platform,
  handle,
  url,
  className = '',
  size = 24,
  showLabel = false,
}) => {
  const config = platformConfig[platform]
  const tooltipContent = handle ? `${config.label}: ${handle}` : config.label

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 transition-opacity ${className}`}
          >
            <config.icon size={size} />
            {showLabel && <span>{handle || config.label}</span>}
          </a>
        </TooltipTrigger>
        <TooltipContent className="dark px-2 py-1 text-sm" showArrow={true} side="bottom">
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface SocialIconGroupProps {
  links: SocialLink[]
  className?: string
  size?: number
  showLabels?: boolean
}

export const SocialIconGroup: React.FC<SocialIconGroupProps> = ({
  links,
  className,
  size,
  showLabels = false,
}) => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <SocialIcon
            key={`${link.platform}-${link.handle}`}
            {...link}
            className={className}
            size={size}
            showLabel={showLabels}
          />
        ))}
      </div>
    </TooltipProvider>
  )
}
