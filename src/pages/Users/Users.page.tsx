import { useTranslation } from 'react-i18next'

import { useNumberOfPages, usePagination } from 'src/hooks'
import { DocumentTitle, PageLayout } from 'src/components'

import { INITIAL_PAGE, PAGE_SIZE } from './Users.config'
import { useUsers } from './hooks/useUsers.hook'
import { useFilters } from './hooks/useFilters.hook'
import { useDeleteUser } from './hooks/useDeleteUser.hook'
import { useUserActions } from './hooks/useUserActions.hook'
import { UsersTable } from './components/UsersTable.component'
import { UsersEmpty } from './components/UsersEmpty.component'
import { UserActions } from './components/UserActions.component'
import { UsersFilters } from './components/UsersFilters.component'
import { UsersSkeleton } from './components/UsersSkeleton.component'
import { DeleteUserModal } from './components/DeleteUserModal.component'
import { UsersPagination } from './components/UsersPagination.component'
import { UserPageActions } from './components/UserPageActions.component'

export function UsersPage() {
  const { t } = useTranslation('Users')

  const {
    anchor,
    isDeleteModalOpen,
    handleSetAnchor,
    handleHideAnchor,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  } = useUserActions()

  const { page, setPage, handleResetPage } = usePagination(INITIAL_PAGE)

  const { currentFilters, register, handleSubmit, handleSearch } = useFilters({
    handleResetPage,
  })

  const { users, isLoadingUsers, totalUsers } = useUsers(
    { page, pageSize: PAGE_SIZE },
    currentFilters,
  )

  const { numberOfPages } = useNumberOfPages(totalUsers, PAGE_SIZE)

  const { handleDeleteUser } = useDeleteUser(anchor?.data.id ?? 0)

  return (
    <PageLayout.Container>
      <DocumentTitle title={t('title')} />

      <UserActions
        anchor={anchor}
        handleHideAnchor={handleHideAnchor}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />

      <DeleteUserModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleHideAnchor={handleHideAnchor}
        handleDeleteUser={handleDeleteUser}
        handleCloseDeleteModal={handleCloseDeleteModal}
      />

      <PageLayout.Content>
        <PageLayout.Title title={t('title')}>
          <UserPageActions />
        </PageLayout.Title>

        <UsersFilters
          register={register}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
        />

        {(() => {
          if (isLoadingUsers) return <UsersSkeleton />
          else if (users.length === 0) return <UsersEmpty />
          return <UsersTable users={users} handleSetAnchor={handleSetAnchor} />
        })()}

        <UsersPagination
          page={page}
          total={totalUsers}
          pageSize={PAGE_SIZE}
          isLoading={isLoadingUsers}
          numberOfPages={numberOfPages}
          handleChangePage={setPage}
        />
      </PageLayout.Content>
    </PageLayout.Container>
  )
}
