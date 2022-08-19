export interface CardProps {
  name?: string
  image?: string
  gender?: string
  status?: string
  origin?: string
  episode?: number
  species?: string
  onClick: boolean
  onClose: () => void
}
