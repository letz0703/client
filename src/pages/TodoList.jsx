import {useLoaderData} from "react-router-dom"
import {getTodos} from "../api/todos"
function TodoList() {
  const todos = useLoaderData()
  return <h1>TodoList-{todos.length}</h1>
}

export const loader = ({request: {signal}}) => {
  //return axios.get(`http://localhost:3000/`, {signal}).then(res => res.data)
  return getTodos({signal})
}

export const todoListRoute = {
  loader,
  element: <TodoList />
}
