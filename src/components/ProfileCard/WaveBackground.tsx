import styles from './WaveBackground.module.css'

const wavePaths = [
  'M0,110 Q32,90 60,96 T168,60 V130 H0 Z',
  'M0,130 Q45,95 70,97 T148,75 V130 H0 Z',
  'M0,110 Q37,92 65,98 T178,60 V130 H0 Z',
]

const waveColors = ['#E0E7FF', '#C7D2FE', '#A5B4FC']

const WaveBackground = () => (
  <svg
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.waveBackground}
  >
    {wavePaths.map((d, i) => (
      <path key={i} d={d} fill={waveColors[i]} opacity={0.7 - i * 0.2} />
    ))}
  </svg>
)

export default WaveBackground
