/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './ToggleSwitch.module.css'

export type ToggleSwitchProps = {
  onChange: (checked: boolean) => void
  checked?: boolean
  width?: string
  height?: string
  toggleDiameter?: string
  colorOff?: string
  colorOn?: string
  className?: string
}

const ToggleSwitch = ({
  checked = false,
  onChange,
  width = '3.5em',
  height = '2em',
  toggleDiameter = '1.5em',
  colorOff = '#cccccc',
  colorOn = 'linear-gradient(90deg, #f0ac2f 0%, #c33b12 100%)',
  className = '',
}: ToggleSwitchProps) => {
  const styleVars: React.CSSProperties = {
    ['--button-width' as any]: width,
    ['--button-height' as any]: height,
    ['--toggle-diameter' as any]: toggleDiameter,
    ['--color-off' as any]: colorOff,
    ['--color-on' as any]: colorOn,
  }

  return (
    <label className={`${styles.switch} ${className}`} style={styleVars}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.currentTarget.checked)}
      />
      <span className={styles.slider} />
    </label>
  )
}

export default ToggleSwitch
