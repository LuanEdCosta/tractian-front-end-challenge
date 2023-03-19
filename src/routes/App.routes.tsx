import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
  MainPage,
  UnitsPage,
  UsersPage,
  AssetsPage,
  NotFoundPage,
  CompaniesPage,
  AssetDetailsPage,
} from 'src/pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<AssetsPage />} />
          <Route path="/assets/:id" element={<AssetDetailsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/units" element={<UnitsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
