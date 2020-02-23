//Dependencies
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';

//Components
import './stylesheets/App.css';
import SearchHeader from './searchHeader';
import Results from './results';
import Footer from './footer';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			arr: []
		};
	}

	getImages = async (query, page) => {
		console.log(this.state);
		this.setState({ arr: [] });
		const response = await Axios.get('https://api.unsplash.com/search/photos', {
			params: { query, per_page: 21, page },
			headers: {
				Authorization: 'Client-ID y-KsfJBqb_iZfZO12bN7fqEWsrAdGbQoJAUwN-soUns'
			}
		});
		return response;
	};

	componentDidMount = async () => {
		let response = await this.getImages('dog', Math.random() * 200);
		console.log(response);
		this.setState({ arr: response.data.results });
	};

	handleSubmit = async (value, page) => {
		let response = await this.getImages(value, Math.random() * 200);
		this.setState({
			arr: response.data.results
		});
	};

	render() {
		return (
			<div className='App container-fluid'>
				<SearchHeader onSubmit={this.handleSubmit} />
				<Results images={this.state.arr} onLoad={this.setLoadingFalse} />
				<Footer />
			</div>
		);
	}
}

export default App;
