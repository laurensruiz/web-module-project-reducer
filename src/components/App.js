import React from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { useReducer } from 'react';
import reducer, { initialState } from "../reducers/index"
//import { addOne } from '../actions';
import { applyNumber, changeOperation, clearDisplay, addMem } from '../actions';


function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState); // console.log state
  
  const handleNumClick =(num) => {
    dispatch(applyNumber(num)); 
  }

  const handleOpClick =(op) => {
    dispatch(changeOperation(op)); 
  }

  const handleClearClick =() => {
    dispatch(clearDisplay()); 
  }

  const handleAddMemClick =() => {
    dispatch(addMem())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleAddMemClick}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> 
                handleNumClick(1)}/>
              <CalcButton value={2} onClick={()=> 
                handleNumClick(2)}/>
              <CalcButton value={3} onClick={()=> 
                handleNumClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> 
                handleNumClick(4)}/>
              <CalcButton value={5} onClick={()=> 
                handleNumClick(5)}/>
              <CalcButton value={6} onClick={()=> 
                handleNumClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> 
                handleNumClick(7)}/>
              <CalcButton value={8} onClick={()=> 
                handleNumClick(8)}/>
              <CalcButton value={9} onClick={()=> 
                handleNumClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> handleOpClick("+")}/>
              <CalcButton value={"*"} onClick={()=> handleOpClick("*")}/>
              <CalcButton value={"-"} onClick={()=> handleOpClick("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearClick} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
