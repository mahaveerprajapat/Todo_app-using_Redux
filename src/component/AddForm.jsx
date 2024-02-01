import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    let [task,setTask] = useState("");

    const dispatch = useDispatch();

    let submitedHandler = (e)=>{
            e.preventDefault();
            console.log(task);
            dispatch(addTodo(task));
            setTask("");
    }
    return( 
    <form onSubmit={submitedHandler}>
        <input type="text" onChange={(e)=>setTask(e.target.value)}/>
        <button>Add new Task</button>
    </form> 
    );
}