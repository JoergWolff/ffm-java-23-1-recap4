import {useEffect, useState} from "react";
import axios from "axios";
import {ToDoModel} from "./todos/model/ToDoModel.tsx";
import {Route, Routes} from "react-router-dom";
import MainPage from "./mainpage/MainPage.tsx";

export default function App() {
    const[todos, setToDos]= useState<ToDoModel[]>([])
    const[errorMessage, setErrorMessage] = useState<string>("")

    useEffect(() => {
        getResponseAll()
    }, []);

    function getResponseAll(){
        axios.get("/api/todo")
            .then(response =>{
                setToDos(response.data)
            })
            .catch(()=>{
                setErrorMessage("Loading...Please refresh!")
            })
    }

  return (
    <>
        <Routes>
            <Route path="/" element={<MainPage todos={todos} errorMessage={errorMessage}/>}/>
        </Routes>
    </>
  )
}