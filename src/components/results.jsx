import React from 'react';
import './stylesheets/results.css';

class Results extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		if (this.props.images.length === 0) {
			return <h1 style={{ textAlign: 'center' }}>No results found!</h1>;
		}
		return (
			<div className='results'>
				{this.props.images.map(image => {
					return (
						<div key={image.id} className='image'>
							<img alt={image.alt_description} src={image.urls.regular}></img>
							<div className='profile'>
								<img
									src={image.user.profile_image.small}
									style={{ width: 30, height: 'auto', borderRadius: '50%' }}
								></img>
								<h6>{image.user.name}</h6>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Results;
