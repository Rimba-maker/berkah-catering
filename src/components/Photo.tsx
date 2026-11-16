import { photo, type PhotoId } from '../config/photos';

type Props = {
  id: PhotoId;
  slot: string;
  className?: string;
  eager?: boolean;
  pos?: string;
  sizes?: string;
  alt?: string;
};

// Foto ilustrasi dari Pexels; `data-slot` memudahkan menggantinya dengan foto asli.
export default function Photo({ id, slot, className = '', eager, pos, sizes, alt }: Props) {
  const p = photo(id);
  return (
    <figure className={`photo ${className}`} data-slot={slot} data-alt={p.alt}>
      <img
        src={p.src}
        alt={alt ?? p.alt}
        sizes={sizes}
        loading={eager ? undefined : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding={eager ? undefined : 'async'}
        style={pos ? { objectPosition: pos } : undefined}
      />
    </figure>
  );
}
