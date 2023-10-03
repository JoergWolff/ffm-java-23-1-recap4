import {ToDoModel} from "../todos/model/ToDoModel.tsx";
import ToDosGallery from "../todos/todo/ToDosGallery.tsx";
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";

type MainPageProps = {
    todos: ToDoModel[]
}
export default function MainPage(props: MainPageProps){
    return (
        <>
            <Header/>
            <ToDosGallery todos={props.todos}/>
            <Footer/>
        </>
    )
}