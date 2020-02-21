import React from 'react';
import './stylesheets/results.css';

class Results extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className='results'>
				{this.props.images.map(image => {
					return (
						<img
							alt={image.alt_description}
							key={image.id}
							src={image.urls.regular}
						></img>
					);
				})}
			</div>
		);
	}
}

export default Results;
