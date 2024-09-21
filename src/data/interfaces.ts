export type TToolType = 'h2' | 'p' | 'button' | 'img'

export interface ITool {
  id: number
  label: string
  icon: string
  content: string
  type: TToolType
}
