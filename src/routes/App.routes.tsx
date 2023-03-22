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
  CreateUserPage,
  CreateWorkOrderPage,
  CreateAssetPage,
} from 'src/pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<AssetsPage />} />
          <Route path="/assets/:id" element={<AssetDetailsPage />} />
          <Route path="/assets/create" element={<CreateAssetPage />} />
          <Route
            path="/assets/:id/edit"
            element={<CreateAssetPage key="EditAssetPage" />}
          />

          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/create" element={<CreateUserPage />} />
          <Route
            path="/users/:id/edit"
            element={<CreateUserPage key="EditUserPage" />}
          />

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
          <Route path="/workOrders/create" element={<CreateWorkOrderPage />} />
          <Route
            path="/workOrders/:id/edit"
            element={<CreateWorkOrderPage key="EditWorkOrderPage" />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
