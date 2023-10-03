import {ToDoModel} from "../todos/model/ToDoModel.tsx";
import ToDosGallery from "../todos/todo/ToDosGallery.tsx";
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import ErrorHandling from "../error/ErrorHandling.tsx";

type MainPageProps = {
    todos: ToDoModel[],
    errorMessage: string,
}
export default function MainPage(props: MainPageProps){
    return (
        <>
            <Header/>
            {!props.errorMessage ? <ToDosGallery todos={props.todos}/> :
                <ErrorHandling errorMessage={props.errorMessage}/>}
            <Footer/>
        </>
    )
}