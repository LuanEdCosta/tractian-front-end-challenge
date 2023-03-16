import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AssetsPage } from 'src/pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AssetsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
