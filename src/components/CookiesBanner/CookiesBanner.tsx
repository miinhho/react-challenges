import Cookies from 'js-cookie'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import ToggleSwitch from '../ui/ToggleSwitch'
import styles from './CookiesBanner.module.css'
import {
  COOKIE_PREFERENCES_KEY,
  type CookieSettings,
  getCookiePreferences,
} from './cookie-utils'

const CookieIcon = () => (
  <img
    src="/assets/icons/cookie-icon.svg"
    alt="Cookie Icon"
    width={80}
    className={styles.cookieIcon}
  />
)

const CookiesBanner = () => {
  const [isCustomizing, setIsCustomizing] = useState(false)

  if (isCustomizing) {
    return <CookieCustomize onBack={() => setIsCustomizing(false)} />
  }

  const handleSavePreferences = () => {
    const cookieSetting: CookieSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
    }

    Cookies.set('cookiePreferences', JSON.stringify(cookieSetting), {
      expires: 365,
    })
  }

  return (
    <div className={styles.bannerContainer}>
      <CookieIcon />
      <h3 className="title">Can we use cookies?</h3>
      <span className={styles.bannerText}>
        We use cookies to enhance your browsing experience, analyze site
        traffic, and personalize content. By clicking "Accept All", you consent
        to the use of all cookies. You can manage your perferences or opt out by
        clicking "Customize".
      </span>
      <div className={styles.bannerButtonsContainer}>
        <button
          className={styles.customizeButton}
          onClick={() => setIsCustomizing(true)}
        >
          Customize
        </button>
        <button
          className={styles.acceptAllButton}
          onClick={handleSavePreferences}
        >
          Accept all
        </button>
      </div>
    </div>
  )
}

type CookieCustomizeProps = {
  onBack: () => void
}

const CookieCustomize = ({ onBack }: CookieCustomizeProps) => {
  const [showDetails, setShowDetails] = useState(false)
  const [cookieSetting, setCookieSetting] = useState<CookieSettings>(
    getCookiePreferences()
  )

  const toggleCookieSetting = (key: keyof CookieSettings, checked: boolean) => {
    setCookieSetting((prev) => ({ ...prev, [key]: checked }))
  }

  const handleSavePreferences = () => {
    Cookies.set(COOKIE_PREFERENCES_KEY, JSON.stringify(cookieSetting), {
      expires: 365,
    })
  }

  return (
    <div className={styles.customizeContainer}>
      <CookieIcon />
      <div className={styles.customizeTitleContainer}>
        <ArrowLeft className={styles.customizeBackArrow} onClick={onBack} />
        <h3 className="title">Customize your perferences</h3>
      </div>
      <div className={styles.toggleContainer}>
        <div className={styles.toggleItem}>
          <div className={styles.toggleRow}>
            <p>Necessary</p>
            <ToggleSwitch
              checked={cookieSetting.necessary}
              onChange={(checked) => toggleCookieSetting('necessary', checked)}
            />
          </div>
          {showDetails && (
            <span className={styles.cookieDetails}>
              Necessary cookies help make a website usable by enabling basic
              functions like page navigation and access to secure areas of the
              website. The website cannot function properly without these
              cookies.
            </span>
          )}
        </div>
        <div className={styles.toggleItem}>
          <div className={styles.toggleRow}>
            <p>Analytics & performance</p>
            <ToggleSwitch
              checked={cookieSetting.analytics}
              onChange={(checked) => toggleCookieSetting('analytics', checked)}
            />
          </div>
          {showDetails && (
            <span className={styles.cookieDetails}>
              Analytics cookies help website owners to understand how visitors
              interact with websites by collecting and reporting information
              anonymously.
            </span>
          )}
        </div>
        <div className={styles.toggleItem}>
          <div className={styles.toggleRow}>
            <p>Marketing</p>
            <ToggleSwitch
              checked={cookieSetting.marketing}
              onChange={(checked) => toggleCookieSetting('marketing', checked)}
            />
          </div>
          {showDetails && (
            <span className={styles.cookieDetails}>
              Marketing cookies are used to track visitors across websites. The
              intention is to display ads that are relevant and engaging for the
              individual user and thereby more valuable for publishers and third
              party advertisers.
            </span>
          )}
        </div>
      </div>
      <div className={styles.bannerButtonsContainer}>
        <button
          className={styles.customizeButton}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide details' : 'Show details'}
        </button>
        <button
          className={styles.acceptAllButton}
          onClick={handleSavePreferences}
        >
          Save perferences
        </button>
      </div>
    </div>
  )
}

export default CookiesBanner
