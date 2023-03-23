import { Avatar, Skeleton, Stack, Tooltip, Typography } from '@mui/material'

import { UserModel } from 'src/models'

type AssignedUsersProps = {
  users: UserModel[]
  isLoading: boolean
  assignedUserIds: number[]
}

const MAX_AVATARS = 3
const AVATAR_SIZE = 32
const COLORS = ['primary.main', 'secondary.main', 'info.main']

export function AssignedUsers({
  users,
  isLoading,
  assignedUserIds,
}: AssignedUsersProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={0.2}>
      {(() => {
        if (isLoading) {
          return (
            <Skeleton
              sx={{ borderRadius: 1 }}
              height={AVATAR_SIZE}
              variant="rectangular"
              width={AVATAR_SIZE * MAX_AVATARS}
            />
          )
        }

        if (assignedUserIds.length === 0) {
          return <Typography>-</Typography>
        }

        return (
          <>
            {assignedUserIds.slice(0, MAX_AVATARS).map((userId, index) => {
              const user = users.find(({ id }) => id === userId)
              if (!user) return null

              return (
                <Tooltip key={user.id} title={user.name} arrow>
                  <Avatar
                    sx={{
                      width: AVATAR_SIZE,
                      height: AVATAR_SIZE,
                      fontSize: '0.8rem',
                      bgcolor: COLORS[index],
                      zIndex: MAX_AVATARS - index,
                      transform: `translateX(-${
                        index * (AVATAR_SIZE / 1.8)
                      }px)`,
                    }}
                  >
                    {user.name.substring(0, 2).toUpperCase()}
                  </Avatar>
                </Tooltip>
              )
            })}

            {assignedUserIds.length > MAX_AVATARS && (
              <Typography
                sx={{
                  transform: `translateX(-${
                    (MAX_AVATARS - 1) * (AVATAR_SIZE / 1.8)
                  }px)`,
                }}
                fontSize="small"
                pl={0.4}
              >
                +{assignedUserIds.length - MAX_AVATARS}
              </Typography>
            )}
          </>
        )
      })()}
    </Stack>
  )
}
