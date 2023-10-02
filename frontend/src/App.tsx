import {useEffect, useState} from "react";
import axios from "axios";
import ToDosGallery from "./todos/ToDosGallery.tsx";

export default function App() {
    const[todos, setToDos]= useState([])

    useEffect(() => {
        getResponseAll()
    }, []);

    function getResponseAll(){
        axios.get("/api/todo")
            .then(response =>{
                setToDos(response.data)
            })
    }

  return (
    <>
        <h1>App</h1>
        <ToDosGallery/>
    </>
  )
}