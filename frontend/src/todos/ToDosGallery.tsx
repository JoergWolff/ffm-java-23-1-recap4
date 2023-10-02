import {ToDoModel} from "./model/ToDoModel.tsx";
import ToDoCard from "./todo/ToDoCard.tsx";

type ToDoGalleryPropsm = {
    todos: ToDoModel[]
}

export default function ToDosGallery(props: ToDoGalleryPropsm){
    return(
        <>
            {props.todos.map(todo=><ToDoCard key={todo.id} todo={todo}/>)}
        </>
    )
}