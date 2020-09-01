import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class ClickCounterButton extends Component {
	render() {
		return(
		<div>
		<Button variant="success" className="d-block mx-auto mb-3" onClick={this.props.increment}>Count Up</Button>
		<Button variant="danger" className="d-block mx-auto mb-5" onClick={this.props.decrement}>Count Down</Button>
		</div>
		)
	}
}

ClickCounterButton.propTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired
}

export default ClickCounterButton;