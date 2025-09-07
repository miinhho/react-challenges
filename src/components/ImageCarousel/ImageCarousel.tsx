import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import styles from "./ImageCarousel.module.css"
import { images, PREVIEW_IMAGE_COUNT } from "./constant"

type ImagePreviewProps = {
  src: string,
  isCurrent?: boolean,
}

const ImagePreview = ({ src, isCurrent = false }: ImagePreviewProps) => {
  return (
    <div className={styles.imagePreview}>
      <img
        src={src}
        style={{
          borderColor: isCurrent ? 'white' : 'transparent',
        }}
      />
    </div>
  )
}

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const getPreviewImages = () => {
    const halfCount = Math.floor(PREVIEW_IMAGE_COUNT / 2);
    const startIndex = (currentIndex - halfCount + images.length) % images.length;
    const result = [];

    for (let i = 0; i < PREVIEW_IMAGE_COUNT; i++) {
      const index = (startIndex + i) % images.length;
      result.push(images[index]);
    }

    return result;
  }
  const previewImages = getPreviewImages();

  const currentImage = images.find((image) => image.order === currentIndex)

  return (
    <div className={styles.imageCarouselContainer}>
      <div className={styles.carouselContainer}>
        <ArrowLeft onClick={handlePrev} className={styles.arrow} />
        <img
          src={currentImage?.src}
          className={styles.currentImage}
        />
        <ArrowRight onClick={handleNext} className={styles.arrow} />
      </div>
      <div className={styles.previewContainer}>
        {previewImages.map((image) => (
          <ImagePreview
            key={`preview-${image.order}`}
            src={image.src}
            isCurrent={image.order === currentIndex}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel