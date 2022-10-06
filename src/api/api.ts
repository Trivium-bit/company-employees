import axios from 'axios'
import { DepartmentType } from '../redux/departmentsReducer';

const instance = axios.create({
    baseURL: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464',
})

export const usersAPI = {
    getUsers() {
        const promise = instance.get<ResponseType>('/users');
        return promise;
    },
}

// types
type ResponseType <D = {}> = {
  items: UserType[]
}
export type UserType = {
    id: string,
    avatarUrl: string,
    firstName: string,
    lastName: string,
    userTag: string,
    department: string,
    position: string,
    birthday: string,
    phone: string
}