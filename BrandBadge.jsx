import { useState } from 'react';

// Uses public/logos/brands/<id>.png when it exists, otherwise a coloured monogram tile.
export default function BrandBadge({ brand, size = 56 }) {
  const [failed, setFailed] = useState(false);
  const style = { width: size, height: size };

  if (!failed) {
    return (
      <img
        className="badge-img"
        style={style}
        src={`/logos/brands/${brand.id}.png`}
        alt={brand.name}
        onError={() => setFailed(true)}
      />
    );
  }
  return (
    <div
      className="badge"
      style={{ ...style, background: brand.color, fontSize: size * (brand.short.length > 2 ? 0.28 : 0.38) }}
    >
      {brand.short}
    </div>
  );
}
