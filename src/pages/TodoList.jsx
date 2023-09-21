import {useLoaderData} from "react-router-dom"
import {getTodos} from "../api/todos"
function TodoList() {
  const todos = useLoaderData()
  return (
    <>
      <div className="container">
        <h1 className="page-title">Todos</h1>
        <ul>
          {todos.map(todo => (
            <li
              key={todo.id}
              className={todo.completed ? "strike-through" : ""}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const loader = ({request: {signal}}) => {
  //return axios.get(`http://localhost:3000/`, {signal}).then(res => res.data)
  return getTodos({signal})
}

export const todoListRoute = {
  loader,
  element: <TodoList />
}
