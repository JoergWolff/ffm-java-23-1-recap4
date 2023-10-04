import {NewToDoModel} from "../todos/model/NewToDoModel.tsx";
import {ChangeEvent, FormEvent, useState} from "react";

type FooterProps = {
    addTodo: (newToDo: NewToDoModel) => void
}
export default function Footer(props: FooterProps) {
    const copyrightMessage = String.fromCodePoint(0x000A9)
    const[toDo, setToDo] = useState<string>("")

    function onTodoCange(event: ChangeEvent<HTMLInputElement>){
        setToDo(event.target.value)
    }
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newTodo: NewToDoModel = {
            description: toDo,
            status: "OPEN"
        }
        props.addTodo(newTodo)
        setToDo("")
    }

    return(
        <footer>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input">New Doing: </label>
                <input name="input" value={toDo} onChange={onTodoCange}/>
                <button type="submit">Add</button>
            </form>
        <p>{copyrightMessage} wolffclan.de</p>
        </footer>
    )
}