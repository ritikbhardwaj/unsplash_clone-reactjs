import React from 'react';
import './stylesheets/searchHeader.css';

class searchHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			value: 'dog'
		};
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	// handleClick = () => {
	// 	console.log('Clicked!');
	// 	console.log(this.state.value);
	// };

	getButtonClasses = () => {
		let classes = 'btn  ml-4  btn-';
		classes += this.state.value ? 'secondary bg-dark' : 'light';
		return classes;
	};
	render() {
		return (
			<div className='header jumbotron'>
				<div className='formGroup'>
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					></input>
					<button
						onClick={() => this.props.onSubmit(this.state.value)}
						className={this.getButtonClasses()}
						disabled={this.state.value ? false : true}
					>
						Search
					</button>
				</div>
			</div>
		);
	}
}

export default searchHeader;
