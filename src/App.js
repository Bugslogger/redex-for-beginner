
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React, { useEffect } from 'react';
import { NumInc, NumDec, Mult, Div, Change, ADD, DEL } from './Redux/Action';

function App() {
  const [getstate, setstate] = React.useState("")
  // const values = useSelector(state=>{ChangeNum})
  const value = useSelector(state => state.ChangeNum);
  const Value = useSelector(state => state.MultDiv);
  const ListValue = useSelector(state => state.TodoList);
  console.log(ListValue);
  const dispatch = useDispatch();

  // console.log("dispatch: ", dispatch, "value: ", value);

  const Add = () => {
    // console.log(getstate);
    dispatch(Change(getstate));
    dispatch(ADD());
  }

  return (
    <>
      <div className="App">
        <h1>Add/Substract Number By 1</h1>
        <button onClick={() => dispatch(NumInc())}><span>+</span></button>
        <input className="input" type="text" value={value} disabled />
        <button onClick={() => dispatch(NumDec())}><span>-</span></button>
      </div>

      <div className="App">
        <h1>Mult/Div Number By 5</h1>
        <button onClick={() => dispatch(Mult())}><span>+</span></button>
        <input className="input" type="text" value={Value} disabled />
        <button onClick={() => dispatch(Div())}><span>-</span></button>
      </div>

      <div className="App todo">
        <h1>TODO List</h1>
        <div className="todo-list">
          <div className="text-btn">
            <input onChange={(e) => setstate(e.target.value)} type="text" className="text" />
            <input onClick={Add} type="button" className="btn" value="+" />
          </div>
          {ListValue.list.map((data, index) => {
            console.log("data", data)
            return (
              <div key={index} className="list-data">
                <div className="list-data-text">{data.value}</div>
                <div id={data.id} onClick={(e) => dispatch(DEL(data.id))} className="list-data-del"><i className="fas fa-trash-alt"></i></div>
              </div>
            )
          })
          }
        </div>
      </div>
    </>
  );
}

export default App;
