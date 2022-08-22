
import {useDispatch, useSelector} from "react-redux";


function App() {
    const store = useSelector(store=> store.people)
    const dispatch = useDispatch();


    console.log(store)

    return (
        <div className="App">
            <button type="click" onClick={() => {
                dispatch({type: 'CLICK'})
            }}>
                Click
            </button>

        </div>
    );
}

export default App;
