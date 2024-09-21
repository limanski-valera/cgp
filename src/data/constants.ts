import type { ITool } from './interfaces'

import headlineIcon from '@/assets/img/icons/01.svg'
import paragraphIcon from '@/assets/img/icons/02.svg'
import buttonIcon from '@/assets/img/icons/03.svg'
import imageIcon from '@/assets/img/icons/04.svg'

export const tools: ITool[] = [
  {
    id: 1,
    label: 'Headline',
    icon: headlineIcon,
    content: '',
    type: 'h2'
  },
  {
    id: 2,
    label: 'Paragraph',
    icon: paragraphIcon,
    content: '',
    type: 'p'
  },
  {
    id: 3,
    label: 'Button',
    icon: buttonIcon,
    content: '',
    type: 'button'
  },
  {
    id: 4,
    label: 'Image',
    icon: imageIcon,
    content: '',
    type: 'img'
  }
]
