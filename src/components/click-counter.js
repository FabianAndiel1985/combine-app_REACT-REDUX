import React, { Component } from 'react';
import ClickCounterHeading from './click-counter-heading';
import ClickCounterButton from './click-counter-button';
import { connect } from 'react-redux';
import { increment,decrement } from '../actions/index';
import '../css/click-counter.css';

class ClickCounter extends Component {
	render() {
		return (<div id="click-counter-container">
			<div className="container w-25 pt-5">
					<ClickCounterHeading count={this.props.value}>
					</ClickCounterHeading>
					<ClickCounterButton increment={this.props.increment}
					decrement={this.props.decrement}>
					</ClickCounterButton>
			</div>
			</div>
			)
	}
}

let mapStateToProps = (state)=>{return {
  value: state.counter
}}


let mapDispatchToProps = { 
	increment:increment,
	decrement:decrement
}



let ClickCounterContainer = connect(mapStateToProps,mapDispatchToProps)(ClickCounter);


export default ClickCounterContainer;
