import generator from 'generate-password-ts'
import { Copy, RefreshCcw } from 'lucide-react'
import { useState } from 'react'
import ToggleSwitch, { type ToggleSwitchProps } from '../ui/ToggleSwitch'
import styles from './PasswordGenerator.module.css'

type PasswordSettings = {
  includeUppercase: boolean
  includeLowercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
}

const defaultLength = 12
const minLength = 12
const maxLength = 32

const SettingToggle = ({
  checked,
  onChange,
}: Pick<ToggleSwitchProps, 'checked' | 'onChange'>) => (
  <ToggleSwitch
    colorOn="#7c3aed"
    width="2.5rem"
    height="1.5rem"
    toggleDiameter="1rem"
    className={styles.toggleSwitch}
    checked={checked}
    onChange={onChange}
  />
)

const PasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(defaultLength)
  const [settings, setSettings] = useState<PasswordSettings>({
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: false,
    includeSymbols: false,
  })

  const generatePassword = () => {
    const newPassword = generator.generate({
      length,
      numbers: settings.includeNumbers,
      uppercase: settings.includeUppercase,
      lowercase: settings.includeLowercase,
      symbols: settings.includeSymbols,
    })
    setPassword(newPassword)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password)
  }

  const togglePasswordSetting = (
    setting: keyof PasswordSettings,
    checked: boolean
  ) => {
    setSettings((prev) => ({ ...prev, [setting]: checked }))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.containerTitle}>Generate password</h2>
      <div className={styles.generatorContainer}>
        <div>
          <div className={styles.subtitleContainer}>
            <h4 className={styles.subtitle}>GENERATED PASSWORD</h4>
          </div>
          <div className={styles.roundedBlock}>
            <input type="text" value={password} readOnly />
            <div className={styles.generatedButtonContainer}>
              <Copy
                aria-label="copy generated password"
                className={styles.generatedButton}
                onClick={copyToClipboard}
              />
              <RefreshCcw
                aria-label="Regenerate password"
                className={styles.generatedButton}
                onClick={generatePassword}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.subtitleContainer}>
            <h4 className={styles.subtitle}>CHARACTER LENGTH</h4>
            <h4 className={styles.subtitleDescription}>{length}</h4>
          </div>
          <div className={styles.roundedBlock}>
            <p>{minLength}</p>
            <input
              type="range"
              min={minLength}
              max={maxLength}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              readOnly
            />
            <p>{maxLength}</p>
          </div>
        </div>
        <div>
          <div className={styles.subtitleContainer}>
            <h4 className={styles.subtitle}>SETTINGS</h4>
          </div>
          <div className={styles.roundedBlockContainer}>
            <div className={styles.roundedBlock}>
              <p>Include uppercase letters</p>
              <SettingToggle
                checked={settings.includeUppercase}
                onChange={(checked) =>
                  togglePasswordSetting('includeUppercase', checked)
                }
              />
            </div>
            <div className={styles.roundedBlock}>
              <p>Include lowercase letters</p>
              <SettingToggle
                checked={settings.includeLowercase}
                onChange={(checked) =>
                  togglePasswordSetting('includeLowercase', checked)
                }
              />
            </div>
            <div className={styles.roundedBlock}>
              <p>Include numbers</p>
              <SettingToggle
                checked={settings.includeNumbers}
                onChange={(checked) =>
                  togglePasswordSetting('includeNumbers', checked)
                }
              />
            </div>
            <div className={styles.roundedBlock}>
              <p>Include symbols</p>
              <SettingToggle
                checked={settings.includeSymbols}
                onChange={(checked) =>
                  togglePasswordSetting('includeSymbols', checked)
                }
              />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.generateButton} onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  )
}

export default PasswordGenerator
