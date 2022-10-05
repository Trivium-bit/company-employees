import axios from 'axios'

/* const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': ''
    }
} */

const instance = axios.create({
    baseURL: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464',
})

export const usersAPI = {
    getAllUsers() {
        const promise = instance.get<ResponseType>('/users?__example=all');
        return promise;
    },
}

// types
export type ResponseType = {
    items: [
        {
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
    ]
}