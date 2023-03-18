import { useState } from 'react'
import { Image } from '@mui/icons-material'
import { StackProps, Skeleton, Stack } from '@mui/material'

type SmartImageProps = StackProps<'img'> & {
  height: number
}

export function SmartImage({ height, ...props }: SmartImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isShowingPlaceholder, setShowingPlaceholder] = useState(false)

  if (isShowingPlaceholder) {
    return (
      <Stack
        height={height}
        borderRadius={2}
        color="grey.400"
        bgcolor="grey.50"
        overflow="hidden"
        alignItems="center"
        justifyContent="center"
        fontSize={{
          xs: height / 3,
          sm: height / 2,
          md: height / 1.5,
        }}
      >
        <Image color="inherit" fontSize="inherit" />
      </Stack>
    )
  }

  return (
    <Stack position="relative">
      {isLoading && (
        <Stack
          top={0}
          left={0}
          zIndex={1}
          width="100%"
          bgcolor="white"
          position="absolute"
        >
          <Skeleton
            sx={{ borderRadius: 2 }}
            variant="rectangular"
            height={height}
          />
        </Stack>
      )}

      <Stack
        height={height}
        component="img"
        onLoad={() => setIsLoading(false)}
        onError={() => setShowingPlaceholder(true)}
        {...props}
      />
    </Stack>
  )
}
