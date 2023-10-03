import {ToDoModel} from "./model/ToDoModel.tsx";
import ToDoCard from "./todo/ToDoCard.tsx";

type ToDoGalleryProps = {
    todos: ToDoModel[]
}

export default function ToDosGallery(props: ToDoGalleryProps){
    return(
        <>
            {props.todos.map(todo=><ToDoCard key={todo.id} todo={todo}/>)}
        </>
    )
}