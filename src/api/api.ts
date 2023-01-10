import axios from 'axios'
import { DepartmentType } from '../redux/departments-reducer';

const instance = axios.create({
    baseURL: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464',
})

export const usersAPI = {
    getUsers(__example: DepartmentType, __dynamic: boolean,__code?: string) {
       const promise = instance.get<ResponseType>(`/users?__example?=${__example}&__dynamic=${__dynamic}`);
       //const promise = instance.get<ResponseType>(`/users?__dynamic=${__dynamic}`);
       return promise;
       
    },
}
// types
export type ResponseType = {
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