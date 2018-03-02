import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/CounterActions';

class Counter extends React.Component {

  render() {
    const { increment, decrement, count } = this.props;
  	return (
  		<div>
  		  Current counter value: {count}
  		  <div><button onClick={(e) => increment()}>+</button></div>
  		  <div><button onClick={(e) => decrement()}>-</button></div>
  		</div>      
  	    )
    }
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

