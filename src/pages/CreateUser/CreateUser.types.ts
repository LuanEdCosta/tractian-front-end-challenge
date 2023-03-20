import { UserModel } from 'src/models'

export type UserFormData = Pick<UserModel, 'name' | 'email'>
