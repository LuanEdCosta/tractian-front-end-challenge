import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
  MainPage,
  UnitsPage,
  UsersPage,
  AssetsPage,
  NotFoundPage,
  CompaniesPage,
  WorkOrdersPage,
  CreateUnitPage,
  AssetDetailsPage,
  CreateCompanyPage,
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
          <Route path="/units/create" element={<CreateUnitPage />} />
          <Route
            path="/units/:id/edit"
            element={<CreateUnitPage key="EditUnitPage" />}
          />

          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/companies/create" element={<CreateCompanyPage />} />
          <Route
            path="/companies/:id/edit"
            element={<CreateCompanyPage key="EditCompanyPage" />}
          />

          <Route path="/workOrders" element={<WorkOrdersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
