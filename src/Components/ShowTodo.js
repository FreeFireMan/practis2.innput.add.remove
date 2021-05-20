import {useSelector, useDispatch} from "react-redux";
import {remove} from "../reducer";


export default function ShowTodo() {
    const store = useSelector(({todo}) => todo)
    const dispatch = useDispatch();

    const removeElem = (index) => {
        const newStore = store.splice(index, 1);
        dispatch(remove(store));
    }

    return (
        <div>
            {
                store.map((value, index) => (
                    <div key={index}>
                        {value}
                        <button onClick={() => removeElem(index)}>remove</button>
                    </div>
                ))
            }
        </div>
    );
}