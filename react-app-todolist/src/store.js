import { configureStore } from '@reduxjs/toolkit'
import todoSlide from './scenes/todo-list/todoSlide'

const rootReducer = {
    todolist : todoSlide
}

const store = configureStore({
  reducer: rootReducer
})

export default store;
