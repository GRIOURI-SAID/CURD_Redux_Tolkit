import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        name: "said ",
        email: "said@gmail.com"

    },

    {
        id: 2,
        name: "said griouri",
        email: "said@gmail.com"

    }
]
 
export const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        editUser: (state, action) => {
            const { id , name , email} = action.payload
            const existingUser = state.find(user => user.id == id);
            if (existingUser) {
                existingUser.name = name
                existingUser.email = email
            }
        },
        deleteUser: (state, action) => {
           
            const { id } = action.payload;
            const existingUser = state.find(user => user.id == id);
            console.log(id)
            if (existingUser) {
                return state.filter(user => user.id != id);
             }
        }
    }
})

export const { addUser, editUser , deleteUser } = UserSlice.actions
export default UserSlice.reducer