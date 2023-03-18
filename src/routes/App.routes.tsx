import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AssetDetailsPage, AssetsPage, MainPage } from 'src/pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<AssetsPage />} />
          <Route path="/assets/:id" element={<AssetDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
