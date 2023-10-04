import {useEffect, useState} from "react";
import axios from "axios";
import {ToDoModel} from "./todos/model/ToDoModel.tsx";
import {Route, Routes} from "react-router-dom";
import MainPage from "./mainpage/MainPage.tsx";
import {NewToDoModel} from "./todos/model/NewToDoModel.tsx";

export default function App() {
    const url: string = "/api/todo"
    const[todos, setToDos]= useState<ToDoModel[]>([])
    const [todo, setToDo]=useState<NewToDoModel>()
    const[errorMessage, setErrorMessage] = useState<string>("")

    useEffect(() => {
        getToDos()
    }, [todo]);

    function getToDos(){
        axios.get(url)
            .then(response =>{
                setToDos(response.data)
            })
            .catch(()=>{
                setErrorMessage("Loading...Please refresh!")
            })
    }
    function addToDo (newTodo: NewToDoModel){
        axios.post(url, newTodo)
            .then(response=> {
                console.log(response)
                setToDo(newTodo)
            })
            .catch(() => {
                setErrorMessage(newTodo + " could`n be added")
            })
    }
  return (
    <>
        <Routes>
            <Route path="/" element={<MainPage addTodo={addToDo} todos={todos} errorMessage={errorMessage}/>}/>
            <Route path="/*" element={<MainPage addTodo={addToDo} todos={todos} errorMessage={errorMessage}/>}/>
        </Routes>
    </>
  )
}