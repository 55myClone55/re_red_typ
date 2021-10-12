import React, { useEffect } from 'react'
import { UserActions } from '../hook/useAction'
import { useTypedSelector } from '../hook/useTypedSelector'

const TodoList: React.FC =()=> {
    const {error,limit,loading,page,todos} = useTypedSelector(state => state.todo)
    const {fetchTodos,fetchTodoPage} = UserActions()
    const pages =  [1, 2, 3, 4, 5]
    useEffect(()=>{
        fetchTodos(page, limit)
    },[page])
    if(loading){
        return <h1>...dowlod....</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
                )}
                <div style={{display:'flex'}}>
                {pages.map(p=>
                    <div
                    onClick={() => fetchTodoPage(p)}
                    style = {{border:p === page ? '5px solid silver' : '3px solid black', padding: 10}}
                    >
                        {p}
                    </div>
                    )}
                </div>
                
        </div>
    )
}

export default TodoList