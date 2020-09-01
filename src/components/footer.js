import React, { Component } from 'react';
import '../css/footer.css';

class Footer extends Component {
	render() {
		return (
			<footer >
				<p className="text-center mt-2"> created by {this.props.creator}</p>
			</footer>
			)
	}
}

export default Footer;