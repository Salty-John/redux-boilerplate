import * as types from '../constants/counterConst';

export function increment() {
  return {
  	type: types.INCREMENT
  }	
}

export function decrement() {
  return {
  	type: types.DECREMENT
  }	
}
