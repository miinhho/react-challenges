import { Star } from 'lucide-react'
import { useState } from 'react'
import styles from './RateUs.module.css'

const RateUs = () => {
  const [rating, setRating] = useState(0)

  const StarRating = ({ star }: { star: number }) => (
    <Star
      className={styles.starIcon}
      color={rating >= star ? 'gold' : 'gray'}
      fill={rating >= star ? 'gold' : 'transparent'}
      onClick={() => setRating(star)}
    />
  )

  return (
    <div className={styles.rateContainer}>
      <div className={styles.rateHeader}>
        <h2 className="title">Rate Us!</h2>
        <p className={styles.description}>Tell us about your experience</p>
      </div>
      <div className={styles.starContainer}>
        <StarRating star={1} />
        <StarRating star={2} />
        <StarRating star={3} />
        <StarRating star={4} />
        <StarRating star={5} />
      </div>
    </div>
  )
}

export default RateUs
