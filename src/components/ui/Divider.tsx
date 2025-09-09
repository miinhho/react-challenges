import styles from './Divider.module.css'

type DividerProps = {
  content?: string
  margin?: string
} & React.HTMLAttributes<HTMLDivElement>

const Divider = ({ content, margin, ...props }: DividerProps) => (
  <div
    className={`${styles.divider} ${props.className || ''}`}
    style={{ margin: margin || '1rem' }}
    {...props}
  >
    {content}
  </div>
)

export default Divider
