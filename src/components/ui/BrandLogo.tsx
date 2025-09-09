import styles from './BrandLogo.module.css'

type LogoProps = {
  width?: number
  height?: number
} & React.HTMLAttributes<HTMLDivElement>

const withBrandLogo =
  (imageUrl: string) =>
  ({ width = 20, height = 20, ...props }: LogoProps) => (
    <div
      {...props}
      className={`${styles.logoContainer} ${props.className || ''}`}
    >
      <img src={imageUrl} width={width} height={height} />
    </div>
  )

export const DribbbleLogo = withBrandLogo('/assets/brands/dribbble.svg')
export const FacebookLogo = withBrandLogo('/assets/brands/facebook.svg')
export const InstagramLogo = withBrandLogo('/assets/brands/instagram.svg')
export const XLogo = withBrandLogo('/assets/brands/x.svg')
export const WhatsAppLogo = withBrandLogo('/assets/brands/whatsapp.svg')
export const GoogleLogo = withBrandLogo('/assets/brands/google.avif')
