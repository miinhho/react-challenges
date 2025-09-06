import styles from './BrandLogo.module.css';

type LogoProps = {
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const DribbbleLogo = ({
  width = 20,
  height = 20,
  onClick
}: LogoProps) => (
  <button
    onClick={onClick}
    className={styles.logoButton}
    aria-label='dribbble logo button'
  >
    <img
      src='/assets/brands/dribbble.svg'
      alt='dribbble logo'
      width={width}
      height={height}
    />
  </button>
)

export const FacebookLogo = ({
  width = 20,
  height = 20,
  onClick,
}: LogoProps) => (
  <button
    onClick={onClick}
    className={styles.logoButton}
    aria-label='facebook logo button'
  >
    <img
      src='/assets/brands/facebook.svg'
      alt='facebook logo'
      width={width}
      height={height}
    />
  </button>
)

export const InstagramLogo = ({
  width = 20,
  height = 20,
  onClick,
}: LogoProps) => (
  <button
    onClick={onClick}
    className={styles.logoButton}
    aria-label='instagram logo button'
  >
    <img
      src='/assets/brands/instagram.svg'
      alt='instagram logo'
      width={width}
      height={height}
    />
  </button>
)

export const XLogo = ({
  width = 20,
  height = 20,
  onClick
}: LogoProps) => (
  <button
    onClick={onClick}
    className={styles.logoButton}
    aria-label='x logo button'
  >
    <img
      src='/assets/brands/x.svg'
      alt='x logo'
      width={width}
      height={height}
    />
  </button>
)

export const WhatsAppLogo = ({
  width = 20,
  height = 20,
  onClick
}: LogoProps) => (
  <button
    onClick={onClick}
    className={styles.logoButton}
    aria-label='whatsapp logo button'
  >
    <img
      src='/assets/brands/whatsapp.svg'
      alt='whatsapp logo'
      width={width}
      height={height}
    />
  </button>
)