import { Stack, Typography } from '@mui/material'

interface TextWithCaptionProps {
  caption: string
  text: React.ReactNode
}

export function TextWithCaption({ caption, text }: TextWithCaptionProps) {
  return (
    <Stack spacing={0.2}>
      <Typography variant="caption" color="text.secondary">
        {caption}
      </Typography>

      <Typography>{text}</Typography>
    </Stack>
  )
}
