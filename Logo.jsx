import { useState } from 'react';

// Shows an image; if the file is missing, shows a dashed placeholder instead.
export default function Logo({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`logo-placeholder ${className}`}>{alt}</div>;
  return <img src={src} alt={alt} className={`logo ${className}`} onError={() => setFailed(true)} />;
}
