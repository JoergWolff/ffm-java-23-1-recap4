import {ToDoModel} from "../todos/model/ToDoModel.tsx";
import ToDosGallery from "../todos/ToDosGallery.tsx";
import Header from "../header/Header.tsx";

type MainPageProps = {
    todos: ToDoModel[]
}
export default function MainPage(props: MainPageProps){
    return (
        <>
        <Header/>
            <ToDosGallery todos={props.todos}/>
        </>
    )
}