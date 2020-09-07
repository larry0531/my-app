import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddToDo'
import VisibleTodoList from '../containers/VisibleTodoList'
const App = () => (
    <div>
        <h1>Test</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)
export default App