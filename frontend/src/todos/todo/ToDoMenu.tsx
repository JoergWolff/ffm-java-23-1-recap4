type ToDoMenuProps ={
    setStatus: (newStatus: boolean[])=> void;
}
export default function ToDoMenu(props: ToDoMenuProps) {
    return (
        <nav className="nav_todomenu">
            <button onClick={() =>props.setStatus([true,true,true])}>ALL</button>
            <button onClick={() =>props.setStatus([true,false,false])}>OPEN</button>
            <button onClick={() =>props.setStatus([false,true,false])}>IN PROGRESS</button>
            <button onClick={() =>props.setStatus([false,false,true])}>DONE</button>

        </nav>
    )
}