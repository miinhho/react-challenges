import styles from './BrandLogo.module.css'

type LogoProps = {
  width?: number
  height?: number
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const withBrandLogo =
  (imageUrl: string) =>
  ({ width = 20, height = 20, ...props }: LogoProps) => (
    <button {...props} className={styles.logoButton}>
      <img src={imageUrl} width={width} height={height} />
    </button>
  )

export const DribbbleLogo = withBrandLogo('/assets/brands/dribbble.svg')
export const FacebookLogo = withBrandLogo('/assets/brands/facebook.svg')
export const InstagramLogo = withBrandLogo('/assets/brands/instagram.svg')
export const XLogo = withBrandLogo('/assets/brands/x.svg')
export const WhatsAppLogo = withBrandLogo('/assets/brands/whatsapp.svg')
