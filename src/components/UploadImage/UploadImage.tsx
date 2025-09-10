import axios from "axios";
import { CircleCheck, CircleX, RefreshCw, Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from './UploadImage.module.css';

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const controllerRef = useRef<AbortController | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const next = e.target.files[0];
      setFile(next);
      setStatus('idle');
      setUploadProgress(0);

      const url = URL.createObjectURL(next);
      setPreviewUrl(url);
    }
  }

  const handleFileUpload = async () => {
    if (!file) return;
    controllerRef.current = new AbortController();
    const { signal } = controllerRef.current;

    setStatus('uploading');
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('https://httpbin.org/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.total ?
            Math.round((progressEvent.loaded * 100) / progressEvent.total) : 0;
          setUploadProgress(progress);
        },
        signal
      })
      setStatus('success');
    } catch {
      setStatus('error');
      setUploadProgress(0);
    }
  }

  const handleCancelUpload = () => {
    if (controllerRef.current === null) return;
    controllerRef.current.abort();
    setStatus('idle');
    setUploadProgress(0);
  }

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    }
  }, [previewUrl]);

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadHeader}>
        <h2 className="title">Upload Image</h2>
        <label className={styles.fileInputButton} htmlFor="input-image">
          Choose Image
        </label>
      </div>
      <input
        className={styles.hiddenInput}
        type="file"
        id="input-image"
        accept="image/*"
        onChange={handleFileChange}
        aria-label="Choose an image to upload"
      />
      {file && (
        <div className={styles.fileInfoContainer}>
          <img
            src={previewUrl ?? ''}
            alt={file?.name ?? 'preview'}
            className={styles.imagePreview}
          />
          <div className={styles.imageDetails}>
            <p className={styles.imageName}>{file.name}</p>
            <p className={styles.imageSize}>
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </p>
            <div className={styles.uploadProgressContainer}>
              <div className={styles.progressBarBackground}>
                <div
                  className={styles.progressBarFill}
                  style={{
                    width: `${uploadProgress}%`,
                  }} />
              </div>
              <p className={styles.progressBarText}>
                {uploadProgress}%
              </p>
            </div>
          </div>
          <div className={styles.iconContainer}>
            {file && status === 'idle' && (
              <button
                type="button"
                className={styles.iconButton}
                onClick={handleFileUpload}
                aria-label="Upload image"
              >
                <Upload className={styles.uploadIcon} />
              </button>
            )}
            {status === 'uploading' && (
              <button
                type="button"
                className={styles.iconButton}
                onClick={handleCancelUpload}
                aria-label="Cancel upload"
              >
                <CircleX color="red" className={styles.cancelIcon} />
              </button>
            )}
            {status === 'success' && (
              <div className={styles.iconButton} aria-hidden>
                <CircleCheck color="green" className={styles.successIcon} />
              </div>
            )}
            {file && status === 'error' && (
              <button
                type="button"
                className={styles.iconButton}
                onClick={handleFileUpload}
                aria-label="Retry upload"
              >
                <RefreshCw color="red" className={styles.errorIcon} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UploadImage