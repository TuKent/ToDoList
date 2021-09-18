import { createSlice, nanoid } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name : "todolist",
    initialState : [{
        id: nanoid(),
        content: "Fix lỗi giao diện"
    },
    {
        id: nanoid(),
        content: "Xây dựng trang home page"
    },
    {
        id: nanoid(),
        content: "Sửa lỗi icon chat"
    }
],
    reducers: {
        increase(state, action){
            // console.log(current(state));
            state.push ({
                id : nanoid(),
                content : action.payload
            })
            return state
        },

        decrement(state,action){
        console.log(action);
           const removeItem = action.payload;
            state = state.filter( e => e.id != removeItem) 
            return state;
        },

        editContent(state, action){
            const editItem = action.payload;
            const stateIndex = state.findIndex(e => e.id == editItem.id)
            if (stateIndex >= 0 ){
                state[stateIndex] = editItem;
            }
        }
    }
})


//Action, Reducer
const {actions, reducers} = todoSlice;

// tolist chính là tên hàm nằm trong reducer
export const {increase, decrement, editContent } = actions;

export default todoSlice.reducer;

