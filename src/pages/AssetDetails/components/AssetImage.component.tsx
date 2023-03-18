import { SmartImage } from 'src/components'

type AssetImageProps = {
  alt: string
  url: string
}

export function AssetImage({ alt, url }: AssetImageProps) {
  return (
    <SmartImage
      sx={{
        borderRadius: 2,
        objectFit: 'cover',
        userSelect: 'none',
      }}
      src={url}
      alt={alt}
      height={250}
      draggable={false}
    />
  )
}
