import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface MenuState {
  value: boolean
}

// Define the initial state using that type
const initialState: MenuState = {
  value:false
}

const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{
        setMenuState: (state) => {
            !state.value
        }
    }
})

export const {setMenuState} = menuSlice.actions;

export default menuSlice;