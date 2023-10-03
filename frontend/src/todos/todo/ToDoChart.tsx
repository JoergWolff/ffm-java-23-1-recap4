import {ToDoModel} from "../model/ToDoModel.tsx";
import ToDoCard from "./ToDoCard.tsx";

type ToDoChartProps ={
    title: string,
    todos: ToDoModel[],
}
export default function ToDoChart(props: ToDoChartProps){
    return(
        <section className="section-chart">
            <h4>{props.title}</h4>
            {props.todos.map(todo=><ToDoCard key={todo.id} todo={todo}/>)}
        </section>
    )
}