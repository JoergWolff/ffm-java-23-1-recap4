import {ToDoModel} from "../model/ToDoModel.tsx";

type ToDoCardProps = {
    todo: ToDoModel
}
export default function ToDoCard(props: ToDoCardProps){
    return(
        <section className="section_card">
            <p>{props.todo.id}</p>
            <h3>{props.todo.description}</h3>
            <p>{props.todo.status}</p>
        </section>
    )
}