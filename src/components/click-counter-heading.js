import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/click-counter-heading.css';

class ClickCounterHeading extends Component {
	render() {
		return(
			<div>
				<p className="text-center"> Click Counter:</p>
	
				<ListGroup id="click-counter-heading-ul">
					{this.props.count.map((number)=>
					<ListGroup.Item className="text-center click-counter-list-item" key={number.id}>
					{number.number}
					</ListGroup.Item>
					)}
				</ListGroup>
			</div>
			)
	}
}

ClickCounterHeading.propTypes =  {
	count: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.number
  })).isRequired
}

export default ClickCounterHeading;

