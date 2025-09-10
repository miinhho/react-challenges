import {
  DribbbleLogo,
  FacebookLogo,
  InstagramLogo,
  WhatsAppLogo,
  XLogo,
} from '../ui/BrandLogo'
import styles from './ProfileCard.module.css'
import WaveBackground from './WaveBackground'

type ProfileCardProps = {
  imageUrl: string
  username: string
  userId: string
  description: string

  socialLinks?: {
    dribbble?: string
    facebook?: string
    instagram?: string
    x?: string
    whatsapp?: string
  }
}

const ProfileCard = ({
  imageUrl,
  username,
  userId,
  description,
  socialLinks,
}: ProfileCardProps) => {
  const handleSocialClick = (url?: string) => {
    if (url) window.open(url, '_blank')
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <WaveBackground />
        <img
          src={imageUrl}
          alt={`${username} profile`}
          width={128}
          height={128}
          className={styles.profileImage}
        />
      </div>
      <section className={styles.infoContainer}>
        <div className={styles.nameContainer}>
          <h2 className={styles.username}>{username}</h2>
          <p className={styles.userId}>@{userId}</p>
        </div>
        <div className={styles.socialIcons}>
          <DribbbleLogo
            aria-label="Dribble profile"
            onClick={() => handleSocialClick(socialLinks?.dribbble)}
          />
          <FacebookLogo
            aria-label="Facebook profile"
            onClick={() => handleSocialClick(socialLinks?.facebook)}
          />
          <InstagramLogo
            aria-label="Instagram profile"
            onClick={() => handleSocialClick(socialLinks?.instagram)}
          />
          <XLogo
            aria-label="X profile"
            onClick={() => handleSocialClick(socialLinks?.x)}
          />
          <WhatsAppLogo
            aria-label="WhatsApp profile"
            onClick={() => handleSocialClick(socialLinks?.whatsapp)}
          />
        </div>
        <span className={styles.description}>{description}</span>
      </section>
      <div className={styles.buttonContainer}>
        <button className={styles.followButton}>Follow</button>
        <button className={styles.messageButton}>Message</button>
      </div>
    </div>
  )
}

export default ProfileCard
