/**
* @Author: rajasekhar
* @Date:   2016-11-03T05:29:00+05:30
* @Last modified by:   rajasekhar
* @Last modified time: 2016-11-04T22:28:27+05:30
*/



import {
  NUMBER_INPUT,
  NUMBER_SIGNED_INPUT,
  DECIMAL_INPUT,
  OPERATION_INPUT,
  UNDO,
  CALCULATE
} from '../actions/types';

import mexp from 'math-expression-evaluator';

const initialState = {
  offset: null,
  operation: 'ADD',
  currentInput: [],
  history: []
};

export default function calculationReducer (state = initialState, action){
  let currentInput = state.currentInput.slice();
  let history = state.history.slice();

  switch(action.type){
    case NUMBER_INPUT:
      currentInput.push(action.value);
      return {
        ...state,
        currentInput
      };
    case NUMBER_SIGNED_INPUT:
      if(currentInput[0] === '-'){
        currentInput.splice(0,1);
      }else{
        currentInput.unshift('-');
      }
      return {
        ...state,
        currentInput
      };
    case DECIMAL_INPUT:
      if(state.currentInput.indexOf('.') > -1){
        return state;
      }
      currentInput.push('.');
      return {
        ...state,
        currentInput
      };
    case OPERATION_INPUT:
      // if(history.length === 0 && currentInput.length>0){
      //   history.push({
      //     input: parseFloat(currentInput.join('')),
      //     operation: action.operation
      //   });
      //   currentInput.push(action.symbol);
      //   return {
      //     ...state,
      //     operation: action.operation,
      //     currentInput,
      //     history
      //   };
      // }
      history.push({
        input: parseFloat(currentInput.join('')),
        operation: action.operation
      });
      currentInput.push(action.symbol);
      return {
        ...state,
        operation: action.operation,
        currentInput,
        history
      };
    case CALCULATE:
      if(currentInput.length === 0){
        return state;
      }
      history.push({
        input: parseFloat(currentInput.join('')),
        operation: state.operation
      });
      let aggregate = mexp.eval(currentInput.join(''));
      currentInput = [];
      return {
        ...state,
        history,
        currentInput,
        aggregate
      };
    case UNDO:
      var lastInput = history.pop();
      currentInput = [];
      return {
        ...state,
        currentInput,
        history
      };
    default:
      return state;
  }
}
