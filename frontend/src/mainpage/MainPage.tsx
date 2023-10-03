import {ToDoModel} from "../todos/model/ToDoModel.tsx";
import ToDosGallery from "../todos/ToDosGallery.tsx";

type MainPageProps = {
    todos: ToDoModel[]
}
export default function MainPage(props: MainPageProps){
    return (
        <>
        <h1>ToDos</h1>
            <ToDosGallery todos={props.todos}/>
        </>
    )
}