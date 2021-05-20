import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import ShowTodo from "./ShowTodo";
import {add,remove} from "../reducer";


export default function Inputs() {

    const dispatch = useDispatch();
    let [name, setName] = useState('');


    const stopPrevent = (e) => {
        e.preventDefault()
    }

    const onChang = (e) => {
        setName(e.target.value)
    }
    const addToDo = () => {
        dispatch(add(name))
    }

    return (
        <div>
            <form onSubmit={stopPrevent}>
                <input onChange={onChang} type="text" value={name} name={'todo'}/>
                <button onClick={addToDo}>Add</button>
            </form>
            <div>
                <ShowTodo/>
            </div>
        </div>
    );
}