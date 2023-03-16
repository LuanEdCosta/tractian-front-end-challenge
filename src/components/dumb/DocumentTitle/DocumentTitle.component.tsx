import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

type DocumentTitleProps = {
  title: string
}

export function DocumentTitle({ title }: DocumentTitleProps) {
  const { t } = useTranslation('Glossary')

  return (
    <Helmet>
      <title>
        {title} | {t('appName')}
      </title>
    </Helmet>
  )
}
