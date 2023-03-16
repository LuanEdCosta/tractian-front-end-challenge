import { AppContent } from './AppContent.component'
import { AppProviders } from './AppProviders.component'

import 'src/locales/Locales.config'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export function App() {
  return (
    <AppProviders>
      <AppContent />
    </AppProviders>
  )
}
