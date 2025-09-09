import styles from './ToggleSwitch.module.css'

type ToggleSwitchProps = {
  onChange: (checked: boolean) => void
  checked?: boolean
}

const ToggleSwitch = ({ checked = false, onChange }: ToggleSwitchProps) => {
  return (
    <label className={styles.switch}>
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
