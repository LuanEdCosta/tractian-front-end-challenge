import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AssetsPage, MainPage } from 'src/pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<AssetsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
