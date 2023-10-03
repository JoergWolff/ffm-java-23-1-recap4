import {ToDoModel} from "../model/ToDoModel.tsx";
import {useState} from "react";
import ToDoChart from "./ToDoChart.tsx";
import ToDoMenu from "./ToDoMenu.tsx";

type ToDoGalleryProps = {
    todos: ToDoModel[]
}

export default function ToDosGallery(props: ToDoGalleryProps){
    const [toDoStatus, setToDoStatus] = useState<boolean[]>([true, true, true])

    const openTodos = props.todos.filter(todo => todo.status === "OPEN")
    const inProgressTodos = props.todos.filter(todo => todo.status === "IN_PROGRESS")
    const doneTodos = props.todos.filter(todo => todo.status === "DONE")

    return(
        <>
            <ToDoMenu setStatus={setToDoStatus}/>
            {toDoStatus[0] && <ToDoChart title="OPEN" todos={openTodos}/>}
            {toDoStatus[1] && <ToDoChart title="IN PROGRESS" todos={inProgressTodos}/>}
            {toDoStatus[2] && <ToDoChart title="DONE" todos={doneTodos}/>}

        </>
    )
}